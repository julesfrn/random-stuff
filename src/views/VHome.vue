<template>
  <div>
    <h1 class="home__title">Mini Projects</h1>
    <div class="home__body">
      <CPreviewItem route="horloge" title="Horloge analogique" />
      <CPreviewItem route="meteo" title="Météo locale" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CPreviewItem from '../components/CPreviewItem.vue'
</script>

<style scoped>
.home__title {
  color: #646464;
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
}
@media screen and (min-width: 668px) {
  .home__body {
    width: 664px;
  }
}
@media screen and (min-width: 1000px) {
  .home__body {
    width: 996px;
  }
}
</style>
