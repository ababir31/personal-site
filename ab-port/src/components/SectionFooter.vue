<script setup>
import meTwo from '@/assets/images/me-two.png'
import LogoAbir from '@/components/logo/logoAbir.vue'
import Facebook from '@/components/logo/SocialFacebook.vue'
import Instagram from '@/components/logo/SocialInstagram.vue'
import X from '@/components/logo/SocialX.vue'
import Linkedin from '@/components/logo/SocialLinkedin.vue'

import { onMounted, onBeforeUnmount, ref } from 'vue'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const hero = ref(null)
const imageWrap = ref(null)
const imageTarget = ref(null)

let tween = null

onMounted(() => {
  // only run if refs exist
  if (!imageWrap.value || !imageTarget.value || !hero.value) return

  // reset transforms and measure positions
  gsap.set(imageWrap.value, { clearProps: 'all' })

  const imageRect = imageWrap.value.getBoundingClientRect()
  const targetRect = imageTarget.value.getBoundingClientRect()

  const x = targetRect.left - imageRect.left
  const y = targetRect.top - imageRect.top
  const scale = targetRect.width / imageRect.width

  // create tween
  tween = gsap.to(imageWrap.value, {
    x: () =>
      imageTarget.value.getBoundingClientRect().left - imageWrap.value.getBoundingClientRect().left,
    y: () =>
      imageTarget.value.getBoundingClientRect().top - imageWrap.value.getBoundingClientRect().top,
    scale: () =>
      imageTarget.value.getBoundingClientRect().width /
      imageWrap.value.getBoundingClientRect().width,
    ease: 'none',
    scrollTrigger: {
      trigger: hero.value,
      start: 'top top',
      end: '+=100%',
      scrub: true,
      invalidateOnRefresh: true, // lets GSAP recalc automatically
    },
  })
})

onBeforeUnmount(() => {
  // kill tween and its ScrollTrigger
  tween?.kill()
  gsap.set(imageWrap.value, { clearProps: 'all' })
})
</script>

<template>
  <div class="bg-blue-500">
    <!-- Hero -->
    <div ref="hero" class="min-h-screen flex items-center justify-center px-4">
      <div ref="imageWrap" class="image-wrap">
        <img
          :src="meTwo"
          class="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg grayscale"
        />
      </div>
    </div>

    <!-- Contact Section -->
    <div class="min-h-screen flex items-center justify-center px-4">
      <div
        class="bg-white w-full max-w-[1200px] p-6 sm:p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between gap-8"
      >
        <!-- Left Column -->
        <div class="flex flex-col justify-between items-center md:items-start gap-6">
          <logo-abir />
          <div ref="imageTarget" class="w-32 sm:w-48 md:w-64 h-40 sm:h-48 md:h-[20rem]"></div>
        </div>

        <!-- Right Column -->
        <div class="w-full md:w-1/2 flex flex-col justify-between gap-6 text-center md:text-right items-center md:items-end">
          <p
            class="text-base! sm:text-lg! md:text-xl! lg:text-[1.722rem]! text-slate-500 leading-relaxed"
          >
            So, this is me. If you wanna talk,
            <a
              class="text-base! sm:text-lg! md:text-xl! lg:text-[1.722rem]! text-blue-600"
              href="mailto:metaformico@gmail.com?subject=Let's%20Talk%20business%20mate!"
              >Click Here</a
            >. I’ll chat over email, just like the old times. If you just wanna stalk me, go ahead
            and explore my socials.
          </p>

          <!-- Socials -->
          <div>
            <div
              class="bg-blue-500 p-2 flex gap-2 justify-center md:justify-end rounded-xl flex-wrap"
            >
              <Facebook />
              <instagram />
              <x />
              <Linkedin />
            </div>
            <p class="text-xs! mt-3 ">UI designed and developed by me ©️ rights are reserved.</p></div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.image-wrap {
  will-change: transform;
  transform-origin: top left;
}
</style>
