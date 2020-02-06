<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(239, 204, 148, 1),
    rgba(226, 176, 102, 1)
  );
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 4.5rem;
    margin: 0 auto;
    .image {
      width: 1.6rem;
      height: 1.6rem;
      background: #2c2c2e;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      color: rgba(94, 59, 32, 1);
      font-size: 0.36rem;
      font-weight: 600;
    }
  }
  canvas {
    width: 100%;
    height: 1.5rem;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 0 0 0;
    box-sizing: border-box;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, .65),
      rgba(255, 255, 255, 1)
    );
    .content-title {
      color: #222;
      font-size: 0.34rem;
    }
    .submit {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #5e3b20;
      font-size: 0.36rem;
      font-weight: 500;
      width: 5.16rem;
      height: 1rem;
      margin: 0.6rem 0 0 0;
      background: linear-gradient(
        90deg,
        rgba(239, 204, 148, 1),
        rgba(226, 176, 102, 1)
      );
    }
  }
}
</style>

<template>
  <div class="wrapper">
    <common-title
    isFixed
    name=""></common-title>
    <div class="icon">
      <div class="image">
        <img src="../assets/img/apply.png">
      </div>
      <span>审核中...</span>
    </div>
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="content">
      <div class="content-title">提交成功,请等待工作人员审核!</div>
      <div class="submit" @click="reApply">重新申请</div>
    </div>
  </div>
</template>

<script>
import CommonTitle from "@/components/common-title"
export default {
  name: 'applyagain',
  data () {
    return {
      canvas: '',
      xOffset: 0,
      rangeValue: .6,
      owRange: 0
    }
  },
  components: {
    CommonTitle
  },
  methods: {
    draw (speed) {
      const canvas = this.canvas
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // 曲线绘制
      this.xOffset += speed
      this.drawWave(ctx)
      requestAnimationFrame(this.draw.bind(this, speed))
    },
    drawWave (ctx) {
      // const waveWidth = 0.03 // 波浪宽度,数越小越宽
      // const waveHeight = 10 // 波浪高度,数越大越高
      const points = []
      const canvasWidth = this.canvasWidth
      const canvasHeight = this.canvasHeight
      const startX = 0
      const Arr = [{
        offset: this.xOffset,
      }, {
        offset: this.xOffset*1.5 + 20,
      }, {
        offset: this.xOffset*2 - 20,
      }]
      Arr.map(item => {
        ctx.beginPath()
        for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
          const y = 20 * Math.sin((startX + x) *  0.015 + item.offset)
          points.push([x, (canvasHeight / 2) + y])
          ctx.lineTo(x, (canvasHeight / 2) + y)
        }
        ctx.lineTo(canvasWidth, canvasHeight)
        ctx.lineTo(startX, canvasHeight)
        ctx.lineTo(points[0][0], points[0][1])
        ctx.fillStyle = 'rgba(255, 255, 255, .3)'
        ctx.fill()
      })
    },
    reApply () {
      this.$router.push({
        path: 'applyTutor'
      })
    }
  },
  mounted () {
    const self = this
    const canvas = this.$refs.canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerWidth*.2
    this.canvas = canvas
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
    this.draw(.005)
  }
}
</script>
