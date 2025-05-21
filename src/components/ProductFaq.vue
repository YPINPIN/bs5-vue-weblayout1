<script setup>
import FaqItem from './FaqItem.vue';

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
        <FaqItem v-bind="faq" :is-show="index === 0" />
      </div>
    </div>
  </div>
</template>
