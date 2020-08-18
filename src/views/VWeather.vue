<template>
  <div class="weather" ref="weatherBackground">
    <div class="weather__text">
      <h1 class="weather__title">{{ weatherName }}</h1>
      <h2 class="weather__temp">{{ weatherTemp }}</h2>
    </div>
    <img class="weather__img" :src="imageSrc" />
  </div>
</template>

<script>
import axios from 'axios'

const THUNDERSTORM = {
  day: {
    icon: 'thunderstorm.png',
    color: '#4599BB'
  },
  night: {
    icon: 'thunderstorm.png',
    color: '#061F27'
  },
  ids: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232]
}
const CLEAR = {
  day: {
    icon: 'sunny.png',
    color: '#1BBDF0'
  },
  night: {
    icon: 'clear night.png',
    color: '#111737'
  },
  ids: [800]
}
const LIGHTLY_CLOUDED = {
  day: {
    icon: 'sun-cloudy.png',
    color: '#29AAD2'
  },
  night: {
    icon: 'cloudy night.png',
    color: '#111737'
  },
  ids: [801, 802]
}
const RAIN = {
  day: {
    icon: 'rainy.png',
    color: '#4D7B89'
  },
  night: {
    icon: 'rainy.png',
    color: '#111737'
  },
  ids: [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531]
}
const SNOW = {
  day: {
    icon: 'snowy.png',
    color: '#D1E9F1'
  },
  night: {
    icon: 'snowy.png',
    color: '#023646'
  },
  ids: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622]
}
const CLOUD = {
  day: {
    icon: 'cloudy.png',
    color: '#4D7B89'
  },
  night: {
    icon: 'cloudy.png',
    color: '#111737'
  },
  ids: [803, 804]
}

const weatherThemes = [CLOUD, SNOW, THUNDERSTORM, RAIN, CLEAR, LIGHTLY_CLOUDED]

export default {
  name: 'VWeather',
  data: () => ({
    latitude: undefined,
    longitude: undefined,
    weatherData: undefined,
    weatherIcon: ''
  }),
  async mounted() {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(geoData => {
        this.latitude = geoData.coords.latitude
        this.longitude = geoData.coords.longitude
      })
    }
  },
  methods: {
    async weatherAPICall() {
      if (!this.weatherData && this.latitude && this.longitude) {
        let request = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=3288f0546df12871365a679bc10a1ea4&units=metric`
        )
        this.weatherData = request.data
        this.setWeatherTheme()
      }
    },
    setWeatherTheme() {
      let idFound = false
      weatherThemes.forEach(theme => {
        if (theme.ids.indexOf(this.weatherData.weather[0].id) > -1) {
          idFound = true
          if (this.isDay) {
            this.weatherIcon = theme.day.icon
            this.$refs.weatherBackground.style.background = theme.day.color
          } else {
            this.weatherIcon = theme.night.icon
            this.$refs.weatherBackground.style.background = theme.night.color
          }
        }
      })
      if (!idFound) {
        this.weatherIcon = 'windy.png'
        this.$refs.weatherBackground.style.background = '#023646'
      }
    }
  },
  computed: {
    imageSrc() {
      return this.weatherIcon && this.weatherIcon.length > 0 ? require(`../assets/${this.weatherIcon}`) : ''
    },
    weatherName() {
      return this.weatherData ? this.weatherData.name : ''
    },
    weatherTemp() {
      return this.weatherData ? `${Math.round(this.weatherData.main.temp)}°` : ''
    },
    isDay() {
      let now = new Date()
      return 4 < now.getHours() < 19
    }
  },
  watch: {
    async latitude() {
      await this.weatherAPICall()
    }
  }
}
</script>

<style lang="scss" scoped>
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
  opacity: 88%;
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
  opacity: 88%;
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
</style>
