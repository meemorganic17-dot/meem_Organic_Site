# Complete SEO Silo Structure — International Fruits, Vegetables & Dry Goods Import/Export Website
*(Reference model: pentapeaks.com style trade portal)*

---

## 1. Master Data Extracted From Your List

### A. Import Sourcing (Country → Product)

| Source Country | Products |
|---|---|
| Kenya | Avocado, Mango |
| Egypt | Orange (Valencia), Mango, Onion, Lemon |
| Vietnam | Lime, Guava, Diamond-Cut Coconut, Dragon Fruit |
| South Africa | Apple (Valencia), Grapes, Nectarine, Plums, Pear |
| Iran | Apple, Onion, Mix Vegetables |
| Pakistan | Orange, Mango, Potatoes, Green Peas, Bitter Gourd, Carrot, Rice |
| India | Onion, Green Chili, Pomegranate, Mix Vegetables (Air Freight) |
| Sri Lanka | Coconut |
| USA | Walnuts, Almonds |
| China | Garlic, Ginger |
| Turkey | Eggs |
| Azerbaijan | Persimmon, Apple |

### B. Export Markets (Destination → Product Scope)

| Destination | Scope |
|---|---|
| Saudi Arabia | All Mix Fruits + Dry Items |
| Oman | All Mix Fruits |
| Qatar | All Mix Fruits |

### C. Product Categories (for silo grouping)

1. **Fresh Fruits** — Avocado, Mango, Orange (Valencia), Lemon, Lime, Guava, Dragon Fruit, Apple (Valencia), Grapes, Nectarine, Plums, Pear, Persimmon, Pomegranate, Coconut (Diamond Cut)
2. **Fresh Vegetables** — Onion, Potato, Green Peas, Bitter Gourd, Carrot, Green Chili, Mix Vegetables
3. **Dry Fruits & Nuts** — Walnuts, Almonds
4. **Spices & Aromatics** — Garlic, Ginger
5. **Grains** — Rice
6. **Poultry / Eggs** — Eggs

---

## 2. SEO Strategy Behind This Silo

- **Primary silo axis = Product Category.** Buyers search "Fresh Avocado Exporter," "Almond Supplier," "Bitter Gourd Importer" — not country-first phrases. This wins the highest-volume B2B trade keywords.
- **Secondary axis = Source Country pages.** These capture long-tail/geo-intent searches ("Kenya Avocado Importer," "Egyptian Orange Supplier") and interlink back into product pages — classic silo cross-linking, not duplicate content, because each page has a distinct intent.
- **Export silo = Destination Country.** Gulf buyers search "Fruit Exporter to Saudi Arabia," "Mix Fruit Supplier Qatar" — so Export pages are structured by country, each pulling in relevant products as internal links.
- **Strict internal linking rule:** Category hub → Sub-category → Product page → Country-of-origin page (one-way down, with a single contextual link back up). No cross-silo linking except via the Country Hub and Footer "Related Trade Routes" block — this is what keeps a silo's topical authority intact for Google.
- **URL pattern:** `/import/{category}/{product}/`, `/import/source-countries/{country}/`, `/export/{destination-country}/`, `/blog/{slug}/`

---

## 3. Complete Site Map / Silo Tree

