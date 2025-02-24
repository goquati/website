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
      :chapter-text="'ERP-Software'"
      :title="'Die Zukunft der Unternehmenssoftware ist Open-Source'"
      :body="'ERPNext ist ein 100 % Open-Source-ERP – modern, umfassend und benutzerfreundlich.'"/>

  <div class="flex flex-row flex-wrap">
    <a href="https://github.com/frappe/erpnext" class="mr-4">
      <Btn text="14 Tage kostenlos Testen"/>
    </a>
    <a href="https://github.com/frappe/erpnext">
      <GitHubBtn text="GitHub | 23k"/>
    </a>
  </div>


  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Verabschieden dich von teurer proprietärer Software
    </h2>
    <p>
      Proprietäre ERP-Systeme sind teuer, einschränkend und unflexibel. Unternehmen stehen vor zwei Optionen: Entweder
      zahlen sie enorme Summen für SAP, NetSuite, Oracle und Co., oder sie nutzen mehrere nicht integrierte Anwendungen,
      was zu manueller Arbeit, mangelnder Transparenz und lückenhafter Nachverfolgbarkeit führt. Doch was, wenn es eine
      bessere Lösung gibt?
      <br>
      <br>
      ERPNext ist ein 100 % Open-Source-ERP – modern, umfassend und benutzerfreundlich. Bei uns gibt es keine
      versteckten Funktionen hinter teuren Bezahlschranken. Alles steht Ihnen zur freien Nutzung, Anpassung und
      Weitervermarktung zur Verfügung – für maximale Freiheit, Kontrolle und Flexibilität.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/erp_dashboard.jpg" alt="CRM Deals"/>
  </div>

  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Auf Basis vom Frappe Framework
    </h2>
    <p>
      Die meiste Softwareentwicklung dreht sich darum, Anwendungen zu erstellen, die strukturierte Daten erfassen,
      verarbeiten und in Berichten oder Dashboards darstellen. Dennoch verbringen wir unglaublich viel Zeit damit, diese
      Anwendungen immer wieder von Grund auf neu zu entwickeln. Man muss ein Frontend, Middleware und Backend auswählen
      und diese miteinander verknüpfen. Jedes Mal, wenn sich etwas ändert, muss die gesamte Anwendung angepasst werden.
      <br><br>
      Das Frappe Framework macht es mit seiner Low-Code-Architektur unglaublich einfach, solche Anwendungen zu
      entwickeln. Wie ein Schweizer Taschenmesser ist es mit allen Funktionen ausgestattet, die Sie benötigen – und noch
      benötigen werden. Mit einer leistungsstarken Admin-Oberfläche, integrierten Rollen- und Berechtigungssystemen,
      flexiblen API-Funktionen und der Fähigkeit, verschiedene Workloads zu verwalten, ist das Framework die einzige
      Entwicklungsplattform, die Sie für die meisten Ihrer Anforderungen brauchen.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/frappe_doctype.jpg" alt="CRM Deals"/>
  </div>

  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Metadaten-gesteuert, Low-Code
    </h2>
    <p>
      Das Frappe Framework basiert auf einer objektorientierten Architektur, in der jedes Element als „DocType“
      bezeichnet wird. Ein DocType ist der grundlegende Baustein der Anwendung und stellt eine Datenbanktabelle, ein
      Formular, eine Klasse und mehr dar.
      <br><br>
      Das Framework verfügt über eine konfigurierbare Admin-Oberfläche, mit der Sie komplexe Formulare mit
      Interaktionen, Listenansichten, Baumstrukturen, Kanban-Ansichten und Kalendern gestalten können – ganz ohne
      Programmierung. Mit dem Form-Builder lassen sich anspruchsvolle Formulare erstellen, während Workspaces und
      Listenansichten dynamisch konfiguriert werden können. Die **No-Code-Funktionen** des Frameworks nehmen Ihnen 90 %
      der Arbeit ab, die normalerweise für die Erstellung von Steuerelementen, Layouts, Routen, Tabellen, Berichten und
      mehr erforderlich wäre.
    </p>
  </div>


  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      APIs und Integrationen
    </h2>
    <p>
      In einer Welt, in der Integration entscheidend ist und Daten nahtlos zwischen Plattformen fließen, ist
      reibungslose Konnektivität unerlässlich. Das Frappe Framework bietet leistungsstarke Werkzeuge, damit Ihre
      Anwendung mühelos mit anderen Systemen kommunizieren kann.
      <br><br>
      Dank des durchdachten API- und Integrationsansatzes des Frameworks verbringen Sie weniger Zeit mit komplizierten
      Verbindungsproblemen und können sich stattdessen auf Innovation konzentrieren. Ihre Daten, Anwendungen und
      Integrationen arbeiten harmonisch zusammen – mit minimalem Aufwand und maximaler Effizienz.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/frappe_api.jpg" alt="CRM Deals"/>
  </div>


  <div class="mt-16 w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      REST API und RPC
    </h2>
    <p>
      Die Anbindung individueller Anwendungen an andere Systeme bedeutet oft, umfangreichen API-Integrationscode zu
      schreiben und zu pflegen. Nicht mit dem Frappe Framework!
      <br><br>
      Wenn Sie eine Custom App mit mehreren DocTypes erstellen, werden die Standard-CRUD-APIs automatisch
      für Sie generiert.
      <br><br>
      Dank der vorgefertigten REST-APIs des Frameworks können Sie Ihre Daten über Standard-Webprotokolle abrufen
      und bearbeiten – ohne jede Integration manuell programmieren zu müssen.
      <br><br>
      Falls die REST-APIs nicht ausreichen, ist das Erstellen eigener API-Endpunkte besonders einfach: Sie müssen
      lediglich eine Python-Funktion schreiben, sie mit dem „whitelist“-Decorator versehen – und sie ist sofort
      als API auf der Client-Seite verfügbar. Schnell, effizient und flexibel.
    </p>
  </div>

  <div class="mt-16">
    <img class="rounded-xl w-full max-w-[800px]" src="/images/frappe_whitelist.jpg" alt="CRM Deals"/>
  </div>

  <Cta title="Kontakt aufnehmen" class="mt-24"/>


</template>

<style scoped>


</style>