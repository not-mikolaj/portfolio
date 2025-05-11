# Portfolio Website for wojtowicz.dev

A modern, responsive portfolio website built with Vue.js and Vite.

## Features

- Single-page application with smooth section transitions
- Responsive design that works on all devices
- Dark theme with white accents
- Custom cursor with interactive states
- Project showcase section with tech stack tags
- Interactive tech stack display with icons
- Interactive career path timeline with skill tags
- Contact form with EmailJS integration
- Smooth scrolling and navigation
- Font Awesome icons integration
- Interactive hover effects and animations

## Technologies Used

- Vue.js 3
- Vite
- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (ES6+)
- Font Awesome Icons
- EmailJS for contact form
- Google Fonts (Inter)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is deployed on Cloudflare Pages. The deployment process is automated:
1. Push changes to the main branch
2. Cloudflare Pages automatically builds and deploys the site
3. Site is available at https://wojtowicz.dev

### Cloudflare Pages Configuration

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `.`
- Build system version: 1
- Node.js version: 18
- npm version: 9
- Compatibility flags: `nodejs_compat`, `vite_compat`

## Project Structure

```
src/
├── components/         # Vue components
│   ├── About.vue
│   ├── Career.vue
│   ├── Contact.vue
│   ├── Cursor.vue
│   ├── Projects.vue
│   └── Section.vue
├── assets/            # Static assets
│   └── SEP.jpeg      # Project images
├── App.vue           # Main application component
├── main.js          # Application entry point
└── style.css        # Global styles
```

## Configuration Files

- `vite.config.js`: Vite build configuration
- `cloudflare.toml`: Cloudflare Pages configuration
- `_headers`: Security headers configuration
- `_redirects`: SPA routing configuration
