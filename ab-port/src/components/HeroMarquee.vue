<script setup>
import { Vue3Marquee } from 'vue3-marquee'

const skillArray = [
  ' * Market Research ',
  ' * Planning & positioning ',
  ' * Strategy building ',
  ' * Customer psychology reading ',
  ' * Competitive analysis ',
  ' * Design (UI + visual) ',
  ' * UX thinking / journey mapping ',
  ' * Prototyping ',
  ' * Web design (WordPress / Elementor / custom) ',
  ' * Front-end dev basics (HTML, CSS, GSAP) ',
  ' * Conversion-focused layout design ',
  ' * SEO (technical + content) ',
  ' * Copywriting ',
  ' * Content structure planning ',
  ' * Funnel thinking ',
  ' * Product marketing ',
  ' * Branding & narrative building ',
  ' * Email marketing basics ',
  ' * Social media strategy ',
  ' * Landing page optimization ',
  ' * Basic analytics reading ',
  ' * Customer persona research ',
  ' * Creative concept development ',
  ' * User onboarding ideas ',
  ' * MVP thinking ',
  ' * Problem–solution mapping ',
  ' * Presentation & pitching ',
  ' * Basic storytelling ',
  ' * Documentation & structured explanation ',
  ' * Creating systems/processes for others ',
  ' * Understanding trends & spotting opportunity ',
]
</script>

<template>
  <Vue3Marquee
    :gradient="true"
    :gradient-color="[239, 246, 255]"
    gradient-length="10%"
    duration="90"
    :loop="0"
    class="text-slate-800 fill-blue-50 drop-shadow-xs drop-shadow-blue-50/50 mb-4 mx-32 max-w-[1200px]"
  >
    <span v-for="(word, index) in skillArray" :key="index">
      {{ word }}
    </span>
  </Vue3Marquee>
</template>

<style scoped>

</style>
