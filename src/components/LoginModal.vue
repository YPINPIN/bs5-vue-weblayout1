<template>
  <div class="modal fade" id="loginModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="modal-content border-0 border-top border-primary border-4 rounded-top-1 rounded-bottom-3"
      >
        <div class="modal-header">
          <h1 class="modal-title c-fs-24 fw-bold">登入</h1>
          <button
            type="button"
            class="btn-close p-3"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <form action="/">
            <div class="mt-2">
              <label for="username" class="form-label">帳號</label>
              <input type="text" class="form-control rounded-1" id="username" />
            </div>
            <div class="mt-3">
              <label for="password" class="form-label">密碼</label>
              <input
                type="password"
                id="password"
                class="form-control rounded-1"
              />
            </div>
            <div class="mt-2">
              <a href="#" class="text-secondary c-fs-14 text-decoration-none"
                >忘記密碼？</a
              >
            </div>
            <div class="mt-3">
              <button
                type="button"
                class="btn btn-lg btn-primary c-fs-20 fw-bold w-100"
              >
                登入
              </button>
            </div>

            <div class="position-relative modal-register mb-4">
              <div class="progress" role="progressbar" style="height: 1px">
                <div class="progress-bar modal-divider w-100"></div>
              </div>

              <div
                class="position-absolute top-0 start-50 translate-middle bg-white px-3"
              >
                <span class="text-secondary c-fs-14">還沒有帳號？</span>
                <a href="#" class="c-text-hover c-fs-14 text-decoration-none">
                  註冊一個帳號</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$divider-color: #e8e8db;

.modal-header {
  padding-top: g-fn.rem(12px);
}
.modal-register {
  margin-top: g-fn.rem(57.5px);
  margin-bottom: g-fn.rem(41.5px);
}
.modal-divider {
  background-color: $divider-color;
}
</style>
