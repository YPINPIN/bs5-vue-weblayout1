<script setup>
import { onMounted, ref } from 'vue';
const { planData } = defineProps(['planData']);
const plan = defineModel('plan');
const name = defineModel('name');
const phone = defineModel('phone');
const email = defineModel('email');
const pay = defineModel('pay');

const form = ref(null);

onMounted(() => {
  form.value.addEventListener(
    'submit',
    (event) => {
      if (!form.value.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.value.classList.add('was-validated');
    },
    false
  );
});
</script>

<template>
  <div id="product-form">
    <div class="mb-2 mb-sm-1 text-center">
      <img src="../assets/icons/icon_heart.svg" alt="icon_heart" />
    </div>
    <div class="position-relative mb-3 mb-sm-4">
      <div
        class="progress w-100 position-absolute top-50 translate-y-middle z-n1"
        role="progressbar"
        style="height: 3px"
      >
        <div class="progress-bar bg-primary w-100"></div>
      </div>
      <div class="text-center">
        <span
          class="bg-white px-3 text-secondary fw-bold c-fs-20 c-fs-sm-24 c-text-dark2 form-title"
          >贊助專案</span
        >
      </div>
    </div>
    <form ref="form" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="plan" class="form-label c-fs-14 c-fs-sm-16">贊助方案</label>
        <select v-model="plan" class="form-select" id="plan" required>
          <option selected disabled value="">請選擇一個方案</option>
          <option v-for="data in planData" :key="data.id" :value="data.id">
            NT$ {{ data.price }}·{{ data.title }}
          </option>
        </select>
        <div class="invalid-feedback">請選擇一個贊助方案</div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label c-fs-14 c-fs-sm-16"
          >收件人姓名</label
        >
        <input
          v-model="name"
          type="text"
          class="form-control rounded-1"
          id="name"
          required
        />
        <div class="invalid-feedback">收件人姓名不可為空</div>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label c-fs-14 c-fs-sm-16"
          >連絡電話</label
        >
        <input
          v-model="phone"
          type="tel"
          id="phone"
          pattern="09[0-9]{8}"
          placeholder="09XXXXXXXX"
          class="form-control rounded-1"
          required
        />
        <div class="invalid-feedback">請輸入正確的電話格式</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label c-fs-14 c-fs-sm-16"
          >聯絡信箱</label
        >
        <input
          v-model="email"
          type="email"
          class="form-control rounded-1"
          id="email"
          required
        />
        <div class="invalid-feedback">請輸入正確的信箱格式</div>
      </div>
      <div class="mb-3">
        <label for="pay" class="form-label c-fs-14 c-fs-sm-16">付款方式</label>
        <select v-model="pay" class="form-select" id="pay" required>
          <option value="card" selected>信用卡付款</option>
          <option value="shop">超商付款</option>
          <option value="atm">ATM轉帳</option>
        </select>
      </div>
      <div class="mt-4 mb-5 text-center">
        <div class="d-block d-lg-inline-block">
          <button
            type="submit"
            class="btn btn-lg btn-primary c-fs-16 c-fs-sm-20 fw-bold px-5 w-100"
          >
            贊助專案
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.form-title {
  letter-spacing: g-fn.rem(1.6px);
}
label {
  color: #373a3c;
}

@media screen and (min-width: 576px) {
  .form-title {
    letter-spacing: g-fn.rem(1.92px);
  }
}
</style>
