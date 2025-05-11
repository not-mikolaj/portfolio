<template>
  <div class="app">
    <Cursor />
    <header class="header">
      <div class="container header-container">
        <div class="header-left">
          <a href="/" class="logo">wojtowicz.dev</a>
          <nav class="main-nav">
            <ul class="nav-list" id="glow-menu">
              <li v-for="(section, index) in sections" :key="section.id">
                <a
                  href="#"
                  class="nav-link"
                  :class="{ active: currentSection === index }"
                  @click.prevent="scrollToSection(index)"
                >
                  {{ section.name }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="/resume/resume.pdf" target="_blank" class="btn btn-outline"
          >Resume</a
        >
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
    };
  },
  methods: {
    scrollToSection(index) {
      if (this.isScrolling) return;
      this.isScrolling = true;
      this.currentSection = index;
      setTimeout(() => {
        this.isScrolling = false;
      }, 800); // Match transition duration
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
  },
  mounted() {
    window.addEventListener("wheel", this.handleWheel, { passive: false });
  },
  beforeUnmount() {
    window.removeEventListener("wheel", this.handleWheel);
  },
};
</script>

<style>
/* Import your existing styles */
@import "./style.css";

.app {
  min-height: 100vh;
  overflow: hidden;
  cursor: none; /* Hide the default cursor */
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
</style>
