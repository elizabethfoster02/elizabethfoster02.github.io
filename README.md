# Elizabeth Foster | Portfolio Website

A modern, professional portfolio website showcasing Elizabeth Foster's work as a software engineer and knitwear designer based in Minneapolis, MN.

## 🎨 Features

- **Responsive Design**: Fully responsive layout that works beautifully on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent user preference
- **Modern Aesthetics**: Clean, contemporary design with smooth animations and transitions
- **Multiple Pages**:
  - **Home** (`index.html`) - Hero section, about, featured projects, and contact
  - **Projects** (`projects.html`) - Detailed portfolio of software engineering projects
  - **Designs** (`designs.html`) - Gallery of knitwear designs and patterns
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic markup

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox
- **JavaScript** - Vanilla JS for interactivity (no frameworks required)
- **Responsive** - Mobile-first design approach

## 📁 Project Structure

```
/elizabethfoster02.github.io/
├── index.html              # Main homepage
├── projects.html           # Software projects portfolio
├── designs.html            # Knitwear designs gallery
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/elizabethfoster02/elizabethfoster02.github.io.git
   cd elizabethfoster02.github.io
   ```

2. **Open in your browser**
   - Open `index.html` directly in your browser, or
   - Use a local server (recommended for testing):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

### GitHub Pages Deployment

This site is automatically deployed via GitHub Pages when changes are pushed to the `main` branch.

1. Update content as needed
2. Commit your changes: `git commit -m "Update portfolio"`
3. Push to GitHub: `git push origin main`
4. Visit `https://elizabethfoster02.github.io` to see your changes live

## 📝 Customization Guide

### Update Personal Information

1. **Email**: In `index.html`, replace `your-email@example.com` with your email address
2. **Social Links**: Update GitHub, LinkedIn, and Twitter URLs in the contact section
3. **About Section**: Customize the about text and skills lists
4. **Project Details**: Fill in your actual projects with descriptions, technologies, and links

### Add Projects

Edit `projects.html` and update the project cards:

```html
<article class="project-card-detailed">
  <div class="project-image placeholder-large">
    <span>Your Project Image</span>
  </div>
  <div class="project-content">
    <h3>Your Project Title</h3>
    <p class="project-description">Your project description...</p>
    <div class="project-meta">
      <!-- Update project details -->
    </div>
    <!-- Update links -->
  </div>
</article>
```

### Add Knitwear Designs

Edit `designs.html` to add your knit design cards with specifications, materials, and pattern links.

### Customize Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --bg-color: #f4f4f8;
  --text-color: #222;
  --primary-color: #1f52ff;
  --secondary-color: #4a5568;
  --accent-color: #f59e0b;
  --section-bg: #ffffff;
  --border-color: #e2e8f0;
}
```

### Add Project Images

Replace placeholder images with actual project screenshots:

1. Save your images in the project directory
2. Update the image paths in HTML or create styled image containers

## 🎯 Key Sections

### Home Page (`index.html`)

- **Hero Section**: Eye-catching introduction
- **About Section**: Personal bio and technical/design skills
- **Highlights Section**: Key capabilities (3 cards)
- **Featured Projects**: Preview of selected projects
- **Contact Section**: Email contact form and social links

### Projects Page (`projects.html`)

- Detailed project cards with:
  - Project images
  - Full descriptions
  - Technologies used
  - Duration and role
  - Links to live projects and repositories

### Designs Page (`designs.html`)

- Knitwear design gallery with:
  - Design images
  - Fiber content information
  - Skill level
  - Available sizes
  - Design tags and categories
  - Design process breakdown (6 steps)
  - Custom commission CTA

## ✨ Features & Interactivity

### Dark Mode
- Toggle between light and dark themes
- Preference saved in browser localStorage
- Click the theme icon in the header

### Smooth Scrolling
- Smooth navigation to sections
- Intersection observer for fade-in animations
- Mobile-optimized touch interactions

### Contact Form
- Client-side form handling
- Opens email client with pre-filled message
- Form validation

### Responsive Design
- Breakpoints at 768px and 480px
- Mobile navigation
- Touch-friendly interactions

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons (min 44px height)
- Optimized font sizes
- Mobile-first navigation
- Properly sized tap targets

## 🎨 Design System

### Color Palette

- **Primary**: #1f52ff (Blue)
- **Secondary**: #4a5568 (Slate)
- **Accent**: #f59e0b (Amber)
- **Background**: #f4f4f8 (Light Gray)
- **Section**: #ffffff (White)

### Typography

- Font: Inter, system-ui, sans-serif
- Responsive scaling with `clamp()`
- Proper line-height for readability

### Spacing

- Consistent padding and margins
- Grid-based layout system
- Responsive spacing at breakpoints

## 📊 Performance Optimization

- Minimal external dependencies
- Optimized CSS and JavaScript
- Lazy loading ready
- SVG favicon for instant loading
- Minimal HTTP requests

## 🚀 Future Enhancements

- [ ] Add blog section for writing
- [ ] Implement image lazy loading
- [ ] Add case studies for projects
- [ ] E-commerce integration for knitwear sales
- [ ] Blog/articles section
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Analytics integration

## 📄 License

This portfolio website is personal property. Feel free to use it as inspiration for your own portfolio!

## 🤝 Contributing

Suggestions and improvements are welcome! Please feel free to:

1. Report bugs
2. Suggest new features
3. Improve documentation

## 📧 Contact

For inquiries about collaborations or commissions:

- Email: your-email@example.com
- GitHub: [@elizabethfoster02](https://github.com/elizabethfoster02)
- Website: [elizabethfoster02.github.io](https://elizabethfoster02.github.io)

---

**Handcrafted with ❤️ in Minneapolis, MN**
