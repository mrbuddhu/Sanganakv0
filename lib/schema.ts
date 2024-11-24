export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sanganak',
  url: 'https://sanganak.org',
  logo: 'https://sanganak.org/logo.png',
  sameAs: [
    'https://linkedin.com/company/sanganak',
    'https://twitter.com/sanganak',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'Sanganak',
  },
  areaServed: 'IN',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tech Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Professional web development services including business websites, e-commerce stores, and admin dashboards.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Cross-platform mobile app development with WhatsApp integration and push notifications.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'Professional UI/UX design services including brand identity, user experience optimization, and responsive design.',
        },
      },
    ],
  },
};
