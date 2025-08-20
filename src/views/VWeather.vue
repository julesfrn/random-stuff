<template>
  <div class="weather" ref="weatherBackground">
    <CGoToHome />
    <div class="weather__text">
      <h1 class="weather__title">{{ weatherName }}</h1>
      <h2 class="weather__temp">{{ weatherTemp }}</h2>
    </div>
    <img v-if="weatherIcon" class="weather__img" :src="weatherIcon" />
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import CGoToHome from '@/components/CGoToHome.vue'
import { computed, onMounted, ref, watch } from 'vue'
import thunderstorm from '../assets/thunderstorm.png'
import sunny from '../assets/sunny.png'
import clearNight from '../assets/clear night.png'
import sunCloudy from '../assets/sun-cloudy.png'
import cloudyNight from '../assets/cloudy night.png'
import rainy from '../assets/rainy.png'
import snowy from '../assets/snowy.png'
import cloudy from '../assets/cloudy.png'
import windy from '../assets/windy.png'

const THUNDERSTORM = {
  day: {
    icon: thunderstorm,
    color: '#4599BB'
  },
  night: {
    icon: thunderstorm,
    color: '#061F27'
  },
  ids: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232]
}
const CLEAR = {
  day: {
    icon: sunny,
    color: '#1BBDF0'
  },
  night: {
    icon: clearNight,
    color: '#111737'
  },
  ids: [800]
}
const LIGHTLY_CLOUDED = {
  day: {
    icon: sunCloudy,
    color: '#29AAD2'
  },
  night: {
    icon: cloudyNight,
    color: '#111737'
  },
  ids: [801, 802]
}
const RAIN = {
  day: {
    icon: rainy,
    color: '#4D7B89'
  },
  night: {
    icon: rainy,
    color: '#111737'
  },
  ids: [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531]
}
const SNOW = {
  day: {
    icon: snowy,
    color: '#D1E9F1'
  },
  night: {
    icon: snowy,
    color: '#023646'
  },
  ids: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622]
}
const CLOUD = {
  day: {
    icon: cloudy,
    color: '#4D7B89'
  },
  night: {
    icon: cloudy,
    color: '#111737'
  },
  ids: [803, 804]
}

const weatherThemes = [CLOUD, SNOW, THUNDERSTORM, RAIN, CLEAR, LIGHTLY_CLOUDED]

const weatherBackground = ref<HTMLDivElement>()

const latitude = ref<number>()
const longitude = ref<number>()
const weatherData = ref()
const weatherIcon = ref('')

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoData => {
      latitude.value = geoData.coords.latitude
      longitude.value = geoData.coords.longitude
    })
  }
})

const setWeatherTheme = () => {
  let idFound = false
  weatherThemes.forEach(theme => {
    if (theme.ids.indexOf(weatherData.value.weather[0].id) > -1) {
      idFound = true
      if (isDay.value) {
        weatherIcon.value = theme.day.icon
        weatherBackground.value!.style.background = theme.day.color
      } else {
        weatherIcon.value = theme.night.icon
        weatherBackground.value!.style.background = theme.night.color
      }
    }
  })
  if (!idFound) {
    weatherIcon.value = windy
    weatherBackground.value!.style.background = '#023646'
  }
}

const getWeatherData = async () => {
  if (!weatherData.value && latitude.value && longitude.value) {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=3288f0546df12871365a679bc10a1ea4&units=metric`
    )
    weatherData.value = data
    setWeatherTheme()
  }
}

const weatherName = computed(() => {
  return weatherData.value ? weatherData.value.name : ''
})
const weatherTemp = computed(() => {
  return weatherData.value ? `${Math.round(weatherData.value.main.temp)}°` : ''
})
const isDay = computed(() => {
  const now = new Date()
  return 4 < now.getHours() && now.getHours() < 19
})
watch(latitude, getWeatherData)
</script>

<style scoped>
.weather {
  width: 100vw;
  height: 100vh;
  background: #1bbdf0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 850px) {
    flex-direction: row;
  }
}
.weather__title {
  font-size: 20px;
  color: #fff;
  opacity: 0.88;
  margin: 10px;
  @media screen and (min-width: 1150px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1430px) {
    font-size: 60px;
  }
}
.weather__temp {
  color: #fff;
  opacity: 0.88;
  font-weight: bold;
  font-size: 200px;
  margin: 10px;
  @media screen and (min-width: 1150px) {
    font-size: 250px;
  }
  @media screen and (min-width: 1430px) {
    font-size: 300px;
  }
}
.weather__img {
  width: 400px;
  margin: 10px;
  @media screen and (min-width: 1150px) {
    width: 500px;
  }
  @media screen and (min-width: 1430px) {
    width: 652px;
  }
}
@media screen and (height: 200px) {
  .weather {
    flex-direction: row;
  }
  .weather__img {
    width: 100px;
  }
  .weather__title {
    font-size: 16px;
  }
  .weather__temp {
    font-size: 23px;
  }
}
</style>
