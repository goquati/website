<template>
  <section class="section container" id="services">
    <div class="split-head">
      <div class="lhs">
        <div class="eyebrow"><span class="clay">02 </span>Leistungen</div>
        <h2 class="h1" style="margin-top:14px;">
          Von der Idee zum Produkt. In Wochen, nicht <em>Monaten</em>.
        </h2>
      </div>
      <div class="rhs">
        <p class="body" style="max-width:38ch;">
          Sucht das aus, was zu eurer Situation passt. Unsicher? Schreibt es uns in zwei Absätzen — wir schlagen das richtige Format vor.
        </p>
      </div>
    </div>

    <div class="services-three">
      <div v-for="s in services" :key="s.num" class="service-card-lg">
        <div class="icon-wrap">
          <QuatiIcon :name="s.icon" :size="22" />
        </div>
        <div class="num">{{ s.num }} · Leistung</div>
        <div class="title" v-html="s.title" />
        <div class="desc">{{ s.desc }}</div>
        <ul class="bullets">
          <li v-for="(b, i) in s.bullets" :key="i">
            <span class="check"><QuatiIcon name="check" :size="16" /></span>
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    num: '01',
    icon: 'spark',
    title: 'KI-<em>Automatisierungen</em>',
    desc: 'Wir automatisieren die Arbeit, die eure besten Leute täglich ausbremst — E-Mails, Tickets, manuelle Prozesse. Das läuft dann im Hintergrund. Keine Demo-Spielzeuge, keine Pilotprojekte, die nie in Produktion gehen.',
    bullets: [
      'KI-Workflows, die in eure bestehenden Tools greifen',
      'KI, die eure Dokumente und internen Daten kennt',
      'Modelle, die ihr euch leisten könnt',
    ],
  },
  {
    num: '02',
    icon: 'wrench',
    title: 'Fullstack-<em>Anwendungen</em>',
    desc: 'Web-Apps, Dashboards, APIs — intern oder für eure Kunden. Wir bauen von vorne bis hinten. Kein Übergabechaos zwischen Frontend und Backend, weil beides dieselben Leute schreiben.',
    bullets: [
      'TypeScript, React, Postgres',
      'Auth, Payments, der ganze Kleinkram',
      'Code, den ihr nach uns weiterentwickeln könnt',
    ],
  },
  {
    num: '03',
    icon: 'rocket',
    title: 'Native <em>Apps</em>',
    desc: 'iOS und Android, ausgeliefert in die Stores. Nativ, wo es sich lohnt — React Native, wo nicht. Wir sagen euch ehrlich, was wann passt.',
    bullets: [
      'Swift / Kotlin oder React Native',
      'Store-Einreichung & TestFlight',
      'Push, Deep-Links, Offline-State',
    ],
  },
]
</script>
