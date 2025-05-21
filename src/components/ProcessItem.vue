<script setup>
import dayjs from 'dayjs';
const { id, title, description, picture, date } = defineProps({
  id: Number,
  title: String,
  description: String,
  picture: String,
  date: Date,
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
};

const formatDate = (date) => {
  return dayjs(date).format('YYYY-M-D');
};
</script>

<template>
  <div class="wrapper bg-white rounded-1 d-flex overflow-hidden">
    <img
      class="object-fit-cover process-img"
      :src="getImageUrl(picture)"
      :alt="`process-picture-${picture}`"
    />
    <div class="p-3 pb-2 p-sm-3 d-flex flex-column">
      <div class="fw-bold c-fs-16 c-text-dark2 process-title">{{ title }}</div>
      <span class="c-fn-num c-fs-14 text-secondary mb-2 process-date">{{
        formatDate(date)
      }}</span>
      <p class="d-none d-sm-block c-fs-14 text-secondary process-desc">
        {{ description }}
      </p>
      <a
        href="#"
        class="text-decoration-none c-fn-num c-fs-16 c-fs-lg-14 c-text-hover fw-bold process-link"
        >MORE</a
      >
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  border: 1px solid #e5e5e5;
}
.process-img {
  max-width: g-fn.rem(135px);
}
.process-title {
  letter-spacing: g-fn.rem(0.7px);
}
.process-date {
  letter-spacing: g-fn.rem(0.49px);
  line-height: g-fn.rem(24px);
}
.process-desc {
  letter-spacing: g-fn.rem(0.7px);
  line-height: g-fn.rem(20px);
  text-align: justify;
}
.process-link {
  letter-spacing: g-fn.rem(0.8px);
  line-height: g-fn.rem(28px);
}
@media screen and (min-width: 576px) {
  .process-img {
    max-width: g-fn.rem(220px);
  }
  .process-title {
    letter-spacing: g-fn.rem(0.8px);
  }
  .process-link {
    letter-spacing: g-fn.rem(0.7px);
    line-height: g-fn.rem(24px);
  }
}
</style>
