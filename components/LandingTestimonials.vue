<template>
  <section class="section container" id="testimonials">
    <div class="split-head">
      <div class="lhs">
        <div class="eyebrow"><span class="clay">05 </span>Von den Menschen, für die wir gebaut haben</div>
        <h2 class="h1" style="margin-top:14px;">
          Was Gründer:innen über die Arbeit mit uns <em>sagen</em>.
        </h2>
      </div>
      <div class="rhs">
        <p class="body" style="max-width:38ch;">
          Drei Zitate, drei verschiedene Phasen. Das Muster ist immer dasselbe — schnell, klar, keine Überraschungen bei der Rechnung.
        </p>
      </div>
    </div>

    <div class="testimonials-grid">
      <div v-for="(t, i) in items" :key="i" class="testi-card">
        <div class="quote-mark">"</div>
        <div class="quote" v-html="t.quote" />
        <div class="who-row">
          <div class="avatar">{{ t.initial }}</div>
          <div>
            <div class="who">{{ t.who }}</div>
            <div class="role">{{ t.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    quote: 'Sie haben in <em>sechs Wochen</em> geliefert, was unser letztes Team in sechs <em>Monaten</em> nicht geschafft hat. Seitdem sind wir in acht Märkten live.',
    who: 'Maria Lopes',
    role: 'Gründerin · Atlas',
    initial: 'M',
  },
  {
    quote: 'Die klarsten Entwickler, mit denen ich je gearbeitet habe. Dienstag den Umfang abgestimmt, am darauffolgenden Freitag einen <em>lauffähigen Build</em>.',
    who: 'Jonas Weber',
    role: 'CTO · Forge',
    initial: 'J',
  },
  {
    quote: 'Mir war derselbe Umfang mit drei Monaten und 120.000 € angeboten worden. Quati hat es in <em>sechs Wochen</em> gemacht — und der Code ist sauber.',
    who: 'Priya Shah',
    role: 'Head of Product · Nimbus',
    initial: 'P',
  },
]
</script>
