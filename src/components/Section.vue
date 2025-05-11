<template>
  <div
    class="section"
    :class="{ 'section-active': isActive }"
    :style="{ transform: `translateY(${offset}px)` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2rem;
  overflow-y: auto;
}

.section-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) !important;
}

@media (min-width: 768px) {
  .section {
    padding: 4rem;
  }
}
</style>
