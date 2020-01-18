<template>
  <div class="coupon">
    <div class="can-use">可使用</div>
    <div class="item" v-for="(item, index) in Data" :key="index">
      <template v-if="item.couponStatus == 1">
        <div class="item-content">
          <div class="left">
            <div class="left-title">{{ item.couponName }}</div>
            <div class="left-intro">仅限购买课程时使用</div>
          </div>
          <div class="right">
            Au$ <span>{{ item.price || 0 }}</span>
          </div>
        </div>
        <div class="item-time">有效期至{{ item.endTime }}</div>
      </template>
    </div>
    <div class="uncan-use">已失效</div>
    <div class="item un-use" v-for="(item, index) in Data" :key="index">
      <template>
        <div class="item-content">
          <div class="left">
            <div class="left-title">{{ item.couponName }}</div>
            <div class="left-intro">仅限购买课程时使用</div>
          </div>
          <div class="right">
            Au$ <span>{{ item.price || 0 }}</span>
          </div>
        </div>
        <div class="item-time">有效期至{{ item.endTime }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import {
  getMyCouponList
} from '@/fetch/api'
export default {
  name: 'coupon',
  data () {
    return {
      Data: []
    }
  },
  mounted () {
    getMyCouponList({}).then(res => {
      if (Number(res.code) === 0) {
        this.Data = res.data.rowList
        window.console.log(this.Data)
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .coupon {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: .3rem;
    .can-use,
    .uncan-use {
      color: #333;
      font-size: .3rem;
      margin: 0 0 .3rem 0;
      &.uncan-use {
        margin: .5rem 0 .3rem 0;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      width: 6.9rem;
      height: 2.08rem;
      padding: 0 .3rem;
      margin: 0 0 .3rem 0;
      box-sizing: border-box;
      background-image: url(../assets/img/coupon.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      &.un-use {
        background-image: url(../assets/img/coupon_1.png);
        .item-content {
          .left {
            .left-title {
              color: #797979;
            }
            .left-intro {
              color: #797979;
            }
          }
          .right {
            color: #9C9B9B;
          }
        }
        .item-time {
          color: #797979;
        }
      }
      .item-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 1.4rem;
        .left {
          color: #6D482B;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .left-title {
            font-size: .3rem;
          }
          .left-intro {
            font-size: .24rem;
            margin: .1rem 0 0 0;
          }
        }
        .right {
          color: #fff;
          font-size: .26rem;
          span {
            font-size: .48rem;
          }
        }
      }
      .item-time {
        color: #72492A;
        font-size: .24rem;
        flex: 1;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
