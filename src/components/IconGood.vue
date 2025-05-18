<script setup>
import icon_url_1 from '@/assets/icons/icon_good01.svg';
import icon_url_2 from '@/assets/icons/icon_good02.svg';
import icon_url_3 from '@/assets/icons/icon_good03.svg';
import icon_url_4 from '@/assets/icons/icon_good04.svg';

const { num } = defineProps({
  num: Number,
});
</script>

<template>
  <template v-if="num === 1">
    <img class="icon-good icon-good-01" :src="icon_url_1" alt="icon_good_01" />
  </template>
  <template v-else-if="num === 2">
    <img class="icon-good icon-good-02" :src="icon_url_2" alt="icon_good_02" />
  </template>
  <template v-else-if="num === 3">
    <img class="icon-good icon-good-03" :src="icon_url_3" alt="icon_good_03" />
  </template>
  <template v-else-if="num === 4">
    <img class="icon-good icon-good-04" :src="icon_url_4" alt="icon_good_04" />
  </template>
</template>

<style lang="scss" scoped>
.icon-good {
  &-01 {
    width: g-fn.rem(20px);
    height: g-fn.rem(20px);
  }
  &-02 {
    width: g-fn.rem(21px);
    height: g-fn.rem(20px);
  }
  &-03 {
    width: g-fn.rem(18px);
    height: g-fn.rem(20px);
  }
  &-04 {
    width: g-fn.rem(20px);
    height: g-fn.rem(18px);
  }
}

@media screen and (min-width: 576px) {
  .icon-good {
    &-01 {
      width: g-fn.rem(24px);
      height: g-fn.rem(24px);
    }
    &-02 {
      width: g-fn.rem(25px);
      height: g-fn.rem(24px);
    }
    &-03 {
      width: g-fn.rem(20px);
      height: g-fn.rem(24px);
    }
    &-04 {
      width: g-fn.rem(24px);
      height: g-fn.rem(22px);
    }
  }
}

@media screen and (min-width: 992px) {
  .icon-good {
    cursor: pointer;
  }
}
</style>
