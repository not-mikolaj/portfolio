# Portfolio Website for wojtowicz.dev

A simple, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Dark theme with white accents
- Project showcase section
- Tech stack display
- Interactive career path timeline
- Contact form with EmailJS integration
- Smooth scrolling and navigation

## Setup Instructions

1. Clone this repository
2. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
3. Create a new email service and template in EmailJS
4. Update the following in `script.js`:
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID
5. Deploy to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## EmailJS Template Setup

Create a template in EmailJS with the following variables:
- `from_name` - The name of the person sending the message
- `from_email` - The email address of the person sending the message
- `message` - The content of the message

## Customization

- Edit the projects array in `script.js` to showcase your own projects
- Update the tech stack in `index.html` to reflect your skills
- Modify the career path data in `script.js` to display your own career history
- Modify the styling in `styles.css` to match your preferences

### Updating the Career Path

The career path timeline is designed to be easy to update and maintain. To add or modify career items:

1. Open `script.js`
2. Find the `careerPath` array near the top of the file
3. Edit, add, or remove career objects as needed
4. Each career object requires the following properties:
   - `date`: The timeframe (e.g., "2019 - 2022")
   - `title`: Your job title
   - `organization`: Company or organization name
   - `description`: Brief description of your role
   - `achievements`: Array of key achievements (bullet points)
   - `skills`: Array of skills/technologies used
