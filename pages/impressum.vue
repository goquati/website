<template>
  <div>
    <LandingNav />
    <main class="container section" style="max-width:680px;">
      <div class="prose">
        <h1>Impressum</h1>
        <p>Information gemäß § 5 Telemediengesetz (TMG)</p>

        <h2>Verantwortlich &amp; Anbieter</h2>
        <p>Quati GmbH</p>

        <h2>Adresse</h2>
        <p>Augsburger Str. 11<br />86551 Aichach</p>

        <h2>Autorisierter Vertreter</h2>
        <p>Geschäftsführer:</p>
        <ul>
          <li>Klaus Happacher</li>
          <li>Eduard Kesler</li>
        </ul>

        <h2>Zusätzliche Kontaktinformationen</h2>
        <p>
          Telefon: <a href="tel:+4915734857266">+49 1573 4857266</a><br />
          E-Mail: <a href="mailto:kontakt@quati.de">kontakt@quati.de</a>
        </p>

        <h2>Handelsregister-Eintrag</h2>
        <p>Registergericht: Augsburg<br />Registernummer: HRB 40576</p>

        <h2>Steuerinformationen</h2>
        <p>USt-IdNr. (§ 27a UStG): DE 426 201 835</p>

        <h2>Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
          <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>
        </p>
        <p>Sie finden unsere E-Mail-Adresse in der obigen rechtlichen Mitteilung. Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </main>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Impressum — Quati GmbH' })
</script>
