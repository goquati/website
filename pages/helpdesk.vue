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
      :chapter-text="'Helpdesk - Anlaufstelle für alle Fragen'"
      :title="'Deine Kunden deine Serviceplattform'"
      :body="'Frappe Helpdesk ist ein Open-Source-Ticketing-Tool, das dir hilft, Deine Support-Workflows zu optimieren, Probleme effizient zu bearbeiten und Kunden zu begeistern'"/>

  <div class="flex flex-row flex-wrap">
    <a href="/trial" class="mr-4">
      <Btn text="14 Tage kostenlos Testen"/>
    </a>
    <a href="https://github.com/frappe/helpdesk">
      <GitHubBtn text="GitHub | 2k"/>
    </a>
  </div>


  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Effizienter Support
    </h2>
    <p>
      Frappe Helpdesk optimiert deinen Kundenservice durch automatisierte Ticket-Zuweisung, klare SLAs und eine
      Wissensdatenbank, die häufige Fragen bereits vorab beantwortet.
      <br>
      <br>
      Ein benutzerfreundliches Kundenportal ermöglicht
      einfaches Ticket-Tracking und direkte Kommunikation. Vorgefertigte Antworten sparen Zeit, während individuelle
      Anpassungen dein Helpdesk perfekt auf deine Prozesse zuschneiden. So wird dein Support schneller, transparenter
      und effizienter – für zufriedene Kunden und ein produktives Team.
    </p>
  </div>

  <div class="mt-16">
    <video class="rounded-xl w-full max-w-[800px] cursor-pointer" :controls="showControls"
           src="/videos/helpdesk_reel.mp4"
           poster="/videos/helpdesk_reel.jpg" @click="toggleControls"/>
  </div>

  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Ein Unterhaltungsstrang pro Kundenanfrage
    </h2>
    <p>
      Kundenanfragen sind überall verstreut? Mit Frappe Helpdesk landen alle Anfragen – ob per E-Mail, Webformular oder
      Chat – in <b>einer zentralen Unterhaltungsstrang</b>. Keine verpassten Nachrichten, keine Verwirrung, kein
      ständiges
      Wechseln zwischen Tools.
      <br>
      <br>
      Kundenbetreuer behalten den Überblick, priorisieren Aufgaben und kommunizieren direkt im Ticket. Dank gebündelter
      Kommunikation und internen Kommentaren bleibt das gesamte Team auf dem gleichen Stand. Das sorgt für schnellere
      Lösungen, zufriedenere Kunden und ein effizienteres Support-Team. 🚀
    </p>
  </div>


  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/helpdesk_stream.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Zuverlässiger Support mit SLAs
    </h2>
    <p>
      Unklare Bearbeitungszeiten führen zu Unsicherheit bei Kunden. Mit Frappe Helpdesk kannst du Service Level
      Agreements (SLAs) festlegen, um klare Reaktions- und Lösungszeiten zu definieren. Du kannst Arbeitszeiten
      einstellen, Prioritäten bestimmen und Feiertage berücksichtigen – alles direkt im System.
      <br><br>
      Jedes Ticket erhält automatisch die passende SLA, sodass Kunden und Support-Teams jederzeit die erwarteten
      Bearbeitungszeiten einsehen können. SLA-Countdowns helfen bei der Priorisierung, während Kunden den Status ihres
      Tickets jederzeit nachverfolgen können. Diese Transparenz setzt klare Erwartungen, verhindert Frustration und
      verbessert das gesamte Support-Erlebnis.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/helpdesk_sla.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Automatisierung für mehr Effizienz
    </h2>
    <p>
      Manuelle Ticket-Zuweisung kostet Zeit? Mit Frappe Helpdesk kannst du automatische Regeln festlegen, um Tickets
      direkt an das richtige Support-Team weiterzuleiten.
      <br><br>3
      Innerhalb der Teams kannst du die Verteilung weiter optimieren – per Round-Robin für gleichmäßige Verteilung oder
      per Lastenausgleich je nach Arbeitsaufkommen. Diese Automatisierung spart Zeit, reduziert Fehler und sorgt dafür,
      dass Tickets schnell beim richtigen Kundenbetreuer landen. So können sich deine Mitarbeiter auf die Lösung
      konzentrieren, während Kunden von schnelleren Reaktionszeiten profitieren.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/helpdesk_load_balancer.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Kunden befähigen, sich selbst zu helfen
    </h2>
    <p>
      Viele Anfragen lassen sich schon klären, bevor sie dein Support-Team erreichen. Mit der integrierten
      Wissensdatenbank von Frappe Helpdesk kannst du hilfreiche Artikel erstellen und in Kategorien organisieren – als
      Self-Service-Ressource für deine Kunden.
      <br>
      <br>
      Beim Erstellen eines Tickets schlägt das System automatisch passende Lösungen aus der Wissensdatenbank vor, sodass
      Kunden Probleme selbst lösen können, bevor sie den Support kontaktieren. Das reduziert wiederkehrende Anfragen und
      entlastet dein Team, sodass es sich auf komplexere Fälle konzentrieren kann. Gleichzeitig entsteht eine wertvolle
      Wissensbasis, die sowohl Kunden als auch dein internes Team nutzen können.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[600px]" src="/images/helpdesk_knowledge.gif" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Feedback sammeln und Support verbessern
    </h2>
    <p>
      Nach der Lösung eines Tickets können Kunden es schließen und optional Feedback in Form von Bewertungen und
      Kommentaren hinterlassen. Diese Rückmeldungen helfen dabei, die Leistung deines Teams kontinuierlich zu
      verbessern.
      <br>
      <br>
      Zusätzlich bietet das Kundenportal eine **Übersicht aller bisherigen und laufenden Tickets**, sodass Kunden ihre
      Support-Historie jederzeit einsehen und eigenständig nach Lösungen suchen können.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[600px]" src="/images/helpdesk_feedback.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Zeit sparen mit vordefinierten Antworten
    </h2>
    <p>
      <br>
      <br>
      Wiederkehrende Fragen kosten Zeit? Mit den vorgefertigten Antworten in Frappe Helpdesk können Kundenbetreuer
      schnell auf häufige Anfragen reagieren, ohne immer wieder dieselben Texte schreiben zu müssen.
      <br>
      <br>
      Diese Textvorlagen lassen sich direkt in Tickets einfügen und bei Bedarf individuell anpassen, bevor sie versendet
      werden. Das spart wertvolle Zeit und sorgt für schnellere, konsistente Antworten – für effizienteren Support und
      zufriedene Kunden.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[600px]" src="/images/helpdesk_canned.jpg" alt="CRM Deals"/>
  </div>

  <Cta title="Kontakt aufnehmen" class="mt-24"/>


</template>

<style scoped>


</style>