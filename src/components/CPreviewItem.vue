<template>
  <router-link :to="route" class="preview-item">
    <iframe :src="route" style="width: 300px; height: 200px;"></iframe>
    <div>
      <h3 class="preview-item__title">{{ title }} ></h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CPreviewItem',
  props: {
    route: { type: String },
    title: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.preview-item {
  display: inline-block;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0px rgba(80, 80, 80, 0.1);
  border: solid rgba(61, 61, 61, 0.1) 1px;
}
.preview-item__title {
  color: black;
  margin: 10px;
}
</style>
