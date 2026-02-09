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
      pinSpacing: false,
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
    <div ref="hero" class="h-screen">
      <div class="h-full flex items-center justify-center">
        <div ref="imageWrap" class="image-wrap">
          <img :src="meTwo" class="rounded-xl h-[32rem] w-auto" />
        </div>
      </div>
    </div>
    <div class="h-screen flex items-center align-middle justify-center">
      <div class="bg-white h-1/2 w-[1200px] p-12 rounded-2xl flex justify-between">
        <div class="flex flex-col gap-2">
          <logo-abir />
          <div ref="imageTarget" class="w-3xs h-[20rem]"></div>
        </div>
        <div class="w-1/2 flex items-end flex-col justify-between">
          <p class="text-[1.722rem]! leading-1.5 text-slate-500">
            So, this is me. If you wanna talk,
            <a
              class="text-[1.722rem]! leading-1.5 text-blue-600"
              href="mailto:metaformico@gmail.com?subject=Let's%20Talk%20business%20mate!"
              >Click Here</a
            >. I’ll chat over email, just like the old times. If you just wanna stalk me, go ahead
            and explore my socials.
          </p>
          <div class="bg-blue-500 p-2 flex gap-2 justify-between rounded-xl">
            <Facebook />

            <instagram />

            <x />

            <Linkedin />
          </div>
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
