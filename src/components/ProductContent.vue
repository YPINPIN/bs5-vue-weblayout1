<script setup>
import ProductInfo from './ProductInfo.vue';
import ProductFaq from './ProductFaq.vue';
import ProductProcess from './ProductProcess.vue';
import ProductComment from './ProductComment.vue';
import ProductStore from './ProductStore.vue';
import ProductPlan from './ProductPlan.vue';
import ProductForm from './ProductForm.vue';
import dayjs from 'dayjs';
import { ref, onMounted, computed, provide } from 'vue';
import { useWindowSize, useWindowScroll } from '@vueuse/core';

const tabData = [
  {
    id: 'info',
    text: '專案介紹',
    component: ProductInfo,
  },
  {
    id: 'faq',
    text: '常見問答',
    component: ProductFaq,
  },
  {
    id: 'process',
    text: '目前進度',
    component: ProductProcess,
  },
  {
    id: 'comment',
    text: '留言',
    component: ProductComment,
  },
];

// create fake endTime
function setEndTime(endDays = 1) {
  let date = dayjs().add(endDays, 'day').toDate();
  return date;
}

const planData = [
  {
    id: 1,
    picture: 'plan_img',
    title: '買一送一，只有兩百組別錯過',
    description:
      '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
    price: 1600,
    buyCount: 88,
    limitCount: 200,
    endTime: setEndTime(2),
  },
  {
    id: 2,
    picture: 'plan_img',
    title: '買一送二，只有一百組別錯過',
    description:
      '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
    price: 1200,
    buyCount: 65,
    limitCount: 100,
    endTime: setEndTime(1),
  },
  {
    id: 3,
    picture: 'plan_img',
    title: '買一送三，只有五十組別錯過',
    description:
      '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
    price: 1000,
    buyCount: 45,
    limitCount: 50,
    endTime: setEndTime(1),
  },
];

// 獲取 tab 及 content 的 DOM 元素
const tabs = ref(null);
const contents = ref(null);
// 根據視窗大小決定表單顯示位置
const { width } = useWindowSize();
const isLg = computed(() => width.value >= 992);
// 紀錄表單資料狀態
const formData = ref({
  plan: '',
  name: '',
  phone: '',
  email: '',
  pay: 'card',
});
// 提供選擇專案 function 給後代組件使用
const selectPlan = (planId) => {
  // console.log('selectPlan: ', planId);
  formData.value.plan = planId;
};
provide('selectPlan', selectPlan);

onMounted(() => {
  // 控制切換 tab 時，滾動到最上方
  tabs.value.forEach((el, index) => {
    el.addEventListener('shown.bs.tab', (e) => {
      const content = contents.value[index];
      let targetOffset = content.offsetTop - e.target.offsetHeight;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    });
  });
});

// mobile btn 顯示控制
// 當前滾動位置
const { y } = useWindowScroll();
// 開啟位置元素
const startItem = ref(null);
// 關閉位置元素
const endItem = ref(null);
// 開啟 btn 時的滾動位置
const start = computed(() => {
  if (startItem.value) {
    const rect = startItem.value.getBoundingClientRect();
    return rect.top + y.value;
  }
  return 0;
});
// 關閉 btn 時的滾動位置，此處設置為專案選項的中間位置
const end = computed(() => {
  if (endItem.value) {
    const rect = endItem.value.getBoundingClientRect();
    return rect.bottom + y.value - (rect.bottom - rect.top) / 2;
  }
  return 0;
});
// 介於指定區域中才顯示 mobile btn
const showMobileBtn = computed(
  () => y.value > start.value && y.value < end.value
);
</script>

<template>
  <section class="product-content" ref="startItem">
    <div class="tab-wrapper bg-white sticky-top">
      <div class="container-md gx-0 gx-sm-4">
        <ul
          class="nav nav-underline c-fs-14 c-fs-md-16 justify-content-between justify-content-sm-start"
        >
          <li
            v-for="tab in tabData"
            :key="tab.id"
            class="nav-item me-0 me-sm-3"
            ref="tabs"
          >
            <button
              :class="['nav-link', { active: tab.id === 'info' }]"
              :id="`${tab.id}-tab`"
              data-bs-toggle="tab"
              :data-bs-target="`#${tab.id}-tab-pane`"
              role="tab"
            >
              {{ tab.text }}
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-md">
      <div class="row gx-3 gx-lg-4 gx-xl-5">
        <div class="col-12 col-lg-8">
          <div class="tab-content" id="myTabContent">
            <div
              v-for="tab in tabData"
              :key="tab.id"
              :class="[
                'tab-pane',
                'fade',
                { show: tab.id === 'info', active: tab.id === 'info' },
              ]"
              :id="`${tab.id}-tab-pane`"
              ref="contents"
              role="tabpanel"
              tabindex="0"
            >
              <component :is="tab.component"></component>
            </div>
          </div>
          <div v-if="isLg" class="d-none d-lg-block">
            <ProductForm
              :plan-data="planData"
              v-model:plan="formData.plan"
              v-model:name="formData.name"
              v-model:phone="formData.phone"
              v-model:email="formData.email"
              v-model:pay="formData.pay"
            />
          </div>
        </div>
        <div class="col-12 col-lg-4" ref="endItem">
          <div class="right-side">
            <ProductStore />
            <ProductPlan :plan-data="planData" />
          </div>
        </div>
        <div v-if="!isLg" class="col-12 d-lg-none">
          <ProductForm
            :plan-data="planData"
            v-model:plan="formData.plan"
            v-model:name="formData.name"
            v-model:phone="formData.phone"
            v-model:email="formData.email"
            v-model:pay="formData.pay"
          />
        </div>
      </div>
    </div>

    <!-- mobile btn -->
    <a
      v-show="showMobileBtn"
      href="#product-form"
      class="bottom-link sticky-bottom d-md-none btn btn-primary w-100 p-0 rounded-0 text-center text-dark fw-bold c-fs-16"
    >
      贊助專案
    </a>
  </section>
</template>

<style lang="scss" scoped>
.tab-wrapper {
  border: 1px solid #e8e8db;
}
.bottom-link {
  height: g-fn.rem(44px);
  line-height: g-fn.rem(44px);
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  letter-spacing: g-fn.rem(1.6px);
}
</style>
