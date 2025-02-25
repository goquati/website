<script setup lang="ts">
defineProps<{
  chapterNumber: string;
  chapterText: string;
  title: string;
  body: string;
}>();
</script>

<template>
  <div>
    <div style="margin-bottom: 1rem" class="flex flex-row items-end text-xs">
      {{ chapterNumber }}
      <div class="dash"></div>
      {{ chapterText }}
    </div>
    <h1 class="sm:text-4xl text-3xl mt-4 mb-8">{{ title }}</h1>
    <p class="text-base">
      {{ body }}
    </p>
  </div>
</template>

<style scoped>
.dash {
  padding-left: 55px;
  border-bottom: solid 1px var(--on-surface);
  margin: 0 15px 5px 15px;
}
</style>