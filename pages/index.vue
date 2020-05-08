<template>
  <div class="container py-32 bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="pb-20 md:leading-tight">
        <h1 class="text-white bg-black inline-block text-4xl px-2">customizable-nuxt-tailwind</h1><br />
        <p class="text-white bg-black px-2 leading-normal inline-block">WIP</p>
      </div>
      <div class="">
        <div class="mb-4 px-4 py-2 text-white bg-black">
          .text-white.bg-black
        </div>
        <div class="mb-4 px-4 py-2 text-black bg-primary">
          .text-black.bg-primary
        </div>
        <div class="mb-4 px-4 py-2 text-white bg-secondary">
          .text-white.bg-secondary
        </div>
        <div class="mb-4 px-4 py-2 text-white bg-accent">
          .text-white.bg-accent
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend<{}, {}, {}, {}>({})
</script>
