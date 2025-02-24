<script setup lang="ts">
import Cta from "~/components/Cta.vue";

const showControls = ref(false);

const toggleControls = () => {
  showControls.value = !showControls.value;
};
const data = {
  products: [
    {
      route: '/helpdesk',
      image: "/images/helpdesk-icon.svg",
      title: 'Helpdesk',
      description: 'Frappe Helpdesk ist ein Open-Source-Ticketing-Tool, welches dir hilft, Deine Support-Workflows zu optimieren'
    },
    {
      route: '/bi',
      image: "/images/bi-icon.svg",
      title: 'BI-System',
      description: 'Frappe Insights ist ein 100 % Open-Source-BI-Tool, welches unterschiedliche Datenquellen bündelt und visualisiert.'
    },
    {
      route: '/crm',
      image: "/images/crm-icon.svg",
      title: 'CRM-System',
      description: 'Mit Frappe CRM erhältst du ein modernes, intuitives und flexibles Open-Source-CRM – für volle Kontrolle über deine Kundenbeziehungen.'
    },
    {
      route: '/lms',
      image: "/images/lms-icon.svg",
      title: 'LMS-System',
      description: 'Frappe Learning - ein modernes, flexibles, intuitives und einfach zu bedienendes Open Source Learn-Management-System.'
    },
    {
      route: '/erp',
      image: "/images/erp-icon.svg",
      title: 'ERP-System',
      description: 'ERPNext ist ein 100 % Open-Source-ERP – modern, umfassend und benutzerfreundlich.'
    },
  ]
}
</script>

<template>
  <section>
    <SectionHeader
        style="width: 50vw; max-width: 800px;"
        :chapter-number="'01'"
        :chapter-text="'Wir sind Quati'"
        :title="'Unternehmenssoftware ohne Vendor Lock-In'"
        :body="'Individualisierbar, Modular und Open-Source. Wir kümmern uns um Hosting, Betrieb und Individualisierung – damit dem Kerngeschäft nichts im Weg steht.'"/>
    <video class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-full cursor-pointer mt-16" :controls="showControls"
           src="/videos/intro-reel.mp4"
           poster="/videos/intro-reel.png" @click="toggleControls"/>
    <Cta title="Kontakt aufnehmen" class="mt-16"/>
  </section>

  <section>
    <SectionHeader
        style="width: 50vw; max-width: 800px;"
        :chapter-number="'02'"
        :chapter-text="'Plug and Play'"
        :title="'Module für jeden Anwendungsfall'"
        :body="'Das ERP-System basiert auf dem Frappe Framework, das von über 600 Entwicklern aktiv weiterentwickelt wird. Es ermöglicht die Nutzung von Standardmodulen sowie die Entwicklung individueller Apps zur Anpassung an spezifische Geschäftsanforderungen.'"/>
    <div class="flex flex-wrap gap-10 mt-16 sm:justify-start xl:w-3/4 lg:w-3/4 md:w-3/4 w-full">
      <a v-for="(product, index) in data.products" :href="product.route">
        <ProductCard
            :key="product.route"
            :image="product.image"
            :title="product.title"
            :description="product.description"
        />
      </a>
    </div>
  </section>


</template>

<style scoped>
section {
  margin-bottom: 10rem;
}
</style>