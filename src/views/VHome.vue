<template>
  <div>
    <h1>My Random Stuff</h1>
    <ul>
      <li><router-link :to="{ name: 'Horloge' }">Horloge</router-link></li>
      <li><router-link :to="{ name: 'Météo' }">Météo</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
li {
  text-align: center;
  margin: 5px 0;
}
</style>
