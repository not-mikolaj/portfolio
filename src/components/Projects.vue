<template>
  <div class="projects-section">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <div class="project-image">
          <img
            :src="project.image"
            :alt="project.title"
            width="600"
            height="400"
            style="object-fit: cover; padding: 2px"
          />
        </div>
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span
              v-for="tag in project.tags"
              :key="tag.name"
              class="project-tag"
            >
              <i :class="tag.icon"></i> {{ tag.name }}
            </span>
          </div>
        </div>
        <div class="project-footer" style="padding: 0 1rem 1rem">
          <a :href="project.link" target="_blank" class="project-link">
            <i class="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "SEP Revision Test",
          description:
            "Created a simple web page to revise for the SEP Certification as well as implemented a dark mode due to not finding simmilar resources online.",
          image: new URL("../assets/SEP.jpeg", import.meta.url).href,
          link: "https://github.com/not-mikolaj/SEP",
          tags: [
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
          ],
        },
        {
          title: "Project 2",
          description: "Description.",
          image: "https://placehold.co/600x400/111827/ffffff",
          link: "https://github.com",
          tags: [
            { name: "Java", icon: "fab fa-java" },
            { name: "SQL", icon: "fas fa-database" },
          ],
        },
        {
          title: "Project 3",
          description: "Description.",
          image: "https://placehold.co/600x400/111827/ffffff",
          link: "https://github.com",
          tags: [
            { name: "PHP", icon: "fab fa-php" },
            { name: "MySQL", icon: "fas fa-database" },
          ],
        },
      ],
    };
  },
};
</script>
