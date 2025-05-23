<script setup>
import PlanItem from './PlanItem.vue';
const { planData } = defineProps(['planData']);
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
