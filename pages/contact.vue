<template>
  <SectionHeader
      class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-full"
      :chapter-number="'01'"
      :chapter-text="'Wie man uns erreichen kann.'"
      :title="'Interesse geweckt?'"
      :body="'Kontaktiere uns, oder buche direkt ein kurzes kennenlernen. Wir freuen uns auf deine Anfrage!'"/>

  <div class="mt-12">
    Schreib uns:
    <a href="mailto:hey@quati.de" class="text-xl font-bold ">hey@quati.de</a>
  </div>
  <CalendlyInlineWidget v-bind="options" style="min-width: 320px; height: 700px;"/>
</template>

<script lang="ts" setup>
const options = {
  url: 'https://calendly.com/eduard-quati/30min?primary_color=38f0af',
}
</script>

