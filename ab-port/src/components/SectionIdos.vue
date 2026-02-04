<script setup>
import amnimation1 from '@/assets/images/anima-1.gif'
</script>

<template>
  <div class="py-[124px] mx-auto max-w-[1200px] grid items-start grid-cols-12 gap-6">
    <div class="col-span-6">
      <h2 class="text-[3rem] leading-12 text-blue-500">What I Can Do</h2>
      <p>not a question ... (¬_¬ )</p>
    </div>
    <div class="col-start-9 col-span-4">
      <p>
        I don’t just understand concepts. I bring hands-on industry experience, giving clear
        direction and working smoothly with versatile teams.
      </p>
    </div>
  </div>

  <div class="py-[88px] border-t border-b border-b-blue-200 border-t-blue-200">
    <div class="mx-auto max-w-[1200px] grid items-center grid-cols-12 gap-6">
      <div class="col-span-1">
        <p class="text-[4.278rem]! text-blue-500">1</p>
      </div>
      <div class="col-start-2 col-span-3">
        <h3 class="text-[2.5rem]">Architecture</h3>
        <p>Strong foundations for digital products start here.</p>
      </div>
      <div class="col-start-6 col-span-4 grid justify-self-start grid-cols-2 gap-4">
        <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">UI/UX design</p>
        <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">WordPress</p>
        <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Application UX</p>
        <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Vue.js</p>
        <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Visual design</p>
      </div>
      <div class="col-start-10 col-span-3 rounded-2xl shadow-2xl shadow-blue-300">
        <img :src="amnimation1" alt="" class="rounded-xl" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
