<template>
  <pay-slip />
</template>

<script>
import PaySlip from '@/components/pages/PaySlip.vue'

export default {
  name: 'App',
  components: {
    PaySlip
  }
}
</script>

<style lang="scss">
  @import "@/scss/global/style.scss";
  #app {
    padding: $base-padding * 5 $base-padding * 2 0;
  }
</style>
