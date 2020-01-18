export default [
  {
    path: '/courseDetails',
    name: 'courseDetails',
    component: resolve => require(['@/view/course-details'], resolve),
    meta: {
      title: '课程详情'
    }
  },
  {
    path: '/opinion',
    name: 'opinion',
    component: resolve => require(['@/view/opinion'], resolve),
    meta: {
      title: '意见反馈'
    }
  },
  {
    path: '/myCoupon',
    name: 'coupon',
    component: resolve => require(['@/view/coupon'], resolve),
    meta: {
      title: '我的优惠券'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: resolve => require(['@/view/order'], resolve),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/orderDetails',
    name: 'orderdetails',
    component: resolve => require(['@/view/order-details'], resolve),
    meta: {
      title: '订单详情'
    }
  },
  {
    path: '/applyTutor',
    name: 'applytutor',
    component: resolve => require(['@/view/apply-tutor'], resolve),
    meta: {
      title: '申请Tutor'
    }
  },
  {
    path: '/applyAgain',
    name: 'applyagain',
    component: resolve => require(['@/view/apply-again'], resolve),
    meta: {
      title: '审核中...'
    }
  }
]
