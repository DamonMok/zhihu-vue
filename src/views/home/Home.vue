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

        <!-- 问题列表区域 -->
        <div class="topics">
          <div class="tabs-container">
            <ul class="tabs">
              <li class="tabs-item" v-for="(tab, index) in tabs" :class="{'tabs-item-active': currentTab==index}" :key="index"><em @click="tabsChanged(index)">{{ tab }}</em></li>
            </ul>
          </div>
        </div>
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
  data() {
    return {
      tabs: ['推荐', '关注', '热榜'],
      currentTab: 0
    }
  },
  methods: {
    // 点击切换【推荐、关注、热榜】Tabs
    tabsChanged(index) {
      this.currentTab = index
    }
  },
}
</script>

<style lang="less" scoped>
.main {
  width: 1032px;
  // height: 2000px;
  margin: 0 auto;
  margin-top: 10px;
  // background-color: #fbbbfb;

  .left-side {
    width: 694px;

    .top-card {
      margin-bottom: 10px;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
    }

    .topics {
      width: 100%;
      height: 2000px;
      // background-color: #b2b2b2;
      box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);

      .tabs-container {
        width: 100%;
        height: 59px;
        background-color: #fff;
        border-bottom: 1px solid #f0f2f7;

        .tabs-item {
          display: inline-block;
          margin-left: 22px;
          margin-right: 22px;
          font-size: 16px;
          font-weight: 600;
          color: #121212;
          line-height: 60px;

          em {
            cursor: pointer;
          }
        }

        .tabs-item-active {
          color: #0066ff;
        }
      }
    }
  }
}
</style>