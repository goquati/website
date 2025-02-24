<template>
  <div class="root-container">
    <a style="grid-area: logo" href="/" class="logo-container"><img src="/assets/images/quati.svg" alt="Quait Logo"></a>
    <nav style="grid-area: navbar" class="navbar-container"></nav>

    <aside style="grid-area: sidebar" class="sidebar-container">
      <div><a href="/" class="cursor-pointer font-semibold">QUATI</a></div>
    </aside>

    <main style="grid-area: main" class="main-container">
      <NuxtPage/>
    </main>

    <div style="grid-area: footer" class="footer-container flex items-center flex-wrap gap-8 cursor-pointer ">
      <a class="hover:underline" href="/impressum">Impressum</a>
      <a class="hover:underline" href="/datenschutz">Datenschutz</a>
    </div>
  </div>
</template>

<style>
.root-container {
  display: grid;
  height: 100%;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas:
    "logo navbar"
    "sidebar main"
    "sidebar footer";

  .logo-container, .navbar-container, .main-container, .footer-container {
    z-index: 10;
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
  }

  .main-container {
    min-height: 100vh;
    padding: 10vw;
  }

  .footer-container {
    padding: 0 10vw;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 60%;
      object-fit: contain;
      opacity: .75;
    }
  }

  .sidebar-container {
    div {
      transform: translateY(93px) rotate(270deg);
      font-size: 45px;
      position: sticky;
      top: 0;
    }
  }


  @media (max-width: 640px) {
    grid-template-columns: 40px 1fr;
    grid-template-rows: 40px 1fr 80px;
    grid-template-areas:
        "logo navbar"
        "sidebar main"
        "sidebar footer";
    .sidebar-container {
      div {
        font-size: 25px;
        margin-top: -50px;
      }
    }

    .main-container {
      padding: 1rem;
    }
  }
}

</style>
<script setup lang="ts">
</script>