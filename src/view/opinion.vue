<template>
  <div class="opinion">
    <!-- <common-title
      :isIosX="isIosX"
    name="意见反馈" />-->
    <div class="type">
      <div class="title">
        <i></i>
        <span>问题反馈类型</span>
      </div>
      <div class="type-list">
        <div
          v-for="(item, index) in typeData"
          :key="index"
          :class="['item', {active: index === typeIndex}]"
          @click="choiseType(index)"
        >{{ item }}</div>
      </div>
    </div>
    <div class="messageBox">
      <textarea placeholder="请输入反馈内如..."></textarea>
    </div>
    <div class="uploadImg">
      <img v-for="(item, index) in imgData" :key="index" src="item">
      <div class="uploadInput">
        <i></i>
        <input type="file" name="filename" @change="uploadFunc">
      </div>
    </div>
    <div class="inputWx bor-t bor-b">
      <span>微信联系</span>
      <input type="text" placeholder="请输入微信号（选填）">
    </div>
    <div class="submit active" @click="submitFunc">提交</div>
  </div>
</template>

<script>
import {
  getTempkey,
  optionCreate
} from '@/fetch/api'
import COS from 'cos-js-sdk-v5'
export default {
  name: 'Opinion',
  data () {
    return {
      typeData: ['体验问题', '支付问题', '登录问题', '功能问题'],
      typeIndex: 0,
      imgData: []
    }
  },
  methods: {
    choiseType (eq) {
      this.typeIndex = eq
    },
    async uploadFunc (file) {
      const data = file.target.files[0]
      const name = data.name.replace(/[ @#$%^&*{}:"L<>?]/g, '')
      const option = await getTempkey({
        key: new Date().getTime() + name,
        bucket: 'china'
      }).then((res) => {
        window.console.log(res)
        return {
          key: res.data.credentials.tmpSecretKey,
          token: res.data.credentials.sessionToken
        }
      })
      const Cos = new COS({
        getAuthorization: (options, callback) => {
          option.token = option.token.substring(option.token.indexOf('?sign') + 6, option.token.length)
          let arr = {
            Authorization: unescape(option.token)
          }
          callback(arr)
        }
      })
      Cos.putObject({
        Bucket: 'dueape-tutor-1255328906',
        Region: 'ap-beijing',
        Key: option.key,
        StorageClass: 'STANDARD',
        Body: data, // 上传文件对象
        onProgress: (progressData) => {
          // this.upFile[this.upFileType].showFileProgress = true
        }
      }, (error, result) => {
        window.console.log(result)
        if (result.statusCode === 200) {
          this.upFile[this.upFileType].fileName = data.name
          if (this.upFileType === 1) {
            window.console.log(option.key)
            this.order.filePath = option.key
          } else {
            this.order.fullFilePath = option.key
          }
        }
      })
    },
    submitFunc () {}
  }
}
</script>

<style lang="less" scoped>
.opinion {
  font-size: 0;
  width: 100%;
  .type {
    color: #222;
    font-size: 0.32rem;
    margin: 0 0.24rem;
    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 1rem;
      i {
        display: inline-block;
        width: 0.36rem;
        height: 0.36rem;
        background-image: url("../assets/icon/require.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      span {
        flex: 1;
        margin: 0 0 0 0.1rem;
      }
    }
    .type-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      .item {
        color: #666;
        font-size: 0.26rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.44rem;
        height: 0.68rem;
        margin: 0 0.2rem 0 0;
        box-sizing: border-box;
        position: relative;
        &:before {
          content: "";
          width: 200%;
          height: 200%;
          transform: scale(0.5, 0.5);
          transform-origin: 0 0;
          border-radius: 0.1rem;
          border: 1px solid #d7d7d7;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        &.active {
          color: #eac397;
          &:before {
            content: "";
            width: 200%;
            height: 200%;
            transform: scale(0.5, 0.5);
            transform-origin: 0 0;
            border-radius: 0.1rem;
            border: 1px solid #eac397;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      }
    }
  }
  .messageBox {
    margin: 0.3rem 0.3rem 0;
    textarea {
      color: #222222;
      font-size: 0.3rem;
      width: 96%;
      height: 1.8rem;
      line-height: 0.45rem;
      border: none;
    }
  }
  .uploadImg {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin: 0.4rem 0.3rem 0;
    img {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;
      margin: 0 0.2rem 0 0;
      background-image: url("../assets/icon/upload.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .uploadInput {
      width: 1.7rem;
      height: 1.7rem;
      position: relative;
      input {
        opacity: 0;
        width: 1.7rem;
        height: 1.7rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
      i {
        display: inline-block;
        width: 1.7rem;
        height: 1.7rem;
        background-image: url("../assets/icon/upload.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
  .inputWx {
    color: #222;
    font-size: 0.32rem;
    display: flex;
    align-items: center;
    flex-direction: flex-left;
    height: 1.08rem;
    margin: 0.75rem 0.3rem 0.9rem;
    position: relative;
    span {
      margin: 0 0.6rem 0 0;
    }
    input {
      font-size: 0.32rem;
      border: none;
    }
  }
  .submit {
    color: #fff;
    font-size: 0.36rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.9rem;
    height: 1rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    background: #d3d3d3;
    &.active {
      color: #64391a;
      background: linear-gradient(
        90deg,
        rgba(247, 208, 150, 1),
        rgba(241, 185, 108, 1)
      );
    }
  }
}
</style>