```
HOME (/)
│
├── ABOUT US (/about-us/)
│   ├── Our Company & History (/about-us/our-story/)
│   ├── Why Choose Us (/about-us/why-choose-us/)
│   ├── Global Trade Network (/about-us/global-network/)
│   └── Certifications & Compliance (/about-us/certifications/)
│
├── IMPORT — PRODUCTS WE SOURCE (/import/)
│   │
│   ├── FRESH FRUITS (/import/fresh-fruits/)
│   │   ├── Avocado (/import/fresh-fruits/avocado/)               → sourced: Kenya
│   │   ├── Mango (/import/fresh-fruits/mango/)                   → sourced: Kenya, Egypt, Pakistan
│   │   ├── Valencia Orange (/import/fresh-fruits/valencia-orange/) → sourced: Egypt, Pakistan
│   │   ├── Lemon (/import/fresh-fruits/lemon/)                   → sourced: Egypt
│   │   ├── Lime (/import/fresh-fruits/lime/)                     → sourced: Vietnam
│   │   ├── Guava (/import/fresh-fruits/guava/)                   → sourced: Vietnam
│   │   ├── Dragon Fruit (/import/fresh-fruits/dragon-fruit/)     → sourced: Vietnam
│   │   ├── Diamond-Cut Coconut (/import/fresh-fruits/diamond-cut-coconut/) → sourced: Vietnam, Sri Lanka
│   │   ├── Valencia Apple (/import/fresh-fruits/valencia-apple/) → sourced: South Africa, Iran, Azerbaijan
│   │   ├── Grapes (/import/fresh-fruits/grapes/)                 → sourced: South Africa
│   │   ├── Nectarine (/import/fresh-fruits/nectarine/)           → sourced: South Africa
│   │   ├── Plums (/import/fresh-fruits/plums/)                   → sourced: South Africa
│   │   ├── Pear (/import/fresh-fruits/pear/)                     → sourced: South Africa
│   │   ├── Persimmon (/import/fresh-fruits/persimmon/)           → sourced: Azerbaijan
│   │   └── Pomegranate (/import/fresh-fruits/pomegranate/)       → sourced: India
│   │
│   ├── FRESH VEGETABLES (/import/fresh-vegetables/)
│   │   ├── Onion (/import/fresh-vegetables/onion/)               → sourced: Egypt, Iran, India
│   │   ├── Potato (/import/fresh-vegetables/potato/)             → sourced: Pakistan
│   │   ├── Green Peas (/import/fresh-vegetables/green-peas/)     → sourced: Pakistan
│   │   ├── Bitter Gourd (/import/fresh-vegetables/bitter-gourd/) → sourced: Pakistan
│   │   ├── Carrot (/import/fresh-vegetables/carrot/)             → sourced: Pakistan
│   │   ├── Green Chili (/import/fresh-vegetables/green-chili/)   → sourced: India
│   │   └── Mix Vegetables (/import/fresh-vegetables/mix-vegetables/) → sourced: Iran, India (air freight)
│   │
│   ├── DRY FRUITS & NUTS (/import/dry-fruits-nuts/)
│   │   ├── Walnuts (/import/dry-fruits-nuts/walnuts/)            → sourced: USA
│   │   └── Almonds (/import/dry-fruits-nuts/almonds/)            → sourced: USA
│   │
│   ├── SPICES & AROMATICS (/import/spices-aromatics/)
│   │   ├── Garlic (/import/spices-aromatics/garlic/)             → sourced: China
│   │   └── Ginger (/import/spices-aromatics/ginger/)             → sourced: China
│   │
│   ├── GRAINS (/import/grains/)
│   │   └── Rice (/import/grains/rice/)                           → sourced: Pakistan
│   │
│   ├── POULTRY (/import/poultry/)
│   │   └── Eggs (/import/poultry/eggs/)                          → sourced: Turkey
│   │
│   └── SOURCE COUNTRIES (/import/source-countries/)   [Country Hub — cross-links into above]
│       ├── Kenya (/import/source-countries/kenya/)
│       ├── Egypt (/import/source-countries/egypt/)
│       ├── Vietnam (/import/source-countries/vietnam/)
│       ├── South Africa (/import/source-countries/south-africa/)
│       ├── Iran (/import/source-countries/iran/)
│       ├── Pakistan (/import/source-countries/pakistan/)
│       ├── India (/import/source-countries/india/)
│       ├── Sri Lanka (/import/source-countries/sri-lanka/)
│       ├── USA (/import/source-countries/usa/)
│       ├── China (/import/source-countries/china/)
│       ├── Turkey (/import/source-countries/turkey/)
│       └── Azerbaijan (/import/source-countries/azerbaijan/)
│
├── EXPORT — MARKETS WE SERVE (/export/)
│   ├── Saudi Arabia (/export/saudi-arabia/)   → Mix Fruits + Dry Items
│   ├── Oman (/export/oman/)                   → Mix Fruits
│   └── Qatar (/export/qatar/)                 → Mix Fruits
│       (Each destination page auto-links to: Fresh Fruits hub, Dry Fruits & Nuts hub,
│        and a "Request Export Quote" CTA)
│
├── QUALITY, LOGISTICS & SOURCING (/quality-logistics/)
│   ├── Quality Control & Grading (/quality-logistics/quality-control/)
│   ├── Cold Chain & Packaging (/quality-logistics/cold-chain-packaging/)
│   ├── Air & Sea Freight Capability (/quality-logistics/freight-capability/)
│   └── Documentation & Customs Support (/quality-logistics/documentation-customs/)
│
├── BLOG / TRADE INSIGHTS (/blog/)
│   ├── Category: Fruit Import Guides (/blog/category/fruit-import-guides/)
│   ├── Category: Vegetable Sourcing (/blog/category/vegetable-sourcing/)
│   ├── Category: Dry Fruits & Nuts Market (/blog/category/dry-fruits-market/)
│   ├── Category: Export Market Updates (/blog/category/export-market-updates/)
│   └── Category: Company News (/blog/category/company-news/)
│
├── GET A QUOTE / CONTACT (/contact-us/)
│   ├── Request Import Quote (/contact-us/request-import-quote/)
│   ├── Request Export Quote (/contact-us/request-export-quote/)
│   ├── Become a Supplier (/contact-us/become-a-supplier/)
│   └── Office Locations (/contact-us/office-locations/)
│
└── UTILITY / LEGAL
    ├── Privacy Policy (/privacy-policy/)
    ├── Terms & Conditions (/terms-conditions/)
    ├── Sitemap (/sitemap/)
    └── FAQs (/faqs/)
```

