import {
  Post
} from './axios.js'

/**
 * @param 查询课程详情页
 */
export const courseDetail = (param) => {
  return Post('/course/detail', param)
}
