<script setup>
import IconFB from '@/components/IconFB.vue';
import IconYT from '@/components/IconYT.vue';
import IconComment from '@/components/IconComment.vue';
</script>

<template>
  <div
    class="store-wrapper mt-0 mt-lg-5 mb-3 bg-white border border-1 rounded-3 p-3"
  >
    <div class="d-flex align-items-center mb-3">
      <img
        class="store-img border border-3 border-primary rounded-circle me-3"
        src="../assets/images/store_img.jpg"
        alt="store-img"
      />
      <div>
        <p class="store-title fw-semibold c-fs-18 c-fs-lg-20 mb-2">
          缺錢事務所
        </p>
        <p class="store-status c-fs-14 c-fs-lg-16 m-0">
          已發起 <span class="fw-bold">1</span> 個專案
        </p>
      </div>
    </div>
    <p class="store-info mb-3 d-none d-lg-block">
      需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
    </p>
    <div class="action-wrapper d-flex justify-content-between">
      <div class="media-wrapper">
        <a href="#"
          ><IconFB class="media-icon bg-secondary p-2 me-2 rounded-circle"
        /></a>
        <a href="#"
          ><IconYT class="media-icon bg-secondary p-2 me-2 rounded-circle"
        /></a>
      </div>
      <button
        class="btn btn-outline-secondary btn-sm d-flex justify-content-center align-items-center c-fs-12"
      >
        <IconComment />聯絡我們
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.store-wrapper {
  border-color: #e5e5e5;
}
.store-img {
  width: g-fn.rem(70px);
}
.store-title {
  letter-spacing: g-fn.rem(1.8px);
}
.store-status {
  color: #373a3c;
  letter-spacing: g-fn.rem(0.61px);
}
.store-info {
  text-align: justify;
}
.media-icon {
  width: g-fn.rem(30px);
  height: g-fn.rem(30px);
  fill: white;
}

@media screen and (min-width: 992px) {
  .store-img {
    width: g-fn.rem(100px);
  }
  .store-title {
    letter-spacing: g-fn.rem(2px);
  }
  .store-status {
    letter-spacing: g-fn.rem(0.7px);
  }
}
</style>
