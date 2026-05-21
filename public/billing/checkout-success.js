(function () {
  const BILLING_API_BASE_URL = "https://billing.realitysoft.ro";
  const titleEl = document.getElementById("success-title");
  const copyEl = document.getElementById("success-copy");
  const keyBlockEl = document.getElementById("success-key-block");
  const keyOutputEl = document.getElementById("license-key-output");
  const metaEl = document.getElementById("success-meta");
  const statusEl = document.getElementById("success-status");
  const copyButton = document.getElementById("copy-license-key");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setStatus(message) {
    statusEl.textContent = message || "";
  }

  function setError(message) {
    titleEl.textContent = "We couldn't finish your activation";
    copyEl.textContent = message || "Please try again or contact support with your payment receipt.";
    keyBlockEl.hidden = true;
  }

  async function loadLicense() {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get("cancelled") === "1") {
      titleEl.textContent = "Checkout cancelled";
      copyEl.textContent = "Your Pro checkout was cancelled before payment completed. You can close this page and try again whenever you are ready.";
      return;
    }

    const transactionId = currentUrl.searchParams.get("transaction_id")
      || currentUrl.searchParams.get("session_id");
    if (!transactionId) {
      setError("This page is missing the purchase transaction ID.");
      return;
    }

    try {
      const response = await fetch(
        `${BILLING_API_BASE_URL}/api/checkout/complete?transaction_id=${encodeURIComponent(transactionId)}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        }
      );
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result?.error || "Could not load the activation key.");
      }

      if (!result?.licenseKey) {
        setError("The purchase service did not return a license key.");
        return;
      }

      titleEl.textContent = "Your lifetime Pro key is ready";
      copyEl.textContent = "Copy this key now, then paste it into the extension to unlock SiteFlow Pro on this browser profile.";
      keyOutputEl.value = result.licenseKey;
      keyBlockEl.hidden = false;
      metaEl.hidden = false;
      metaEl.innerHTML = `
        <div>
          <span class="eyebrow">License ID</span>
          <strong>${escapeHtml(result.licenseId || "Not set")}</strong>
        </div>
        <div>
          <span class="eyebrow">Receipt email</span>
          <strong>${escapeHtml(result.email || "Not set")}</strong>
        </div>
        <div>
          <span class="eyebrow">Purchase</span>
          <strong>${escapeHtml(result.transactionId || result.purchaseSessionId || "Not set")}</strong>
        </div>
      `;
      setStatus("Activation ready.");
    } catch (error) {
      console.error(error);
      setError(error.message || "Please try again in a moment.");
      setStatus(error.message || "Could not load the activation key.");
    }
  }

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(keyOutputEl.value);
      setStatus("License key copied.");
    } catch (error) {
      console.error(error);
      setStatus("Could not copy the license key automatically.");
    }
  });

  loadLicense().catch((error) => {
    console.error(error);
    setError("Please try again or contact support.");
    setStatus("Could not load the activation key.");
  });
})();
