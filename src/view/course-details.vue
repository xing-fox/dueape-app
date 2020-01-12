<template>
  <div>
    <div :class="['header',{xheader: isIosX}]" ref="header">
      <common-title
        v-if="!adStatus"
        :isIosX="isIosX"
        :Opacity="opacity"
        :isFixed="true"
        :normal="false"
        name="课程详情" />
      <div class="main">
        <div class="m-title">COPM2511期末提分班-3节课秒解必考题（共3期·6h）</div>
        <div class="m-times">12月13日-2020年1月15日 | 3次课</div>
        <div class="m-price">120
          <span>140</span>
        </div>
        <div class="m-has">5人已报名</div>
      </div>
      <div class="ad" v-if="adStatus">
        <img src="../assets/icon/logo.jpg">
        <div class="ad-content">
          <div class="content-download">下载DueApp APP</div>
          <span>让自己开启“人生外挂”之旅</span>
        </div>
        <div class="choise-course">
          <span>立即选课</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="data">
        <div class="list" @click="RouterView(0)">课程资料</div>
        <div class="list" @click="RouterView(1)">离线课程</div>
      </div>
      <div class="title">课程大纲</div>
      <div class="item bor-b">
        <div class="i-list">1</div>
        <div class="i-main">
          <div class="m-title">万能公式解决一切英文句子</div>
          <div class="m-time">12月13日 11:30-13:30 | 已结束</div>
          <div class="m-list bor-l">
            <div class="list-item">21:30-21:40 核心课</div>
            <div class="list-item">21:40-22:00 答疑</div>
          </div>
        </div>
      </div>
      <div class="item bor-b">
        <div class="i-list">2</div>
        <div class="i-main">
          <div class="m-title">万能公式解决一切英文句子</div>
          <div class="m-time">12月13日 11:30-13:30 | 已结束</div>
          <div class="m-list bor-l">
            <div class="list-item">21:30-21:40 核心课</div>
            <div class="list-item">21:40-22:00 答疑</div>
          </div>
        </div>
        <div class="join-course" @click="RouterView(2)">进入教室</div>
      </div>
      <div class="item bor-b">
        <div class="i-list">3</div>
        <div class="i-main">
          <div class="m-title">万能公式解决一切英文句子</div>
          <div class="m-time">12月13日 11:30-13:30 | 已结束</div>
          <div class="m-list bor-l">
            <div class="list-item">21:30-21:40 核心课</div>
            <div class="list-item">21:40-22:00 答疑</div>
          </div>
        </div>
        <div class="playback" @click="RouterView(3)">
          <span>看回放</span>
          <i></i>
        </div>
      </div>
      <div class="title t-height">老师介绍</div>
      <div class="teacher">
        <div class="t-image">
          <img src="../assets/img/photo.jpg">
        </div>
        <div class="t-details">
          <div class="details-name">Tracy</div>
          <div class="details-item">
            <span>·</span>
            <span class="item-intro">特拉华州州立大学工商管理硕士。</span>
          </div>
          <div class="details-item">
            <span>·</span>
            <span class="item-intro">曾在中英国际学院担任商务学、金融学、会计学专业教师，擅长在展示方程的实际方面和用法，比较重视学生解题背后的过程和概念。</span>
          </div>
        </div>
      </div>
      <div class="title t-height">购课须知</div>
      <div class="notice">
        <div class="notice-list">1</div>
        <div class="notice-main">
          <div class="notice-main-title">课节说明</div>
          <div class="notice-main-intro">
            <span>直播课：</span>
            <span>课程按照开课时间准时开课，请大家准时进 教室上课在视频上线后可在我的课程内查看。</span>
          </div>
          <div class="notice-main-intro">
            <span>视频课：</span>
            <span>课程按照开课时间准时开课，请大家准时进 教室上课。 视频课：在视频上线后可在我的课程内查看。</span>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-list">2</div>
        <div class="notice-main">
          <div class="notice-main-title">课节说明</div>
          <div class="notice-main-intro">
            <span>直播课：</span>
            <span>课程按照开课时间准时开课，请大家准时进 教室上课在视频上线后可在我的课程内查看。</span>
          </div>
          <div class="notice-main-intro">
            <span>视频课：</span>
            <span>课程按照开课时间准时开课，请大家准时进 教室上课在视频上线后可在我的课程内查看。</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div :class="['wx', {xfooter: isIosX}]" @click="status=true">
        <i class="share"></i>
        <div>分享课程</div>
      </div>
      <div :class="['share', {xfooter: isIosX}]" @click="status=true">
        <i class="wx"></i>
        <div>班主任微信</div>
      </div>
      <div :class="['app', {xfooter: isIosX}]">立即报名</div>
    </div>
    <ewm-modal v-if="status" @cancel="status=false"></ewm-modal>
  </div>
