<template>
  <div class="login">
    <!-- Logo区域 -->
    <img class="logo" src="~assets/img/login/logo.png" alt="" />

    <!-- 登录区域 -->
    <div class="login-container">
      <!-- 登录方式切换区域 -->
      <div class="login-tabs">
        <div
          class="type-tabs message-login"
          :class="{ 'tab-active': isMessageLogin }"
          @click="changeLoginType('type-message')"
        >
          免密码登录
        </div>
        <div
          class="type-tabs password-login"
          :class="{ 'tab-active': !isMessageLogin }"
          @click="changeLoginType('type-password')"
        >
          密码登录
        </div>
        <img class="qrcode" src="~assets/img/login/qrcode.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMessageLogin: true,
    };
  },
  methods: {
    changeLoginType(type) {
      this.isMessageLogin = type === "type-message" ? true : false;
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;

  // width: 100%;
  height: 100%;
  background-image: url("~assets/img/login/login_bg.png");
  background-size: cover;
  background-color: #b9e5f8;

  .logo {
    width: 128px;
    height: 81px;
    margin: 34px 0 24px 0;
  }

  .login-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 400px;
    height: 496px;
    background-color: #fff;

    .login-tabs {
      display: flex;
      width: 352px;
      height: 60px;

      .type-tabs {
        margin-right: 24px;
        font-size: 16px;
        line-height: 60px;
        color: #444;
        height: 60px;
        font-weight: bold;

        cursor: pointer;
      }

      .tab-active {
        color: #121212;
        font-weight: 600;
        border-bottom: 3px solid #0066ff;
      }

      .qrcode {
        position: absolute;
        right: 0;
        top: 0;
        width: 52px;
        height: 52px;
      }
    }
  }
}
</style>