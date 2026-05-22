<template>
  <section class="section container" id="why">
    <div class="split-head">
      <div class="lhs">
        <div class="eyebrow"><span class="clay">04 </span>Warum Quati</div>
        <h2 class="h1" style="margin-top:14px;">
          Gebaut wie ein <em>Startup</em>. Geführt wie ein Senior-Team.
        </h2>
      </div>
      <div class="rhs">
        <p class="body" style="max-width:38ch;">
          Zwei Entwickler, keine PMs, kein Sales-Floor. Das ganze Studio besteht aus den Menschen, die den Code schreiben — und das verändert alles daran, wie die Arbeit läuft.
        </p>
      </div>
    </div>

    <div class="why-grid">
      <div v-for="(b, i) in blocks" :key="i" class="why-card">
        <div class="icon-wrap">
          <QuatiIcon :name="b.icon" :size="22" />
        </div>
        <div class="body">
          <div class="title" v-html="b.title" />
          <div class="desc">{{ b.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blocks = [
  {
    icon: 'rocket',
    title: 'Sechs-Wochen-<em>Tempo</em>',
    desc: 'Wir liefern in Wochen, wofür die meisten Agenturen Quartale brauchen. Nicht durch Abkürzungen — sondern durch das Entfernen von Schichten.',
  },
  {
    icon: 'wrench',
    title: 'Nur <em>Senior</em>',
    desc: 'Zwei Entwickler mit jeweils 10+ Jahren Erfahrung. Keine Juniors, kein Babysitten, niemand lernt das Framework auf eure Kosten.',
  },
  {
    icon: 'mail',
    title: 'Ihr sprecht mit den <em>Machern</em>',
    desc: 'Keine Account-Manager, keine Stellvertreter. Die Leute, die den Code schreiben, sind die, die in eurem Slack sind.',
  },
  {
    icon: 'compass',
    title: 'Pragmatisch <em>von Haus aus</em>',
    desc: 'Wir wählen bewusst den langweiligen, bewährten Stack. Das Spannende ist euer Produkt — nicht unsere Infrastruktur.',
  },
]
</script>
