# **App Name**: A4 Canvas

## Core Features:

- Modular Page Component System: Each A4 page is managed as an independent UI component, allowing for isolated design adjustments and content modularity.
- Full-Document Scroll View: A centralized main interface that renders all page components in a continuous vertical sequence, starting with the high-impact cover page.
- AI Layout Optimizer: An intelligent tool used to evaluate text volume and image placement to suggest the best hierarchy for logistics-style proposals within A4 bounds.
- Precision PDF Export: Direct conversion of the component-based web layout into a multi-page, print-ready PDF document with preserved margins.
- Logistics Theme Engine: Automated styling that applies the corporate 'Envíos DosRuedas' aesthetic, including golden glows and dark-mode contrast, to all page components.
- Content Persistence: Store and retrieve proposal content and image assets using Firestore for cross-session editing.

## Style Guidelines:

- Primary: Logistics Gold (#F59E0B) for headers, borders, and neon-glow effects as seen in the source logo.
- Background: Midnight Navy (#0F172A), providing a deep, professional backdrop for the gold accents.
- Surface: Translucent Dark Slate (#1E293B) for info cards and content blocks to create depth against the background.
- Headline font: 'Space Grotesk' for a technical, modern industrial feel suitable for logistics messaging.
- Body font: 'Inter' for clear, highly legible text in professional descriptions.
- Centered A4-proportioned containers with 210mm x 297mm aspect ratios and persistent page-count footers (e.g., 1/11).
- Subtle glow-pulse animations for primary branding elements and smooth vertical scrolling between pages.