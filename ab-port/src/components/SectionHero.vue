<script setup>
import ButtonMain from '@/components/ButtonMain.vue'
import HeroMarquee from "@/components/HeroMarquee.vue";
</script>

<template>
  <div class="max-w-[1200px] grid grid-cols-12 gap-6 items-end min-h-[90vh] mx-auto">
    <div class="col-span-3 z-1 pl-24 pb-64">
      <h1 class="text-blue-600">Brand Builder</h1>
      <p class="text-slate-600 w-80">
        I don’t dream ideas. I build them. From zero. With experience, skill, and coffee. A lot of
        coffee ...
      </p>
    </div>

    <div class="col-span-6 relative">
      <img  alt="" src="E:\FINAL-TRY\dev-portfolio\ab-port\src\assets\images\hero-img.png" />
      <div class="absolute rounded-2xl inset-0 bg-gradient-to-t from-blue-50/80 from-1% to-blue-50/0 to-30% pointer-events-none"></div>
    </div>

    <div class="col-span-3 min-h-[60vh]">
      <div class="flex items-start flex-nowrap">
        <div class="flex flex-col items-start gap-y-6">
          <div
            class="text-[0.938rem] pb-8 leading-[1.6em] flex flex-col gap-y-2 text-slate-700 border-b border-dashed"
          >
            Working since <span class="text-[2.813rem] text-slate-500">2011</span>
          </div>
          <div class="text-[0.938rem] pb-8 leading-[1.6em] flex flex-col gap-y-2 text-slate-700">
            Projects handled<span class="text-[2.813rem] text-slate-500">240+</span>
          </div>
          <button-main buttontxt="My Projects" />
        </div>
      </div>
    </div>
  </div>

  <div class="-mt-[10vh]">
    <div class="h-[10vh] bg-blue-50/5 backdrop-blur-xs  flex items-end justify-center">
      <hero-marquee />
    </div>

  </div>
</template>

<style scoped></style>
