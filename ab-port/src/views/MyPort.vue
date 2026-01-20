<script setup>
import SectionHero from '@/components/SectionHero.vue'
import TopNav from '@/components/TopNav.vue'
import SectionAbout from '@/components/SectionAbout.vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionProject from '@/components/SectionProject.vue'
</script>

<template>

  <top-nav />

  <section-hero />

  <section-about/>

  <section-project/>

</template>

<style></style>
