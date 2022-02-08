<template>
  <div id="app">
    <base-spinner> </base-spinner>
    <router-view/>
  </div>
</template>
<script>
import BaseSpinner from "./components/global/BaseSpinner.vue";
export default {
  components: { BaseSpinner },
  mounted(){
    console.log(this.$firebase)
  }
};
</script>
<style lang="scss"></style>
