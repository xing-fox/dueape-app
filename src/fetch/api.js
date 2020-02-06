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
  return Post('/customer/getMyOrderList', param)
}

/**
 * @param 意见反馈（需登录）
 */
export const optionCreate = (param) => {
  return Post('/feedBack/create', param)
}

/**
 * @param 获取文件上传签名
 */
export const getToken = (param) => {
  return Post('/upload/getToken', param)
}

/**
 * @param 用户申请导师，提交资料（需登录）
 */
export const applyTutor = (param) => {
  return Post('/customer/applyTutor', param)
}
