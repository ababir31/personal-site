<script setup>
import amnimation1 from '@/assets/images/anima-1.gif'
import amnimation2 from '@/assets/images/anima-2.gif'
import amnimation3 from '@/assets/images/anima-3.gif'
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

  <div class="">
    <div
      class="py-[48px] border-t bg-blue-50 border-b border-b-blue-200 border-t-blue-200 shadow-2xl shadow-slate-300 sticky bottom-0 z-30"
    >
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
        <div class="col-start-10 col-span-3 rounded-2xl shadow-2xl shadow-emerald-200">
          <img :src="amnimation3" alt="" class="rounded-xl border-4 border-emerald-50" />
        </div>
      </div>
    </div>

    <div
      class="py-[48px] border-t bg-blue-50 border-b border-b-blue-200 border-t-blue-200 shadow-2xl shadow-slate-300 sticky bottom-0 z-20"
    >
      <div class="mx-auto max-w-[1200px] grid items-center grid-cols-12 gap-6">
        <div class="col-span-1">
          <p class="text-[4.278rem]! text-blue-500">2</p>
        </div>
        <div class="col-start-2 col-span-3">
          <h3 class="text-[2.5rem]">Optimization</h3>
          <p>Turning websites into systems that scale and perform.</p>
        </div>
        <div class="col-start-6 col-span-4 grid justify-self-start grid-cols-2 gap-4">
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Content strategy</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">SEO planning</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Product placement</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Marketing funnel</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Brand systems</p>
        </div>
        <div class="col-start-10 col-span-3 rounded-2xl shadow-2xl shadow-rose-200">
          <img :src="amnimation2" alt="" class="rounded-xl border-4 border-rose-50" />
        </div>
      </div>
    </div>

    <div
      class="py-[48px] border-t bg-blue-50 border-b border-b-blue-200 border-t-blue-200 sticky bottom-0 z-10"
    >
      <div class="mx-auto max-w-[1200px] grid items-center grid-cols-12 gap-6">
        <div class="col-span-1">
          <p class="text-[4.278rem]! text-blue-500">3</p>
        </div>
        <div class="col-start-2 col-span-3">
          <h3 class="text-[2.5rem]">Production</h3>
          <p>From concept to final cut, content that moves people.</p>
        </div>
        <div class="col-start-6 col-span-4 grid justify-self-start grid-cols-2 gap-4">
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Media production</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Video editing</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">scriptwriting</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-4xl text-sm!">Motion graphics</p>
        </div>
        <div class="col-start-10 col-span-3 rounded-2xl shadow-2xl shadow-blue-200">
          <img :src="amnimation1" alt="" class="rounded-xl border-4 border-blue-50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
