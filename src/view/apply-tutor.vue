<style lang="less" scoped>
  .wrapper {
    font-size: 0;
    width: 100%;
    min-height: 100vh;
    line-height: 1;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 105vw;
      background-image: url('../assets/img/tutor.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .content {
      padding: 1.68rem 0 .5rem;
      &.xcontent {
        padding: 2.08rem 0 .5rem;
      }
      .header {
        margin: 0 .3rem;
        padding: .4rem .3rem .48rem;
        background: #fff;
        border-radius: .1rem;
        .image {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          img {
            width: 1.12rem;
            height: 1.12rem;
          }
          div {
            color: #222;
            font-size: .3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.7rem;
            height: .66rem;
            margin: 0 0 0 .28rem;
            box-sizing: border-box;
            position: relative;
            &:before {
              content: '';
              width: 200%;
              height: 200%;
              border-radius: .16rem;
              border: 1px solid rgba(215, 215, 215, 1);
              transform: scale(.5, .5);
              transform-origin: 0 0;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }
          }
        }
        .name {
          color: #222;
          font-size: .34rem;
          div.input {
            display: flex;
            align-items: center;
            width: 100%;
            height: .76rem;
            padding: .03rem;
            margin: .24rem 0 0 0;
            position: relative;
            &:before {
              content: '';
              width: 200%;
              height: 200%;
              border-radius: .12rem;
              border: 1px solid rgba(202, 202, 202, 1);
              transform: scale(.5, .5);
              transform-origin: 0 0;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 1;
            }
            input {
              border: none;
              -webkit-appearance: none;
              color: #CDA34F;
              font-size: .3rem;
              width: 100%;
              height: .7rem;
              padding: 0 0 0 .1rem;
              box-sizing: border-box;
              position: relative;
              z-index: 2;
            }
          }
        }
      }
      .main {
        margin: .3rem .3rem;
        padding: .6rem 0 .45rem;
        border-radius: .1rem;
        border: 1px;
        background: #fff;
        position: relative;
        &:before {
          content: '';
          width: 200%;
          height: 200%;
          border-radius: .2rem;
          border: 1px solid rgba(245, 234, 218, 1);
          transform: scale(.5, .5);
          transform-origin: 0 0;
          position: absolute;
          top: 0;
          left: -.01rem;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        .select {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 .6rem 0;
          li {
            display: flex;
            align-items: center;
            &:first-child {
              margin: 0 1rem 0 0;
            }
            div {
              width: .3rem;
              height: .3rem;
              margin: 0 .1rem 0 0;
              border: 1px solid rgba(191, 191, 191, 1);
              border-radius: .15rem;
              box-sizing: border-box;
              &.active {
                border-color: #CDA34F;
                position: relative;
                &:before {
                  content: '';
                  width: .15rem;
                  height: .15rem;
                  border-radius: 50%;
                  background: #CDA34F;
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto auto;
                }
              }
            }
            span {
              font-size: .34rem;
            }
          }
        }
        .box {
          margin: 0 .3rem;
          &:last-child {
            .input {
              margin: .24rem 0 0 0;
            }
          }
          .name {
            color: #222;
            font-size: .34rem;
            margin: 0 0 .25rem 0;
          }
          .input {
            display: flex;
            align-items: center;
            width: 100%;
            height: .76rem;
            margin: .24rem 0 .5rem 0;
            padding: .03rem;
            border: 1px solid #fff;
            box-sizing: content-box;
            position: relative;
            &:before {
              content: '';
              width: 200%;
              height: 200%;
              border-radius: .12rem;
              border: 1px solid rgba(202, 202, 202, 1);
              transform: scale(.5, .5);
              transform-origin: 0 0;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }
            input {
              border: none;
              -webkit-appearance: none;
              color: #CDA34F;
              font-size: .3rem;
              width: 100%;
              height: .7rem;
              padding: 0 0 0 .1rem;
              box-sizing: border-box;
              position: relative;
              z-index: 2;
            }
          }
          .textarea {
            display: flex;
            width: 100%;
            height: 2rem;
            padding: .03rem;
            margin: .24rem 0 .5rem 0;
            position: relative;
            &:before {
              content: '';
              width: 200%;
              height: 200%;
              border-radius: .12rem;
              border: 1px solid rgba(202, 202, 202, 1);
              transform: scale(.5, .5);
              transform-origin: 0 0;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 1;
            }
            textarea {
              border: none;
              -webkit-appearance: none;
              color: #CDA34F;
              font-size: .3rem;
              width: 100%;
              line-height: .4rem;
              padding: .1rem;
              box-sizing: border-box;
              position: relative;
              z-index: 2;
            }
            span {
              color: #999;
              font-size: .24rem;
              position: absolute;
              right: .1rem;
              bottom: .1rem;
              z-index: 3;
            }
          }
          .image {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin: .24rem 0 .5rem 0;
            img {
              border: none;
              width: 1.7rem;
              height: 1.7rem;
              margin: 0 .2rem 0 0;
            }
          }
        }
      }
      .aggrement {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #222;
        font-size: .28rem;
        margin: .4rem 0 .5rem .3rem;
        img {
          width: .2rem;
          height: .2rem;
          margin: 0 .1rem 0 0;
        }
      }
      .submit {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: .36rem;
        width: 6.9rem;
        height: 1rem;
        margin: 0 auto .5rem;
        border-radius: .05rem;
        background: rgba(211, 211, 211, 1);
        &.bgColor {
          color: #64391a;
          background: linear-gradient(
            90deg,
            rgba(247, 208, 150, 1),
            rgba(241, 185, 108, 1)
          );
        }
      }
    }
  }
</style>

<template>
  <div class="wrapper" ref="header">
    <common-title
      isFixed
      name="申请Tutor"
      :isIosX="isIosX"
      :Opacity="opacity"
    ></common-title>
    <div :class="['content', {xcontent: isIosX}]">
      <div class="header">
        <!-- <div class="image">
          <img src="../assets/icon/header_tutor.png">
          <div>更改头像</div>
        </div> -->
        <div class="name">
          <div>姓名</div>
          <div class="input">
            <input type="text" v-model="formData.name" placeholder="请填写姓名">
          </div>
        </div>
      </div>
      <div class="main">
        <ul class="select">
          <li
            v-for="(item, index) in choiseData"
            :key="index"
            @click="choiseFunc(index)">
            <div :class="{active: type === index}"></div>
            <span>{{ item.text }}</span>
          </li>
        </ul>
        <template v-if="type === 0">
          <div class="box">
            <div class="name">在读院校</div>
            <div class="input">
              <input type="text" v-model="formData.school" placeholder="请输入在读院校">
            </div>
          </div>
          <div class="box">
            <div class="name">所学专业</div>
            <div class="input">
              <input type="text" v-model="formData.major" placeholder="请输入所学专业">
            </div>
          </div>
          <div class="box">
            <div class="name">在读年级</div>
            <div class="input">
              <input type="text" v-model="formData.grade" placeholder="请输入在读年级，例如：研一">
            </div>
          </div>
        </template>
        <template v-else>
          <div class="box">
            <div class="name">毕业院校</div>
            <div class="input">
              <input type="text" v-model="formData.school" placeholder="请输入在读院校">
            </div>
          </div>
          <div class="box">
            <div class="name">所学专业</div>
            <div class="input">
              <input type="text" v-model="formData.major" placeholder="请输入所学专业">
            </div>
          </div>
          <div class="box">
            <div class="name">您的学历</div>
            <div class="input">
              <input type="text" v-model="formData.degree" placeholder="请输入您的学历">
            </div>
          </div>
        </template>
      </div>
      <div class="main">
        <div class="box">
          <div class="name">意向教学科目课号</div>
          <div class="input">
            <input type="text" v-model="formData.intentionCourseTitle" placeholder="请输入课程科目课号，例如：COMP1511">
          </div>
        </div>
        <div class="box">
          <div class="name">教学所选课程的原因</div>
          <div class="textarea">
            <textarea type="text" v-model="formData.applyReason" placeholder="请输入所选课程的原因，例如学分高，有教学经验" />
            <span>10-100字</span>
          </div>
        </div>
        <div class="box">
          <div class="name">擅长教学技能</div>
          <div class="input">
            <input type="text" v-model="formData.research" placeholder="请输入擅长教学技能，例如：Python编程">
          </div>
        </div>
        <div class="box">
          <div class="name">学分/奖项或教学经历证明</div>
          <div class="image">
            <img src="../assets/icon/upload.jpg">
          </div>
        </div>
        <div class="box">
          <div class="name">请填写个人微信号</div>
          <div class="input">
            <input type="text" v-model="formData.wxId" placeholder="请输入个人微信号">
          </div>
        </div>
      </div>
      <div class="aggrement">
        <img src="../assets/icon/import.png">
        以上均为必填选项，请确保信息真实有效
      </div>
      <div class="submit bgColor" @click="submitFunc">提交</div>
    </div>
  </div>
</template>

<script>
import {
  applyTutor
} from '@/fetch/api'
import CommonTitle from "@/components/common-title"
export default {
  name: 'applyTotur',
  data () {
    return {
      type: 0,
      choiseData: [{
        text: '在读'
      }, {
        text: '已工作'
      }],
      formData: {
        customerId: '',
        photoUrl: '',
        name: '',
        workStatus: '',
        school: '',
        major: '',
        degree: '',
        grade: '',
        intentionCourseTitle: '',
        applyReason: '',
        research: '',
        filePath: '',
        wxId: ''
      },
      isIosX: false,
      opacity: 'linear-gradient(270deg, rgba(226, 176, 102, 0), rgba(239, 204, 148, 0))'
    }
  },
  computed: {
    submitColor () {
      this.formData.map(item => {

      })
    }
  },
  components: {
    CommonTitle
  },
  methods: {
    choiseFunc (eq) {
      window.console.log(eq)
      this.type = eq
    },
    submitFunc () {
      this.$router.push({
        path: '/applyAgain'
      })
    }
  },
  mounted () {
    const self = this
    window.onscroll = function () {
      if (window.scrollY > 100) self.opacity = `linear-gradient(270deg, rgba(226, 176, 102, 1), rgba(239, 204, 148, 1))`
      if (window.scrollY < 100) self.opacity = `linear-gradient(270deg, rgba(226, 176, 102, ${window.scrollY / 100}), rgba(239, 204, 148, ${window.scrollY / 100}))`
    }
    // 判断ios机型
    if ((this.$isIos && (window.screen.height === 812 && window.screen.width === 375)) ||
      (window.screen.height === 896 && window.screen.width === 414)
    ) {
      this.isIosX = true
    }
  }
}
</script>
