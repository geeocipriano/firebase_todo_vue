<template>
  <div id="app">
    <base-spinner> </base-spinner>
    <button @click="mostrarSpinner()">
      mostrar spinner
    </button>
    <!--<router-view/>-->
  </div>
</template>
<script>
import BaseSpinner from "./components/global/BaseSpinner.vue";
export default {
  components: { BaseSpinner },
  methods:{
    mostrarSpinner(){
      this.$root.$emit('Spinner::show')
    }
  }
};
</script>
<style lang="scss"></style>
