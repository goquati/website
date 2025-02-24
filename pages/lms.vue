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
      :chapter-text="'Learn Management System'"
      :title="'Dein Content dein Lernmanagementsystem'"
      :body="'Mit Frappe Learning liefern ein modernes, einfach zu bedienendes Lernmanagement-System – flexibel, intuitiv und Open Source, damit du stets die Kontrolle behalten kannst.'"/>

  <div class="flex flex-row flex-wrap">
    <a href="/trial" class="mr-4">
      <Btn text="14 Tage kostenlos Testen"/>
    </a>
    <a href="https://github.com/frappe/lms">
      <GitHubBtn text="GitHub | 1.2k"/>
    </a>
  </div>


  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Strukturiertes Lernen
    </h2>
    <p>
      Warum nicht einfach auf YouTube lernen? Das kann funktionieren, wenn Sie nur eine einzelne Sache lernen möchten.
      Doch bei komplexeren Themen mit mehreren Unterthemen wird es schnell unübersichtlich. Zudem lenken die ständigen
      Videoempfehlungen von Ihrem eigentlichen Lernziel ab.
      <br>
      <br>
      Mit Frappe Learning können Sie Kurse mit einer dreistufigen Struktur erstellen: Kurse bestehen aus Kapiteln, und
      innerhalb dieser Kapitel können Sie Lektionen gruppieren. Dadurch bleibt der Zusammenhang der einzelnen Lektionen
      stets klar.
      <br>
      <br>
      Zudem können Sie Inhalte in verschiedenen Formaten hinzufügen: Binden Sie Videos von YouTube oder Vimeo ein oder
      laden Sie sie direkt von Ihrem Computer hoch. Ergänzen Sie Details mit Textinhalten und testen Sie das Wissen der
      Lernenden mit interaktiven Quizzen. Alles, was Sie für strukturiertes Lernen brauchen, an einem Ort!
    </p>
  </div>

  <div class="mt-16">
    <video class="rounded-xl w-full max-w-[800px] cursor-pointer" :controls="showControls" src="/videos/lms_reel.mp4"
           poster="/videos/lms_reel.jpg" @click="toggleControls"/>
  </div>

  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Quizze und Aufgaben
    </h2>
    <p>
      Nach Abschluss des Kurses hilft eine Form der Bewertung dabei, das Wissen der Lernenden zu validieren. Mit dem
      Learning-System können Lehrkräfte Quizze mit einer unbegrenzten Anzahl von Fragen erstellen.
      <br>
      <br>
      Die Fragen können entweder als Einfachauswahl oder Mehrfachauswahl gestaltet sein. Alternativ können Fragen auch
      eine Texteingabe als Antwort erwarten, anstatt Auswahlmöglichkeiten bereitzustellen. Zudem können für jede Frage
      Punkte vergeben und eine Mindestpunktzahl für das Bestehen des gesamten Quiz festgelegt werden. Es besteht auch
      die Möglichkeit, die Fragen im Quiz zufällig anzuordnen.
      <br>
      <br>
      Neben Quizzen können Lehrkräfte auch Aufgaben in ihre Kurse und Gruppen integrieren. Die Abgabe von Aufgaben kann
      in Form von PDFs, Dokumenten, Bildern oder URLs erfolgen. Lernende lesen die Aufgabenstellung direkt über das
      Portal und reichen ihre Lösung in dem geforderten Format ein.
    </p>
  </div>


  <div class="mt-16">
    <video class="rounded-xl w-full max-w-[800px] cursor-pointer" :controls="showControls" src="/videos/lms_quiz.mp4"
           poster="/videos/lms_quiz.jpg" @click="toggleControls"/>
  </div>

  <div class="w-full max-w-[800px]">
    <h2 class="text-3xl mt-16 mb-8">
      Zertifizierung erhalten
    </h2>
    <p>
      Manchmal ist es notwendig, Lernende persönlich zu bewerten – beispielsweise in einer abschließenden Prüfung nach
      Abschluss ihrer Quizze und Aufgaben. Doch dies kann organisatorischen Aufwand bedeuten: Wie lassen sich
      Evaluationsgespräche für 20 Teilnehmer einer Gruppe effizient planen? Frappe Learning übernimmt diese Aufgabe für
      Sie.
      <br>
      <br>
      Die Plattform bietet ein komplettes Terminplanungssystem. Prüfer können verfügbare Zeitfenster festlegen, aus
      denen die Lernenden über ihr Dashboard einen passenden Termin auswählen können. Zudem lässt sich Ihr Zoom-Konto
      sowie der Google-Kalender der Prüfer in das System integrieren. Sobald ein Termin gebucht wurde, erhalten sowohl
      der Lernende als auch der Prüfer eine Kalendereinladung, um den Termin nicht zu vergessen.
      <br>
      <br>
      Nach erfolgreicher Bewertung kann den Lernenden direkt ein Zertifikat ausgestellt werden. Die App bietet eine
      integrierte Zertifikatsvorlage, die Sie nutzen oder individuell anpassen können.
    </p>
  </div>


  <Cta title="Kontakt aufnehmen" class="mt-24"/>

</template>

<style scoped>


</style>