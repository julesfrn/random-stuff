<template>
  <div>
    <h1 class="home__title">My Random Stuff</h1>
    <div class="home__body">
      <c-preview-item route="horloge" title="Horloge analogique" />
      <c-preview-item route="meteo" title="Météo locale" />
    </div>
  </div>
</template>

<script>
import CPreviewItem from '@/components/CPreviewItem.vue'

export default {
  name: 'VHome',
  components: { CPreviewItem }
}
</script>

<style lang="scss" scoped>
.home__title {
  color: #646464;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #646464;
  letter-spacing: 4px;
  font-weight: bolder;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0 10px;
}
.home__body {
  margin: auto;
  width: 332px;
  @media screen and (min-width: 668px) {
    width: 664px;
  }
  @media screen and (min-width: 1000px) {
    width: 996px;
  }
}
</style>
