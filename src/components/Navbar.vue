<script setup>
import LoginModal from './LoginModal.vue';
</script>

<template>
  <nav
    class="navbar navbar-expand-md border-bottom border-5 border-primary py-1 py-md-2"
  >
    <div class="container-md">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/logo.jpg" class="navbar-logo" alt="logo" />
      </a>
      <button
        class="navbar-toggler border-0 p-0 text-secondary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-md-flex justify-content-between"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">關於</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">挖寶</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">我有個大膽的想法</a>
          </li>
        </ul>
        <div class="navbar-btns row gx-3 my-2 my-md-0">
          <div class="d-grid d-md-inline-block col">
            <button
              class="btn btn-primary btn-login"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              登入
            </button>
          </div>
          <div class="d-grid d-md-inline-block col">
            <button class="btn btn-outline-secondary btn-register">註冊</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Modal -->
  <Teleport to="body">
    <LoginModal />
  </Teleport>
</template>

<style lang="scss" scoped>
.navbar-logo {
  width: g-fn.rem(111px);
}
.navbar-toggler {
  &:focus {
    box-shadow: none;
  }
  &-icon {
    width: g-fn.rem(32px);
    height: g-fn.rem(32px);
  }
}
.btn-login,
.btn-register {
  min-width: g-fn.rem(96px);
}
</style>
