<template>
  <section class="section container" id="how">
    <div class="split-head">
      <div class="lhs">
        <div class="eyebrow"><span class="clay">03 </span>Erfolgsgeschichten</div>
        <h2 class="h1" style="margin-top:14px;">
          Drei Projekte. Drei Branchen. Live <em>geliefert</em>.
        </h2>
      </div>
      <div class="rhs">
        <p class="body" style="max-width:38ch;">
          Drei Projekte aus den letzten 18 Monaten. Unterschiedliche Stacks, unterschiedliche Branchen — gleiches Muster: eng gefasst, schnell geliefert.
        </p>
      </div>
    </div>

    <div class="stories-grid">
      <article v-for="s in stories" :key="s.name" class="story-card">
        <div :class="`story-cover placeholder ${s.tone}`">
          <div class="story-cover-inner">
            <em v-if="s.italic">{{ s.name }}</em>
            <template v-else>{{ s.name }}</template>
            <span class="story-cover-dot">.</span>
          </div>
          <div class="grain" />
        </div>
        <div class="story-meta">
          <span>{{ s.year }}</span>
          <span>·</span>
          <span>{{ s.client }}</span>
        </div>
        <h3 class="story-title">
          <em v-if="s.italic">{{ s.name }}</em>
          <template v-else>{{ s.name }}</template>
        </h3>
        <p class="story-desc" v-html="s.desc" />
        <div class="story-tags">
          <span v-for="(t, i) in s.tags" :key="i" class="story-tag" v-html="t" />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const stories = [
  {
    name: 'Hippo Chat',
    italic: true,
    tone: 'clay',
    client: 'Open Hippo',
    year: '2025',
    tags: ['On-Prem-KI', 'Web-Chat', 'Beliebiges Modell'],
    desc: 'Das Unternehmen wollte ChatGPT-Fähigkeiten — aber ihre Dokumente sollten die Cloud nie verlassen. Wir bauten einen privaten Firmenchat, der vollständig <em>auf ihrer eigenen Hardware</em> läuft. Beliebige Modelle, volle Datenkontrolle.',
  },
  {
    name: 'Marvin',
    italic: true,
    tone: 'ink',
    client: 'Open Hippo',
    year: '2026',
    tags: ['Sprachagent', 'Mehrsprachig', 'Bürgerdienste'],
    desc: 'Ein Bürgeramt bekommt täglich hunderte Anrufe für dieselben fünf Fragen. Marvin nimmt sie entgegen, beantwortet den <em>Standard-Support</em> und bucht Bürger:innen direkt in den richtigen Termin — in ihrer Sprache, rund um die Uhr.',
  },
  {
    name: 'HacksTracks',
    italic: false,
    tone: 'moss',
    client: 'Smart Cybersecurity',
    year: '2025',
    tags: ['iOS & Android', 'B2C', 'Darknet'],
    desc: 'Eine native Consumer-App, die das Darknet nach <em>geleakten privaten Daten</em> scannt und Nutzer:innen sofort benachrichtigt, sobald etwas auftaucht.',
  },
]
</script>
