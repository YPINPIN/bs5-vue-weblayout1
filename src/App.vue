<script setup>
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
import ProductContent from './components/ProductContent.vue';
</script>

<template>
  <Navbar />
  <main>
    <Product />
    <ProductContent />
  </main>
  <footer
    class="c-bg-dark2 text-white d-flex justify-content-center align-items-center"
  >
    <div class="c-fs-14 c-fs-md-16">
      Copyright ©2025 拼拼 All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  height: g-fn.rem(54px);
  letter-spacing: g-fn.rem(0.18px);
}

@media screen and (min-width: 768px) {
  footer {
    height: g-fn.rem(88px);
    letter-spacing: 0.2px;
  }
}
</style>
