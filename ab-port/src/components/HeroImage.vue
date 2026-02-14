<script setup>
import { ref } from 'vue'

// Define your images
import me1 from '@/assets/images/abir-1.jpg'
import me2 from '@/assets/images/abir-2.jpg'

const maskPosition = ref('0px 0px')

const handleMouseMove = (e) => {
  // Get container boundaries to calculate relative mouse position
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  // Update the CSS mask position reactively
  maskPosition.value = `${x}px ${y}px`
}
</script>

<template>
  <div class="reveal-container" @mousemove="handleMouseMove">
    <!-- The "hidden" image underneath -->
    <img :src="me1" class="bottom-layer" alt="Background" />

    <!-- The top image with the radial mask applied -->
    <div
      class="top-layer grayscale-50"
      :style="{
        backgroundImage: `url(${me2})`,
        // Soft transition from 0% to 100%
        WebkitMaskImage: `radial-gradient(circle 320px at ${maskPosition}, transparent 0%, black 70%)`,
        maskImage: `radial-gradient(circle 320px at ${maskPosition}, transparent 0%, black 70%)`,
      }"
    ></div>
  </div>
</template>

<style scoped>
.reveal-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: crosshair;
}

.bottom-layer {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  pointer-events: none; /* Let mouse events pass through to the container */
}
</style>
