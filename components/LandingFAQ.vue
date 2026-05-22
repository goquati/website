<template>
  <section class="section container" id="faq">
    <div class="split-head">
      <div class="lhs">
        <div class="eyebrow"><span class="clay">06 </span>Fragen</div>
        <h2 class="h1" style="margin-top:14px;">
          Was die Leute <em>wirklich</em> fragen.
        </h2>
      </div>
      <div class="rhs">
        <p class="body" style="max-width:38ch;">
          Eure Frage fehlt? Schreibt an <a href="mailto:hello@quati.dev">hello@quati.dev</a> — wir antworten innerhalb von zwei Tagen, nie mit einem Sales-Deck.
        </p>
      </div>
    </div>

    <div class="faq-wrap">
      <details v-for="(f, i) in items" :key="i" class="faq-item" :open="i === 0">
        <summary class="faq-summary">
          <span v-html="f.q" />
          <span class="toggle">
            <QuatiIcon name="plus" :size="14" />
          </span>
        </summary>
        <div class="faq-answer" v-html="f.a" />
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    q: 'Wie sind eure <em>Preise</em>?',
    a: '<p>Die meisten Projekte laufen zum Festpreis. Ein 6-Wochen-MVP kostet 36.000 €. Ein 2-Wochen-PoC kostet 14.000 €. Individuelle Builds starten bei 18.000 € — wir nennen die Zahl beim ersten Call.</p><p>Für längere Engagements oder Rettungseinsätze rechnen wir mit 2.400 €/Tag ab. Keine Retainer, keine monatlichen Mindestbeträge, keine Überraschungen.</p>',
  },
  {
    q: 'Wie schnell können wir <em>starten</em>?',
    a: '<p>Meist innerhalb von 1–2 Wochen nach der ersten Mail. Wir halten immer nur einen Slot gleichzeitig — wenn wir voll sind, sind wir voll. Aber wir sagen es euch sofort, damit ihr jemand anderen finden könnt.</p><p>Aktuell buchen wir für Sommer 2026 und haben noch 1 Slot frei.</p>',
  },
  {
    q: 'Was ist euer <em>Tech-Stack</em>?',
    a: '<p>TypeScript, React, Postgres, Node. Rust dort, wo es sich auszahlt. Stripe für Zahlungen, Supabase oder eure Cloud der Wahl für die Infrastruktur.</p><p>Wir wählen bewusst langweilige, bewährte Werkzeuge. Das Spannende ist euer Produkt — nicht unsere Framework-Entscheidungen.</p>',
  },
  {
    q: 'Unterzeichnet ihr <em>NDAs</em>?',
    a: '<p>Ja, gegenseitig. Schickt eure oder nehmt unsere. Wir haben unter NDA für Fintech, Healthtech und ein paar Stealth-Mode-Startups geliefert. Referenzen gibt\'s nach dem ersten Kontakt.</p>',
  },
  {
    q: 'Wem <em>gehört</em> der Code?',
    a: '<p>Euch. Vom ersten Tag an. Der Code liegt in eurem Repo, deployt auf eure Accounts, läuft auf eurer Infrastruktur. Wir bremsen keine Übergaben und schließen euch nicht ein.</p>',
  },
  {
    q: 'Was, wenn etwas <em>schiefgeht</em>?',
    a: '<p>Wir haben noch nie einen Festpreis-Umfang gesprengt, aber harte Wochen hatten wir definitiv. Unsere Regel: Probleme innerhalb von 48 Stunden ansprechen — mit einem schriftlichen Plan zur Behebung. Kein stilles Verschleppen.</p><p>Wenn wir einen Meilenstein verpassen, geht der nächste Sprint auf uns, bis er steht.</p>',
  },
]
</script>
