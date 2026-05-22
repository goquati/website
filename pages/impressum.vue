<template>
  <div>
    <LandingNav />
    <main class="container section" style="max-width:680px;">
      <h1 class="h1">Impressum</h1>
      <div style="margin-top:32px;font-size:15px;line-height:1.7;color:var(--ink-2);">
        <p><strong style="color:var(--ink);">Quati Studio</strong></p>
        <p>Angaben gemäß § 5 TMG</p>
        <br />
        <p>Eduard Kesler<br />
        E-Mail: <a href="mailto:hello@quati.dev">hello@quati.dev</a></p>
      </div>
    </main>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Impressum — Quati Studio' })
</script>
