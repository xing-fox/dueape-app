<style lang="less" scoped>
</style>

<template>
  <div class="totur">
    <common-title
      v-if="!adStatus"
      :isIosX="isIosX"
      :Opacity="opacity"
      :isFixed="true"
      :normal="false"
      name="课程详情" />
  </div>
</template>

<script>
import CommonTitle from "@/components/common-title"
export default {
  name: 'applyTotur',
  data () {
    return {}
  },
  components: {
    CommonTitle
  },
  mounted () {}
}
</script>
