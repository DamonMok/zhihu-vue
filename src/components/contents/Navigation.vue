<template>
  <div class="navigation-bar">
    <!-- logo -->
    <img class="logo" src="~assets/img/home/logo_home.png" alt="">

    <!-- tabs -->
    <ul class="tabs">
      <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': currentIndex==index }" @click="tabsChanged(index)"><em>{{ tab }}</em></li>
    </ul>

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
  background-color: yellow;
  display: flex;
  align-items: center;
  width: auto;
  max-width: 1156px;
  min-width: 1000px;
  padding-left: 16px;
  padding-right: 30px;
  height: 52px;
  margin: 0 auto;

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
}
</style>