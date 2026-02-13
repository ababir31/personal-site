<script setup>
import IconYoutube from '@/components/icons/IconYoutube.vue'
import LogoAbir from '@/components/logo/logoAbir.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
</script>

<template>
  <div
    class="max-w-[1200px] mt-6 mb-6 w-full flex flex-col md:flex-row md:justify-between items-center md:items-start mx-auto md:left-0 md:right-0 px-4 md:absolute"
  >
    <!-- Logo -->
    <div class="bg-white rounded-md p-4 shadow-md w-full md:w-64 mb-4 md:mb-0">
      <logo-abir />
    </div>

    <!-- Social Icons -->
    <div class="grid grid-cols-4 sm:grid-cols-1 gap-2">
      <a
        href="https://www.linkedin.com/in/ababir1/" target="_blank"
        class="bg-white p-3 rounded-md shadow-md flex items-center justify-center w-12"
      >
        <icon-linkedin class="fill-slate-500" />
      </a>
      <a
        href="https://github.com/ababir31/" target="_blank"
        class="bg-white p-3 rounded-md shadow-md flex items-center justify-center w-12"
      >
        <icon-github class="fill-slate-500" />
      </a>
      <a
        href="https://www.youtube.com/@DesignThinking-Abir" target="_blank"
        class="bg-white p-3 rounded-md shadow-md flex items-center justify-center w-12"
      >
        <icon-youtube class="fill-slate-500" />
      </a>
      <a
        href="https://www.instagram.com/ab.abir/" target="_blank"
        class="bg-white p-3 rounded-md shadow-md flex items-center justify-center w-12"
      >
        <icon-instagram class="fill-slate-500" />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
