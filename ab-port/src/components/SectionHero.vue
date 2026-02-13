<script setup>
import ButtonMain from '@/components/ButtonMain.vue'
import HeroMarquee from '@/components/HeroMarquee.vue'
import HeroImage from '@/components/HeroImage.vue'
</script>

<template>
  <div
    class="max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-6 items-end min-h-[90vh]! mx-auto px-4"
  >
    <!-- Left Text -->
    <div class="md:col-span-3 z-10 md:pl-12 md:pb-64 text-center md:text-left">
      <h1 class="text-blue-600 text-3xl! md:text-[2.5rem]! lg:text-[7.438rem]! leading-[1em]!">Brand Builder</h1>
      <p class="text-slate-600 max-w-sm mx-auto md:mx-0 mt-2 text-sm! md:text-base!">
        I don’t dream ideas. I build them. From zero. With experience, skill, and coffee. A lot of
        coffee ...
      </p>
    </div>

    <!-- Center Image -->
    <div class="md:col-span-6 relative flex justify-center">
      <!--      <img-->
      <!--        alt=""-->
      <!--        class="w-full max-w-md md:max-w-full object-cover"-->
      <!--        src="E:\FINAL-TRY\dev-portfolio\ab-port\src\assets\images\hero-img.png"-->
      <!--      />-->
      <hero-image class="w-full max-w-md md:max-w-full object-cover rounded-4xl" />
      <div
        class="absolute rounded-2xl inset-0 bg-gradient-to-t from-blue-50/80 from-1% to-blue-50/0 to-30% pointer-events-none"
      ></div>
    </div>

    <!-- Right Stats -->
    <div class="md:col-span-3 min-h-[40vh] flex justify-center md:justify-start">
      <div class="flex md:flex-col md:mb-32 items-center md:items-start gap-y-6">
        <div
          class="text-sm md:pb-6 mr-6 leading-[1.6em] flex flex-col gap-y-2 text-slate-700 md:border-b border-dashed text-center md:text-left"
        >
          Working since <span class="text-4xl text-slate-500">2011</span>
        </div>
        <div
          class="text-sm md:pb-6 mr-6 leading-[1.6em] flex flex-col gap-y-2 text-slate-700 text-center md:text-left"
        >
          Projects handled<span class="text-4xl text-slate-500">240+</span>
        </div>
        <button-main buttontxt="My Projects" href="#prod-sec" />
      </div>
    </div>
  </div>

  <!-- Marquee -->
  <div class="-mt-[5vh] md:-mt-[10vh]">
    <div class="h-[8vh] md:h-[10vh] bg-blue-50/5 backdrop-blur-xs flex items-end justify-center">
      <hero-marquee />
    </div>
  </div>
</template>

<style scoped></style>
