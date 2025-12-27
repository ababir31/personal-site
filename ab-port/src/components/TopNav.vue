<script setup>
import IconYoutube from '@/components/icons/IconYoutube.vue'
import LogoAbir from '@/components/logo/logoAbir.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
</script>

<template>
  <div class="max-w-[1200px] mt-6 w-[1200px] flex absolute justify-between mx-auto left-0 right-0">
    <div class="bg-white rounded-md p-4 shadow-md w-64">
      <logo-abir />
    </div>
    <div class="bd-white h-12 w-12 grid gap-2">
      <a href="#" class="bg-white p-3 rounded-md shadow-md">
        <icon-linkedin class="fill-slate-500" />
      </a>
      <a href="#" class="bg-white p-3 rounded-md shadow-md">
        <icon-github class="fill-slate-500" />
      </a>
      <a href="#" class="bg-white p-3 rounded-md shadow-md">
        <icon-youtube class="fill-slate-500" />
      </a>
      <a href="#" class="bg-white p-3 rounded-md shadow-md">
        <icon-instagram class="fill-slate-500" />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
