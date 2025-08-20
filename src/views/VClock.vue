<template>
  <div class="clock">
    <CGoToHome />
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

<script setup lang="ts">
import CGoToHome from '@/components/CGoToHome.vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const now = ref(new Date())
const intervalId = ref<number>()

const secondsInDay = computed(() =>
  now.value.getHours() * 60 * 60 + now.value.getMinutes() * 60 + now.value.getSeconds()
)
const handSeconds = ref<HTMLDivElement>()
const handHours = ref<HTMLDivElement>()
const handMinutes = ref<HTMLDivElement>()
const updateSeconds = () => {
  handSeconds.value!.style.transform = `rotate(${6 * secondsInDay.value}deg)`
}
const updateMinutes = () => {
  handMinutes.value!.style.transform = `rotate(${6 * (secondsInDay.value / 60)}deg)`
}
const updateHours = () => {
  handHours.value!.style.transform = `rotate(${6 * (secondsInDay.value / 60 / 12)}deg)`
}
const updateTime = () => {
  updateHours()
  updateMinutes()
  updateSeconds()
}

const addTransition = () => {
  handMinutes.value!.style.transition = handHours.value!.style.transition = 'transform 1s'
}

onMounted(() => {
  intervalId.value = setInterval(() => {
    now.value = new Date()
    updateTime()
    addTransition()
  }, 100)
})

onBeforeUnmount(() => {
  clearInterval(intervalId.value)
})
</script>

<style scoped>
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
}
.clock__face::after {
  position: absolute;
  content: '';
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #aaaaaa;
}
.clock__face span {
  position: absolute;
  height: 360px;
  transform-origin: center center;
}
.clock__face span:nth-child(2) {
  transform: rotate(30deg);
}
.clock__face span:nth-child(3) {
  transform: rotate(60deg);
}
.clock__face span:nth-child(4) {
  transform: rotate(90deg);
}
.clock__face span:nth-child(5) {
  transform: rotate(120deg);
}
.clock__face span:nth-child(6) {
  transform: rotate(150deg);
}
.clock__face span:nth-child(7) {
  transform: rotate(180deg);
}
.clock__face span:nth-child(8) {
  transform: rotate(210deg);
}
.clock__face span:nth-child(9) {
  transform: rotate(240deg);
}
.clock__face span:nth-child(10) {
  transform: rotate(270deg);
}
.clock__face span:nth-child(11) {
  transform: rotate(300deg);
}
.clock__face span:nth-child(12) {
  transform: rotate(330deg);
}
@media screen and (height: 200px) {
  .clock {
    font-size: 12px;
  }
  .clock__frame {
    width: 150px;
    height: 150px;
  }
  .clock__face::after {
    height: 7px;
    width: 7px;
  }
  .clock__face span {
    height: 130px;
  }
  .clock__hand-hour {
    width: 4px;
    height: 30px;
    border-radius: 2px 2px 0;
    bottom: 15px;
  }
  .clock__hand-minutes {
    width: 3px;
    height: 45px;
    border-radius: 1.5px 1.5px 0;
    bottom: 22.5px;
  }
  .clock__hand-seconds {
    width: 1px;
    height: 45px;
    border-radius: none;
    bottom: 22.5px;
  }
}
</style>
