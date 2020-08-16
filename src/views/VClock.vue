<template>
  <div class="clock">
    <div class="clock__frame">
      <div class="clock__hand">
        <div class="clock__hand-seconds" ref="handSeconds"></div>
      </div>
      <div class="clock__hand">
        <div class="clock__hand-hour" ref="handHours"></div>
      </div>
      <div class="clock__hand">
        <div class="clock__hand-minutes" ref="handMinutes"></div>
      </div>
      <div class="clock__face">
        <span>12</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VClock',
  data: () => ({
    now: new Date()
  }),
  mounted() {
    this.updateTime()
    setInterval(() => {
      this.now = new Date()
      this.updateTime()
      this.addTransition()
    }, 100)
  },
  methods: {
    updateSeconds() {
      this.$refs.handSeconds.style.transform = `rotate(${6 * this.secondsInDay}deg)`
    },
    updateMinutes() {
      this.$refs.handMinutes.style.transform = `rotate(${6 * (this.secondsInDay / 60)}deg)`
    },
    updateHours() {
      this.$refs.handHours.style.transform = `rotate(${6 * (this.secondsInDay / 60 / 12)}deg)`
    },
    updateTime() {
      this.updateHours()
      this.updateMinutes()
      this.updateSeconds()
    },
    addTransition() {
      this.$refs.handMinutes.style.transition = this.$refs.handHours.style.transition = 'transform 1s'
    }
  },
  computed: {
    secondsInDay() {
      return this.now.getHours() * 60 * 60 + this.now.getMinutes() * 60 + this.now.getSeconds()
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  position: absolute;
}
.clock {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: #aaaaaa;
  font-size: 25px;
  font-weight: bold;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clock__frame {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    0 15px 15px rgba(0, 0, 0, 0.05), inset 0 15px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}
.clock__hand {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
}
.clock__hand-hour {
  width: 10px;
  border-radius: 5px 5px 0;
  height: 100px;
  background: #444444;
  position: relative;
  bottom: 50px;
  transform-origin: bottom center;
}
.clock__hand-minutes {
  width: 8px;
  border-radius: 4px 4px 0;
  height: 120px;
  background: #444444;
  position: relative;
  bottom: 60px;
  transform-origin: bottom center;
}
.clock__hand-seconds {
  width: 4px;
  border-radius: 2px 2px 0;
  height: 120px;
  background: #da3636;
  position: relative;
  bottom: 60px;
  transform-origin: bottom center;
}
.clock__face {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  &::after {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #aaaaaa;
  }
  span {
    position: absolute;
    height: 360px;
    transform-origin: center center;
    &:nth-child(2) {
      transform: rotate(30deg);
    }
    &:nth-child(3) {
      transform: rotate(60deg);
    }
    &:nth-child(4) {
      transform: rotate(90deg);
    }
    &:nth-child(5) {
      transform: rotate(120deg);
    }
    &:nth-child(6) {
      transform: rotate(150deg);
    }
    &:nth-child(7) {
      transform: rotate(180deg);
    }
    &:nth-child(8) {
      transform: rotate(210deg);
    }
    &:nth-child(9) {
      transform: rotate(240deg);
    }
    &:nth-child(10) {
      transform: rotate(270deg);
    }
    &:nth-child(11) {
      transform: rotate(300deg);
    }
    &:nth-child(12) {
      transform: rotate(330deg);
    }
  }
}
</style>
