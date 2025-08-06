# SecondHand Books Shopify Theme

A custom Shopify theme for a second-hand bookstore marketplace landing page.

## Screenshots
Here are some preview screenshots of the customized Shopify theme:

### Homepage Navigation page
<img width="800" height="600" alt="Homepage Navigation" src="https://github.com/user-attachments/assets/c2644aac-ce1c-4b11-9f27-e4b29238c7e6" />

### Category Cards
Each subject is displayed as a card with a title, description, and image. These cards guide users to explore different product or content categories.
<img width="700" height="600" alt="Category Cards" src="https://github.com/user-attachments/assets/90aced0a-386e-4164-9318-36576b26b4e3" />

### Feedbacks
<img width="800" height="600" alt="Customer Feedbacks" src="https://github.com/user-attachments/assets/2ebc9c71-e8d8-473f-b747-6d603a43a138" />
---

## Live Preview Testing

Previewing the complete layout in a test environment.

> **Live Preview:** [Shopify Store Link](https://zydemo-store.myshopify.com/)  
> **Password:** `123456`

---

## Project Structure

```
zydemo-store/
├── layout/
│   └── theme.liquid          # Main layout template
├── templates/
│   └── index.liquid          # Homepage template
├── sections/
│   ├── hero-banner.liquid    # Full-screen banner with discount
│   ├── book-categories.liquid # 2x2 grid of category cards
│   ├── discount-signup.liquid # Email signup section
│   ├── testimonials.liquid   # Customer reviews carousel
│   └── cta-footer.liquid    # Call-to-action footer
├── snippets/
│   ├── category-card.liquid  # Reusable category card
│   └── testimonial-card.liquid # Reusable testimonial card
└── assets/
    ├── theme.css            # Main theme styles
    └── slider.js            # Carousel functionality
```





## Features

### 1. Hero Banner Section
- Full-screen background image
- 30% discount promotion
- Call-to-action button
- Responsive design

### 2. Book Categories Section
- 2x2 grid layout
- Four categories: Literature, Mathematics, Physics, Computer Science
- Hover effects and animations
- Responsive grid system

### 3. Discount Signup Section
- Email input form
- Newsletter subscription
- Gradient background
- Form validation

### 4. Testimonials Section
- Carousel/slider functionality
- Customer reviews with ratings
- Navigation arrows
- Auto-play feature
- Touch/swipe support for mobile

### 5. CTA Footer Section
- Centered call-to-action
- "Create a Book Now" button
- Gradient background

## Technical Details

### Layout & Templates
- **theme.liquid**: Main layout with HTML head, CSS/JS links, and section placeholders
- **index.liquid**: Homepage template that includes all sections in order

### Sections
Each section is self-contained with its own styles and functionality:

- **hero-banner.liquid**: Full-screen banner with background image and overlay
- **book-categories.liquid**: Grid layout using category card snippets
- **discount-signup.liquid**: Email form with validation and success handling
- **testimonials.liquid**: Carousel with navigation and auto-play
- **cta-footer.liquid**: Final call-to-action section

### Snippets
- **category-card.liquid**: Reusable card component for book categories
- **testimonial-card.liquid**: Reusable card component for customer reviews

### Assets
- **theme.css**: Comprehensive styling including:
  - Reset and base styles
  - Typography and layout
  - Responsive design
  - Animation classes
  - Utility classes
- **slider.js**: JavaScript carousel functionality with:
  - Touch/swipe support
  - Keyboard navigation
  - Auto-play
  - Responsive behavior

## Responsive Design

The theme is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Local Preview

To view the theme locally before uploading to Shopify:

### Option 1: Simple HTML Preview
1. Open `index.html` directly in your web browser
2. This will show the complete theme with all sections

### Option 2: Local Server (Recommended)
1. **Windows**: Double-click `start-preview.bat`
2. **Mac/Linux**: Run `./start-preview.sh` in terminal
3. Open your browser and go to `http://localhost:8000`

### Option 3: Manual Server Start
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## Installation

1. Upload all files to your Shopify theme directory
2. Ensure the theme.liquid layout is set as the main layout
3. Set index.liquid as your homepage template
4. Customize content and styling as needed

## Customization

### Colors
Primary colors used:
- Blue: #007bff
- Dark Blue: #0056b3
- Gray: #333, #666
- White: #fff
- Background: #f8f9fa

### Fonts
- Primary: Inter (Google Fonts)
- Fallback: System fonts

### Images
Replace placeholder images with your own:
- Hero background: Update URL in hero-banner.liquid
- Category images: Update URLs in book-categories.liquid

## JavaScript Features

### Carousel Functionality
- Auto-play every 5 seconds
- Manual navigation with arrows
- Dot indicators
- Touch/swipe support
- Keyboard navigation (arrow keys)

### Form Handling
- Email validation
- Success messages
- Form reset after submission

## Performance Optimizations

- Lazy loading for images
- Debounced resize handlers
- Efficient CSS animations
- Minimal JavaScript footprint

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus states for interactive elements
- Alt text for images
- ARIA labels where appropriate

## Future Enhancements

- Product integration
- Shopping cart functionality
- User authentication
- Advanced filtering
- Search functionality
- Blog integration 
