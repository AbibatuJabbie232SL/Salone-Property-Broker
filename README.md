# Salone Property Brokers

A responsive real estate listing website concept for Sierra Leone, built with HTML, CSS and a small amount of vanilla JavaScript. It is a front-end design prototype that lets users search sample listings, view property details and send a (simulated) enquiry.

> **Prototype notice:** All listings, prices and contact details are fictional examples. No data is collected, stored or sent, and the site does not verify property ownership or availability.

![Home page screenshot](screenshots/home.png)

## Table of contents

- [Problem and solution](#problem-and-solution)
- [Features](#features)
- [Pages](#pages)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Adding your own photos](#adding-your-own-photos)
- [Customising listings](#customising-listings)
- [Design system](#design-system)
- [Accessibility and responsiveness](#accessibility-and-responsiveness)
- [Limitations](#limitations)
- [Roadmap](#roadmap)
- [Figma prototype](#figma-prototype)
- [Author](#author)

## Problem and solution

People searching for land or homes in Sierra Leone often rely on social media, word of mouth and calls to several agents. Listings can lack a price, exact area, room count, availability or recent photos.

Salone Property Brokers brings listings into one place with a consistent layout, so users can search, compare key facts and contact an agent from the listing page.

## Features

- **Search and filters:** location, buy or rent, property type, maximum budget and bedrooms, updating results live.
- **Sorting:** newest, price low to high, price high to low.
- **List and map views:** the map is a placeholder with illustrative pins.
- **Consistent listing cards:** price (or "Price on enquiry"), location and key facts.
- **Property details page:** photo gallery with thumbnails, facts, availability badge with a "last confirmed" date, and a reminder to verify documents before paying.
- **Enquiry flow:** *Request a viewing* and *Contact agent* open a form, followed by a confirmation screen.
- **Contact page:** message form with confirmation, placeholder contact details and FAQ.
- **Photo fallback:** if a listing photo is missing, a drawn illustration is shown instead.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Hero, quick search, featured listings, how it works |
| Properties | `properties.html` | Main feature: search, filters, results grid, map view |
| Property details | `property.html?id=1` | Gallery, facts, availability, enquiry form |
| Services | `services.html` | Sales, rentals, land, list your property |
| About | `about.html` | Mission, values and story |
| Contact | `contact.html` | Message form, contact details, FAQ |

## Tech stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (no frameworks, no build step)
- [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts

## Getting started

No installation or build step is needed.

**Option 1: VS Code Live Server (recommended)**

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/salone-property-brokers.git
   cd salone-property-brokers
   ```
2. Open the folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.

**Option 2: Open directly**

Double-click `index.html` to open it in your browser.

> The Poppins font loads from Google Fonts, so an internet connection is needed to see it. Without one, the site falls back to a system font.

## Project structure

```
salone-property-brokers/
├── index.html
├── properties.html
├── property.html
├── services.html
├── about.html
├── contact.html
├── styles.css          # all styling and design tokens
├── app.js              # listings data, header/footer, search, gallery, forms
├── images/             # listing photos (see below)
│   └── README.txt
├── screenshots/        # screenshots used in this README
└── README.md
```

## Adding your own photos

Each listing looks for photos in `images/`:

- `{listingId}-1.jpg`: card image and main gallery image
- `{listingId}-2.jpg` and `{listingId}-3.jpg`: gallery thumbnails

For example, `3-1.jpg`, `3-2.jpg` and `3-3.jpg` belong to listing 3. Use landscape images at about 1200×600 px. `images/README.txt` lists which listing each number refers to.

Only use photos you took, have permission to use, or that are licensed for reuse (for example Wikimedia Commons or Unsplash), and credit photographers where required.

## Customising listings

Listings live in the `L` array at the top of `app.js`:

```js
{ id: 1, t: "Two-bedroom family house", loc: "Wilberforce, Freetown",
  type: "House", m: "rent", p: 450, b: 2, ba: 1, a: "92 m²" }
```

| Key | Meaning |
| --- | --- |
| `id` | Unique number, also used for photo filenames |
| `t` | Listing title |
| `loc` | Location |
| `type` | `House`, `Apartment` or `Land` |
| `m` | `sale` or `rent` |
| `p` | Price in USD (monthly for rent), or `null` for "Price on enquiry" |
| `b`, `ba` | Bedrooms and bathrooms |
| `a` | Floor or plot area |

## Design system

| Colour | Hex | Use |
| --- | --- | --- |
| Navy | `#17324D` | Navigation, headings, primary buttons |
| Gold | `#D6AD60` | Accents, highlights, selected states |
| Light grey | `#F5F7FA` | Page backgrounds, subtle sections |
| White | `#FFFFFF` | Main background and cards |

Typeface: Poppins (bold for headings, regular for body). Colours are defined as CSS variables at the top of `styles.css`.

## Accessibility and responsiveness

- Mobile-first stacking layouts with a collapsible menu on small screens
- Large tap targets (minimum 44px) on buttons and form fields
- Visible keyboard focus styles and labelled form fields
- Alt text on listing images
- Animations are disabled for users who prefer reduced motion

## Limitations

This is a design prototype, not a production site. It does **not** include:

- A live property database or real search backend
- Storage or delivery of enquiries and contact messages
- User accounts or sign-in
- Verification of ownership or availability
- Payments
- A real map

## Roadmap

- Connect listings to a database or CMS
- Backend for enquiries (email or WhatsApp notifications)
- Agent accounts and a "List your property" flow
- Interactive map with real coordinates
- Listing report and moderation workflow
- Accessibility audit against WCAG 2.2

## Figma prototype

Wireframes and the interactive prototype: [Figma link](https://www.figma.com/design/y21X1pwvoPQw1LiRYh2oPD/Untitled?node-id=2-23563&t=szzZQ0HZR9qd2MER-1)

## Author

**Your Name**: [GitHub](https://github.com/<your-username>) · [LinkedIn](https://linkedin.com/in/<your-profile>)

Created as a web design project: proposal, user research, information architecture, wireframes and an interactive prototype.

## Licence

Add a licence of your choice (for example MIT) before publishing. Any photos you add remain under their own licences.
