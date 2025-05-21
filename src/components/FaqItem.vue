<script setup>
const { id, title, description, isShow } = defineProps({
  id: Number,
  title: String,
  description: String,
  isShow: Boolean,
});
</script>

<template>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          :class="['accordion-button', { collapsed: !isShow }]"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#faq-collapse-${id}`"
        >
          <span
            class="faq-header-icon bg-primary rounded-1 me-3 d-flex justify-content-center align-items-center fw-bold text-dark c-fs-14 c-fn-num"
          >
            Q{{ id }}
          </span>
          <span class="c-fs-16 c-fs-lg-14 faq-title">{{ title }}</span>
        </button>
      </h2>
      <div
        :id="`faq-collapse-${id}`"
        :class="['accordion-collapse', 'collapse', { show: isShow }]"
      >
        <div class="accordion-body c-fs-16 c-fs-lg-14 text-secondary faq-desc">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.faq-header-icon {
  width: g-fn.rem(28px);
  height: g-fn.rem(28px);
  letter-spacing: 0.7px;
  line-height: g-fn.rem(24px);
}
.faq-title {
  letter-spacing: 0.8px;
}
.faq-desc {
  letter-spacing: g-fn.rem(0.8px);
  line-height: g-fn.rem(27px);
}

@media screen and (min-width: 992px) {
  .faq-title {
    letter-spacing: 0.7px;
  }
  .faq-desc {
    padding-left: g-fn.rem(64px);
    letter-spacing: g-fn.rem(0.7px);
  }
}
</style>
