import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    email: string;
    contactType: string;
  };
  sameAs?: string[];
}

interface BlogPostSchemaProps {
  headline: string;
  description: string;
  image: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  datePublished: string;
  dateModified?: string;
  url: string;
}

interface JobPostingSchemaProps {
  title: string;
  description: string;
  hiringOrganization: {
    name: string;
    sameAs: string;
  };
  jobLocation: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  employmentType: string;
  datePosted: string;
  validThrough?: string;
  baseSalary?: {
    currency: string;
    value: {
      minValue: number;
      maxValue: number;
      unitText: string;
    };
  };
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = 'WebStitch',
  description = 'Leading-edge web & app development company in Greater Noida. We create innovative digital solutions with cutting-edge technology and exceptional design.',
  url = 'https://webstitch.in',
  logo = 'https://webstitch.in/logo.png',
  address = {
    streetAddress: 'Greater Noida',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201310',
    addressCountry: 'IN'
  },
  contactPoint = {
    telephone: '+91-9899721172',
    email: 'webstitchh@gmail.com',
    contactType: 'Customer Service'
  },
  sameAs = [
    'https://www.linkedin.com/company/webstitch',
    'https://twitter.com/webstitch',
    'https://www.facebook.com/webstitch'
  ]
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo
    },
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint
    },
    sameAs
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const LocalBusinessSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://webstitch.in/#organization',
    name: 'WebStitch',
    description: 'Leading-edge web & app development company in Greater Noida',
    url: 'https://webstitch.in',
    telephone: '+91-9876543210',
    email: 'webstitchh@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Greater Noida',
      addressLocality: 'Greater Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201310',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4595,
      longitude: 77.5136
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00'
      }
    ],
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const BlogPostSchema: React.FC<BlogPostSchemaProps> = ({
  headline,
  description,
  image,
  author,
  publisher,
  datePublished,
  dateModified,
  url
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image
    },
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo
      }
    },
    datePublished,
    dateModified: dateModified || datePublished,
    url
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const JobPostingSchema: React.FC<JobPostingSchemaProps> = ({
  title,
  description,
  hiringOrganization,
  jobLocation,
  employmentType,
  datePosted,
  validThrough,
  baseSalary
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    hiringOrganization: {
      '@type': 'Organization',
      ...hiringOrganization
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        ...jobLocation
      }
    },
    employmentType,
    datePosted,
    validThrough,
    baseSalary: baseSalary ? {
      '@type': 'MonetaryAmount',
      currency: baseSalary.currency,
      value: {
        '@type': 'QuantitativeValue',
        ...baseSalary.value
      }
    } : undefined
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};