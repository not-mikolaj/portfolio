document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  // Replace with your own EmailJS public key
  emailjs.init("8Oac1gclz1MihcVxE")

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
    emailjs
      .send("service_2xizqfm", "template_674tgej", templateParams)
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
        setSubmitLoading(false)
      })
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
  }
})

