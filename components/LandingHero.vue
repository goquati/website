<template>
  <section class="hero-pf hero-personal container" id="top">
    <div class="floaters" aria-hidden="true">
      <svg class="floater f3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
      </svg>
      <svg class="floater f5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
        <path d="M4 12h16M12 4v16" />
      </svg>
    </div>

    <div class="hero-split">
      <!-- LEFT: copy -->
      <div class="hero-copy">
        <h1 class="display">
          Während andere <em>noch planen</em>,<br />
          <span class="underline-wrap">
            liefern wir schon
            <svg class="squiggle" viewBox="0 0 320 14" fill="none" aria-hidden="true">
              <path
                d="M2 9 C 30 1, 60 13, 90 7 S 150 1, 180 7 S 240 13, 270 7 S 310 1, 318 7"
                stroke="var(--clay)" stroke-width="2.5" stroke-linecap="round" fill="none"
              />
            </svg>
          </span>
          <span style="color:var(--clay);font-style:italic;">.</span>
        </h1>

        <p class="lead-pf">
          Kein Sales-Floor, kein Discovery-Theater. Nur wir zwei —
          mit jeweils über 10 Jahren Erfahrung — die euer Produkt
          <span class="hl"> selbst bauen und ausliefern</span>.
          MVPs, Custom-Builds, KI-Automatisierungen.
        </p>

        <div class="actions-pf">
          <a href="#contact" style="text-decoration:none;position:relative;">
            <button class="btn btn-primary">
              Sagt Hallo
              <QuatiIcon name="arrow-right" :size="16" />
            </button>
          </a>
          <a href="#how" style="text-decoration:none;">
            <button class="btn btn-ghost">So arbeiten wir</button>
          </a>
        </div>

        <div class="ribbon">
          <span><span class="em">∅</span> Account-Manager</span>
          <span><span class="em">∅</span> Junior-Praktikanten</span>
          <span><span class="em">✓</span> Direkter Slack zum Code</span>
        </div>
      </div>

      <!-- RIGHT: the two devs -->
      <div class="devs">
        <div class="dev dev-1">
          <div class="photo">
            <img src="/assets/eduard.png" alt="Eduard, Co-Founder & Developer" loading="eager" />
          </div>
          <div class="name-tag">
            <span class="name">Eduard</span>
            <span class="role">Fullstack · KI</span>
          </div>
          <div class="bubble bubble-1">
            „Schickt mir eure <em>nervigste</em> Workflow-Aufgabe."
          </div>
        </div>

        <div class="dev dev-2">
          <div class="photo">
            <img src="/assets/k.png" alt="Klaus, Co-Founder & Developer" loading="eager" />
          </div>
          <div class="name-tag">
            <span class="name">Klaus</span>
            <span class="role">Mobile · Backend</span>
          </div>
          <div class="bubble bubble-2">
            „Lieber deployen, als eine PowerPoint bauen."
          </div>
        </div>
      </div>
    </div>

    <svg class="wave-divider" viewBox="0 0 1200 22" preserveAspectRatio="none">
      <path
        d="M0 11 C 100 1, 200 21, 300 11 S 500 1, 600 11 S 800 21, 900 11 S 1100 1, 1200 11"
        stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
      />
    </svg>
  </section>
</template>
