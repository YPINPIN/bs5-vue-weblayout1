<script setup>
const faqData = [
  {
    id: 1,
    title: '影片拍完之後可以編輯嗎？',
    description:
      '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
  {
    id: 2,
    title: '有提供保固或維修服務嗎？',
    description:
      '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
  {
    id: 3,
    title: '補充包底片要去哪裡購買呢？',
    description:
      '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
  {
    id: 4,
    title: '印出來的拍立得照片需要充電嗎？',
    description:
      '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
  {
    id: 5,
    title: '運送方式及付款方式有哪些呢？',
    description:
      '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
  {
    id: 6,
    title: '退換貨方式及規則',
    description:
      '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
];
</script>

<template>
  <div class="py-3 py-lg-4">
    <div class="row my-3 my-lg-4">
      <div
        v-for="(faq, index) in faqData"
        :key="faq.id"
        :class="['col-12', { 'mb-3': index != faqData.length - 1 }]"
      >
        <div class="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                :class="['accordion-button', { collapsed: index !== 0 }]"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#faq-collapse-${faq.id}`"
              >
                <span
                  class="faq-header-icon bg-primary rounded-1 me-3 d-flex justify-content-center align-items-center fw-bold text-dark c-fs-14 c-fn-num"
                >
                  Q{{ faq.id }}
                </span>
                <span class="c-fs-16 c-fs-lg-14 faq-title">{{
                  faq.title
                }}</span>
              </button>
            </h2>
            <div
              :id="`faq-collapse-${faq.id}`"
              :class="['accordion-collapse', 'collapse', { show: index === 0 }]"
            >
              <div
                class="accordion-body c-fs-16 c-fs-lg-14 text-secondary faq-desc"
              >
                {{ faq.description }}
              </div>
            </div>
          </div>
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
