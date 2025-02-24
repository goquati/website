<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <a class="mt-8" href="/contact">
    <button class="bg-black text-white px-10 py-5 mt-12">
      {{ title }}
    </button>
  </a>
</template>

<style scoped>

</style>