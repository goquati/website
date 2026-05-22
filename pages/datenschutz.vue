<template>
  <div>
    <LandingNav />
    <main class="container section" style="max-width:680px;">
      <h1 class="h1">Datenschutz&shy;erklärung</h1>
      <div style="margin-top:32px;font-size:15px;line-height:1.7;color:var(--ink-2);">
        <p>Diese Website erhebt keine personenbezogenen Daten. Es werden keine Cookies gesetzt.</p>
        <br />
        <p>Bei Fragen zum Datenschutz: <a href="mailto:hello@quati.dev">hello@quati.dev</a></p>
      </div>
    </main>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Datenschutz — Quati Studio' })
</script>
