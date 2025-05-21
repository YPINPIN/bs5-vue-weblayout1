<script setup>
import ProcessItem from './ProcessItem.vue';

const processData = [
  {
    id: 1,
    title: '高雄體驗會｜免費參加送帆布袋',
    description:
      '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    picture: 'news01',
    date: new Date(),
  },
  {
    id: 2,
    title: '台北體驗會｜免費參加送帆布袋',
    description:
      '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    picture: 'news02',
    date: new Date(),
  },
  {
    id: 3,
    title: '台中體驗會｜免費參加送帆布袋',
    description:
      '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    picture: 'news03',
    date: new Date(),
  },
];
</script>

<template>
  <div class="py-3 py-lg-4">
    <div class="row my-3 my-lg-4">
      <div
        v-for="(data, index) in processData"
        :key="data.id"
        :class="['col-12', { 'mb-3': index != processData.length - 1 }]"
      >
        <ProcessItem v-bind="data" />
      </div>
    </div>
  </div>
</template>
