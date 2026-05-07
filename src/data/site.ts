export type Locale = 'en' | 'ro'

export const company = {
  name: 'Reality Computer Software',
  legalName: 'Reality Computer Software SRL',
  shortName: 'RCS',
  siteUrl: 'https://www.realitysoft.ro',
  email: 'realitycomputersoftware@gmail.com',
  phone: '+40726468133',
  phoneDisplay: '+40 726 468 133',
  whatsappUrl: 'https://wa.me/40726468133',
  registeredOffice: 'Aleea Campul cu Flori 14, Bucuresti, Romania',
  cui: '45239610',
  tradeRegister: 'J40/20202/2021',
}

export const siteContent = {
  en: {
    meta: {
      homeTitle: 'Reality Computer Software | Custom Websites, Apps & Software Products',
      siteFlowTitle: 'SiteFlow Playbooks | Reality Computer Software',
      siteFlowPricingTitle: 'SiteFlow Pricing | Reality Computer Software',
      siteFlowLegalTitle: 'SiteFlow Legal | Reality Computer Software',
      companyLegalTitle: 'Company Legal | Reality Computer Software',
      notFoundTitle: 'Page Not Found | Reality Computer Software',
    },
    navigation: {
      studio: 'Studio',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      email: 'Email',
      whatsapp: 'WhatsApp',
      language: 'Language',
      english: 'EN',
      romanian: 'RO',
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      homeAria: 'Reality Computer Software home',
      primaryNavigation: 'Primary navigation',
      servicesMenuAria: 'Services menu',
      portfolioMenuAria: 'Portfolio menu',
      servicesOverviewEyebrow: 'What we build',
      servicesOverviewTitle: 'Choose the kind of project you need',
      servicesOverviewBody:
        'From custom websites to tailored apps and launch-ready software products, RCS builds clear digital experiences around real business goals.',
      serviceMenuItems: [
        {
          eyebrow: 'Most requested',
          title: 'Custom websites',
          body: 'Company websites, landing pages, and branded pages built to earn trust.',
          href: '/#services-websites',
        },
        {
          eyebrow: 'Custom build',
          title: 'Custom apps',
          body: 'Web-based tools, dashboards, and portals shaped around how a business works.',
          href: '/#services-apps',
        },
        {
          eyebrow: 'Product launch',
          title: 'Software products',
          body: 'Digital products that need structure, clear value, and room to grow.',
          href: '/#services-products',
        },
        {
          eyebrow: 'Creative direction',
          title: 'Game concepts',
          body: 'Early concept development and presentation for interactive and mobile ideas.',
          href: '/#services-games',
        },
      ],
      portfolioOverviewEyebrow: 'Selected work',
      portfolioOverviewTitle: 'Browse finished examples',
      portfolioOverviewBody:
        'See launched work grouped by the type of service behind it.',
      portfolioMenuItems: [
        {
          eyebrow: 'Websites',
          title: 'Website examples',
          body: 'Party Play Club, LaPisici, and Spiritualis.',
          href: '/#portfolio-websites',
        },
        {
          eyebrow: 'Software',
          title: 'Apps and products',
          body: 'Horeca Tracker and SiteFlow Playbooks.',
          href: '/#portfolio-products',
        },
      ],
    },
    footer: {
      brandBody:
        'Reality Computer Software designs and builds premium digital experiences, from custom websites and tailored apps to launch-ready software products.',
      explore: 'Explore',
      home: 'Home',
      pricing: 'Pricing',
      legal: 'Contact & legal',
      siteFlowLegal: 'SiteFlow legal',
      companyLegal: 'Company legal',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      cui: 'CUI',
      tradeRegister: 'Trade Register',
      registeredOffice: 'Registered office',
    },
    routeContext: {
      studio: 'Studio',
      companyInformation: 'Company information',
      legal: 'Legal',
      backToStudio: 'Back to studio',
      portfolio: 'Portfolio',
      chromeExtension: 'Chrome extension',
      overview: 'Overview',
      pricing: 'Pricing',
    },
    home: {
      hero: {
        eyebrow: 'Reality Computer Software',
        title: 'Premium websites, custom apps, and software products built with clarity.',
        body:
          'Reality Computer Software is a Bucharest studio creating custom websites, tailored digital tools, software products, and selected game concepts with strong design and clear user experience.',
        primaryCta: 'See our work',
        secondaryCta: 'Explore SiteFlow',
      },
      stats: [
        {
          value: '05',
          label: 'Showcased launches',
          detail: 'Three client websites and two in-house digital products.',
        },
        {
          value: '04',
          label: 'Service tracks',
          detail: 'Custom websites, apps, software products, and game concepts.',
        },
        {
          value: 'RO',
          label: 'Built from Bucharest',
          detail: 'Romanian studio with an international product mindset.',
        },
      ],
      orbitSignals: [
        { label: 'SaaS systems', top: '6%', left: '18%' },
        { label: 'Mobile apps', top: '20%', left: '74%' },
        { label: 'Game concepts', top: '58%', left: '82%' },
        { label: 'Automation', top: '78%', left: '18%' },
        { label: 'Browser tools', top: '48%', left: '4%' },
      ],
      observatory: {
        toplineLeft: 'RCS overview',
        toplineRight: 'Status: growing the constellation',
        title: 'Clear products, premium presentation.',
        body:
          'The visual direction combines a confident product feel with a space-inspired atmosphere, so the site feels memorable without losing clarity.',
        signals: [
          {
            title: 'Well-structured portfolio',
            body: 'Company, product, pricing, and legal pages are clearly connected.',
          },
          {
            title: 'Complete product presence',
            body: 'SiteFlow already has dedicated presentation, pricing, and legal pages.',
          },
          {
            title: 'Ready for growth',
            body: 'The structure is prepared for future products without needing a full redesign.',
          },
        ],
      },
      servicesSection: {
        eyebrow: 'Services',
        title:
          'Services organized around what clients are actually looking for.',
        description:
          'Whether the need is a custom website, a tailored app, a software product launch, or an early game concept, the work stays polished, clear, and easy to use.',
      },
      services: [
        {
          id: 'websites',
          title: 'Custom websites',
          description:
            'Polished company websites for services, brands, venues, and content businesses that need a strong first impression.',
          points: [
            'Company websites and landing pages',
            'Clear service presentation and contact flow',
            'Mobile-ready builds with premium visual direction',
          ],
        },
        {
          id: 'apps',
          title: 'Custom apps',
          description:
            'Web-based tools built around the way a team works, from client portals to internal dashboards and operational flows.',
          points: [
            'Dashboards, portals, and internal tools',
            'Custom user flows and admin areas',
            'Clear interfaces designed for daily use',
          ],
        },
        {
          id: 'products',
          title: 'Software products',
          description:
            'Digital products and SaaS launches that need structure, clear value presentation, and room to grow.',
          points: [
            'Product websites and launch pages',
            'Pricing and legal-ready structure',
            'Feature presentation built for real users',
          ],
        },
        {
          id: 'games',
          title: 'Game concepts',
          description:
            'Early-stage concept direction for interactive ideas and mobile-game experiences that are not public yet.',
          points: [
            'Concept framing and experience direction',
            'Visual mood and gameplay positioning',
            'Private and upcoming work',
          ],
        },
      ],
      portfolioSection: {
        eyebrow: 'Portfolio',
        title: 'Finished work, grouped by the kind of service behind it.',
        description:
          'Real projects make it easier to understand the type of work RCS delivers, from business websites to launch-ready software products.',
      },
      portfolioGroups: [
        {
          id: 'portfolio-websites',
          category: 'websites',
          eyebrow: 'Website examples',
          title: 'Custom websites for businesses, services, and content brands.',
          description:
            'Selected public work built for trust, clarity, and direct action.',
        },
        {
          id: 'portfolio-products',
          category: 'software',
          eyebrow: 'Software examples',
          title: 'Custom software and product launches built for adoption.',
          description:
            'Examples of software presentation, launch structure, and product-facing experience.',
        },
      ],
      projects: [
        {
          category: 'websites',
          title: 'Party Play Club',
          type: 'Custom website',
          href: 'https://partyplay.ro',
          external: true,
          description:
            "A lively presentation website for a children's party venue in Bucharest, built to showcase packages, gallery content, and fast booking paths.",
          tags: ['Local business', 'Events', 'Conversion-focused'],
          bullets: [
            'Playful branded interface tailored for parents and families',
            'Clear package presentation with gallery and contact flows',
            'Built to support discovery, trust, and direct reservations',
          ],
          linkLabel: 'Visit website',
        },
        {
          category: 'websites',
          title: 'LaPisici',
          type: 'Service website',
          href: 'https://lapisici.ro/ro/',
          external: true,
          description:
            'A warm, trust-driven service website for catsitting and pet care in Bucharest and Ilfov, with clear service pages and friendly local positioning.',
          tags: ['Pet care', 'Local service', 'Bilingual-ready'],
          bullets: [
            'Designed around reassurance, clarity, and easy contact',
            'Structured service presentation with localized routing',
            'Built for local discovery and direct booking inquiries',
          ],
          linkLabel: 'Visit website',
        },
        {
          category: 'websites',
          title: 'Spiritualis',
          type: 'Content website',
          href: 'https://spiritualis.ro',
          external: true,
          description:
            'A content-rich documentary and knowledge platform organized around categories, archives, and topic-based exploration.',
          tags: ['Content platform', 'Media library', 'Structured navigation'],
          bullets: [
            'Large category architecture for browsing and discovery',
            'Designed to support extensive content growth over time',
            'Focused on clarity across archive, category, and viewing flows',
          ],
          linkLabel: 'Visit website',
        },
        {
          category: 'software',
          title: 'Horeca Tracker',
          type: 'Custom software',
          href: 'https://horeca-tracker-six.vercel.app',
          external: true,
          description:
            'A product built for HORECA operators who want a clearer view of daily activity, stock, timing, and business performance.',
          tags: ['HORECA', 'SaaS', 'Product website'],
          bullets: [
            'Built as a standalone product destination',
            'Designed to present operational value clearly',
            'Lives on its own branded domain',
          ],
          linkLabel: 'Visit website',
        },
        {
          category: 'software',
          title: 'SiteFlow Playbooks',
          type: 'Digital product',
          href: '/siteflow',
          external: false,
          description:
            'Context-aware notes, checklists, and reusable text that appear directly on the websites where work gets done.',
          tags: ['Browser extension', 'In-house product', 'Productivity'],
          bullets: [
            'Shows the right guidance on the right site',
            'Offers both quick popup access and an in-page panel',
            'Includes dedicated pricing and legal pages',
          ],
          linkLabel: 'Open product page',
        },
      ],
      buildApproach: {
        eyebrow: 'Process',
        title: 'A clear build process, not improvised screen by screen.',
        description:
          'Whether the project is a website, a custom tool, or a software product, the work follows a structured path from direction to launch.',
      },
      stages: [
        {
          stage: '01',
          title: 'Clarify the need',
          description:
            'Understand the audience, the business goal, and what the project needs to achieve before design starts.',
        },
        {
          stage: '02',
          title: 'Shape the direction',
          description:
            'Define the structure, visual language, and user flow so every screen feels intentional.',
        },
        {
          stage: '03',
          title: 'Build the experience',
          description:
            'Turn the concept into a polished, responsive digital experience ready for real users.',
        },
        {
          stage: '04',
          title: 'Launch and refine',
          description:
            'Publish, test, and keep improving as the project gains users, clarity, and reach.',
        },
      ],
      principlesSection: {
        eyebrow: 'Why this presentation works',
        title:
          'The visual language reaches for a premium feel, but the structure stays commercially useful.',
        description:
          'Motion, depth, and atmosphere are used to support the message: RCS builds serious software with personality.',
      },
      principles: [
        {
          title: 'Signal Before Noise',
          description:
            'Strong visual systems, clean hierarchy, and motion that explains instead of distracting.',
        },
        {
          title: 'Product-Led Storytelling',
          description:
            'Every section is written to clarify what the product does, who it helps, and why it matters now.',
        },
        {
          title: 'Solid Launch Foundations',
          description:
            'Routing, legal information, contact paths, and pricing pages are ready for a real-world launch.',
        },
      ],
      contactSection: {
        eyebrow: 'Contact',
        title: "Let's talk about a website, an app, or your next digital product.",
        description:
          'Reach out directly for a custom website, a tailored app, a software product, or a collaboration idea.',
        email: 'Email',
        whatsapp: 'WhatsApp',
        registryLabels: {
          email: 'Email',
          phone: 'Phone',
          cui: 'CUI',
          tradeRegister: 'Trade Register',
          registeredOffice: 'Registered office',
        },
      },
    },
    siteFlow: {
      name: 'SiteFlow Playbooks',
      price: '$24.99',
      trial: '14-day Pro trial',
      shortcut: 'Ctrl+Shift+Y',
      hero: {
        eyebrow: 'Browser extension',
        title: 'Helpful guidance, right inside the websites you already use.',
        body:
          'SiteFlow Playbooks helps users keep notes, checklists, and reusable text close to the pages where they work. Instead of searching through separate documents and tabs, they can open the right guidance exactly when they need it.',
        primaryCta: 'See pricing',
        secondaryCta: 'View legal',
        tags: ['Free plan available', 'One-time Pro', 'Shortcut'],
      },
      browserPreview: {
        url: 'crm.example.com/opportunity/7421',
        metrics: [
          { label: 'Matched scope', value: 'Domain + exact page' },
          { label: 'Saved replies', value: '03 reusable responses' },
          { label: 'Checklist status', value: '5 of 7 complete' },
        ],
        header: 'SiteFlow Playbooks',
        checklistLabel: 'Checklist',
        checklistItems: [
          'Confirm budget window',
          'Validate decision owner',
          'Send follow-up template',
        ],
        notesLabel: 'Notes',
        notesBody:
          'Prospect prefers implementation next quarter and needs a concise ROI recap.',
        snippetLabel: 'Reusable text',
        snippetBody:
          'Thanks again for the call. Here is the rollout summary, timeline, and ownership split we discussed.',
      },
      highlightsSection: {
        eyebrow: 'Core capabilities',
        title: 'A simple support layer for the web pages your team already uses.',
        description:
          'SiteFlow stays focused on what matters most: relevant guidance, faster action, and less tab switching.',
      },
      highlights: [
        {
          title: 'Shows up where it matters',
          description:
            'Guides can be linked to a domain, a specific page, or a URL pattern so the right information appears at the right moment.',
        },
        {
          title: 'Notes, checklists, and reusable text',
          description:
            'Keep instructions, reusable text, and repeatable steps together in one easy-to-open place.',
        },
        {
          title: 'Quick access and in-page panel',
          description:
            'Open the right guide from the extension popup or from a side panel directly on the current page.',
        },
        {
          title: 'Simple upgrade path',
          description:
            'Users can start with the free plan, try Pro, and unlock full access with a one-time payment.',
        },
      ],
      howItWorks: {
        eyebrow: 'How it works',
        title: 'The idea is simple: save knowledge once, surface it in context every time.',
        description:
          'Instead of juggling notes, saved text, and repeated process steps across tabs, users keep them attached to the websites where the task actually happens.',
        steps: [
          {
            stage: '01',
            title: 'Choose the right page',
            description:
              'Create a guide for a domain, a specific page, or a reusable URL pattern.',
          },
          {
            stage: '02',
            title: 'Open your guide instantly',
            description:
              'Use the popup or the keyboard shortcut to open the guide you need.',
          },
          {
            stage: '03',
            title: 'Complete the task faster',
            description:
              'Check steps, read notes, and insert reusable text without leaving the page.',
          },
        ],
      },
      useCasesSection: {
        eyebrow: 'Use cases',
        title: 'Built for teams and professionals who repeat similar work online.',
        description:
          'Useful across sales, support, operations, and other processes where clear guidance saves time.',
      },
      useCases: [
        'Sales follow-up steps shown directly inside a CRM',
        'Support quality checks that appear inside helpdesk tools',
        'Operations or recruiting notes that stay attached to the websites you use daily',
        'Reusable text libraries for repetitive forms and messages',
      ],
      ctaBanner: {
        eyebrow: 'Pricing and legal',
        title: 'Everything a user needs before purchasing is available here.',
        pricing: 'Pricing',
        legal: 'Legal',
      },
      pricingPage: {
        eyebrow: 'Pricing',
        title: 'Straightforward pricing for a focused productivity tool.',
        description:
          'Start free, try the full Pro experience, then unlock complete access with a one-time purchase.',
        summaryTags: {
          oneTimePro: 'One-time Pro',
          trial: 'Trial',
        },
        checkoutModel: 'One-time payment available',
        featuredTag: 'Most complete',
        comparisonEyebrow: 'Compare plans',
        comparisonTitle: 'See what each option includes.',
        comparisonHeaders: ['Feature', 'Free', 'Pro Trial', 'Lifetime Pro'],
        infoCards: [
          {
            title: 'Simple purchase model',
            body:
              'Start with the free plan, explore the full experience, then upgrade with a single payment when you are ready.',
          },
          {
            title: 'Questions before purchase?',
            body:
              'Contact us if you need help with access, licensing, or product fit.',
          },
          {
            title: 'Policies and support',
            body:
              'Legal information, privacy details, and return conditions are available on the legal page.',
          },
          {
            title: 'Direct contact',
            body: company.email,
          },
        ],
        nextStep: {
          eyebrow: 'Next step',
          title: 'Review the legal information or contact us if you need anything before purchasing.',
          legal: 'View legal',
          contact: 'Contact',
        },
        tiers: [
          {
            title: 'Free',
            price: '$0',
            note: 'A practical starting point for everyday use.',
            featured: false,
            points: [
              'Up to 3 guides',
              'Up to 3 reusable text entries per active guide',
              'Popup and in-page panel access',
              'Starter templates and usage overview',
            ],
          },
          {
            title: 'Pro Trial',
            price: '14 days',
            note: 'Full access for a limited time before purchase.',
            featured: false,
            points: [
              'Try the complete experience',
              'Test it on the websites you use every day',
              'Use the panel, notes, and saved text tools',
              'Decide before upgrading',
            ],
          },
          {
            title: 'Lifetime Pro',
            price: '$24.99',
            note: 'One-time payment for full access.',
            featured: true,
            points: [
              'Full access to SiteFlow Playbooks',
              'License issue and recovery support',
              'No recurring monthly fee',
              'Ideal for professionals and small teams',
            ],
          },
        ],
        comparisonRows: [
          {
            label: 'Popup on current site',
            values: ['Included', 'Included', 'Included'],
          },
          {
            label: 'In-page panel',
            values: ['Included', 'Included', 'Included'],
          },
          {
            label: 'Guide capacity',
            values: ['Up to 3', 'Pro trial access', 'Lifetime Pro access'],
          },
          {
            label: 'Reusable text capacity',
            values: ['Up to 3 per active guide', 'Pro trial access', 'Lifetime Pro access'],
          },
          {
            label: 'License recovery',
            values: ['-', '-', 'Included'],
          },
          {
            label: 'Purchase option',
            values: ['-', 'Preview only', 'One-time payment'],
          },
        ],
      },
      legalPage: {
        updatedOn: 'May 3, 2026',
        updatedLabel: 'Last updated',
        hero: {
          eyebrow: 'SiteFlow legal',
          title: 'Terms, privacy, and return information for SiteFlow Playbooks.',
          description:
            'This page explains how SiteFlow works, what data it uses, and how support and returns are handled.',
          tags: ['Browser extension', 'User information'],
        },
        sections: [
          {
            title: 'Terms of service',
            intro:
              'SiteFlow Playbooks is a software product offered by Reality Computer Software SRL. By installing, accessing, or purchasing the product, users agree to use it only for lawful business or personal productivity purposes.',
            points: [
              'Access to paid features is linked to the plan that was purchased.',
              'Users remain responsible for the notes, checklists, and saved text they add to the product.',
              'We may improve or update the product over time while respecting access already purchased by users.',
              'Misuse of the product or attempts to bypass paid access may lead to access removal or limited support.',
            ],
          },
          {
            title: 'Privacy policy',
            intro:
              'SiteFlow Playbooks stores the notes, checklist items, reusable text, matching rules, and access status needed to make the product work.',
            points: [
              'The product can read the current page address and domain so it can show the right guide at the right time.',
              'When you insert saved text or open the side panel, the product interacts with the current page only to provide that feature.',
              'Payment details for purchases are handled by a secure payment partner and are not stored directly by us.',
              'We do not describe the product as selling browsing history or personal data for advertising.',
              'If you contact support, we may use your email address and purchase information to answer questions or help restore access.',
            ],
          },
          {
            title: 'Return and refund policy',
            intro:
              'SiteFlow Playbooks offers lifetime Pro access for $24.99 through a one-time payment. Requests for returns or refunds can be sent to realitycomputersoftware@gmail.com with the purchase email and the relevant order details.',
            points: [
              'We aim to review each request within a reasonable time.',
              'As a launch policy, first-time purchases may request a refund within 14 days of the order date when the request is made in good faith.',
              'If a refund is approved, the related paid access may be removed.',
              'Depending on the bank or payment method, returned funds may take several business days to appear.',
            ],
          },
          {
            title: 'Support and recovery',
            intro:
              'If you need help with access or license recovery, support requests should be directed to realitycomputersoftware@gmail.com.',
            points: [
              'License recovery may require the same email address used during purchase.',
              'We may limit support if the product is abused, modified in an unsupported way, or used in connection with unlawful activity.',
              'For pricing details, visit the dedicated pricing page.',
            ],
          },
        ],
      },
    },
    companyLegal: {
      updatedOn: 'May 3, 2026',
      updatedLabel: 'Last updated',
      hero: {
        eyebrow: 'Company legal',
        title: 'Company and website information for Reality Computer Software.',
        description:
          'This page explains who we are, how this website is used, and how you can contact us.',
        tags: ['Romania-based company', 'Company website'],
      },
      sections: [
        {
          title: 'Website terms',
          intro:
            'This website is operated by Reality Computer Software SRL. Its purpose is to present the company, its products, and ways to get in touch. Content on this site is provided for general information and business communication purposes.',
          points: [
            'All branding, copy, design assets, and product materials remain the property of Reality Computer Software SRL unless otherwise stated.',
            'You may not copy, republish, or commercially reuse material from this website without prior written permission.',
            'Links to third-party websites, including product pages or external services, are provided for convenience and remain subject to those services own terms and policies.',
            'We may update or refine this website at any time, including changing product positioning, launch timing, visuals, or availability.',
          ],
        },
        {
          title: 'Website privacy',
          intro:
            'This company website does not offer user accounts. If you contact us directly, we may receive the information you choose to send, such as your name, email address, telephone number, and message content.',
          points: [
            'We use contact information only to answer requests, discuss partnerships, provide support, or continue a conversation you initiated.',
            'Our hosting provider and essential infrastructure may process technical request data such as IP address, browser type, and server logs for security and delivery purposes.',
            'If you follow external links to other services, those providers process data under their own policies.',
            'We do not state that we sell visitor data, and we do not knowingly collect more personal information than needed for business communication.',
          ],
        },
        {
          title: 'Company details',
          intro: '',
          points: [
            'Legal name: Reality Computer Software SRL',
            'CUI: 45239610',
            'Trade Register: J40/20202/2021',
            'Registered office: Aleea Campul cu Flori 14, Bucuresti, Romania',
          ],
        },
        {
          title: 'Contact and notices',
          intro:
            'For general business contact, product questions, or formal notices, please use the contact details below.',
          points: [
            'Email: realitycomputersoftware@gmail.com',
            'Phone and WhatsApp: +40 726 468 133',
            'For purchase or access questions, we may ask for order details so we can identify your request.',
          ],
        },
      ],
    },
    notFound: {
      eyebrow: '404',
      title: 'This page drifted out of orbit.',
      description:
        'The route you tried does not exist on this site. The core company and product pages are still available.',
      cta: 'Return home',
    },
  },
  ro: {
    meta: {
      homeTitle: 'Reality Computer Software | Website-uri, Aplicatii si Produse Software',
      siteFlowTitle: 'SiteFlow Playbooks | Reality Computer Software',
      siteFlowPricingTitle: 'Preturi SiteFlow | Reality Computer Software',
      siteFlowLegalTitle: 'Legal SiteFlow | Reality Computer Software',
      companyLegalTitle: 'Legal Companie | Reality Computer Software',
      notFoundTitle: 'Pagina Inexistenta | Reality Computer Software',
    },
    navigation: {
      studio: 'Studio',
      services: 'Servicii',
      portfolio: 'Portofoliu',
      contact: 'Contact',
      email: 'Email',
      whatsapp: 'WhatsApp',
      language: 'Limba',
      english: 'EN',
      romanian: 'RO',
      menu: 'Meniu',
      openMenu: 'Deschide meniul',
      closeMenu: 'Inchide meniul',
      homeAria: 'Acasa Reality Computer Software',
      primaryNavigation: 'Navigatie principala',
      servicesMenuAria: 'Meniu servicii',
      portfolioMenuAria: 'Meniu portofoliu',
      servicesOverviewEyebrow: 'Ce construim',
      servicesOverviewTitle: 'Alege tipul de proiect de care ai nevoie',
      servicesOverviewBody:
        'De la website-uri personalizate la aplicatii create pe nevoia ta si produse software gata de lansare, RCS construieste experiente digitale clare si bine gandite.',
      serviceMenuItems: [
        {
          eyebrow: 'Cea mai ceruta',
          title: 'Website-uri personalizate',
          body: 'Website-uri de companie, landing page-uri si pagini de brand construite sa inspire incredere.',
          href: '/#services-websites',
        },
        {
          eyebrow: 'Construit pe nevoi reale',
          title: 'Aplicatii personalizate',
          body: 'Instrumente web, dashboard-uri si portaluri gandite dupa modul in care lucreaza business-ul tau.',
          href: '/#services-apps',
        },
        {
          eyebrow: 'Lansare de produs',
          title: 'Produse software',
          body: 'Produse digitale care au nevoie de structura, claritate si loc pentru crestere.',
          href: '/#services-products',
        },
        {
          eyebrow: 'Directie creativa',
          title: 'Concepte de jocuri',
          body: 'Dezvoltare de concept si prezentare pentru idei interactive si mobile.',
          href: '/#services-games',
        },
      ],
      portfolioOverviewEyebrow: 'Lucrari selectate',
      portfolioOverviewTitle: 'Rasfoieste exemple reale',
      portfolioOverviewBody:
        'Vezi proiecte lansate, grupate dupa tipul de serviciu din spatele lor.',
      portfolioMenuItems: [
        {
          eyebrow: 'Website-uri',
          title: 'Exemple de website-uri',
          body: 'Party Play Club, LaPisici si Spiritualis.',
          href: '/#portfolio-websites',
        },
        {
          eyebrow: 'Software',
          title: 'Aplicatii si produse',
          body: 'Horeca Tracker si SiteFlow Playbooks.',
          href: '/#portfolio-products',
        },
      ],
    },
    footer: {
      brandBody:
        'Reality Computer Software proiecteaza si construieste experiente digitale premium, de la website-uri personalizate si aplicatii pana la produse software gata de lansare.',
      explore: 'Exploreaza',
      home: 'Acasa',
      pricing: 'Preturi',
      legal: 'Contact si legal',
      siteFlowLegal: 'Legal SiteFlow',
      companyLegal: 'Legal companie',
      company: 'Companie',
      email: 'Email',
      phone: 'Telefon',
      cui: 'CUI',
      tradeRegister: 'Registrul Comertului',
      registeredOffice: 'Sediu social',
    },
    routeContext: {
      studio: 'Studio',
      companyInformation: 'Informatii companie',
      legal: 'Legal',
      backToStudio: 'Inapoi la studio',
      portfolio: 'Portofoliu',
      chromeExtension: 'Extensie pentru Chrome',
      overview: 'Prezentare',
      pricing: 'Preturi',
    },
    home: {
      hero: {
        eyebrow: 'Reality Computer Software',
        title: 'Website-uri premium, aplicatii personalizate si produse software construite clar.',
        body:
          'Reality Computer Software este un studio din Bucuresti care creeaza website-uri personalizate, instrumente digitale facute pe nevoi reale, produse software si concepte selectate de jocuri, cu accent pe design bun si experienta clara.',
        primaryCta: 'Vezi lucrarile',
        secondaryCta: 'Exploreaza SiteFlow',
      },
      stats: [
        {
          value: '05',
          label: 'Lansari prezentate',
          detail: 'Trei website-uri realizate pentru clienti si doua produse digitale proprii.',
        },
        {
          value: '04',
          label: 'Tipuri de servicii',
          detail: 'Website-uri personalizate, aplicatii, produse software si concepte de jocuri.',
        },
        {
          value: 'RO',
          label: 'Construit din Bucuresti',
          detail: 'Studio romanesc cu mentalitate de produs international.',
        },
      ],
      orbitSignals: [
        { label: 'Sisteme SaaS', top: '6%', left: '18%' },
        { label: 'Aplicatii mobile', top: '20%', left: '74%' },
        { label: 'Concepte de joc', top: '58%', left: '82%' },
        { label: 'Automatizare', top: '78%', left: '18%' },
        { label: 'Instrumente web', top: '48%', left: '4%' },
      ],
      observatory: {
        toplineLeft: 'Prezentare RCS',
        toplineRight: 'Stare: portofoliu in crestere',
        title: 'Produse clare, prezentate premium.',
        body:
          'Directia vizuala combina claritatea unui produs serios cu o atmosfera inspirata din spatiu, astfel incat site-ul sa fie memorabil si usor de parcurs.',
        signals: [
          {
            title: 'Portofoliu bine structurat',
            body: 'Paginile companiei, produselor, preturilor si informatiilor legale sunt legate clar intre ele.',
          },
          {
            title: 'Prezenta completa pentru produs',
            body: 'SiteFlow are deja propria pagina de prezentare, pagina de preturi si pagina legala.',
          },
          {
            title: 'Pregatit pentru crestere',
            body: 'Structura poate primi produse noi fara sa fie nevoie de o refacere completa.',
          },
        ],
      },
      servicesSection: {
        eyebrow: 'Servicii',
        title:
          'Servicii organizate dupa ce cauta in mod normal un client.',
        description:
          'Fie ca ai nevoie de un website personalizat, de o aplicatie facuta pentru fluxul tau, de un produs software sau de un concept de joc, rezultatul ramane clar, finisat si usor de folosit.',
      },
      services: [
        {
          id: 'websites',
          title: 'Website-uri personalizate',
          description:
            'Website-uri de companie pentru servicii, branduri, locatii si platforme de continut care au nevoie de o prima impresie puternica.',
          points: [
            'Website-uri de companie si landing page-uri',
            'Prezentare clara a serviciilor si contactului',
            'Constructie mobile-ready cu directie vizuala premium',
          ],
        },
        {
          id: 'apps',
          title: 'Aplicatii personalizate',
          description:
            'Instrumente web create dupa modul in care lucreaza o echipa, de la portaluri pentru clienti pana la dashboard-uri si fluxuri operationale.',
          points: [
            'Dashboard-uri, portaluri si unelte interne',
            'Fluxuri de utilizare si zone de administrare personalizate',
            'Interfete clare pentru folosire zilnica',
          ],
        },
        {
          id: 'products',
          title: 'Produse software',
          description:
            'Produse digitale si lansari SaaS care au nevoie de structura, prezentare clara si loc pentru crestere.',
          points: [
            'Website-uri de produs si pagini de lansare',
            'Structura pregatita pentru preturi si legal',
            'Prezentare clara a functionalitatilor pentru utilizatori reali',
          ],
        },
        {
          id: 'games',
          title: 'Concepte de jocuri',
          description:
            'Directie de concept pentru idei interactive si experiente de joc mobil care nu sunt inca publice.',
          points: [
            'Clarificare de concept si directie de experienta',
            'Mood vizual si pozitionare de gameplay',
            'Lucru privat si proiecte in dezvoltare',
          ],
        },
      ],
      portfolioSection: {
        eyebrow: 'Portofoliu',
        title: 'Lucrari finale, grupate dupa tipul de serviciu din spatele lor.',
        description:
          'Proiectele reale ajuta cel mai bine la intelegerea tipului de lucru pe care il livreaza RCS, de la website-uri pentru business pana la produse software gata de lansare.',
      },
      portfolioGroups: [
        {
          id: 'portfolio-websites',
          category: 'websites',
          eyebrow: 'Exemple de website-uri',
          title: 'Website-uri personalizate pentru business, servicii si continut.',
          description:
            'Lucrari publice construite pentru incredere, claritate si actiune directa.',
        },
        {
          id: 'portfolio-products',
          category: 'software',
          eyebrow: 'Exemple de software',
          title: 'Software personalizat si lansari de produs gandite pentru adoptare.',
          description:
            'Exemple de prezentare software, structura de lansare si experienta orientata spre utilizator.',
        },
      ],
      projects: [
        {
          category: 'websites',
          title: 'Party Play Club',
          type: 'Website personalizat',
          href: 'https://partyplay.ro',
          external: true,
          description:
            'Un website energic pentru o locatie de petreceri pentru copii din Bucuresti, construit pentru a evidentia pachetele, galeria si rutele rapide de rezervare.',
          tags: ['Afacere locala', 'Evenimente', 'Orientat spre conversie'],
          bullets: [
            'Interfata jucausa adaptata parintilor si familiilor',
            'Prezentare clara a pachetelor, cu galerie si contact',
            'Construit pentru descoperire, incredere si rezervari directe',
          ],
          linkLabel: 'Viziteaza website-ul',
        },
        {
          category: 'websites',
          title: 'LaPisici',
          type: 'Website de servicii',
          href: 'https://lapisici.ro/ro/',
          external: true,
          description:
            'Un website cald si credibil pentru servicii de catsitting si pet care in Bucuresti si Ilfov, cu pagini clare de servicii si pozitionare locala prietenoasa.',
          tags: ['Pet care', 'Servicii locale', 'Pregatit pentru doua limbi'],
          bullets: [
            'Construit in jurul increderii, claritatii si contactului rapid',
            'Prezentare structurata a serviciilor, cu rutare localizata',
            'Gandit pentru descoperire locala si cereri directe de rezervare',
          ],
          linkLabel: 'Viziteaza website-ul',
        },
        {
          category: 'websites',
          title: 'Spiritualis',
          type: 'Website de continut',
          href: 'https://spiritualis.ro',
          external: true,
          description:
            'O platforma bogata in documentare si continut tematic, organizata pe categorii, arhive si explorare pe subiecte.',
          tags: ['Platforma de continut', 'Biblioteca media', 'Navigare structurata'],
          bullets: [
            'Arhitectura ampla de categorii pentru navigare si descoperire',
            'Gandita sa sustina cresterea unui volum mare de continut',
            'Focus pe claritate intre arhiva, categorii si paginile de vizionare',
          ],
          linkLabel: 'Viziteaza website-ul',
        },
        {
          category: 'software',
          title: 'Horeca Tracker',
          type: 'Software personalizat',
          href: 'https://horeca-tracker-six.vercel.app',
          external: true,
          description:
            'Un produs gandit pentru operatorii HORECA care vor o imagine mai clara asupra activitatii zilnice, stocurilor, timpilor si rezultatelor.',
          tags: ['HORECA', 'SaaS', 'Website de produs'],
          bullets: [
            'Construit ca destinatie de produs separata',
            'Gandit pentru a prezenta clar valoarea operationala',
            'Traieste pe propriul domeniu de produs',
          ],
          linkLabel: 'Viziteaza website-ul',
        },
        {
          category: 'software',
          title: 'SiteFlow Playbooks',
          type: 'Produs digital',
          href: '/siteflow',
          external: false,
          description:
            'Notite contextuale, liste de verificare si texte reutilizabile care apar direct pe site-urile unde se lucreaza.',
          tags: ['Extensie web', 'Produs propriu', 'Productivitate'],
          bullets: [
            'Afiseaza informatia potrivita pe site-ul potrivit',
            'Ofera atat acces rapid, cat si panou lateral in pagina',
            'Include pagini dedicate pentru preturi si informatii legale',
          ],
          linkLabel: 'Deschide pagina produsului',
        },
      ],
      buildApproach: {
        eyebrow: 'Proces',
        title: 'Un proces clar de constructie, nu ecrane improvizate pe parcurs.',
        description:
          'Fie ca este vorba despre un website, o aplicatie personalizata sau un produs software, proiectul urmeaza un traseu clar de la directie la lansare.',
      },
      stages: [
        {
          stage: '01',
          title: 'Clarifica nevoia',
          description:
            'Intelege publicul, obiectivul de business si ce trebuie sa obtina proiectul inainte sa inceapa designul.',
        },
        {
          stage: '02',
          title: 'Construieste directia',
          description:
            'Defineste structura, limbajul vizual si traseul utilizatorului astfel incat fiecare ecran sa para intentionat.',
        },
        {
          stage: '03',
          title: 'Construieste experienta',
          description:
            'Transforma conceptul intr-o experienta digitala finisata, responsive si pregatita pentru utilizatori reali.',
        },
        {
          stage: '04',
          title: 'Lanseaza si rafineaza',
          description:
            'Publica, testeaza si imbunatateste pe masura ce proiectul castiga utilizatori, claritate si vizibilitate.',
        },
      ],
      principlesSection: {
        eyebrow: 'De ce functioneaza',
        title:
          'Limbajul vizual tinteste un aer premium, dar structura ramane utila comercial.',
        description:
          'Miscarea, profunzimea si atmosfera sustin mesajul: RCS construieste software serios, dar cu personalitate.',
      },
      principles: [
        {
          title: 'Semnal inainte de zgomot',
          description:
            'Sisteme vizuale puternice, ierarhie curata si miscare care explica in loc sa distraga.',
        },
        {
          title: 'Storytelling condus de produs',
          description:
            'Fiecare sectiune clarifica ce face produsul, pe cine ajuta si de ce conteaza acum.',
        },
        {
          title: 'Baza solida pentru lansare',
          description:
            'Rutele, informatiile legale, contactul si paginile de preturi sunt pregatite pentru o lansare reala.',
        },
      ],
      contactSection: {
        eyebrow: 'Contact',
        title: 'Hai sa vorbim despre un website, o aplicatie sau urmatorul tau produs digital.',
        description:
          'Scrie-ne direct pentru un website personalizat, o aplicatie facuta pe nevoia ta, un produs software sau o idee de colaborare.',
        email: 'Email',
        whatsapp: 'WhatsApp',
        registryLabels: {
          email: 'Email',
          phone: 'Telefon',
          cui: 'CUI',
          tradeRegister: 'Registrul Comertului',
          registeredOffice: 'Sediu social',
        },
      },
    },
    siteFlow: {
      name: 'SiteFlow Playbooks',
      price: '$24.99',
      trial: '14 zile de test Pro',
      shortcut: 'Ctrl+Shift+Y',
      hero: {
        eyebrow: 'Extensie pentru Chrome',
        title: 'Ghidaj util, direct in paginile web pe care le folosesti deja.',
        body:
          'SiteFlow Playbooks ajuta utilizatorii sa pastreze notite, liste de verificare si texte reutilizabile chiar langa paginile in care lucreaza. In loc sa caute prin documente si tab-uri separate, pot deschide rapid informatia potrivita exact cand au nevoie de ea.',
        primaryCta: 'Vezi preturile',
        secondaryCta: 'Vezi legal',
        tags: ['Plan gratuit disponibil', 'Pro cu plata unica', 'Scurtatura'],
      },
      browserPreview: {
        url: 'crm.example.com/opportunity/7421',
        metrics: [
          { label: 'Scop potrivit', value: 'Domeniu + pagina exacta' },
          { label: 'Raspunsuri salvate', value: '03 raspunsuri reutilizabile' },
          { label: 'Stare lista', value: '5 din 7 completate' },
        ],
        header: 'SiteFlow Playbooks',
        checklistLabel: 'Lista de verificare',
        checklistItems: [
          'Confirma perioada de buget',
          'Valideaza persoana decizionala',
          'Trimite mesajul de revenire salvat',
        ],
        notesLabel: 'Notite',
        notesBody:
          'Clientul prefera implementarea in trimestrul urmator si are nevoie de un rezumat scurt al beneficiilor.',
        snippetLabel: 'Text reutilizabil',
        snippetBody:
          'Multumim pentru discutie. Mai jos gasesti rezumatul implementarii, calendarul si responsabilitatile stabilite.',
      },
      highlightsSection: {
        eyebrow: 'Capabilitati de baza',
        title: 'Un strat simplu de ajutor pentru paginile web pe care echipa ta le foloseste deja.',
        description:
          'SiteFlow ramane concentrat pe ce conteaza: informatia potrivita, actiuni mai rapide si mai putine schimbari intre tab-uri.',
      },
      highlights: [
        {
          title: 'Apare exact unde este nevoie',
          description:
            'Ghidurile pot fi legate de un domeniu, o pagina anume sau un model de adresa, astfel incat informatia potrivita sa apara la momentul potrivit.',
        },
        {
          title: 'Notite, liste de verificare si texte reutilizabile',
          description:
            'Pastrezi instructiuni, texte reutilizabile si pasi repetitivi intr-un singur loc usor de deschis.',
        },
        {
          title: 'Acces rapid si panou lateral',
          description:
            'Deschizi ghidul potrivit fie din meniul rapid al extensiei, fie din panoul lateral afisat direct in pagina.',
        },
        {
          title: 'Trecere simpla la Pro',
          description:
            'Utilizatorii pot incepe gratuit, pot testa varianta Pro si apoi pot activa accesul complet printr-o singura plata.',
        },
      ],
      howItWorks: {
        eyebrow: 'Cum functioneaza',
        title: 'Ideea este simpla: salvezi informatia o singura data si o vezi exact unde ai nevoie.',
        description:
          'In loc sa alternezi intre notite, texte salvate si pasi de lucru raspanditi prin tab-uri, pastrezi totul langa site-urile pe care lucrezi.',
        steps: [
          {
            stage: '01',
            title: 'Alege pagina potrivita',
            description:
              'Creezi un ghid pentru un domeniu, o pagina specifica sau un model reutilizabil de adresa.',
          },
          {
            stage: '02',
            title: 'Deschide ghidul instant',
            description:
              'Folosesti meniul rapid sau scurtatura de taste pentru a deschide ghidul de care ai nevoie.',
          },
          {
            stage: '03',
            title: 'Rezolva mai repede',
            description:
              'Bifezi pasi, citesti notite si inserezi texte reutilizabile fara sa parasesti pagina.',
          },
        ],
      },
      useCasesSection: {
        eyebrow: 'Scenarii de utilizare',
        title: 'Creat pentru echipe si profesionisti care repeta activitati similare online.',
        description:
          'Este util in vanzari, suport, operatiuni si in orice proces unde ghidajul clar economiseste timp.',
      },
      useCases: [
        'Pasi de follow-up in vanzari afisati direct intr-un CRM',
        'Verificari de calitate care apar in platformele de suport',
        'Notite pentru operatiuni sau recrutare care raman atasate site-urilor folosite zilnic',
        'Biblioteci de texte reutilizabile pentru formulare si mesaje repetitive',
      ],
      ctaBanner: {
        eyebrow: 'Preturi si informatii legale',
        title: 'Tot ce are nevoie un utilizator inainte de achizitie este disponibil aici.',
        pricing: 'Preturi',
        legal: 'Legal',
      },
      pricingPage: {
        eyebrow: 'Preturi',
        title: 'Preturi clare pentru un instrument simplu si util.',
        description:
          'Poti incepe gratuit, poti testa experienta completa Pro si apoi poti activa accesul complet printr-o singura plata.',
        summaryTags: {
          oneTimePro: 'Pro cu plata unica',
          trial: 'Perioada de test',
        },
        checkoutModel: 'Plata unica disponibila',
        featuredTag: 'Varianta completa',
        comparisonEyebrow: 'Comparatie planuri',
        comparisonTitle: 'Vezi ce include fiecare varianta.',
        comparisonHeaders: ['Functionalitate', 'Gratuit', 'Test Pro', 'Pro pe viata'],
        infoCards: [
          {
            title: 'Model clar de achizitie',
            body:
              'Incepi gratuit, testezi produsul complet si faci upgrade printr-o singura plata atunci cand esti pregatit.',
          },
          {
            title: 'Intrebari inainte de achizitie?',
            body:
              'Contacteaza-ne daca ai nevoie de ajutor cu accesul, licentierea sau potrivirea produsului pentru nevoile tale.',
          },
          {
            title: 'Politici si asistenta',
            body:
              'Informatiile legale, confidentialitatea si conditiile de rambursare sunt disponibile pe pagina legala.',
          },
          {
            title: 'Contact direct',
            body: company.email,
          },
        ],
        nextStep: {
          eyebrow: 'Pasul urmator',
          title: 'Consulta informatiile legale sau contacteaza-ne daca ai nevoie de detalii inainte de achizitie.',
          legal: 'Vezi legal',
          contact: 'Contact',
        },
        tiers: [
          {
            title: 'Gratuit',
            price: '$0',
            note: 'Un punct bun de plecare pentru folosirea de zi cu zi.',
            featured: false,
            points: [
              'Pana la 3 ghiduri',
              'Pana la 3 texte reutilizabile pentru fiecare ghid activ',
              'Acces la meniul rapid si panoul din pagina',
              'Modele de pornire si vedere generala asupra utilizarii',
            ],
          },
          {
            title: 'Test Pro',
            price: '14 zile',
            note: 'Acces complet pentru o perioada limitata, inainte de achizitie.',
            featured: false,
            points: [
              'Testezi experienta completa',
              'Folosesti produsul pe site-urile din activitatea ta zilnica',
              'Accesezi panoul, notitele si textele reutilizabile',
              'Decizi apoi daca vrei sa faci upgrade',
            ],
          },
          {
            title: 'Pro pe viata',
            price: '$24.99',
            note: 'Plata unica pentru acces complet.',
            featured: true,
            points: [
              'Acces complet la SiteFlow Playbooks',
              'Asistenta pentru emiterea si recuperarea licentei',
              'Fara abonament lunar',
              'Potrivit pentru profesionisti si echipe mici',
            ],
          },
        ],
        comparisonRows: [
          {
            label: 'Acces rapid pe site',
            values: ['Inclus', 'Inclus', 'Inclus'],
          },
          {
            label: 'Panou lateral in pagina',
            values: ['Inclus', 'Inclus', 'Inclus'],
          },
          {
            label: 'Capacitate ghiduri',
            values: ['Pana la 3', 'Acces Pro in test', 'Acces Pro pe viata'],
          },
          {
            label: 'Capacitate texte reutilizabile',
            values: ['Pana la 3 pentru fiecare ghid activ', 'Acces Pro in test', 'Acces Pro pe viata'],
          },
          {
            label: 'Recuperare licenta',
            values: ['-', '-', 'Inclus'],
          },
          {
            label: 'Optiune de achizitie',
            values: ['-', 'Doar testare', 'Plata unica'],
          },
        ],
      },
      legalPage: {
        updatedOn: '3 mai 2026',
        updatedLabel: 'Ultima actualizare',
        hero: {
          eyebrow: 'Informatii legale SiteFlow',
          title: 'Termeni, confidentialitate si informatii despre rambursare pentru SiteFlow Playbooks.',
          description:
            'Aici gasesti informatii importante despre modul in care functioneaza SiteFlow, ce date foloseste si cum sunt gestionate asistenta si rambursarile.',
          tags: ['Extensie pentru Chrome', 'Informatii pentru utilizatori'],
        },
        sections: [
          {
            title: 'Termeni de utilizare',
            intro:
              'SiteFlow Playbooks este un produs software oferit de Reality Computer Software SRL. Prin instalarea, accesarea sau achizitionarea produsului, utilizatorii sunt de acord sa il foloseasca doar in scopuri legale, de business sau productivitate personala.',
            points: [
              'Accesul la functiile platite este legat de varianta achizitionata.',
              'Utilizatorii raman responsabili pentru notitele, listele si textele salvate pe care le adauga in produs.',
              'Putem imbunatati sau actualiza produsul in timp, respectand accesul deja achizitionat de utilizatori.',
              'Folosirea abuziva a produsului sau incercarile de a ocoli accesul platit pot duce la eliminarea accesului sau la limitarea asistentei.',
            ],
          },
          {
            title: 'Politica de confidentialitate',
            intro:
              'SiteFlow Playbooks stocheaza notitele, listele de verificare, textele reutilizabile, regulile de potrivire si starea de acces necesare pentru functionarea produsului.',
            points: [
              'Produsul poate citi adresa si domeniul paginii curente pentru a afisa ghidul potrivit la momentul potrivit.',
              'Cand inserezi text salvat sau deschizi panoul lateral, produsul interactioneaza cu pagina doar pentru a oferi acea functie.',
              'Datele de plata pentru achizitii sunt gestionate de un partener de plati securizat si nu sunt stocate direct de noi.',
              'Nu descriem produsul ca vanzand istoric de navigare sau date personale pentru publicitate.',
              'Daca ne contactezi pentru asistenta, putem folosi adresa de email si informatiile despre achizitie pentru a raspunde intrebarilor sau pentru a te ajuta sa iti recuperezi accesul.',
            ],
          },
          {
            title: 'Politica de rambursare',
            intro:
              'SiteFlow Playbooks ofera acces Pro pe viata la pretul de $24.99 printr-o singura plata. Cererile de rambursare pot fi trimise la realitycomputersoftware@gmail.com impreuna cu emailul de achizitie si detaliile relevante despre comanda.',
            points: [
              'Incercam sa revizuim fiecare solicitare intr-un timp rezonabil.',
              'Ca politica de lansare, prima achizitie poate solicita rambursare in termen de 14 zile de la data comenzii, daca solicitarea este facuta cu buna-credinta.',
              'Daca o rambursare este aprobata, accesul platit aferent poate fi dezactivat.',
              'In functie de banca sau de metoda de plata, suma returnata poate aparea dupa cateva zile lucratoare.',
            ],
          },
          {
            title: 'Asistenta si recuperarea accesului',
            intro:
              'Daca ai nevoie de ajutor pentru activare sau recuperarea licentei, cererile de asistenta trebuie trimise la realitycomputersoftware@gmail.com.',
            points: [
              'Recuperarea licentei poate necesita acelasi email folosit la achizitie.',
              'Putem limita suportul daca produsul este abuzat, modificat intr-un mod nesuportat sau folosit in legatura cu activitati ilegale.',
              'Pentru detalii de pret, viziteaza pagina dedicata de preturi.',
            ],
          },
        ],
      },
    },
    companyLegal: {
      updatedOn: '3 mai 2026',
      updatedLabel: 'Ultima actualizare',
      hero: {
        eyebrow: 'Legal companie',
        title: 'Informatii despre companie si despre website-ul Reality Computer Software.',
        description:
          'Aceasta pagina explica cine suntem, cum este folosit acest website si cum ne poti contacta.',
        tags: ['Companie din Romania', 'Website de prezentare'],
      },
      sections: [
        {
          title: 'Termenii website-ului',
          intro:
            'Acest website este operat de Reality Computer Software SRL. Scopul sau este sa prezinte compania, produsele acesteia si modalitatile de contact. Continutul de pe site este furnizat in scop informativ general si pentru comunicare de business.',
          points: [
            'Toata identitatea vizuala, textele, asset-urile de design si materialele de produs raman proprietatea Reality Computer Software SRL, cu exceptia cazurilor in care este specificat altfel.',
            'Nu este permisa copierea, republicarea sau reutilizarea comerciala a materialelor de pe acest website fara acord scris prealabil.',
            'Link-urile catre website-uri terte, inclusiv pagini de produs sau servicii externe, sunt oferite pentru confort si raman supuse propriilor termeni si politici ale acelor servicii.',
            'Putem actualiza sau rafina acest website in orice moment, inclusiv prin schimbarea pozitionarii produselor, momentului lansarii, vizualurilor sau disponibilitatii.',
          ],
        },
        {
          title: 'Confidentialitatea website-ului',
          intro:
            'Acest website de companie nu ofera conturi de utilizator. Daca ne contactezi direct, putem primi informatiile pe care alegi sa le trimiti, precum nume, adresa de email, numar de telefon si continutul mesajului.',
          points: [
            'Folosim informatiile de contact doar pentru a raspunde cererilor, discuta parteneriate, oferi suport sau continua o conversatie initiata de tine.',
            'Providerul nostru de hosting si infrastructura esentiala pot procesa date tehnice ale cererii, precum adresa IP, tipul navigatorului si log-uri de server, in scopuri de securitate si livrare.',
            'Daca urmezi link-uri catre alte servicii, acei provideri proceseaza datele conform propriilor politici.',
            'Nu afirmam ca vindem datele vizitatorilor si nu colectam in mod constient mai multe date personale decat este necesar pentru comunicarea de business.',
          ],
        },
        {
          title: 'Detalii companie',
          intro: '',
          points: [
            'Denumire legala: Reality Computer Software SRL',
            'CUI: 45239610',
            'Registrul Comertului: J40/20202/2021',
            'Sediu social: Aleea Campul cu Flori 14, Bucuresti, Romania',
          ],
        },
        {
          title: 'Contact si notificari',
          intro:
            'Pentru contact general de business, intrebari despre produse sau notificari formale, foloseste detaliile de mai jos.',
          points: [
            'Email: realitycomputersoftware@gmail.com',
            'Telefon si WhatsApp: +40 726 468 133',
            'Pentru intrebari legate de achizitii sau acces la produse, iti putem solicita detalii despre comanda pentru a identifica solicitarea.',
          ],
        },
      ],
    },
    notFound: {
      eyebrow: '404',
      title: 'Aceasta pagina a iesit de pe orbita.',
      description:
        'Ruta pe care ai incercat sa o accesezi nu exista pe acest site. Paginile principale ale companiei si produselor sunt in continuare disponibile.',
      cta: 'Intoarce-te acasa',
    },
  },
} as const

export type SiteContent = (typeof siteContent)[Locale]

