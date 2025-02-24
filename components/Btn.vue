<script setup lang="ts">
defineProps<{
  text: string,
}>()
</script>

<template>
  <div style="align-items: center"
       class="rounded-xl flex flex-row justify-between mt-12 border border-black w-fit bg-black text-white px-8 py-2">
    {{ text }}
  </div>
</template>

<style scoped>

</style>