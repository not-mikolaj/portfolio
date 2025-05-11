# Website Updates Guide

## Vue.js Components

The website is built with Vue.js 3 and uses a component-based architecture:

### Main Components
- `App.vue`: Main application component
- `Section.vue`: Reusable section component with transition effects
- `Cursor.vue`: Custom cursor implementation
- `About.vue`: About section content
- `Projects.vue`: Projects showcase
- `Career.vue`: Career timeline
- `Contact.vue`: Contact form

### Updating Components
1. Navigate to `src/components/`
2. Edit the respective component file
3. Changes will be automatically reflected in the application

## Custom Cursor

The website features a custom cursor with interactive states. The cursor consists of:
- A small dot (6px) that follows the mouse precisely
- A larger follower circle (24px) that follows with a slight delay
- Interactive states that make the cursor grow on hoverable elements

To modify the cursor:
1. Edit cursor styles in `src/components/Cursor.vue`
2. Adjust cursor behavior in the component's mounted hook

## Tech Stack and Icons

The website uses Font Awesome icons consistently across:
- Tech stack section
- Project tags
- Career timeline skills

### Updating Tech Stack

1. Open `src/components/Projects.vue`
2. Find the tech stack section
3. Update the tech cards with appropriate icons:
```html
<span class="tech-tag"><i class="fab fa-[icon-name]"></i> Technology Name</span>
```

### Updating Project Tags

1. Open `src/components/Projects.vue`
2. Find the `projects` data property
3. Update the tags array for each project:
```javascript
tags: [
  { name: "Technology", icon: "fab fa-[icon-name]" }
]
```

### Updating Career Path

The career path timeline is designed to be easy to update and maintain. To add or modify career items:

1. Open `src/components/Career.vue`
2. Find the `careerPath` data property
3. Edit, add, or remove career objects as needed
4. Each career object requires the following properties:
   - `date`: The timeframe (e.g., "2019 - 2022")
   - `title`: Your job title
   - `organization`: Company or organization name
   - `logo`: URL to company logo
   - `description`: Brief description of your role
   - `achievements`: Array of key achievements (bullet points)
   - `skills`: Array of skills with icons:
     ```javascript
     skills: [
       { name: "Skill Name", icon: "fab fa-[icon-name]" }
     ]
     ```

## Deployment

The site is deployed on Cloudflare Pages. The deployment process is automated:

1. Push changes to the main branch
2. Cloudflare Pages automatically:
   - Installs dependencies
   - Builds the project
   - Deploys to the global CDN
3. Site is available at https://wojtowicz.dev

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Available Icons

The website uses Font Awesome icons. Common icons used:
- `fa-html5`: HTML5
- `fa-css3-alt`: CSS3
- `fa-js`: JavaScript
- `fa-java`: Java
- `fa-php`: PHP
- `fa-database`: SQL/MySQL
- `fa-git-alt`: Git
- `fa-windows`: Windows
- `fa-microsoft`: Azure
- `fa-network-wired`: Networking

For more icons, visit [Font Awesome Icons](https://fontawesome.com/icons)
