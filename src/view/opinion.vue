<template>
  <div class="opinion">
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
      <textarea v-model="formData.content" placeholder="请输入反馈内容..."></textarea>
      <div class="text-length"><span>{{ contentLength }}</span>/200</div>
    </div>
    <div class="uploadImg">
      <div class="imgShow" v-for="(item, index) in imgData" :key="index">
        <img :src="item">
        <i class="delete" @click="imgData.splice(index, 1)"></i>
      </div>
      <div class="uploadInput">
        <i></i>
        <input type="file" name="filename" @change="uploadFunc">
      </div>
    </div>
    <div class="inputWx bor-t bor-b">
      <span>微信联系</span>
      <input v-model="formData.wechat" type="text" placeholder="请输入微信号（选填）">
    </div>
    <div :class="['submit', {'active': sumbitStatus}]" @click="submitFunc">提交</div>
    <svg-updata-image v-if="loadingStatus" class="svg-loading" />
  </div>
</template>

<script>
import {
  getToken,
  optionCreate
} from '@/fetch/api'
import COS from 'cos-js-sdk-v5'
import SvgUpdataImage from '@/components/svg-updataImage'
export default {
  name: 'Opinion',
  data () {
    return {
      typeData: ['体验问题', '支付问题', '登录问题', '功能问题'],
      typeIndex: 0,
      imgData: [],
      loadingStatus: false,
      formData: {
        customerId: this.$CustomerId,
        type: 1,
        content: '',
        wechat: ''
      }
    }
  },
  computed: {
    sumbitStatus () {
      return this.formData.content
    },
    contentLength () {
      return this.formData.content.length || 0
    }
  },
  components: {
    SvgUpdataImage
  },
  methods: {
    choiseType (eq) {
      this.typeIndex = eq
      this.formData.type = eq + 1
    },
    async uploadFunc (file) {
      this.loadingStatus = true
      const data = file.target.files[0]
      const name = data.name.replace(/[ @#$%^&*{}:"L<>?]/g, '')
      const option = await getToken({
        key: new Date().getTime() + name,
        bucket: 'china'
      }).then((res) => {
        window.console.log(res)
        return {
          key: res.data.key,
          token: res.data.token
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
        Bucket: 'dueape-1255328906',
        Region: 'ap-beijing',
        Key: option.key,
        StorageClass: 'STANDARD',
        Body: data, // 上传文件对象
        onProgress: (progressData) => {}
      }, (error, result) => {
        if (result.statusCode === 200) {
          this.imgData.push(`http://${result.Location}`)
          this.loadingStatus = false
        }
      })
    },
    submitFunc () {
      optionCreate(Object.assign(this.formData, {
        imageUrl: this.imgData.join(',')
      })).then(res => {
        if (Number(res.code) === 0) {
          this.$toast(res.data, {
            durtaion: 500,
            location: 'center'
          })
          setTimeout(() => {
            this.$JsBridge.GetIosMethods(bridge => {
              bridge.callHandler('dueWebCallNative',{
                actionType: 0,
                actionTarget: 'ReturnBack',
                data: {}
              })
            })
          }, 500)
        }
      })
    }
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
    margin: 0 .3rem;
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
          color: #CDA34F;
          &:before {
            content: "";
            width: 200%;
            height: 200%;
            transform: scale(0.5, 0.5);
            transform-origin: 0 0;
            border-radius: 0.1rem;
            border: 1px solid #CDA34F;
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
    margin: 0.3rem 0.15rem 0;
    position: relative;
    textarea {
      color: #222222;
      font-size: 0.3rem;
      outline: none;
      caret-color: #e7bb79;
      width: 96%;
      height: 1.8rem;
      line-height: 0.45rem;
      border: none;
    }
    .text-length {
      color: #666;
      font-size: .24rem;
      margin: 0 0 0 .15rem;
      span {
        color: #CDA34F;
      }
    }
  }
  .uploadImg {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: .4rem .3rem 0;
    position: relative;
    .imgShow {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;
      margin: 0 .6rem .4rem 0;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        background-image: url("../assets/icon/upload.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      i {
        width: .3rem;
        height: .3rem;
        position: absolute;
        top: .12rem;
        right: .12rem;
        background-image: url("../assets/icon/delete.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
    .uploadInput {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;
      position: relative;
      input {
        opacity: 0;
        outline: none;
        caret-color: #e7bb79;
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
      caret-color: #e7bb79;
    }
  }
  .submit {
    color: #fff;
    font-size: 0.36rem;
    pointer-events: none;
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
      pointer-events: initial !important;
      background: linear-gradient(
        90deg,
        rgba(247, 208, 150, 1),
        rgba(241, 185, 108, 1)
      );
    }
  }
  .svg-loading {
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, .7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
