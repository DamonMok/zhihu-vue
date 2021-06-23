<template>
  <div class="navigation-bar">
    <!-- logo -->
    <img class="logo" src="~assets/img/home/logo_home.png" alt="">

    <!-- tabs -->
    <ul class="tabs">
      <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': currentIndex==index }" @click="tabsChanged(index)"><em>{{ tab }}</em></li>
    </ul>

    <!-- 搜索栏 -->
    <div class="search">
      <div class="search-bar">
        <!-- 搜索框 -->
        <div class="search-wrapper">
          <input class="search-input" type="text" maxlength="100" placeholder="为什么越来越多人买羊奶" value="">
          <img class="search-icon" src="~assets/img/home/search.png">
        </div>
        <!-- 提问 -->
        <button class="ask-btn">提问</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['首页', '会员', '发现', '等你来答'],
      currentIndex: 0,
    }
  },
  methods: {
    tabsChanged(index) {
      this.currentIndex = index
    }
  },
}
</script>

<style lang="less" scoped>
.navigation-bar {
  // background-color: yellow;
  display: flex;
  align-items: center;
  width: auto;
  max-width: 1156px;
  min-width: 1000px;
  padding-left: 16px;
  padding-right: 30px;
  height: 52px;
  margin: 0 auto;
  // box-shadow: 10px 10px 5px #888888;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);

  .logo {
    width: 64px;
    height: 33px;
  }

  .tabs {
    // display: flex;
    // justify-content: space-around;
    // width: 270px;
    height: 50px;
    margin-left: 25px;
    margin-right: 15px;
    font-size: 16px;
    line-height: 50px;
  }

  .tabs li {
    display: inline-block;
    padding: 0 14px;
    font-weight: 500;
    color: #8590a6;
  }

  .tabs li em {
    cursor: pointer;
  }

  .tabs .is-active {
    color: #444;
    font-weight: 600;
  }

  .search {
    // background-color: purple;
    width: 598px;
    height: 34px;

    .search-bar {
      // background-color: green;
      display: flex;
      width: 482px;
      height: 34px;
      margin: 0 auto;

      .search-wrapper {
        background-color: #f6f6f6;
        position: relative;
        width: 400px;
        height: 34px;
        border: 1px solid #ebebeb;
        border-radius: 20px;
        box-sizing: border-box;

        .search-input {
          // background-color: green;
          width: 326px;
          height: 24px;
          font-size: 14px;
          margin-left: 16px;
          margin-top: 5px;
          border: none;
          background-color: inherit;
          font-weight: 500;
          letter-spacing: normal;
        }

        .search-icon {
          position: absolute;
          right: 12px;
          top: 4px;
          width: 26px;
          height: 26px;
        }
      }

      .ask-btn {
        background-color: #06f;
        width: 70px;
        height: 34px;
        margin-left: 12px;
        color: #fff;
        font-weight: 600;
        border-radius: 20px;
        border-color: #06f;
        border: 1px solid;
        box-sizing: border-box;
      }
    }
  }
}
</style>