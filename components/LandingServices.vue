<template>
  <section class="section container" id="services">
    <div class="split-head">
      <div class="lhs">
        <div class="eyebrow"><span class="clay">02 </span>Leistungen</div>
        <h2 class="h1" style="margin-top:14px;">
          Drei Wege, wie wir mit euch <em>bauen</em>.
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
    desc: 'Wir bringen LLMs in die langweiligen Teile eures Geschäfts — Tickets, Postfächer, Tabellen. Echte Workflows, keine Demos.',
    bullets: [
      'Agentische Workflows & Integrationen',
      'RAG über eure internen Dokumente',
      'Modelle, die ihr euch leisten könnt',
    ],
  },
  {
    num: '02',
    icon: 'wrench',
    title: 'Fullstack-<em>Anwendungen</em>',
    desc: 'Web-Apps, Dashboards, APIs. Interne Tools, kundenorientierte Produkte, das ganze Paket — von vorn bis hinten, von den Menschen, die es schreiben.',
    bullets: [
      'TypeScript, React, Postgres',
      'Auth, Payments, der ganze Kleinkram',
      'Gebaut, um zu skalieren — nicht um es wegzuwerfen',
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
