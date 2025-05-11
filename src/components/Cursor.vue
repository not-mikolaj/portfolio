<template>
  <div class="cursor"></div>
  <div class="cursor-follower"></div>
</template>

<script>
export default {
  name: "Cursor",
  mounted() {
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      // Add a slight delay to the follower for a smooth effect
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
      }, 50);
    });

    // Hide cursor when leaving the window
    document.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
      cursorFollower.style.display = "none";
    });

    document.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
      cursorFollower.style.display = "block";
    });

    // Handle interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .nav-link, .social-link, .project-card, .tech-card, input, textarea"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
      });

      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
      });
    });
  },
};
</script>

<style scoped>
.cursor {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.2s ease;
}

.cursor-follower {
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.6s ease, width 0.3s ease, height 0.3s ease;
}

.cursor.active {
  transform: scale(0);
}

.cursor.active + .cursor-follower {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}
</style>