---

## 4. On-Page SEO Template (apply to every Product page)

| Element | Pattern | Example |
|---|---|---|
| Title Tag | `{Product} Supplier & Exporter \| {Country} {Product} Wholesale` | "Fresh Avocado Supplier — Kenya Avocado Wholesale Exporter" |
| Meta Description | Origin + quality + MOQ/packaging + CTA | "We import premium Hass avocados directly from Kenya. Bulk wholesale supply, cold-chain logistics, custom packaging. Request a quote today." |
| H1 | `{Product} — Wholesale Import from {Country}` | |
| URL | `/import/{category}/{product}/` | `/import/fresh-fruits/avocado/` |
| Schema | `Product` + `Organization` + `BreadcrumbList` JSON-LD | |
| Internal Links | → Category hub, → Source Country page, → 2-3 related products, → Contact/Quote page | |
| Image Alt Text | `{Product} from {Country} - {Company Name}` | |

Each **Country Hub page** (e.g., `/import/source-countries/kenya/`) gets its own template: country overview, harvest seasons, certifications, list of all products sourced from there (linking back into category silo), and a map graphic.

Each **Export Destination page** gets: market overview, product range available for that country, shipping/logistics notes (port, transit time), and a quote CTA.

---

## 5. Complete Admin Panel Structure

