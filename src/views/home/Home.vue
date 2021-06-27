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
        <div class="topics-container">
          <!-- 推荐、关注、热榜Tabs切换区域 -->
          <div class="tabs-container">
            <ul class="tabs">
              <li class="tabs-item" v-for="(tab, index) in tabs" :class="{'tabs-item-active': currentTab==index}" :key="index"><em @click="tabsChanged(index)">{{ tab }}</em></li>
            </ul>
          </div>

          <!-- 问题 -->
          <div class="topices" v-for="(question, index) in data" :key=index>
            <!-- 标题 -->
            <span class="title">{{ index }} 去除内脏脂肪，跑步是不是最好的方法？</span>

            <!-- 描述 -->
            <span class="desc">我之前有个很恐怖的想法，其实长平之战打到最后，秦赵两国已经不关心输赢了，继续打下去只会把双方都拖垮，所以我们都选择换将，换激进派的将领，要结束这场战争。
              <span class="read-more">阅读全文</span>
              <img class="arrow" src="~assets/img/home/arrow.png" alt="">
            </span>

            <!-- 底部操作区域 -->
            <div class="actions">
              <!-- 赞同/不赞同区域 -->
              <div class="vote">
                <!-- 赞同 -->
                <span class="agree">赞同 421</span>

                <!-- 不赞同 -->
                <span class="disagree"></span>
              </div>

              <!-- 评论 -->
              <span class="comments action-items">17 条评论</span>

              <!-- 分享 -->
              <span class="share action-items">分享</span>

              <!-- 收藏 -->
              <span class="collect action-items">收藏</span>

              <!-- 喜欢 -->
              <span class="like action-items">喜欢</span>

              <!-- 更多 -->
              <img class="more action-items" src="~assets/img/home/more.png" alt="">
            </div>
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
      currentTab: 0,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  margin: 0 auto;
  margin-top: 10px;
  // background-color: #fbbbfb;

  .left-side {
    width: 694px;
    padding-bottom: 20px;

    .top-card {
      margin-bottom: 10px;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
    }

    .topics-container {
      width: 100%;
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

      .topices {
        margin: 0 auto;
        padding: 20px 20px 10px 20px;
        border-bottom: 1px solid #f0f2f7;

        .title {
          display: block;
          color: #121212;
          font-size: 18px;
          font-weight: 600;
        }

        .desc {
          display: inline-block;
          color: #181818;
          font-size: 15px;
          margin-top: 9px;
          line-height: 25px;
          white-space: normal;
          word-wrap: break-word;
          cursor: pointer;

          .read-more {
            color: #165199;
          }

          .arrow {
            width: 16px;
            height: 16px;
            margin-top: -2px;
            margin-left: 2px;
          }
        }

        .desc:hover {
          color: #666;
        }

        .actions {
          // background-color: green;
          height: 52px;
          padding: 10px 0;

          .vote {
            display: inline-block;
            color: #0066ff;

            .agree {
              display: inline-block;
              line-height: 30px;
              background-color: #e7f0ff;
              font-size: 14px;
              padding: 0 12px;
              border: 1px solid #e7f0ff;
              border-radius: 2px;
            }

            .agree::before {
              content: url("~assets/img/home/top-arrow.png");
              vertical-align: middle;
              line-height: normal;
              margin-right: 4px;
            }

            .disagree {
              display: inline-block;
              margin-left: 4px;
              line-height: 30px;
              background-color: #e7f0ff;
              font-size: 14px;
              padding: 0 6px;
              border: 1px solid #e7f0ff;
              border-radius: 2px;
            }

            .disagree::before {
              content: url("~assets/img/home/bottom-arrow.png");
              vertical-align: middle;
              line-height: normal;
            }
          }

          .action-items {
            display: inline-block;
            color: #8691a6;
            font-size: 14px;
            margin-left: 24px;
            cursor: pointer;
          }

          .more {
            width: 16px;
            height: 16px;
            margin-top: -5px;
          }
        }
      }
    }
  }
}
</style>