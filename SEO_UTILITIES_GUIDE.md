# SEO Utilities Usage Guide

## Quick Start

### 1. Using Canonical URLs

```javascript
import { getCanonicalUrl } from '@/lib/seo-utils';

// In your page or component
const url = getCanonicalUrl('/properties');
// Output: https://onestoppropertysolution.in/properties
```

### 2. Generating Page Metadata

```javascript
import { generatePageMetadata } from '@/lib/seo-utils';

export const metadata = generatePageMetadata({
  title: 'Buy Properties in Kamothe',
  description: 'Find verified properties in Kamothe with best deals',
  keywords: 'properties Kamothe, buy flat Kamothe',
  image: '/gallery/kamothe.webp',
  url: '/properties/kamothe',
});
```

### 3. Creating Breadcrumb Schema

```javascript
import { generateBreadcrumbSchema, structuredData } from '@/lib/seo-utils';

const breadcrumbs = generateBreadcrumbSchema([
  { label: 'Home', url: '/' },
  { label: 'Properties', url: '/properties' },
  { label: 'Kamothe', url: '/properties/kamothe' },
]);

// In your JSX:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={structuredData(breadcrumbs)}
/>
```

### 4. Formatting Properties for SEO

```javascript
import { formatPropertyForSEO } from '@/lib/seo-utils';

const seoProperty = formatPropertyForSEO(property);

// Access structured data:
console.log(seoProperty.canonicalUrl);     // Full canonical URL
console.log(seoProperty.structuredData);   // JSON-LD schema
```

### 5. Image URL Generation

```javascript
import { getImageUrl } from '@/lib/seo-utils';

// Input can be relative or absolute
const imageUrl = getImageUrl('/properties/1bhk/image.jpg');
// Output: https://onestoppropertysolution.in/properties/1bhk/image.jpg

const imageUrl2 = getImageUrl(null);
// Output: https://onestoppropertysolution.in/logo.png (fallback)
```

### 6. Sanitizing Meta Descriptions

```javascript
import { sanitizeMetaDescription } from '@/lib/seo-utils';

const longText = 'This is a very long description about a property...';
const description = sanitizeMetaDescription(longText, 160);
// Returns max 160 characters with proper truncation
```

### 7. Generating Open Graph Metadata

```javascript
import { generateOGMetadata } from '@/lib/seo-utils';

const ogData = generateOGMetadata(
  'Beautiful 2 BHK in Kamothe',
  'Well-maintained property in prime location',
  '/properties/2bhk-kamothe/image.jpg',
  '/property/beautiful-2bhk-kamothe'
);
```

### 8. Twitter Metadata

```javascript
import { generateTwitterMetadata } from '@/lib/seo-utils';

export const metadata = {
  twitter: generateTwitterMetadata(
    'Best Properties in Navi Mumbai',
    'Find your dream home today',
    '/gallery/banner.jpg'
  ),
};
```

### 9. Pricing Schema

```javascript
import { generatePricingSchema } from '@/lib/seo-utils';

const pricingSchema = generatePricingSchema(property);
// Output:
// {
//   "@type": "PriceSpecification",
//   "priceCurrency": "INR",
//   "price": "65000000",
//   "description": "₹65 Lakh"
// }
```

### 10. Property FAQ Schema

```javascript
import { generatePropertyFAQSchema, structuredData } from '@/lib/seo-utils';

const faqSchema = generatePropertyFAQSchema(property);

// In JSX:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={structuredData(faqSchema)}
/>
```

---

## Common Use Cases

### Use Case 1: Adding SEO to a New Properties Listing Page

```javascript
import { generatePageMetadata, generateCollectionPageSchema } from '@/lib/seo-schemas';
import { generatePageMetadata as generateMeta } from '@/lib/seo-utils';
import { properties } from '@/data/properties';

// In your page.js
export const metadata = generateMeta({
  title: 'Luxury Apartments in Panvel | One Stop Property Solutions',
  description: 'Discover premium residential apartments in Panvel with modern amenities',
  keywords: 'apartments Panvel, luxury homes, premium residences',
  image: '/gallery/panvel.webp',
  url: '/properties/panvel',
});

export default function PanvelPropertiesPage() {
  const collectionSchema = generateCollectionPageSchema(
    'Properties in Panvel',
    'Browse all available properties in Panvel',
    properties.filter(p => p.city === 'Navi Mumbai')
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      {/* Page content */}
    </>
  );
}
```

### Use Case 2: Creating Property Detail Components

```javascript
import { formatPropertyForSEO, structuredData } from '@/lib/seo-utils';

export default function PropertyDetail({ property }) {
  const seoProperty = formatPropertyForSEO(property);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredData(seoProperty.structuredData)}
      />
      
      <div>
        <h1>{property.title}</h1>
        <img 
          src={seoProperty.canonicalUrl} 
          alt={property.title}
        />
        {/* Rest of component */}
      </div>
    </>
  );
}
```

