<script setup>
import meTwo from '@/assets/images/me-two.png'
import LogoAbir from '@/components/logo/logoAbir.vue'
import Facebook from '@/components/logo/SocialFacebook.vue'
import Instagram from '@/components/logo/SocialInstagram.vue'
import X from '@/components/logo/SocialX.vue'
import Linkedin from '@/components/logo/SocialLinkedin.vue'
</script>

<template>
  <div class="bg-blue-500">
    <div class="h-screen flex align-middle justify-center items-center">
      <img :src="meTwo" class="h-[32rem] w-auto rounded-lg" />
    </div>
    <div class="h-screen flex items-center align-middle justify-center">
      <div class="bg-white h-1/2 w-[1200px] p-12 rounded-2xl flex justify-between">
        <div>
          <logo-abir />
          <div class="w-3xs"></div>
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

<style scoped></style>
