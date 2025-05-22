<script setup>
import CommentItem from './CommentItem.vue';
const commentData = [
  {
    id: 1,
    username: '廖小杰',
    picture: 'user_img01',
    comment:
      '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
    reply: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿',
    date: new Date(),
  },
  {
    id: 2,
    username: '卡阿伯',
    picture: 'user_img02',
    comment: '希望有更多花色可以選擇！我女兒最近喜歡綠色',
    date: new Date(),
  },
  {
    id: 3,
    username: '賈師',
    picture: 'user_img02',
    comment: '可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣',
    date: new Date(),
  },
  {
    id: 4,
    username: '俊俊',
    picture: 'user_img02',
    comment: 'test123 看一下我是不是真的可以留言',
    date: new Date(),
  },
];
</script>

<template>
  <div class="py-3 py-lg-4">
    <div class="row my-3 my-lg-4">
      <div class="col-12">
        <div
          class="d-none d-lg-block c-text-dark2 border-start border-3 border-primary rounded-1 p-3 c-fs-14 comment-tip"
        >
          只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<a
            href="#"
            class="c-text-hover text-decoration-none c-fs-14"
            >聯絡提案人</a
          >！
        </div>
      </div>

      <div
        v-for="(data, index) in commentData"
        :key="data.id"
        :class="['col-12', { 'mb-3': index != commentData.length - 1 }]"
      >
        <CommentItem v-bind="data" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-tip {
  background-color: #fefefe;
  line-height: g-fn.rem(20px);
  letter-spacing: g-fn.rem(0.7px);
  text-align: justify;
  margin-bottom: g-fn.rem(32px);
}
</style>
