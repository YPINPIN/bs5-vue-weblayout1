<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const {
  id,
  picture,
  title,
  description,
  price,
  buyCount,
  limitCount,
  endTime,
} = defineProps({
  id: Number,
  picture: String,
  title: String,
  description: String,
  price: Number,
  buyCount: Number,
  limitCount: Number,
  endTime: Date,
});

const limitTimeStr = ref('');

let timer = null;
const setCountdown = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  // 檢查是否超過時間
  if (!dayjs().isAfter(dayjs(endTime))) {
    timer = setTimeout(() => {
      limitTimeStr.value = diffTime(endTime);
      setCountdown();
    }, 1000);
  } else {
    limitTimeStr.value = '0 days 00:00:00';
  }
};
const diffTime = (time) => {
  let end = dayjs(time);
  // 計算相差的時間
  let diffNow = end.diff(dayjs(), 'second');
  // 格式化時間
  let durationTime = dayjs.duration(diffNow, 'seconds').format('HH:mm:ss');
  // 另外再獲取天數
  const days = end.diff(dayjs(), 'days');
  let timeStr = `${days} days ${durationTime}`;

  return timeStr;
};

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
};

// 倒數計時
setCountdown();
</script>

<template>
  <div class="card bg-white mb-3">
    <img :src="getImageUrl(picture)" class="card-img-top" :alt="`plan-${id}`" />

    <div class="card-body pt-0">
      <div
        class="time-wrapper pt-2 pb-1 text-dark c-fs-14 d-flex justify-content-between align-items-center"
      >
        <span class="limit-text">限時優惠</span>
        <span class="limit-time c-fn-num">{{ limitTimeStr }}</span>
      </div>
      <h5
        class="card-title mt-2 mb-1 c-text-dark2 c-fs-18 lh-base fw-bold plan-title"
      >
        {{ title }}
      </h5>
      <div class="fw-bold c-fn-num c-fs-24 c-text-dark2 plan-price">
        NT$ {{ price }}
      </div>
      <div>
        <span class="badge bg-buy-count text-secondary me-2"
          >已被贊助{{ buyCount }}次</span
        >
        <span class="badge bg-secondary"
          >限量<span class="text-primary">{{ limitCount }}</span
          >個</span
        >
      </div>
      <p class="card-text mt-2 text-secondary plan-desc">
        {{ description }}
      </p>
      <a href="#product-form" class="btn btn-primary w-100 py-2 plan-link"
        >贊助此專案</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.time-wrapper {
  border-bottom: 1px solid #e8e8db;
}
.limit-text {
  letter-spacing: g-fn.rem(2px);
}
.limit-time {
  line-height: g-fn.rem(24px);
}
.plan-title {
  letter-spacing: g-fn.rem(2px);
}
.plan-price {
  line-height: 1.4;
}
.bg-buy-count {
  background-color: #e8e8db;
}
.plan-desc {
  letter-spacing: g-fn.rem(0.7px);
  text-align: justify;
}
.plan-link {
  letter-spacing: g-fn.rem(1.1px);
}
</style>
