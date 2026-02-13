<script setup>
import amnimation1 from '@/assets/images/anima-1.gif'
import amnimation2 from '@/assets/images/anima-2.gif'
import amnimation3 from '@/assets/images/anima-3.gif'
</script>

<template>
  <!-- Intro -->
  <div
    class="py-8 md:py-16 lg:pt-[124px] mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-6 px-4 sm:px-6 lg:px-0"
  >
    <div class="col-span-1 md:col-span-6 text-center md:text-left">
      <h2
        class="text-3xl sm:text-3xl md:text-4xl lg:text-[3rem] leading-8 sm:leading-10 md:leading-[3rem] text-blue-500"
      >
        What I Can Do
      </h2>
      <p class="text-sm sm:text-base md:text-lg text-slate-700 mt-2">not a question ... (¬_¬ )</p>
    </div>
    <div class="col-span-1 md:col-start-9 md:col-span-5 text-center md:text-left">
      <p
        class="text-sm! sm:text-sm! md:text-base! lg:text-[0.875rem] leading-5 md:leading-6 text-slate-600"
      >
        I’ve learned a bunch of random software over the years, the kind you might recognize from a
        course you took long ago. After a 12 years of experience (yes, I’m old), brands just start to
        emerge from my brain, like magic. If you need still context, here's another fancy section below.
      </p>
    </div>
  </div>

  <!-- Sections -->
  <div>
    <!-- Card 1 -->
    <div
      class="py-8 md:py-12 border-t bg-blue-50 border-b border-blue-200 shadow-lg sticky bottom-0 z-30"
    >
      <div
        class="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 items-center px-4 sm:px-6 lg:px-0"
      >
        <!-- Number -->
        <div class="text-center md:text-left md:col-span-1">
          <p class="text-4xl! sm:text-5xl! md:text-[4.278rem] text-blue-500">1</p>
        </div>

        <!-- Title + Desc -->
        <div class="md:col-span-3 text-center md:text-left">
          <h3 class="text-xl sm:text-2xl md:text-[2.5rem] text-slate-700">Architecture</h3>
          <p class="text-sm sm:text-base text-slate-600">Strong foundations for digital products start here.</p>
        </div>

        <!-- Skills -->
        <div
          class="md:col-span-4 grid grid-cols-2 gap-3 justify-center md:justify-start text-sm sm:text-base"
        >
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">UI/UX design</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">WordPress</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Application UX</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Vue.js</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Visual design</p>
        </div>

        <!-- Image -->
        <div class="md:col-span-3 rounded-2xl shadow-xl shadow-emerald-200">
          <img :src="amnimation3" alt="" class="rounded-xl border-4 border-emerald-50 mx-auto" />
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div
      class="py-8 md:py-12 border-t bg-blue-50 border-b border-blue-200 shadow-lg sticky bottom-0 z-20"
    >
      <div
        class="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 items-center px-4 sm:px-6 lg:px-0"
      >
        <div class="text-center md:text-left md:col-span-1">
          <p class="text-4xl! sm:text-5xl! md:text-[4.278rem] text-blue-500">2</p>
        </div>
        <div class="md:col-span-3 text-center md:text-left">
          <h3 class="text-xl sm:text-2xl md:text-[2.5rem] text-slate-700">Optimization</h3>
          <p class="text-sm sm:text-base text-slate-600">Turning websites into systems that scale and perform.</p>
        </div>
        <div
          class="md:col-span-4 grid grid-cols-2 gap-3 justify-center md:justify-start text-sm sm:text-base"
        >
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Content strategy</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">SEO planning</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Product placement</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Marketing funnel</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Brand systems</p>
        </div>
        <div class="md:col-span-3 rounded-2xl shadow-xl shadow-rose-200">
          <img :src="amnimation2" alt="" class="rounded-xl border-4 border-rose-50 mx-auto" />
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div
      class="py-8 md:py-12 border-t bg-blue-50 border-b border-blue-200 shadow-lg sticky bottom-0 z-10"
    >
      <div
        class="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 items-center px-4 sm:px-6 lg:px-0"
      >
        <div class="text-center md:text-left md:col-span-1">
          <p class="text-4xl! sm:text-5xl!  text-sm! md:text-[4.278rem] text-blue-500">3</p>
        </div>
        <div class="md:col-span-3 text-center md:text-left">
          <h3 class="text-xl sm:text-2xl md:text-[2.5rem] text-slate-700">Production</h3>
          <p class="text-sm sm:text-base text-slate-600">From concept to final cut, content that moves people.</p>
        </div>
        <div
          class="md:col-span-4 grid grid-cols-2 gap-3 justify-center md:justify-start text-sm sm:text-base"
        >
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Media production</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Video editing</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Scriptwriting</p>
          <p class="px-3 py-1 bg-slate-200 text-center rounded-full  text-sm!">Motion graphics</p>
        </div>
        <div class="md:col-span-3 rounded-2xl shadow-xl shadow-blue-200">
          <img :src="amnimation1" alt="" class="rounded-xl border-4 border-blue-50 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>
