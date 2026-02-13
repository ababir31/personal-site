<script setup>
import prodOne from '@/assets/images/prod-one.png'
import prodTwo from '@/assets/images/prod-two.png'
import prodThree from '@/assets/images/prod-Three.png'
import prodFour from '@/assets/images/prod-Four.png'

import bgTab from '@/assets/images/bg-tab.png'

import bgOne from '@/assets/images/bgone.png'
import bgTwo from '@/assets/images/bgtwo.png'
import bgThree from '@/assets/images/bgthree.png'
import bgFour from '@/assets/images/bgFour.png'

import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectsWrapper = ref(null)

const sectionOne = ref(null)
const sectionOneText = ref(null)
const sectionOneImage = ref(null)
const sectionOneBg = ref(null)

const sectionTwo = ref(null)
const sectionTwoText = ref(null)
const sectionTwoImage = ref(null)
const sectionTwoBg = ref(null)

const sectionThree = ref(null)
const sectionThreeText = ref(null)
const sectionThreeImage = ref(null)
const sectionThreeBg = ref(null)

const sectionFour = ref(null)
const sectionFourText = ref(null)
const sectionFourImage = ref(null)
const sectionFourBg = ref(null)

const prodFooter = ref(null)

const currentIndex = ref(1)
const totalProjects = 4

onMounted(() => {
  console.log(sectionOne.value)
  console.log(sectionOneText.value)
  console.log(sectionOneImage.value)

  console.log(ScrollTrigger)

  const sectionsCount = 4

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projectsWrapper.value,
      start: 'top top',
      end: '+=500%',
      scrub: true,
      pin: true,
      markers: false, // TEMP – for sanity
      onUpdate: (self) => {
        const progress = self.progress
        const index = Math.min(sectionsCount, Math.floor(progress * sectionsCount) + 1)
        currentIndex.value = index
      },
    },
  })

  // SECTION 1 ENTER
  tl.from(sectionOneText.value, {
    y: 80,
    opacity: 0,
    ease: 'none',
  })

  tl.fromTo(
    sectionOneBg.value,
    { scale: 1.2, transformOrigin: '50% 50%' },
    { scale: 1, ease: 'none' },
  )

  tl.from(
    sectionOneImage.value,
    {
      opacity: 0,
      ease: 'none',
    },
    0.15,
  )

  // SECTION 1 EXIT
  tl.to(sectionOneText.value, {
    y: -80,
    opacity: 0,
    ease: 'none',
  })

  tl.to(
    sectionOneBg.value,
    {
      scale: 1.05,
      ease: 'none',
    },
    '<',
  )

  // SECTION 2 ENTER
  tl.to(sectionTwo.value, {
    opacity: 1,
    ease: 'none',
  })

  tl.from(sectionTwoText.value, {
    y: 80,
    opacity: 0,
    ease: 'none',
  })

  tl.fromTo(
    sectionTwoBg.value,
    { scale: 1.2, transformOrigin: '50% 50%' },
    { scale: 1, ease: 'none' },
  )

  tl.from(
    sectionTwoImage.value,
    {
      opacity: 0,
      ease: 'none',
    },
    '<0.15',
  )

  // SECTION 2 EXIT
  tl.to(sectionTwoText.value, {
    y: -80,
    opacity: 0,
    ease: 'none',
  })

  tl.to(
    sectionTwoBg.value,
    {
      scale: 1.05,
      ease: 'none',
    },
    '<',
  )

  // SECTION 3 ENTER
  tl.to(sectionThree.value, {
    opacity: 1,
    ease: 'none',
  })

  tl.from(sectionThreeText.value, {
    y: 80,
    opacity: 0,
    ease: 'none',
  })

  tl.fromTo(
    sectionThreeBg.value,
    { scale: 1.2, transformOrigin: '50% 50%' },
    { scale: 1, ease: 'none' },
  )

  tl.from(
    sectionThreeImage.value,
    {
      opacity: 0,
      ease: 'none',
    },
    '<0.15',
  )

  // SECTION 3 EXIT
  tl.to(sectionThreeText.value, {
    y: -80,
    opacity: 0,
    ease: 'none',
  })

  tl.to(
    sectionThreeBg.value,
    {
      scale: 1.05,
      ease: 'none',
    },
    '<',
  )

  // SECTION 4 ENTER
  tl.to(sectionFour.value, {
    opacity: 1,
    ease: 'none',
  })

  tl.from(sectionFourText.value, {
    y: 80,
    opacity: 0,
    ease: 'none',
  })

  tl.fromTo(
    sectionFourBg.value,
    { scale: 1.2, transformOrigin: '50% 50%' },
    { scale: 1, ease: 'none' },
  )

  tl.from(
    sectionFourImage.value,
    {
      opacity: 0,
      ease: 'none',
    },
    '<0.15',
  )
})
</script>

