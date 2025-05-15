<template>
  <nav class="navbar navbar-expand-md navbar-border">
    <div class="container-md">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/logo.jpg" class="navbar-logo" alt="logo" />
      </a>
      <button
        class="navbar-toggler border-0 text-secondary"
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
            <button class="btn btn-primary btn-login">登入</button>
          </div>
          <div class="d-grid d-md-inline-block col">
            <button class="btn btn-outline-secondary btn-register">註冊</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-border {
  border: 1px solid #e8e8db;
  border-bottom: 5px solid var(--bs-primary);
}
.navbar-logo {
  width: g-fn.rem(111px);
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-toggler-icon {
  width: g-fn.rem(32px);
  height: g-fn.rem(32px);
}
.btn-login,
.btn-register {
  min-width: g-fn.rem(96px);
}
</style>
