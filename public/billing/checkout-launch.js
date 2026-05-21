(function () {
  const BILLING_API_BASE_URL = "https://billing.realitysoft.ro";
  const titleEl = document.getElementById("billing-title");
  const copyEl = document.getElementById("billing-copy");
  const statusEl = document.getElementById("billing-status");

  function setStatus(message) {
    statusEl.textContent = message || "";
  }

  function setError(message) {
    titleEl.textContent = "We couldn't open checkout";
    copyEl.textContent = message || "Please try again in a moment or contact support.";
  }

  async function getCheckoutConfig() {
    const response = await fetch(`${BILLING_API_BASE_URL}/api/checkout/config`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data?.error || "Could not load checkout configuration.");
    }

    return data;
  }

  async function openCheckout() {
    const currentUrl = new URL(window.location.href);
    const transactionId = currentUrl.searchParams.get("_ptxn")
      || currentUrl.searchParams.get("transaction_id");

    if (!transactionId) {
      setError("This page is missing the transaction ID.");
      return;
    }

    setStatus("Loading checkout...");
    const config = await getCheckoutConfig();
    if (!config?.clientToken) {
      throw new Error("Checkout is not configured correctly yet.");
    }

    const successUrl = new URL(
      config.successPageUrl || new URL("/billing/checkout-success.html", window.location.origin).toString()
    );
    successUrl.searchParams.set("transaction_id", transactionId);

    if (config.environment === "sandbox" && globalThis.Paddle?.Environment?.set) {
      globalThis.Paddle.Environment.set("sandbox");
    }

    let redirected = false;
    globalThis.Paddle.Initialize({
      token: config.clientToken,
      eventCallback(event) {
        if (event?.name === "checkout.completed" && !redirected) {
          redirected = true;
          setStatus("Payment completed. Redirecting...");
          window.location.href = successUrl.toString();
        }
      }
    });

    titleEl.textContent = "Secure checkout is ready";
    copyEl.textContent = "Complete your purchase in the checkout window. You will be redirected back here automatically when payment succeeds.";
    setStatus("Opening checkout...");

    globalThis.Paddle.Checkout.open({
      transactionId,
      settings: {
        successUrl: successUrl.toString(),
        theme: "light"
      }
    });
  }

  openCheckout().catch((error) => {
    console.error(error);
    setError(error.message || "Please try again in a moment.");
    setStatus(error.message || "Could not load checkout.");
  });
})();
