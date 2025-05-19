<script setup>
import { defineProps } from 'vue';
const { picture, title, description } = defineProps({
  picture: String,
  title: String,
  description: String,
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
};
</script>

<template>
  <div class="my-3 my-lg-4">
    <img
      class="img-fluid mb-3 mb-lg-4"
      :src="getImageUrl(picture)"
      :alt="`info-${picture}`"
    />
    <h4
      class="title fw-bold c-text-dark2 lh-base border-start border-4 border-primary c-fs-20 c-fs-md-24"
    >
      {{ title }}
    </h4>
    <p class="lh-lg description">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding-left: 14px;
  letter-spacing: g-fn.rem(1.6px);
}
.description {
  text-align: justify;
}

@media screen and (min-width: 768px) {
  .title {
    letter-spacing: g-fn.rem(1.92px);
  }
}
</style>