<template>
  <div ref="projectsWrapper" class="relative min-h-screen" id="prod-sec">
    <!-- Section One -->
    <div ref="sectionOne" class="absolute inset-0 overflow-hidden">
      <img
        ref="sectionOneBg"
        :src="bgOne"
        class="absolute inset-0 w-full h-full object-cover z-0"
        alt=""
      />
      <div
        class="min-h-screen py-16 md:py-24 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4"
      >
        <div ref="sectionOneText" class="md:col-span-5 txt-br-bg text-center md:text-left">
          <h2 class="text-3xl sm:text-3xl md:text-[3rem] leading-tight mb-6 text-blue-600">
            Payment System Business
          </h2>
          <p class="text-slate-500 text-sm sm:text-base md:text-lg">
            The main challenge was time. I designed the full website from the client’s brief while
            coordinating with developers and the client to get it right on the first try.
          </p>
        </div>
        <div
          ref="sectionOneImage"
          class="md:col-start-7 md:col-span-6 relative flex justify-center"
        >
          <img :src="bgTab" alt="" class="w-full max-w-md md:max-w-full h-auto relative z-10" />
          <img
            :src="prodOne"
            alt=""
            class="absolute inset-x-0 bottom-0 w-112 md:w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
          />
        </div>
      </div>
    </div>

    <!-- Section Two -->
    <div ref="sectionTwo" class="absolute inset-0 overflow-hidden opacity-0">
      <img
        ref="sectionTwoBg"
        :src="bgTwo"
        class="absolute inset-0 w-full h-full object-cover z-0"
        alt=""
      />
      <div
        class="min-h-screen py-16 md:py-24 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4"
      >
        <div ref="sectionTwoText" class="md:col-span-5 txt-br-bg text-center md:text-left">
          <h2 class="text-3xl sm:text-3xl md:text-[3rem] leading-tight mb-6 text-blue-600">
            Digital Agency Business
          </h2>
          <p class="text-slate-500 text-sm sm:text-base md:text-lg">
            This wasn’t just a project. It was my full-time role for two years. I worked content
            writing, video production, and design, and I also helped shape the rebranding and
            website for this brand.
          </p>
        </div>
        <div
          ref="sectionTwoImage"
          class="md:col-start-7 md:col-span-6 relative flex justify-center"
        >
          <img :src="bgTab" alt="" class="w-full max-w-md md:max-w-full h-auto relative z-10" />
          <img
            :src="prodThree"
            alt=""
            class="absolute inset-x-0 bottom-0 w-112 w-3/4 md:w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
          />
        </div>
      </div>
    </div>

    <!-- Section Three -->
    <div ref="sectionThree" class="absolute inset-0 overflow-hidden opacity-0">
      <img
        ref="sectionThreeBg"
        :src="bgThree"
        class="absolute inset-0 w-full h-full object-cover z-0"
        alt=""
      />
      <div
        class="min-h-screen py-16 md:py-24 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4"
      >
        <div ref="sectionThreeText" class="md:col-span-5 txt-br-bg text-center md:text-left">
          <h2 class="text-3xl sm:text-3xl md:text-[3rem] leading-tight mb-6 text-blue-600">
            Tech News Reporting
          </h2>
          <p class="text-slate-500 text-sm sm:text-base md:text-lg">
            Not just the UI. I build the whole brand from scratch, making it scream ‘tech’ without
            scaring anyone off. And to make it easy I developed it using WordPress & Elementor.
          </p>
        </div>
        <div
          ref="sectionThreeImage"
          class="md:col-start-7 md:col-span-6 relative flex justify-center"
        >
          <img :src="bgTab" alt="" class="w-full max-w-md md:max-w-full h-auto relative z-10" />
          <img
            :src="prodTwo"
            alt=""
            class="absolute inset-x-0 bottom-0 w-112 w-3/4 md:w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
          />
        </div>
      </div>
    </div>

    <!-- Section Four -->
    <div ref="sectionFour" class="absolute inset-0 overflow-hidden opacity-0">
      <img
        ref="sectionFourBg"
        :src="bgFour"
        class="absolute inset-0 w-full h-full object-cover z-0"
        alt=""
      />
      <div
        class="min-h-screen py-16 md:py-24 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4"
      >
        <div ref="sectionFourText" class="md:col-span-5 txt-br-bg text-center md:text-left">
          <h2 class="text-3xl sm:text-3xl md:text-[3rem] leading-tight mb-6 text-blue-600">
            Illustrations
          </h2>
          <p class="text-slate-500 text-sm sm:text-base md:text-lg">
            This was a really fun project from one of my jobs. I got to bring characters to life
            from just brief descriptions, working closely with a remote team throughout the process.
          </p>
        </div>
        <div
          ref="sectionFourImage"
          class="md:col-start-7 md:col-span-6 relative flex justify-center"
        >
          <img :src="bgTab" alt="" class="w-full max-w-md md:max-w-full h-auto relative z-10" />
          <img
            :src="prodFour"
            alt=""
            class="absolute inset-x-0 bottom-0 w-112 w-3/4 md:w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
          />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      ref="prodFooter"
      class="absolute bottom-4 md:bottom-8 left-0 w-full z-50 pointer-events-none"
    >
      <div
        class="mx-auto max-w-[1200px] flex md:flex-row justify-between items-center gap-2 px-4"
      >
        <p class="text-sm sm:text-base">MY FEW PROJECTS</p>
        <div class="flex gap-1 text-sm sm:text-base">
          <p>{{ currentIndex }}</p>
          <p>/ {{ totalProjects }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.txt-br-bg {
  background: rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(3px);
  padding: 1.2rem;
  border-radius: 1rem;
}
</style>
