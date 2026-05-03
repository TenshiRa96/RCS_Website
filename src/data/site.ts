export type Locale = 'en' | 'ro'

export const company = {
  name: 'Reality Computer Software',
  legalName: 'Reality Computer Software SRL',
  shortName: 'RCS',
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
      homeTitle: 'Reality Computer Software | SaaS, Apps & Mobile Games',
      siteFlowTitle: 'SiteFlow Playbooks | Reality Computer Software',
      siteFlowPricingTitle: 'SiteFlow Pricing | Reality Computer Software',
      siteFlowLegalTitle: 'SiteFlow Legal | Reality Computer Software',
      companyLegalTitle: 'Company Legal | Reality Computer Software',
      notFoundTitle: 'Page Not Found | Reality Computer Software',
    },
    navigation: {
      studio: 'Studio',
      portfolio: 'Portfolio',
      contact: 'Contact',
      email: 'Email',
      whatsapp: 'WhatsApp',
      language: 'Language',
      english: 'EN',
      romanian: 'RO',
      homeAria: 'Reality Computer Software home',
      primaryNavigation: 'Primary navigation',
      portfolioMenuAria: 'Portfolio menu',
      portfolioOverviewEyebrow: 'Overview',
      portfolioOverviewTitle: 'Browse the portfolio',
      portfolioOverviewBody:
        'See how Reality Computer Software currently presents its product lineup.',
      horecaEyebrow: 'Hospitality SaaS',
      horecaBody: 'Operational product site with its own dedicated domain.',
      siteFlowEyebrow: 'Chrome extension',
      siteFlowBody: 'Product overview, pricing, and legal information in one place.',
    },
    footer: {
      brandBody:
        'Reality Computer Software creates polished software products, from SaaS platforms and apps to browser tools and mobile game concepts.',
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
        title: 'We build software experiences that look premium and move with purpose.',
        body:
          'Reality Computer Software is a studio based in Bucharest, Romania. We create SaaS products, apps, browser tools, and mobile game concepts with a strong focus on clarity, quality, and user experience.',
        primaryCta: 'Explore portfolio',
        secondaryCta: 'Explore SiteFlow',
      },
      stats: [
        {
          value: '02',
          label: 'Products already mapped',
          detail: 'A HORECA management product and a browser extension for guided work.',
        },
        {
          value: '03',
          label: 'Core tracks',
          detail: 'SaaS, apps, and mobile-game experiences.',
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
        eyebrow: 'What RCS builds',
        title: 'A product studio built for software that needs clarity, identity, and trust.',
        description:
          'The company story is broad enough for future launches, while staying grounded in the products planned today.',
      },
      services: [
        {
          title: 'SaaS Products',
          description:
            'Dashboards, web apps, and product ecosystems built for clarity, daily use, and clean scaling.',
          points: ['Product design systems', 'Multi-page product websites', 'Clear onboarding flows'],
        },
        {
          title: 'Apps & Utilities',
          description:
            'Focused desktop, browser, and mobile experiences that make repetitive work faster and easier.',
          points: ['Workflow simplification', 'Browser product design', 'Performance-first interfaces'],
        },
        {
          title: 'Mobile Game Concepts',
          description:
            'Original mobile game ideas with strong visual direction, clear mechanics, and attention to retention.',
          points: ['Mechanic prototyping', 'Experience direction', 'Launch-ready polish'],
        },
      ],
      portfolioSection: {
        eyebrow: 'Portfolio',
        title: 'Two products already define the company portfolio.',
        description:
          'One product lives on its own dedicated domain. The other is fully presented here, together with pricing and legal information.',
      },
      projects: [
        {
          title: 'Horeca Tracker',
          type: 'HORECA SaaS',
          href: 'https://horeca-tracker-six.vercel.app',
          external: true,
          description:
            'A product built for HORECA operators who want a clearer view of daily activity, stock, timing, and business performance.',
          tags: ['HORECA', 'SaaS', 'Dedicated website'],
          bullets: [
            'Built as a standalone destination product',
            'Designed for operational visibility',
            'Presented here as part of the RCS product portfolio',
          ],
          linkLabel: 'Visit product',
        },
        {
          title: 'SiteFlow Playbooks',
          type: 'Browser Extension',
          href: '/siteflow',
          external: false,
          description:
            'Context-aware notes, checklists, and reusable text that appear directly on the websites where work gets done.',
          tags: ['Browser extension', 'Guided work', 'Productivity'],
          bullets: [
            'Shows the right guidance on the right site',
            'Offers both quick popup access and an in-page panel',
            'Includes dedicated pricing and legal pages',
          ],
          linkLabel: 'Open product page',
        },
      ],
      buildApproach: {
        eyebrow: 'Build approach',
        title: 'Built like a product system, not a simple brochure.',
        description:
          'The structure below explains how RCS can present future launches without rebuilding the company website every time.',
      },
      stages: [
        {
          stage: '01',
          title: 'Frame the orbit',
          description:
            'Clarify the business case, the audience, and the conversion path before visual flourishes begin.',
        },
        {
          stage: '02',
          title: 'Design the experience',
          description:
            'Shape the interaction, motion, and content system so every screen feels intentional.',
        },
        {
          stage: '03',
          title: 'Launch the product presence',
          description:
            'Publish pages that support demos, pricing, legal information, and product discovery.',
        },
        {
          stage: '04',
          title: 'Evolve in public',
          description:
            'Refine the system as products gain users, sharper positioning, and more surface area.',
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
        title: 'Let’s talk about products, partnerships, or upcoming launches.',
        description:
          'You can reach Reality Computer Software directly for product questions, collaboration, or more information about SiteFlow.',
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
      homeTitle: 'Reality Computer Software | SaaS, Aplicatii si Jocuri Mobile',
      siteFlowTitle: 'SiteFlow Playbooks | Reality Computer Software',
      siteFlowPricingTitle: 'Preturi SiteFlow | Reality Computer Software',
      siteFlowLegalTitle: 'Legal SiteFlow | Reality Computer Software',
      companyLegalTitle: 'Legal Companie | Reality Computer Software',
      notFoundTitle: 'Pagina Inexistenta | Reality Computer Software',
    },
    navigation: {
      studio: 'Studio',
      portfolio: 'Portofoliu',
      contact: 'Contact',
      email: 'Email',
      whatsapp: 'WhatsApp',
      language: 'Limba',
      english: 'EN',
      romanian: 'RO',
      homeAria: 'Acasa Reality Computer Software',
      primaryNavigation: 'Navigatie principala',
      portfolioMenuAria: 'Meniu portofoliu',
      portfolioOverviewEyebrow: 'Prezentare',
      portfolioOverviewTitle: 'Rasfoieste portofoliul',
      portfolioOverviewBody:
        'Vezi cum isi prezinta Reality Computer Software produsele lansate in acest moment.',
      horecaEyebrow: 'SaaS pentru HORECA',
      horecaBody: 'Site de produs operational, cu domeniu dedicat separat.',
      siteFlowEyebrow: 'Extensie pentru Chrome',
      siteFlowBody:
        'Prezentarea produsului, preturile si informatiile legale, in acelasi loc.',
    },
    footer: {
      brandBody:
        'Reality Computer Software creeaza produse software bine finisate, de la platforme SaaS si aplicatii pana la instrumente web si concepte de jocuri mobile.',
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
        title: 'Construim produse software cu aspect premium si experiente usor de folosit.',
        body:
          'Reality Computer Software este un studio din Bucuresti care creeaza produse SaaS, aplicatii, instrumente web si concepte de jocuri mobile, cu accent pe claritate, calitate si experienta utilizatorului.',
        primaryCta: 'Exploreaza portofoliul',
        secondaryCta: 'Exploreaza SiteFlow',
      },
      stats: [
        {
          value: '02',
          label: 'Produse deja mapate',
          detail: 'Un produs pentru HORECA si o extensie care aduce ghidaj direct in paginile web.',
        },
        {
          value: '03',
          label: 'Directii de baza',
          detail: 'SaaS, aplicatii si experiente de jocuri mobile.',
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
        eyebrow: 'Ce construieste RCS',
        title:
          'Un studio de produs construit pentru software care are nevoie de claritate, identitate si incredere.',
        description:
          'Povestea companiei lasa loc lansarilor viitoare, dar ramane ancorata in produsele pregatite acum.',
      },
      services: [
        {
          title: 'Produse SaaS',
          description:
            'Panouri de control, aplicatii web si ecosisteme de produs gandite pentru folosire zilnica si crestere sanatoasa.',
          points: ['Sisteme vizuale de produs', 'Website-uri de produs cu mai multe pagini', 'Parcursuri clare pentru utilizatori'],
        },
        {
          title: 'Aplicatii si utilitare',
          description:
            'Experiente pentru desktop, web si mobil care fac munca repetitiva mai rapida si mai usoara.',
          points: ['Simplificarea fluxurilor de lucru', 'Design pentru produse web', 'Interfete rapide si clare'],
        },
        {
          title: 'Concepte de jocuri mobile',
          description:
            'Idei originale de jocuri mobile cu directie vizuala puternica, mecanici clare si atentie la retentie.',
          points: ['Prototipare de mecanici', 'Directie de experienta', 'Finisaj gata de lansare'],
        },
      ],
      portfolioSection: {
        eyebrow: 'Portofoliu',
        title: 'Doua produse definesc deja portofoliul companiei.',
        description:
          'Un produs are propriul website. Celalalt este prezentat aici complet, impreuna cu preturile si informatiile legale.',
      },
      projects: [
        {
          title: 'Horeca Tracker',
          type: 'SaaS pentru HORECA',
          href: 'https://horeca-tracker-six.vercel.app',
          external: true,
          description:
            'Un produs gandit pentru operatorii HORECA care vor o imagine mai clara asupra activitatii zilnice, stocurilor, timpilor si rezultatelor.',
          tags: ['HORECA', 'SaaS', 'Domeniu dedicat'],
          bullets: [
            'Construit ca destinatie de produs separata',
            'Gandit pentru vizibilitate operationala',
            'Prezentat aici ca parte din portofoliul RCS',
          ],
          linkLabel: 'Viziteaza produsul',
        },
        {
          title: 'SiteFlow Playbooks',
          type: 'Extensie pentru Chrome',
          href: '/siteflow',
          external: false,
          description:
            'Notite contextuale, liste de verificare si texte reutilizabile care apar direct pe site-urile unde se lucreaza.',
          tags: ['Extensie web', 'Ghidaj contextual', 'Productivitate'],
          bullets: [
            'Afiseaza informatia potrivita pe site-ul potrivit',
            'Ofera atat acces rapid, cat si panou lateral in pagina',
            'Include pagini dedicate pentru preturi si informatii legale',
          ],
          linkLabel: 'Deschide pagina produsului',
        },
      ],
      buildApproach: {
        eyebrow: 'Abordare',
        title: 'Gandit ca un sistem de produs, nu ca un simplu site de prezentare.',
        description:
          'Structura de mai jos arata cum poate RCS sa adauge produse noi fara sa reconstruiasca website-ul de fiecare data.',
      },
      stages: [
        {
          stage: '01',
          title: 'Defineste directia',
          description:
            'Clarifica miza de business, audienta si traseul de conversie inainte sa inceapa artificiile vizuale.',
        },
        {
          stage: '02',
          title: 'Deseneaza experienta',
          description:
            'Modeleaza interactiunea, miscarea si sistemul de continut astfel incat fiecare ecran sa para intentionat.',
        },
        {
          stage: '03',
          title: 'Publica prezenta produsului',
          description:
            'Livreaza pagini care sustin demonstratii, preturi, informatii legale si descoperirea produsului.',
        },
        {
          stage: '04',
          title: 'Evolueaza public',
          description:
            'Rafineaza sistemul pe masura ce produsele castiga utilizatori, pozitionare si suprafata noua.',
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
        title: 'Hai sa vorbim despre produse, parteneriate sau lansari viitoare.',
        description:
          'Ne poti contacta direct pentru intrebari despre produse, colaborari sau mai multe detalii despre SiteFlow.',
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
