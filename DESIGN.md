---
name: Warm Minimalism Design System
colors:
  surface: '#fff8f5'
  surface-dim: '#e3d8d1'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fdf1ea'
  surface-container: '#f7ece5'
  surface-container-high: '#f1e6df'
  surface-container-highest: '#ece0da'
  on-surface: '#201b17'
  on-surface-variant: '#51443a'
  inverse-surface: '#352f2b'
  inverse-on-surface: '#faefe8'
  outline: '#837469'
  outline-variant: '#d5c3b6'
  surface-tint: '#835425'
  primary: '#6f4315'
  on-primary: '#ffffff'
  primary-container: '#8b5a2b'
  on-primary-container: '#ffddc2'
  inverse-primary: '#f9ba82'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#355538'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d6d4e'
  on-tertiary-container: '#c9edc7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc1'
  primary-fixed-dim: '#f9ba82'
  on-primary-fixed: '#2e1500'
  on-primary-fixed-variant: '#683d0f'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#c8ecc6'
  tertiary-fixed-dim: '#acd0ab'
  on-tertiary-fixed: '#032109'
  on-tertiary-fixed-variant: '#2f4e32'
  background: '#fff8f5'
  on-background: '#201b17'
  surface-variant: '#ece0da'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  accent-bold:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap-desktop: 120px
  section-gap-tablet: 80px
  section-gap-mobile: 60px
  gutter: 24px
  margin-desktop: 80px
  container-max-width: 1440px
---

## Brand & Style

This design system is built on the philosophy of "Warm Minimalism," merging Scandinavian functionality with Japanese rustic aesthetics (Japandi). It targets a sophisticated audience that values modularity, sustainability, and high-end craftsmanship. 

The UI should feel grounded and tactile, utilizing high-quality whitespace and natural textures to evoke a sense of home and order. Unlike cold, clinical minimalism, this system uses "Soft Depth"—a technique where elements appear physically integrated into the cream-toned canvas through subtle 3D lighting, beveled edges, and gentle shadows that mimic the grain and weight of furniture.

## Colors

The palette is anchored by **Soft Cream (#F5F0E8)**, which serves as the primary canvas color to avoid the harshness of pure white. **Warm Oak (#8B5A2B)** is reserved for structural elements and key focus areas, reflecting the core material of the product. 

**Matte Charcoal (#2C2C2C)** provides essential grounding for typography and high-contrast UI components. **Sage Green (#7C9E7C)** is used sparingly for success states, secondary calls to action, or nature-inspired accents. **Brass/Gold (#C9A03D)** is the high-end jewelry of the interface, used strictly for interactive highlights and premium badges.

## Typography

This design system employs a three-family typographic hierarchy to balance elegance with utility. 

**Playfair Display** is the editorial voice, used for large headlines and storytelling moments. It should always be set with tight letter spacing for a premium feel. **Inter** handles the functional heavy lifting, providing maximum legibility for product descriptions and technical specs. **Montserrat** acts as the "industrial stamp," used for price tags, button labels, and navigation accents in uppercase to provide a modern, architectural contrast to the fluid serif headings.

## Layout & Spacing

The layout is governed by a **fixed-center grid** on desktop (12 columns) and a **fluid grid** on mobile. The defining characteristic of this design system is its generous vertical rhythm. Sections are separated by massive 80-120px gaps to allow product photography to "breathe" and create a gallery-like experience.

Content should never feel crowded. Use white space as a structural element to group modular components. Alignment follows a strict horizontal baseline to mirror the modular, stacking nature of the furniture itself.

## Elevation & Depth

To achieve the "3D Depth Treatment," the design system avoids flat design in favor of "Soft-Skeuomorphism." 

1.  **Object Depth:** Elements like cards and product tiles use two shadows: a soft, broad ambient shadow (10% opacity Charcoal) and a very sharp, 1px "kiss" shadow to simulate the object resting on the Cream surface.
2.  **Inner Bevels:** Interactive surfaces (like input fields or pressed buttons) utilize a 1px inner stroke that is slightly lighter than the background on the top-left and slightly darker on the bottom-right to create a carved effect.
3.  **Layering:** The hierarchy is defined by Z-index layers where the "Warm Oak" surfaces always sit highest, followed by "Soft Cream" containers.

## Shapes

The shape language reflects "Soft Geometry." While the furniture is modular (rectangular), the UI softens these edges to feel approachable and organic. 

Standard cards and image containers use a consistent **16px (rounded-lg)** radius. Buttons depart from this to become **40px Pill-shaped** elements, creating a clear distinction between content containers and interactive triggers. Smaller UI elements like checkboxes and input fields use a tighter **8px** radius to maintain precision.

## Components

### Buttons
- **Primary:** 40px height, pill-shaped. Solid Matte Charcoal background with Soft Cream Montserrat text.
- **Secondary:** Pill-shaped. Soft Cream background with a 1px Brass stroke and Charcoal text.
- **Ghost:** No background, Brass-colored Montserrat text with a subtle underline on hover.

### Cards
- **Product Card:** 16px corner radius. Soft Cream background. Uses the "3D Depth" dual-shadow treatment. Product images should be isolated (PNG) to appear as if sitting directly on the card surface.

### Input Fields
- **Text Inputs:** 8px radius. Soft Cream background with a subtle inner shadow to look "recessed." Focus state replaces the border with a 2px Warm Oak stroke.

### Specialized Components
- **Modular Configurator:** A unique component using "Stage" elevation. Features a grid-patterned background where furniture modules can be dragged.
- **Material Chips:** Sage Green or Warm Oak circles with a 1px Brass border to indicate texture selections.
- **Price Badges:** Bold Montserrat type on a Brass background, positioned to overlap the top-right corner of cards by 8px.