### Use Case 3: Dynamic Location Landing Pages

```javascript
import { generatePageMetadata } from '@/lib/seo-utils';
import { generateBreadcrumbSchema } from '@/lib/seo-schemas';

export async function generateMetadata({ params }) {
  const { location } = params;

  return generatePageMetadata({
    title: `Buy Properties in ${location} | Best Deals | One Stop Property Solutions`,
    description: `Discover verified properties for sale in ${location}. Browse 1 BHK, 2 BHK, 3 BHK flats with competitive pricing.`,
    keywords: `properties ${location}, buy flat ${location}, houses for sale ${location}`,
    image: `/gallery/${location.toLowerCase()}.webp`,
    url: `/properties/${location.toLowerCase()}`,
  });
}
```

---

## Schema Type Reference

### Available Schema Functions in seo-schemas.js

```javascript
// Organization & Local Business
generateOrganizationSchema()
generateLocalBusinessSchema()

// Pages
generatePropertySchema(property)
generateProjectSchema(project)
generateServicePageSchema(serviceName, description)
generateCollectionPageSchema(title, description, items)
generateArticleSchema(article)

// Navigation
generateBreadcrumbSchema(items)

// Content
generateFAQSchema(faqs)

// Websites
generateWebSiteSchema()
generateWebPageSchema(pageData)
```

---

## Best Practices

### 1. Always Include Canonical URLs
```javascript
export const metadata = {
  alternates: {
    canonical: getCanonicalUrl(url),
  },
};
```

### 2. Use Structured Data for Rich Snippets
```javascript
// Always add JSON-LD schemas to property pages
// This enables rich snippets in search results
```

### 3. Optimize Images
```javascript
// Always use getImageUrl() for images
const imageUrl = getImageUrl(property.images?.[0]);

// Include alt text
<img src={imageUrl} alt={property.title} />
```

### 4. Keep Descriptions Under Limits
```javascript
// Meta descriptions: 155-160 characters
// OG descriptions: 120 characters max
const description = sanitizeMetaDescription(longText, 160);
```

### 5. Use Proper Breadcrumbs
```javascript
// Always include breadcrumb schema for navigation
const breadcrumbs = generateBreadcrumbSchema([
  { label: 'Home', url: '/' },
  { label: 'Properties', url: '/properties' },
  { label: 'Current Page', url: currentUrl },
]);
```

---

## Constants

```javascript
// Base domain - used throughout SEO utilities
DOMAIN = 'https://onestoppropertysolution.in'

// Can be imported and used in utilities
import { DOMAIN } from '@/lib/seo-utils';
```

---

## Testing & Validation

### 1. Test Rich Snippets
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### 2. Test Open Graph
- [Facebook OG Debugger](https://developers.facebook.com/tools/debug/og/object/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 3. Test Mobile SEO
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Lighthouse Audit](chrome://inspect)

---

## Migration Guide

If you have existing pages without SEO utilities, here's how to migrate:

### Before:
```javascript
export const metadata = {
  title: 'My Property',
  description: 'A nice property',
  // ... scattered config
};
```

### After:
```javascript
import { generatePageMetadata } from '@/lib/seo-utils';

export const metadata = generatePageMetadata({
  title: 'My Property | One Stop Property Solutions',
  description: 'A nice property in prime location',
  keywords: 'property, real estate',
  image: '/images/property.jpg',
  url: '/properties/my-property',
});
```

---

## Troubleshooting

### Issue: Images not showing in social previews
**Solution**: Use full URLs with DOMAIN prefix
```javascript
const imageUrl = getImageUrl(property.images[0]);
// Always returns: https://onestoppropertysolution.in/...
```

### Issue: Schema validation errors
**Solution**: Use structuredData() wrapper for JSON-LD
```javascript
dangerouslySetInnerHTML={structuredData(schemaObject)}
```

### Issue: Canonical URLs not working
**Solution**: Ensure correct path format
```javascript
getCanonicalUrl('/properties/my-property')
// Not: getCanonicalUrl('properties/my-property')
// Not: getCanonicalUrl('https://...')
```

---

## Performance Tips

1. **Lazy load schemas**: Use `strategy="afterInteractive"` for scripts
2. **Optimize images**: Convert to WebP with fallbacks
3. **Compress data**: Minify JSON-LD before rendering
4. **Cache metadata**: Use Next.js revalidation

---

## Support & Updates

For questions or issues with SEO utilities:
1. Check this guide first
2. Review SEO_IMPROVEMENTS_V2.md
3. Validate with schema.org tools
4. Test in Google Search Console

---

*Last Updated: April 29, 2026*
