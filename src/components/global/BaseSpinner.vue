<template>
  <div class="base-spinner text-center" v-if="visible">
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false,
  }),
  created() {
    this.$root.$on("Spinner::show", () => {
      this.visible = true;
    });
    this.$root.$on("Spinner::hide", () => {
      this.visible = false;
    });
  },
};
</script>
<style scoped>
.base-spinner {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  z-index: 100000000;
}
</style>
