<script setup>
import dayjs from 'dayjs';
const { id, username, picture, comment, reply, date } = defineProps({
  id: Number,
  username: String,
  picture: String,
  comment: String,
  reply: String,
  date: Date,
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
};

const formatDate = (date) => {
  return dayjs(date).format('YYYY年M月D日 HH:mm');
};
</script>

<template>
  <div class="comment-wrapper bg-white rounded-3 p-3">
    <div class="comment-header d-flex align-items-center">
      <img
        class="me-3 rounded-circle user-img"
        :src="getImageUrl(picture)"
        :alt="picture"
      />
      <div>
        <div class="comment-user fw-semibold c-fs-16 c-fs-sm-20 mb-0 mb-sm-1">
          {{ username }}
        </div>
        <div class="comment-date text-secondary c-fs-12 c-fs-sm-14 mb-1">
          {{ formatDate(date) }}
        </div>
      </div>
    </div>
    <div class="comment-text mt-2 mt-sm-3">{{ comment }}</div>
    <div
      v-if="reply !== undefined"
      class="reply-wrapper c-bg-product rounded-1 p-3 mt-2 mt-sm-3"
    >
      <div class="reply-user c-text-hover c-fs-12 c-fs-sm-14 mb-1">
        提案者回覆
      </div>
      <div class="reply-text">{{ reply }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.comment-wrapper {
  border: 1px solid #e5e5e5;
}
.user-img {
  max-width: g-fn.rem(50px);
}
.comment-user {
  letter-spacing: g-fn.rem(1.6px);
}
.comment-date {
  letter-spacing: g-fn.rem(1.71px);
  line-height: g-fn.rem(18px);
}
.comment-text,
.reply-text {
  color: #373a3c;
  letter-spacing: g-fn.rem(0.7px);
  text-align: justify;
}
.reply-user {
  letter-spacing: g-fn.rem(0.52px);
  text-align: justify;
  line-height: g-fn.rem(18px);
}

@media screen and (min-width: 576px) {
  .user-img {
    max-width: g-fn.rem(60px);
  }
  .comment-user {
    letter-spacing: g-fn.rem(2px);
  }
  .comment-date {
    letter-spacing: g-fn.rem(2px);
    line-height: g-fn.rem(20px);
  }
  .reply-user {
    letter-spacing: g-fn.rem(0.61px);
    line-height: g-fn.rem(20px);
  }
}
</style>
