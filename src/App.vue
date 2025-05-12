<template>
  <div class="app">
    <Cursor />
    <header class="header">
      <div class="container header-container">
        <div class="header-left">
          <a href="/" class="logo">wojtowicz.dev</a>
          <nav 
            class="main-nav" 
            :class="{ 'nav-open': isMobileMenuOpen }"
            aria-label="Main navigation"
          >
            <ul class="nav-list" id="glow-menu">
              <li v-for="(section, index) in sections" :key="section.id">
                <a
                  href="#"
                  class="nav-link"
                  :class="{ active: currentSection === index }"
                  @click.prevent="scrollToSection(index)"
                  :aria-current="currentSection === index ? 'page' : undefined"
                >
                  {{ section.name }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="/resume/resume.pdf" target="_blank" class="btn btn-outline">
          <i class="fas fa-file-alt"></i>&nbsp;Resume
        </a>
        <button 
          class="mobile-menu-btn" 
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </div>
    </header>

    <main class="main-content">
      <Section
        v-for="(section, index) in sections"
        :key="section.id"
        :is-active="currentSection === index"
        :offset="getOffset(index)"
      >
        <div class="container">
          <component :is="section.component"></component>
        </div>
      </Section>
    </main>

    <footer class="footer">
      <div class="container footer-container">
        <p class="copyright">© 2025 wojtowicz.dev. All rights reserved.</p>
        <nav class="footer-nav">
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Privacy</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import Section from "./components/Section.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Career from "./components/Career.vue";
import Contact from "./components/Contact.vue";
import Cursor from "./components/Cursor.vue";

export default {
  name: "App",
  components: {
    Section,
    About,
    Projects,
    Career,
    Contact,
    Cursor,
  },
  data() {
    return {
      currentSection: 0,
      sections: [
        { id: "about", name: "About", component: "About" },
        { id: "projects", name: "Projects", component: "Projects" },
        { id: "career", name: "Career", component: "Career" },
        { id: "contact", name: "Contact", component: "Contact" },
      ],
      isScrolling: false,
      isMobileMenuOpen: false,
      touchStartY: null,
      touchStartTime: null,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    scrollToSection(index) {
      if (this.isScrolling) return;
      this.isScrolling = true;
      this.currentSection = index;
      this.isMobileMenuOpen = false; // Close mobile menu after selection
      setTimeout(() => {
        this.isScrolling = false;
      }, 800);
    },
    getOffset(index) {
      const diff = index - this.currentSection;
      return diff * 100; // 100px offset for each section
    },
    handleWheel(event) {
      if (this.isScrolling) return;

      if (event.deltaY > 0 && this.currentSection < this.sections.length - 1) {
        this.scrollToSection(this.currentSection + 1);
      } else if (event.deltaY < 0 && this.currentSection > 0) {
        this.scrollToSection(this.currentSection - 1);
      }
    },
    handleTouchStart(event) {
      this.touchStartY = event.touches[0].clientY;
      this.touchStartTime = Date.now();
    },
    handleTouchMove(event) {
      if (!this.touchStartY) return;
      
      const touchY = event.touches[0].clientY;
      const diff = this.touchStartY - touchY;
      
      // Prevent default scrolling if we're going to handle the swipe
      if (Math.abs(diff) > 10) {
        event.preventDefault();
      }
    },
    handleTouchEnd(event) {
      if (!this.touchStartY) return;
      
      const touchEndY = event.changedTouches[0].clientY;
      const diff = this.touchStartY - touchEndY;
      const timeDiff = Date.now() - this.touchStartTime;
      
      // Only handle quick swipes (less than 300ms)
      if (timeDiff > 300) return;
      
      // Require minimum swipe distance
      if (Math.abs(diff) < 50) return;
      
      if (diff > 0 && this.currentSection < this.sections.length - 1) {
        this.scrollToSection(this.currentSection + 1);
      } else if (diff < 0 && this.currentSection > 0) {
        this.scrollToSection(this.currentSection - 1);
      }
      
      this.touchStartY = null;
      this.touchStartTime = null;
    }
  },
  mounted() {
    window.addEventListener("wheel", this.handleWheel, { passive: false });
    window.addEventListener("touchstart", this.handleTouchStart, { passive: true });
    window.addEventListener("touchmove", this.handleTouchMove, { passive: false });
    window.addEventListener("touchend", this.handleTouchEnd, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
  },
};
</script>

<style>
/* Import your existing styles */
@import "./style.css";

.app {
  min-height: 100vh;
  overflow: hidden;
}

.main-content {
  position: relative;
  height: 100vh;
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--color-foreground);
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.mobile-menu-btn:hover {
  transform: scale(1.1);
}

@media (max-width: 767px) {
  .mobile-menu-btn {
    display: block;
  }

  .main-nav {
    position: fixed;
    top: 3.5rem;
    left: 0;
    right: 0;
    background: var(--color-background);
    padding: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .main-nav.nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 0.75rem;
  }

  /* Add backdrop when menu is open */
  .nav-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-backdrop.visible {
    opacity: 1;
    visibility: visible;
  }
}
</style>
