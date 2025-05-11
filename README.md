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
├── App.vue            # Main application component
├── main.js           # Application entry point
└── style.css         # Global styles
```
