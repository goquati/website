<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  description: string;
}>();

</script>

<template>
  <div class="product ">
    <div class="product-image">
      <div class="icon">
        <img :src="image" alt="FF">
      </div>
    </div>
    <h5>{{ title }}</h5>
    <p class="body-l">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.product {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 230px;

  .product-image {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: var(--brand);

    .icon {
      transition: left 0.3s ease, top 0.3s ease;
      width: 100px;
      height: 100px;
      position: absolute;
      left: -7px;
      top: -7px;
    }
  }


  &:hover {
    .product-image .icon {
      left: -10px;
      top: -10px;
    }
  }

}
</style>