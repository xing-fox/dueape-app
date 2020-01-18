import {
  Post
} from './axios.js'

/**
 * @param 查询课程详情页
 */
export const courseDetail = (param) => {
  return Post('/course/detail', param)
}

/**
 * @param 用户查询自己领取的优惠券列表（需要登录）
 */
export const getMyCouponList = (param) => {
  return Post('/customer/getMyCouponList', param)
}

/**
 * @param 查询我的订单
 */
export const getMyOrderList = (param) => {
  return Post('/course/getMyOrderList', param)
}