```
ADMIN DASHBOARD
│
├── 1. Dashboard / Overview
│   ├── Quote requests (new/pending/closed)
│   ├── Traffic & top product pages (analytics widget)
│   └── Recent blog activity
│
├── 2. Product Management
│   ├── Categories (Fresh Fruits, Vegetables, Dry Fruits & Nuts, Spices, Grains, Poultry)
│   │   └── Add/Edit/Delete Category (name, slug, description, banner image, SEO title/meta)
│   ├── Products (CRUD)
│   │   ├── Name, Slug, Category, Sub-category
│   │   ├── Source Country (multi-select link to Country module)
│   │   ├── Description (rich text)
│   │   ├── Specifications (variety, size grade, packing type, shelf life, season/availability calendar)
│   │   ├── Image Gallery / 360 view
│   │   ├── SEO fields (title, meta description, focus keyword, schema toggle)
│   │   ├── Status (Active/Seasonal/Out of Season)
│   │   └── Related Products (manual linking for silo control)
│
├── 3. Country Management
│   ├── Import Source Countries (CRUD)
│   │   ├── Country name, flag icon, region
│   │   ├── Linked products (auto-pulled from Product module)
│   │   ├── Description, harvest season info, certifications
│   │   └── SEO fields
│   └── Export Destination Countries (CRUD)
│       ├── Country name, region
│       ├── Product scope (Mix Fruits / Dry Items / Custom)
│       ├── Port/logistics notes
│       └── SEO fields
│
├── 4. Inquiry / Quote Management (CRM-lite)
│   ├── Import Quote Requests (product, quantity, destination, buyer info, status workflow)
│   ├── Export Quote Requests (product, quantity, destination country, buyer info, status workflow)
│   ├── Supplier Applications ("Become a Supplier" submissions)
│   ├── General Contact Messages
│   └── Export to CSV / Email auto-responder settings
│
├── 5. Blog / Content Management
│   ├── Posts (CRUD, categories, tags, featured image, author)
│   ├── Categories (Fruit Import Guides, Vegetable Sourcing, etc.)
│   ├── SEO fields per post (title, meta, focus keyword, slug, schema)
│   └── Scheduling / Draft / Publish workflow
│
├── 6. Media Library
│   ├── Image upload, bulk upload, alt-text editor
│   ├── Auto-compression / WebP conversion
│   └── Folder structure mirroring product categories
│
├── 7. SEO Control Center
│   ├── Global meta defaults (title patterns, OG tags)
│   ├── XML Sitemap generator/regenerate
│   ├── Robots.txt editor
│   ├── 301 Redirect manager
│   ├── Broken link checker
│   ├── Schema markup manager (Organization, Product, Breadcrumb, FAQ)
│   └── Google Search Console / Analytics integration keys
│
├── 8. Pages (Static Page Builder)
│   ├── Home, About Us, Quality & Logistics, FAQs, Privacy Policy, Terms
│   └── Drag-drop section builder (banner, text block, product grid, testimonial, CTA)
│
├── 9. Users & Roles
│   ├── Super Admin / Editor / SEO Manager / Sales (quote handling) roles
│   ├── Activity log
│   └── Two-factor authentication settings
│
├── 10. Settings
│   ├── Company info (name, logo, addresses, multi-office support)
│   ├── Contact details & business hours
│   ├── Social media links
│   ├── Currency / unit settings (kg, MT, container loads)
│   ├── Email/SMTP configuration
│   └── Backup & maintenance mode
│
└── 11. Reports & Analytics
    ├── Most-requested products
    ├── Most-requested export destinations
    ├── Quote conversion funnel
    └── SEO performance summary (organic traffic by silo)
```

---

## 6. Page Count Summary

| Section | Pages |
|---|---|
| Core pages (Home, About x4, Contact x4, Quality x4, Legal x4, FAQ) | 17 |
| Product category hubs | 6 |
| Individual product pages | 27 |
| Import source country pages | 12 |
| Export destination pages | 3 |
| Blog hub + category pages | 6 (+ ongoing posts) |
| **Total static/silo pages** | **~71 pages**, fully interlinked, before blog content |

This gives Google a clean, crawlable topical map: every product page sits exactly two clicks from Home (`Home → Category → Product`), every country page is reachable from both its products and the country hub, and the export silo stays isolated by destination — which is exactly the structure that ranks well for trade/import-export sites like pentapeaks.com.
