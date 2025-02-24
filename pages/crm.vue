<script setup lang="ts">
import GitHubBtn from "~/components/GitHubBtn.vue";
import Cta from "~/components/Cta.vue";

const showControls = ref(false);

const toggleControls = () => {
  showControls.value = !showControls.value;
};
</script>

<template>

  <SectionHeader
      class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-full"
      :chapter-number="'01'"
      :chapter-text="'Customer Relationship Management'"
      :title="'Deine Leads deine Deals'"
      :body="'Mit Frappe CRM erhältst du ein modernes, intuitives und flexibles Open-Source-CRM – für volle Kontrolle über deine Kundenbeziehungen.'"/>

  <div class="flex flex-row flex-wrap">
    <a href="/trial" class="mr-4">
      <Btn text="14 Tage kostenlos Testen"/>
    </a>
    <a href="https://github.com/frappe/crm">
      <GitHubBtn text="GitHub | 853"/>
    </a>
  </div>


  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Erfasse jeden Lead mühelos

    </h2>
    <p>
      Stell dir vor, du jagst Leads über unzählige Kanäle: E-Mails stapeln sich, Webformulare bleiben unbeantwortet, und
      Anfragen aus sozialen Medien gehen im Chaos unter. Mit Frappe CRM erfasst du alle Leads aus E-Mails, Chats und
      Webformularen in einer zentralen Übersicht.
      <br>
      <br>
      So behältst du den Überblick, kannst deine Vertriebsaktivitäten gezielt steuern, Pipeline-Reviews effizient
      durchführen und sicherstellen, dass keine Nachverfolgung verloren geht – damit dein Team sich voll und ganz auf
      den erfolgreichen Abschluss konzentrieren kann.
    </p>
  </div>

  <div class="mt-16">
    <video class="rounded-xl w-full max-w-[800px] cursor-pointer" :controls="showControls" src="/videos/crm_reel.mp4"
           poster="/videos/crm_reel.jpg" @click="toggleControls"/>
  </div>

  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Führe deine Deals zum Abschluss
    </h2>
    <p>
      Frappe CRM bündelt alle Deal-Informationen an einem zentralen Ort und gibt deinem Vertriebsteam eine klare,
      umfassende Sicht auf jede Verkaufschance. Versende personalisierte E-Mails, erfasse detaillierte Notizen zu den
      Bedürfnissen deiner Kunden und automatisiere Follow-ups, damit nichts übersehen wird.
      <br>
      <br>
      Visualisiere deine Vertriebspipeline mit klaren Deal-Phasen, um die richtigen Abschlüsse zur richtigen Zeit zu
      priorisieren. Durch Kommentar-Threads kannst du nahtlos mit deinem Team zusammenarbeiten, sodass alle stets
      informiert und auf dem gleichen Stand sind.
    </p>
  </div>


  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/crm_deals.png" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <p>
      Da Frappe CRM eine 100 % Open-Source-Plattform ist, hast du die volle Freiheit, es genau an deinen
      Vertriebsprozess anzupassen. Erfasse geschäftsspezifische Details mit benutzerdefinierten Feldern, erstelle
      individuelle Workflows mit eigenen Aktionen und Skripten und bearbeite Daten in der Listenansicht bequem in großen
      Mengen.
      <br><br>
      Diese Flexibilität stellt sicher, dass sich dein CRM an dich anpasst – und nicht umgekehrt.
    </p>
  </div>

  <Cta title="Kontakt aufnehmen" class="mt-24"/>


</template>

<style scoped>


</style>