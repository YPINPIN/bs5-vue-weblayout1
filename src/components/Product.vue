<script setup>
import IconGood from '@/components/IconGood.vue';
import IconHeart from '@/components/IconHeart.vue';
import IconShare from '@/components/IconShare.vue';

const iconData = {
  1: {
    num: 1,
    title: '認證標章',
  },
  2: {
    num: 2,
    title: '品質保證',
  },
  3: {
    num: 3,
    title: '原生創意',
  },
  4: {
    num: 4,
    title: '人氣王',
  },
};
</script>

<template>
  <section class="product-wrapper c-bg-product">
    <div class="container-md">
      <div>
        <span class="badge bg-secondary">魔法科技</span>
        <h2
          class="fw-bold lh-base c-fs-24 c-fs-md-32 mt-2 mt-md-1 mb-3 mb-md-4 product-title"
        >
          拍出會動的照片｜LivePhotos 魔法拍立得
        </h2>
        <div class="row">
          <div class="col-12 col-lg-7">
            <img
              class="img-fluid rounded-5"
              src="@/assets/images/product_image.jpg"
              alt="product_image"
            />
          </div>
          <div class="col-12 col-lg-5">
            <div class="mt-3 mt-lg-0 mb-1">
              <span class="c-fn-num c-fs-14 text-dark lh-sm">
                目標 $600,000
              </span>
            </div>
            <span class="c-fn-num c-fs-32 c-text-dark2 progress-price"
              >$280,047</span
            >
            <div class="progress mb-1" role="progressbar">
              <div class="progress-bar" style="width: 41%">
                <span class="c-fn-num text-secondary progress-bar-text"
                  >41%</span
                >
              </div>
            </div>
            <div class="row mt-1 mt-lg-3">
              <div class="col">
                <span class="c-fs-14 text-dark lh-sm">贊助人數</span>
                <div class="c-fn-num fw-bold c-fs-32 text-dark2 mt-2">
                  1374<span class="c-fs-24 fw-bold"> 人</span>
                </div>
              </div>
              <div class="col">
                <span class="c-fs-14 text-dark lh-sm">募資倒數</span>
                <div class="c-fn-num fw-bold c-fs-32 text-dark2 mt-1">
                  27<span class="c-fs-24 fw-bold"> 天</span>
                </div>
              </div>
            </div>
            <div
              class="icon-wrapper mt-1 mt-lg-2 d-flex justify-content-between justify-content-lg-start align-items-center"
            >
              <template v-for="{ num, title } in iconData" :key="num">
                <div
                  class="icon-block d-none d-lg-flex justify-content-lg-between align-items-lg-center"
                >
                  <IconGood
                    :num="num"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    :data-bs-title="title"
                    data-bs-offset="0,11"
                    class="me-2 me-md-3 me-lg-0"
                  />
                </div>
                <div
                  class="icon-block d-lg-none d-flex justify-content-between align-items-center"
                >
                  <IconGood :num="num" class="me-2 me-md-3 me-lg-0" />
                  <span class="c-fs-12 c-fs-md-16 text-dark d-lg-none">{{
                    title
                  }}</span>
                </div>
              </template>
            </div>
            <div
              class="bg-white text-dark border-start border-3 border-primary rounded-start-1 rounded-end-3 d-flex flex-column mt-3 px-3 c-fs-14 c-fs-md-16 product-tip"
            >
              <span>專案募資中！</span>
              <span
                >在
                <span class="fw-bold">2021/06/14 23:59</span>
                募資結束前，您都可以贊助我們！</span
              >
            </div>
            <div class="row mt-3 mt-lg-4">
              <div class="col-12">
                <button class="btn btn-primary btn-lg w-100 c-fs-18 c-fs-md-20">
                  贊助專案
                </button>
              </div>
            </div>
            <div class="row mt-2 gx-0">
              <div class="col me-2">
                <button
                  class="btn btn-outline-secondary btn-lg w-100 d-flex justify-content-center align-items-center c-fs-18 c-fs-md-20"
                >
                  <IconHeart />追蹤專案
                </button>
              </div>
              <div class="col" style="max-width: 174px">
                <button
                  class="btn btn-outline-secondary btn-lg w-100 d-flex justify-content-center align-items-center c-fs-18 c-fs-md-20"
                >
                  <IconShare />分享
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-wrapper {
  padding-top: g-fn.rem(16px);
  padding-bottom: g-fn.rem(32px);
}
.product-title {
  letter-spacing: g-fn.rem(2.25px);
}
.progress-price {
  line-height: g-fn.rem(56px);
}
.progress-bar-text {
  margin-top: g-fn.rem(5px);
}
.product-tip {
  padding-top: g-fn.rem(14px);
  padding-bottom: g-fn.rem(14px);
}

@media screen and (min-width: 992px) {
  .product-wrapper {
    padding-top: g-fn.rem(45px);
    padding-bottom: g-fn.rem(45px);
  }
  .product-title {
    letter-spacing: g-fn.rem(3px);
  }
  .icon-block {
    margin-right: g-fn.rem(25px);
  }
}
</style>