</template>

<script>
import CommonTitle from "@/components/common-title"
import EwmModal from "@/components/ewm"
export default {
  name: "courseDetails",
  data () {
    return {
      status: false, // 二维码状态
      adStatus: false,
      isIosX: false, // 判断ios机型
      footStatus: false,
      opacity: "rgba(41, 44, 50, 0)"
    }
  },
  components: {
    CommonTitle,
    EwmModal
  },
  methods: {
    RouterView (param) {
      this.$JsBridge.GetIosMethods(bridge => {
        bridge.callHandler('RouteView', {
          type: param,
          url: ''
        }, response => {})
      })
    }
  },
  mounted() {
    window.title = '课程详情'
    // header滚动监听
    const self = this
    const HeaHeight = this.$refs.header.clientHeight
    window.onscroll = function() {
      if (window.scrollY > HeaHeight) self.opacity = `rgba(41, 44, 50, 1)`
      if (window.scrollY < HeaHeight)
        self.opacity = `rgba(41, 44, 50, ${window.scrollY / HeaHeight})`
    };
    // ios兼容
    if (this.$formValue === 0) this.adStatus = true
    if (
      (this.$formValue === 1) &&
      (this.$isIos &&
        (window.screen.height === 812 && window.screen.width === 375)) ||
      (window.screen.height === 896 && window.screen.width === 414())
    )
      this.isIosX = true
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  padding: 1.28rem 0 0 0;
  background-image: url("../assets/img/bg_course.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  &.xheader {
    padding: 1.72rem 0 0 0;
  }
  .main {
    padding: 0.4rem 0.33rem 0.9rem;
    .m-title {
      color: #eac397;
      font-size: 0.38rem;
      font-weight: 500;
      line-height: 0.46rem;
      margin: 0 0 0.28rem 0;
    }
    .m-times {
      color: #cdcdcd;
      font-size: 0.28rem;
      line-height: 0.32rem;
      margin: 0 0 0.26rem 0;
    }
    .m-price {
      color: #ddaf7b;
      font-size: 0.36rem;
      font-weight: bold;
      line-height: 0.44rem;
      margin: 0 0 0.2rem 0;
      span {
        color: #cccccc;
        font-size: 0.26rem;
        font-weight: normal;
        margin: 0 0 0 0.15rem;
        text-decoration: line-through;
      }
    }
    .m-has {
      color: #989898;
      font-size: 0.22rem;
    }
  }
  .ad {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.1rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    background: #ebc486;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    img {
      width: 0.76rem;
      height: 0.76rem;
    }
    .ad-content {
      color: #292c32;
      flex: 1;
      margin: 0 0 0 0.3rem;
      .content-download {
        font-size: 0.28rem;
        font-weight: bold;
        line-height: 0.44rem;
      }
    }
    .choise-course {
      display: flex;
      align-items: center;
      width: 1.66rem;
      height: 0.62rem;
      padding: 0.02rem;
      border-radius: 0.1rem;
      border: 1px solid #292c32;
      box-sizing: border-box;
      span {
        color: #ebc486;
        font-size: 0.26rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 0.1rem;
        background: #292c32;
      }
    }
  }
}
.content {
  padding: 0 0.3rem 1.3rem;
  margin: -0.2rem 0 0 0;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  background: #fff;
  position: relative;
  .data {
    display: flex;
    justify-content: space-between;
    height: .8rem;
    padding: .3rem 0 0 0;
    .list {
      color: #222;
      font-size: .3rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      width: 3.34rem;
      height: .8rem;
      padding: 0 0 0 .27rem;
      box-sizing: border-box;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      &:first-child {
        background-image: url('../assets/img/data_1.png');
      }
      &:last-child {
        background-image: url('../assets/img/data_2.png');
      }
    }
  }
  .title {
    color: #222;
    font-size: 0.36rem;
    font-weight: bold;
    margin: 0 0 0.15rem 0;
    padding: .68rem 0 0 0;
    &.t-height {
      padding: 0.77rem 0 0 0;
    }
  }
  .item {
    display: flex;
    padding: 0.4rem 0;
    position: relative;
    .i-list {
      color: #c39d56;
      font-size: 0.3rem;
      width: 0.42rem;
      height: 0.42rem;
      line-height: 0.42rem;
      margin: 0.05rem 0 0 0;
      text-align: center;
      border-radius: 0.2rem;
      background: #fbf7ee;
    }
    .i-main {
      margin: 0 0 0 0.2rem;
      .m-title {
        color: #2d2d2d;
        font-size: 0.3rem;
      }
      .m-time {
        color: #666;
        font-size: 0.26rem;
        line-height: 0.28rem;
        margin: 0.25rem 0 0.45rem 0;
      }
      .m-list {
        padding: 0 0 0 0.15rem;
        position: relative;
        .list-item {
          color: #666;
          font-size: 0.26rem;
          margin: 0 0 0.25rem 0;
          &:nth-last-child(1) {
            margin: 0;
          }
        }
      }
    }
    .playback {
      color: #C39D56;
      font-size: .26rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      right: 0;
      bottom: .4rem;
      i {
        display: inline-block;
        width: .3rem;
        height: .3rem;
        background-image: url('../assets/icon/right.png');
        background-size: 70% 70%;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
    .join-course {
      color: #323234;
      font-size: .26rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.8rem;
      height: .66rem;
      border-radius: .33rem;
      background: linear-gradient(90deg,rgba(241, 209, 157, 1), rgba(232, 187, 120, 1));
      position: absolute;
      right: 0;
      bottom: .4rem;
    }
  }
  .teacher {
    display: flex;
    padding: 0.3rem 0 0 0;
    .t-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.06rem;
      height: 1.06rem;
      border-radius: 50%;
      position: relative;
      &:before {
        content: "";
        width: 200%;
        height: 200%;
        transform: scale(0.5, 0.5);
        transform-origin: 0 50%;
        border: 1px solid #dcaf55;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto auto;
        z-index: 1;
      }
      img {
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .t-details {
      flex: 1;
      margin: 0 0 0 0.3rem;
      .details-name {
        color: #bfa065;
        font-size: 0.32rem;
        margin: 0 0 0.1rem 0;
      }
      .details-item {
        color: #666;
        font-size: 0.26rem;
        display: flex;
        line-height: 0.38rem;
        span.item-intro {
          margin: 0 0 0 0.1rem;
        }
      }
    }
  }
  .notice {
    display: flex;
    padding: 0.4rem 0 0 0;
    position: relative;
    .notice-list {
      color: #c39d56;
      font-size: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0.42rem;
      height: 0.42rem;
      background: #fbf7ee;
      border-radius: 50%;
    }
    .notice-main {
      flex: 1;
      margin: 0 0 0 0.3rem;
      .notice-main-title {
        color: #2d2d2d;
        font-size: 0.3rem;
        font-weight: bold;
        height: 0.4rem;
        margin: 0 0 0.15rem 0;
      }
      .notice-main-intro {
        color: #666;
        font-size: 0.26rem;
        line-height: 0.38rem;
        margin: 0 0 0.1rem 0;
      }
    }
  }
}
.footer {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  .share,
  .wx {
    color: #e5c175;
    font-size: 0.24rem;
    width: 1.8rem;
    line-height: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #2f3245;
    &.xfooter {
      padding: 0 0 0.68rem 0;
    }
    i {
      display: inline-block;
      width: 0.44rem;
      height: 0.44rem;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      &.wx {
        background-image: url("../assets/icon/wx.png");
      }
      &.share {
        background-image: url("../assets/icon/share.png");
      }
    }
    div {
      display: inline-block;
      line-height: 0.24rem;
      margin: 0.07rem 0 0 0;
    }
  }
  .app {
    color: #323546;
    font-size: 0.36rem;
    font-weight: bold;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.1rem;
    background: #e5c175;
    &.xfooter {
      padding: 0 0 0.68rem 0;
    }
  }
}
</style>
