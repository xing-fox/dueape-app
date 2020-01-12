<template>
  <div class="order-details">
    <div class="details-item">
      <div class="item-intro bor-b">
        <div class="left">
          <div class="left-title">
            COPM2511-期末提分班，免费独家资料资料领取
          </div>
          <div class="left-count">
            12月13日 - 12月15日 | 3次课
          </div>
        </div>
        <div class="right">120</div>
      </div>
      <div class="item-coupon bor-b">
        <span class="title">优惠券</span>
        <span>-10</span>
      </div>
      <div class="item-pay">
        已支付：<span>110</span>
      </div>  
    </div>
    <div class="details-bottom">
      <div class="bottom-pay-type bor-b">Due币支付</div>
      <div class="buttom-pay-time">
        <span>付款时间</span>
        <span>2019年11月19日 13:12</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderdetails'
}
</script>

<style lang="less" scoped>
  .order-details {
    padding: .3rem;
    background: #fff;
    .details-item {
      display: flex;
      flex-direction: column;
      width: 6.9rem;
      height: 4rem;
      margin: 0 0 .3rem 0;
      padding: 0 .3rem;
      border-radius: .08rem;
      border: 1px solid #F5EADA;
      box-sizing: border-box;
      .item-intro {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.8rem;
        position: relative;
        .left {
          .left-title {
            color: #222;
            font-size: .28rem;
          }
          .left-count {
            color: #909090;
            font-size: .24rem;
            margin: .15rem 0 0 0;
          }
        }
        .right {
          color: #222;
          font-size: .28rem;
          margin: 0 0 0 .8rem;
        }
      }
      .item-coupon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.08rem;
        position: relative;
        span {
          color: #CDA34F;
          font-size: .3rem;
          &.title {
            color: #222;
            font-size: .28rem;
          }
        }
      }
      .item-pay {
        color: #000;
        font-size: .28rem;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          color: #CDA34F;
        }
      }
    }
    .details-bottom {
      color: #222;
      font-size: .28rem;
      display: flex;
      flex-direction: column;
      width: 6.9rem;
      height: 2.18rem;
      padding: 0 .3rem;
      border-radius: .08rem;
      border: 1px solid #F5EADA;
      box-sizing: border-box;
      .bottom-pay-type {
        color: #000;
        display: flex;
        align-items: center;
        height: 1.08rem;
        position: relative;
      }
      .buttom-pay-time {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>
