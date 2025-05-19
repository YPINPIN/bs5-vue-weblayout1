<script setup>
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
import ProductInfo from './components/ProductInfo.vue';
</script>

<template>
  <Navbar />
  <main>
    <Product />
    <section>
      <div class="tab-wrapper">
        <div class="container-md gx-0 gx-sm-4">
          <ul
            class="nav nav-underline c-fs-14 c-fs-md-16 justify-content-between justify-content-sm-start"
          >
            <li class="nav-item me-0 me-sm-3">
              <button
                class="nav-link active"
                id="info-tab"
                data-bs-toggle="tab"
                data-bs-target="#info-tab-pane"
                role="tab"
              >
                專案介紹
              </button>
            </li>
            <li class="nav-item me-0 me-sm-3">
              <button
                class="nav-link"
                id="faq-tab"
                data-bs-toggle="tab"
                data-bs-target="#faq-tab-pane"
                role="tab"
              >
                常見問答
              </button>
            </li>
            <li class="nav-item me-0 me-sm-3">
              <button
                class="nav-link"
                id="process-tab"
                data-bs-toggle="tab"
                data-bs-target="#process-tab-pane"
                role="tab"
              >
                目前進度
              </button>
            </li>
            <li class="nav-item me-0 me-sm-3">
              <button
                class="nav-link"
                id="comment-tab"
                data-bs-toggle="tab"
                data-bs-target="#comment-tab-pane"
                role="tab"
              >
                留言
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="container-md">
        <div class="row gx-3 gx-lg-5">
          <div class="col-12 col-lg-8">
            <div
              class="tab-content"
              id="myTabContent"
              style="min-height: 500px"
            >
              <div
                class="tab-pane fade show active"
                id="info-tab-pane"
                role="tabpanel"
                tabindex="0"
              >
                <ProductInfo />
              </div>
              <div
                class="tab-pane fade"
                id="faq-tab-pane"
                role="tabpanel"
                tabindex="0"
              >
                faq-tab-pane...
              </div>
              <div
                class="tab-pane fade"
                id="process-tab-pane"
                role="tabpanel"
                tabindex="0"
              >
                process-tab-pane...
              </div>
              <div
                class="tab-pane fade"
                id="comment-tab-pane"
                role="tabpanel"
                tabindex="0"
              >
                comment-tab-pane...
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">test</div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.tab-wrapper {
  border: 1px solid #e8e8db;
}
</style>
