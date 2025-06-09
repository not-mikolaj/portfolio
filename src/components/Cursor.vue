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
    // Check if device is touch-enabled with improved detection
    this.isTouchDevice = (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
    
    if (!this.isTouchDevice) {
      // Add cursor: none to body only for non-touch devices
      document.body.style.cursor = 'none';
      
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
  transition: transform 0.6s ease;
}

/* Add hardware acceleration hints */
@media (prefers-reduced-motion: no-preference) {
  .cursor,
  .cursor-follower {
    will-change: transform;
  }
}
</style>
