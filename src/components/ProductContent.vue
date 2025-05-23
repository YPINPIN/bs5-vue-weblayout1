<script setup>
import ProductInfo from './ProductInfo.vue';
import ProductFaq from './ProductFaq.vue';
import ProductProcess from './ProductProcess.vue';
import ProductComment from './ProductComment.vue';
import ProductStore from './ProductStore.vue';
import ProductPlan from './ProductPlan.vue';
import ProductForm from './ProductForm.vue';
import { ref, onMounted, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

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

// 獲取 tab 及 content 的 DOM 元素
const tabs = ref(null);
const contents = ref(null);
// 根據視窗大小決定表單顯示位置
const { width } = useWindowSize();
const isLg = computed(() => width.value >= 992);

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
</script>

<template>
  <section class="product-content">
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
            <ProductForm />
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="right-side">
            <ProductStore />
            <ProductPlan />
          </div>
        </div>
        <div v-if="!isLg" class="col-12 d-lg-none">
          <ProductForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tab-wrapper {
  border: 1px solid #e8e8db;
}
</style>
