<template>
  <div class="login">
    <!-- Logo区域 -->
    <img class="logo" src="~assets/img/login/logo.png" alt="" />

    <!-- 注册、登录区域 -->
    <div class="login-register">
      <!-- 注册、登录切换区域 -->
      <div class="login-register-tabs">
        <div class="type-tabs" :class="{ 'tab-active': isMessageLogin }" @click="changeLoginType('type-message')">
          登录
        </div>
        <div class="type-tabs register" :class="{ 'tab-active': !isMessageLogin }" @click="changeLoginType('type-password')">
          注册
        </div>
        <img class="qrcode" src="~assets/img/login/qrcode.png" alt="" />
      </div>
      <!-- 登录区域 -->
      <div class="login-area">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username" label-width="70px">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>

          <el-form-item class="password" label="密  码" prop="password" label-width="70px">
            <el-input v-model="loginForm.password" @focus="didClickedPasswordInput"></el-input>
            <div class="err-message" v-show="showErrorMsg">账号或密码错误</div>
          </el-form-item>

          <el-button class="login-btn" type="primary" @click="didClickedLoginBtn">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { requestLogin } from 'network/user.js'

export default {
  data() {
    return {
      isMessageLogin: true,
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      showErrorMsg: false
    };
  },
  methods: {
    changeLoginType(type) {
      this.isMessageLogin = type === "type-message" ? true : false;
    },
    // 点击登录
    didClickedLoginBtn() {
      this.$refs.loginForm.validate(async valid => {
        // 校验失败
        if (!valid) return console.log(2);

        // 校验成功，登录
        const { data: res } = await requestLogin(this.loginForm.username, this.loginForm.password)
        // 登录失败
        if (res.meta.status !== 200) return this.showErrorMsg = true

        // 登录成功
        // 1.保存token
        window.sessionStorage.setItem('token', res.data.token)

        // 2.跳转到首页
        this.$router.push({ name: 'Home' })
      })
    },
    // 密码输入框获得焦点
    didClickedPasswordInput() {
      this.showErrorMsg = false
    }
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

  .login-register {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 400px;
    background-color: #fff;

    .login-register-tabs {
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

    .login-area {
      width: 352px;
      margin-top: 24px;

      .password {
        margin-top: 12px;
      }

      .login-btn {
        margin-top: 24px;
        width: 352px;
      }

      .password {
        position: relative;
      }

      .err-message {
        position: absolute;
        top: 0;
        right: 6px;
        color: #f1403c;
        font-size: 14px;
      }
    }
  }
}
</style>