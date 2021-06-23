<template>
  <div>
    <!-- 导航栏 -->
    <Navigation></Navigation>

    <!-- 主体区域 -->
    <div class="main">
      <!-- 左边区域 -->
      <div class="left-side">
        <!-- 顶部卡片大图区域 -->
        <img class="top-card" src="https://pic2.zhimg.com/v2-fff33cded36aebe955c4806ae49e9d88.png" alt="">
      </div>

      <!-- 右边区域 -->
      <div class="right-side"></div>
    </div>
  </div>
</template>

<script>
import Navigation from 'components/contents/Navigation'

export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="less" scoped>
.main {
  width: 1032px;
  height: 2000px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #fbbbfb;

  .left-side {
    width: 697px;

    .top-card {
      margin-bottom: 10px;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
    }
  }
}
</style>