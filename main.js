// Career path data - easy to update and maintain
const careerPath = [
  {
    date: "2022 - Present",
    title: "Senior Full Stack Developer",
    organization: "Tech Innovations Inc.",
    description:
      "Leading development of enterprise-level web applications using modern technologies. Managing a team of 5 developers and architecting scalable solutions.",
    achievements: [
      "Reduced application load time by 40% through optimized API calls and caching strategies",
      "Implemented CI/CD pipeline that cut deployment time by 60%",
      "Mentored junior developers through knowledge sharing sessions",
    ],
    skills: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
  },
  {
    date: "2019 - 2022",
    title: "Full Stack Developer",
    organization: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple web applications for clients across various industries.",
    achievements: [
      "Created a custom CMS that increased content management efficiency by 35%",
      "Integrated third-party APIs reducing manual data entry by 50%",
      "Implemented responsive designs that improved mobile conversions by 25%",
    ],
    skills: ["JavaScript", "PHP", "MySQL", "HTML/CSS", "REST APIs"],
  },
  {
    date: "2017 - 2019",
    title: "Front-end Developer",
    organization: "Web Creators Co.",
    description: "Specialized in creating responsive and accessible user interfaces for client websites.",
    achievements: [
      "Rebuilt company website increasing organic traffic by 28%",
      "Developed reusable component library reducing development time",
      "Implemented A/B testing framework for conversion optimization",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Sass", "UI/UX"],
  },
  {
    date: "2015 - 2017",
    title: "Junior Web Developer",
    organization: "StartUp Ventures",
    description: "Assisted in development of web applications and learned fundamental web technologies.",
    achievements: [
      "Contributed to front-end development of 5 client projects",
      "Learned and implemented responsive design principles",
      "Created interactive prototypes for client presentations",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
]

document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  // Replace with your own EmailJS public key
  if (typeof emailjs !== "undefined") {
    emailjs.init("YOUR_PUBLIC_KEY")
  } else {
    console.error("EmailJS is not loaded. Ensure it is properly included in your HTML.")
  }

  // Project data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
      image: "https://placehold.co/600x400/111827/ffffff",
      link: "https://github.com",
      tags: ["Next.js", "Prisma", "Stripe"],
    },
    {
      title: "Task Management App",
      description: "A real-time task management application with team collaboration features.",
      image: "https://placehold.co/600x400/111827/ffffff",
      link: "https://github.com",
      tags: ["React", "Node.js", "Socket.io"],
    },
    {
      title: "AI Chat Interface",
      description: "An AI-powered chat interface with natural language processing capabilities.",
      image: "https://placehold.co/600x400/111827/ffffff",
      link: "https://github.com",
      tags: ["OpenAI", "Next.js", "TailwindCSS"],
    },
  ]

  // Render projects
  const projectsGrid = document.querySelector(".projects-grid")

  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"

    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-footer" style="padding: 0 1rem 1rem;">
        <a href="${project.link}" target="_blank" class="project-link">
          <i class="fab fa-github"></i> View on GitHub
        </a>
      </div>
    `

    projectsGrid.appendChild(projectCard)
  })

  // Render career timeline
  renderCareerTimeline()

  // Handle navigation highlighting
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section")

  function highlightNavLink() {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionBottom = sectionTop + section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)
  highlightNavLink() // Initial call

  // Glow effect for menu
  const glowMenu = document.getElementById("glow-menu")
  const menuItems = glowMenu.querySelectorAll(".nav-link")

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.4)"
      this.style.background = "rgba(255, 255, 255, 0.1)"
      this.style.transition = "all 0.3s ease"
    })

    item.addEventListener("mouseleave", function () {
      this.style.boxShadow = ""
      this.style.background = ""
    })
  })

  // Contact form handling
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")
  const submitBtn = document.getElementById("submit-btn")
  const submitText = document.getElementById("submit-text")
  const submitSpinner = document.getElementById("submit-spinner")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Validate form data
    if (!name || !email || !message) {
      showFormMessage("Please fill in all fields.", "error")
      return
    }

    // Show loading state
    setSubmitLoading(true)
    showFormMessage("Sending...", "")

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    }

    // Send email using EmailJS
    // Replace with your own EmailJS service ID and template ID
    if (typeof emailjs !== "undefined") {
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text)
            showFormMessage("Thanks for your message! I'll get back to you soon.", "success")
            contactForm.reset()
          },
          (error) => {
            console.log("FAILED...", error)
            showFormMessage("Failed to send message. Please try again later.", "error")
          },
        )
        .finally(() => {
          // Ensure the loading state is reset
          setSubmitLoading(false)
        })
    } else {
      console.error("EmailJS is not loaded. Ensure it is properly included in your HTML.")
      showFormMessage("EmailJS is not loaded. Please check console.", "error")
      setSubmitLoading(false)
    }
  })

  function showFormMessage(message, type) {
    formMessage.textContent = message
    formMessage.className = "form-message"

    if (type) {
      formMessage.classList.add(type)
    }
  }

  function setSubmitLoading(isLoading) {
    submitBtn.disabled = isLoading

    if (isLoading) {
      submitText.textContent = "Sending..."
      submitSpinner.classList.remove("hidden")
    } else {
      submitText.textContent = "Send Message"
      submitSpinner.classList.add("hidden")
    }

    // Force a repaint to ensure the UI updates
    submitSpinner.offsetHeight
  }
})

// Render career timeline
function renderCareerTimeline() {
  const timelineContainer = document.getElementById("career-timeline")

  careerPath.forEach((item, index) => {
    const timelineItem = document.createElement("div")
    const isEven = index % 2 === 0

    timelineItem.className = isEven ? "timeline-item timeline-item-left" : "timeline-item timeline-item-right"

    const skillsHTML = item.skills.map((skill) => `<span class="timeline-skill">${skill}</span>`).join("")

    const achievementsHTML = item.achievements.map((achievement) => `<li>${achievement}</li>`).join("")

    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-organization">${item.organization}</div>
        <p>${item.description}</p>
        <div class="timeline-details">
          <h4 style="margin-bottom: 8px; font-size: 0.9rem;">Key Achievements:</h4>
          <ul style="padding-left: 20px; margin-bottom: 12px;">
            ${achievementsHTML}
          </ul>
          <div class="timeline-skills">
            ${skillsHTML}
          </div>
        </div>
      </div>
    `

    timelineContainer.appendChild(timelineItem)
  })
}

// Debug helper for contact form
function debugFormSubmission() {
  const submitBtn = document.getElementById("submit-btn")
  const submitSpinner = document.getElementById("submit-spinner")

  console.log("Submit button state:", {
    disabled: submitBtn.disabled,
    spinnerHidden: submitSpinner.classList.contains("hidden"),
    spinnerDisplay: window.getComputedStyle(submitSpinner).display,
  })

  // Force spinner to hide if it's still visible after submission
  if (!submitSpinner.classList.contains("hidden")) {
    console.log("Forcing spinner to hide")
    submitSpinner.classList.add("hidden")
  }
}

// Add this to window for easy console access
window.debugFormSubmission = debugFormSubmission

// Update any references to the domain in JavaScript
// For example, if there are any hardcoded email addresses or URLs

// If you have any email addresses like hello@luvmny.dev, change them to hello@wojtowicz.dev
// If you have any URLs like https://luvmny.dev, change them to https://wojtowicz.dev

// Note: I don't see any direct references to the domain in the script.js file,
// but if you add any in the future, remember to use wojtowicz.dev
