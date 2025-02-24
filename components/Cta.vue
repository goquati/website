<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <button class="bg-black text-white px-10 py-5">
    {{ title }}
  </button>
</template>

<style scoped>

</style>