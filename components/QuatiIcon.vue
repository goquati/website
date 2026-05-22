<template>
  <component :is="'span'" style="display:inline-flex;align-items:center;">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path v-if="name === 'arrow-right'" d="M5 12h14M13 6l6 6-6 6"/>
      <path v-else-if="name === 'arrow-up-right'" d="M7 17 17 7M7 7h10v10"/>
      <path v-else-if="name === 'plus'" d="M12 5v14M5 12h14"/>
      <path v-else-if="name === 'check'" d="M4 12.5 9.5 18 20 6"/>
      <template v-else-if="name === 'mail'">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="m3 7 9 6 9-6"/>
      </template>
      <path v-else-if="name === 'github'" d="M9 19c-4 1-4-2-6-2m12 4v-3.5a3 3 0 0 0-.85-2.31C18.65 14.4 21 13.4 21 9.5a4.5 4.5 0 0 0-1.25-3.1 4.2 4.2 0 0 0-.1-3.1S18.4 3 15 5.3a13.4 13.4 0 0 0-7 0C4.6 3 3.35 3.3 3.35 3.3a4.2 4.2 0 0 0-.1 3.1A4.5 4.5 0 0 0 2 9.5C2 13.4 4.35 14.4 5.85 14.69A3 3 0 0 0 5 17v3.5"/>
      <path v-else-if="name === 'spark'" d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>
      <path v-else-if="name === 'wrench'" d="M14 7a4 4 0 1 1-1 6.5L4 22l-2-2 8.5-9A4 4 0 0 1 14 7z"/>
      <path v-else-if="name === 'rocket'" d="M5 13c-1.5 1.5-2 5-2 7 2 0 5.5-.5 7-2M19 15c3-1 4-4 4-9-5 0-8 1-9 4M14.5 9.5 4 20M19 5l-5 5-3-3 5-5z"/>
      <template v-else-if="name === 'compass'">
        <circle cx="12" cy="12" r="10"/>
        <path d="m16 8-2 6-6 2 2-6 6-2z"/>
      </template>
    </svg>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  size?: number
  color?: string
}>(), {
  size: 18,
  color: 'currentColor',
})
</script>
