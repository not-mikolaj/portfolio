<template>
  <div class="cursor" v-if="!isTouchDevice"></div>
  <div class="cursor-follower" v-if="!isTouchDevice"></div>
</template>

<script>
export default {
  name: "Cursor",
  data() {
    return {
      isTouchDevice: false
    }
  },
  mounted() {
    // Check if device is touch-enabled
    this.isTouchDevice = (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0
    );
    
    if (!this.isTouchDevice) {
      // Add cursor: none to body only for non-touch devices
      document.body.style.cursor = 'none';
      
      const cursor = document.querySelector(".cursor");
      const cursorFollower = document.querySelector(".cursor-follower");

      document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

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
          cursorFollower.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
          cursorFollower.classList.remove("active");
        });
      });
    }
  },
  beforeUnmount() {
    // Restore default cursor when component is unmounted
    if (!this.isTouchDevice) {
      document.body.style.cursor = '';
    }
  }
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

/* Update cursor active states */
.cursor.active {
  transform: scale(1.5); /* Make dot bigger instead of disappearing */
  background: #fff; /* Keep the dot visible */
}

.cursor-follower.active {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  width: 40px; /* Make follower bigger on interactive elements */
  height: 40px;
}

/* Add specific styles for form elements */
input:hover ~ .cursor,
textarea:hover ~ .cursor {
  transform: scale(1.5);
  background: #fff;
}

input:hover ~ .cursor-follower,
textarea:hover ~ .cursor-follower {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  width: 40px;
  height: 40px;
}
</style>
