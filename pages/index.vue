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
      description: 'Ein Open-Source ERP-System für optimiert Geschäftsprozesse, Kontrolle und Transparenz.'
    },
    {
      route: '/bi',
      image: "/images/bi-icon.svg",
      title: 'BI-System',
      description: 'Ein Open-Source ERP-System für optimiert Geschäftsprozesse, Kontrolle und Transparenz.'
    },
    {
      route: '/crm',
      image: "/images/crm-icon.svg",
      title: 'CRM-System',
      description: 'Ein Open-Source ERP-System für optimiert Geschäftsprozesse, Kontrolle und Transparenz.'
    },
    {
      route: '/lms',
      image: "/images/lms-icon.svg",
      title: 'LMS-System',
      description: 'Ein Open-Source ERP-System für optimiert Geschäftsprozesse, Kontrolle und Transparenz.'
    },
    {
      route: '/erp',
      image: "/images/erp-icon.svg",
      title: 'ERP-System',
      description: 'Ein Open-Source ERP-System für optimiert Geschäftsprozesse, Kontrolle und Transparenz.'
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