<script setup>
import dayjs from 'dayjs';
import PlanItem from './PlanItem.vue';

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
</script>

<template>
  <div class="py-3">
    <div
      class="plan-header fw-bold c-fs-20 c-text-dark2 text-center c-bg-product border border-4 border-primary border-top-0 border-bottom-0 rounded-2 mb-3"
    >
      選擇一個方案來支持
    </div>
    <PlanItem v-for="data in planData" :key="data.id" v-bind="data" />
  </div>
</template>

<style lang="scss" scoped>
.plan-header {
  letter-spacing: g-fn.rem(2px);
  padding: g-fn.rem(6px);
}
</style>
