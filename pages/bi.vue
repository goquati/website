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
      :chapter-text="'Business Intelligence'"
      :title="'Deine Daten dein Data-lake'"
      :body="'Frappe Insights ist ein 100 % Open-Source-BI-Tool, das Datenanalyse und Reporting sowohl für technische als auch nicht-technische Nutzer einfacher und zugänglicher macht.'"/>

  <div class="flex flex-row flex-wrap">
    <a href="/trial" class="mr-4">
      <Btn text="14 Tage kostenlos Testen"/>
    </a>
    <a href="https://github.com/frappe/insights">
      <GitHubBtn text="GitHub | 510"/>
    </a>
  </div>


  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Erwecke deine Daten zum Leben
    </h2>
    <p>
      Stell dir vor, du triffst smartere, datengetriebene Entscheidungen – und das zu einem Bruchteil der Kosten.
      Insights ist ein benutzerfreundliches, Open-Source-Business-Intelligence-Tool, das Unternehmen hilft, das Beste
      aus ihren Daten herauszuholen. Verbinde Daten aus verschiedenen Quellen, analysiere sie und gewinne wertvolle
      Erkenntnisse, um fundierte Entscheidungen für schnelleres Wachstum und mehr Effizienz zu treffen.
    </p>
  </div>

  <div class="mt-16">
    <video class="rounded-xl w-full max-w-[800px] cursor-pointer" :controls="showControls" src="/videos/bi-reel.mp4"
           poster="/videos/bi-reel.jpg" @click="toggleControls"/>
  </div>

  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Verbinde mehrere Datenquellen
    </h2>
    <p>
      Eines der größten Hindernisse für datengetriebene Entscheidungen ist verstreute Daten. Business-Analysten stehen
      oft vor der Herausforderung, Daten aus verschiedenen Quellen in ein einziges System zu bringen – geschweige denn,
      sie zu analysieren. Insights macht die Verbindung deiner Datenquellen mühelos.
      <br>
      <br>
      Integriere Daten aus verschiedenen Tabellen und Datenbanken, kombiniere Datensätze und erstelle berechnete
      Spalten, um deine Daten optimal für die Analyse vorzubereiten. Indem du alle Daten an einem Ort zusammenführst,
      kannst du vernetzte Informationen auswerten und ein wiederverwendbares Modell erstellen – das spart Zeit und
      Aufwand für alle Beteiligten.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/bi-datasource.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Erstelle komplexe Abfragen mühelos
    </h2>
    <p>
      Daten sind nur dann wertvoll, wenn du aussagekräftige Erkenntnisse daraus gewinnen kannst. Insights macht dies mit
      einem intuitiven Abfrage-Builder für alle Nutzer ganz einfach. Filtere deine Daten, um dich auf das Wesentliche zu
      konzentrieren, wähle die relevanten Spalten aus und fasse sie mit integrierten Funktionen oder benutzerdefinierten
      Formeln zusammen.
      <br>
      <br>
      Zudem kannst du Daten aus verschiedenen Quellen mithilfe von Joins kombinieren, um ein vollständiges Geschäftsbild
      zu erhalten, und mit Pivot-Tabellen sinnvoll strukturieren. Dank Insights brauchst du keine umfangreiche
      Programmierung – mit wenigen grundlegenden Konzepten kannst du komplexe Analysen durchführen und wiederverwendbare
      Berichte erstellen, die sich automatisch aktualisieren. So sparst du wertvolle Zeit und Aufwand.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/bi-query.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Analysiere mit aussagekräftigen Diagrammen
    </h2>
    <p>
      Daten lassen sich am besten mit Diagrammen und Grafiken verstehen – genau hier setzt Insights mit seiner
      leistungsstarken Visualisierungsfunktion an. Die Wahl des richtigen Diagramms kann jedoch eine Herausforderung
      sein. Insights erleichtert dies, indem es das am besten geeignete Diagramm vorschlägt oder dir eine Auswahl aus
      verschiedenen Diagrammtypen wie Balken-, Kreis-, Linien- oder Trenddiagrammen bietet.
      <br>
      <br>
      Darüber hinaus kannst du die Diagramme nach deinen Wünschen anpassen: Wähle spezifische Spalten zur Anzeige,
      ändere Farben und Layouts oder füge Referenzlinien und Datenpunkte hinzu. Zudem kannst du deine Diagramme ganz
      einfach teilen, als Snapshot herunterladen oder in ein Dashboard integrieren – für eine noch bessere
      Visualisierung deiner Daten.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/bi-types.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Organisiere mit leistungsstarken Dashboards
    </h2>
    <p>
      Sobald deine Diagramme erstellt sind, kannst du sie in Dashboards organisieren, um wichtige Kennzahlen wie offene
      Zahlungen, Verbindlichkeiten, Umsatz, Kundenabwanderung und betriebliche Prozesse im Blick zu behalten. Wende
      Filter an, um gezielt Informationen herauszufiltern, erhalte Benachrichtigungen bei Datenänderungen und verfolge
      Fortschritte sowie Trends in Echtzeit.
      <br>
      <br>
      Insights aktualisiert deine Visualisierungen automatisch, sobald sich deine Datenmodelle ändern – so bleiben deine
      Analysen stets aktuell und präzise. Teile deine Dashboards intern oder extern, um die Zusammenarbeit zu fördern
      und datengetriebene Entscheidungen in deinem Unternehmen zu unterstützen.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/bi-dashboard.jpg" alt="CRM Deals"/>
  </div>

  <Cta title="Kontakt aufnehmen" class="mt-24"/>


</template>

<style scoped>


</style>