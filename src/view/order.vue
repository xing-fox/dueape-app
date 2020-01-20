<template>
  <div class="order">
    <div>
      <div class="item" @click="routeFunc">
        <div class="item-content bor-b">
          <div class="content-title">COPM2511-期末考题冲刺班期末考题冲刺班</div>
          <div class="content-time">7月12 - 7月14</div>
        </div>
        <div class="item-bottom">
          <div class="time">2019年11月18日 13:46</div>
          <div class="total-price">总计：299.50</div>
          <!-- <div class="button"></div> -->
        </div>
      </div>
      <div class="item">
        <div class="item-content bor-b">
          <div class="content-title">
            <span>COPM2511-期末考题冲刺班</span>
            <div class="no-pay">未支付</div>
          </div>
          <div class="content-time">7月12 - 7月14</div>
        </div>
        <div class="item-bottom">
          <!-- <div class="time"></div> -->
          <div class="total-price">总计：299.50</div>
          <div class="button">
            <div class="tab cancel">取消订单</div>
            <div class="tab pay">重新支付</div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import {
  getMyOrderList
} from '@/fetch/api'
export default {
  name: 'order',
  methods: {
    routeFunc () {
    }
  },
  mounted () {
    getMyOrderList({
      customerId: this.$CustomerId
    }).then(res => {
      window.console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
  .order {  
    padding: .3rem;
    position: relative;
    .item {
      display: flex;
      flex-direction: column;
      width: 6.9rem;
      height: 3rem;
      margin: 0 0 .3rem 0;
      border-radius: .08rem;
      border: 1px solid #F5EADA;
      box-sizing: border-box;
      .item-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 2.05rem;
        padding: 0 .3rem;
        position: relative;
        &:after {
          border-bottom: 1px solid #efefef;
        }
        .content-title {
          color: #222;
          font-size: .34rem;
          font-weight: bold;
          display: flex;
          .no-pay {
            color: #F82B34;
            font-size: .26rem;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }
        .content-time {
          color: #666;
          font-size: .26trm;
          margin: .28rem 0 0 0;
        }
      }
      .item-bottom {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .3rem;
        .time {
          color: #909090;
          font-size: .26rem;
        }
        .total-price {
          color: #909090;
          font-size: .3rem;
        }
        .button {
          display: flex;
          align-items: center;
          .tab {
            font-size: .28rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.8rem;
            height: .64rem;
            position: relative;
            &.cancel {
              color: #909090;
              margin: 0 .2rem 0 0;
              &:after {
                content: '';
                width: 200%;
                height: 200%;
                border-radius: .64rem;
                border: 1px solid #ccc;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                transform: scale(.5, .5);
                transform-origin: 0 0;
              }
            }
            &.pay {
              color: #CDA34F;
              &:after {
                content: '';
                width: 200%;
                height: 200%;
                border-radius: .64rem;
                border: 1px solid #CDA34F;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                transform: scale(.5, .5);
                transform-origin: 0 0;
              }
            }
          }
        }
      }
    }
  }
</style>
