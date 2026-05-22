<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-tagline">
            Wir liefern <em>echte</em><br />Software<span class="accent">.</span>
          </div>
          <div style="margin-top:32px;font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:rgba(250,238,218,0.6);">
            Augsburg · Remote-freundlich
          </div>
        </div>
        <div>
          <div class="h">Studio</div>
          <a class="footer-link" href="#services">Leistungen</a>
          <a class="footer-link" href="#how">Erfolgsgeschichten</a>
          <a class="footer-link" href="#why">Warum Quati</a>
          <a class="footer-link" href="#faq">FAQ</a>
        </div>
        <div>
          <div class="h">Engagements</div>
          <a class="footer-link" href="#services">KI-Automatisierungen</a>
          <a class="footer-link" href="#services">Fullstack-Anwendungen</a>
          <a class="footer-link" href="#services">Native Apps</a>
          <a class="footer-link" href="#contact">Projekt starten</a>
        </div>
        <div>
          <div class="h">Anderswo</div>
          <a class="footer-link" style="display:inline-flex;align-items:center;gap:8px;" href="https://github.com/quati" target="_blank" rel="noopener">
            <QuatiIcon name="github" :size="14" />GitHub
          </a>
          <a class="footer-link" style="display:inline-flex;align-items:center;gap:8px;" href="mailto:hello@quati.dev">
            <QuatiIcon name="mail" :size="14" />hello@quati.dev
          </a>
          <a class="footer-link" href="/impressum">Impressum</a>
          <a class="footer-link" href="/datenschutz">Datenschutz</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Quati GmbH</span>
        <span>Mit Sorgfalt gemacht, nicht mit Slides.</span>
      </div>
    </div>
  </footer>
</template>
