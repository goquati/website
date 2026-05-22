<template>
  <div class="page-fade">
    <LandingNav />
    <main>
      <LandingHero />
      <LandingServices />
      <LandingStories />
      <LandingWhyQuati />
      <LandingTestimonials />
      <LandingFAQ />
      <LandingCTA />
    </main>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'de' },
})
</script>
