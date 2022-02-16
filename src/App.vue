<template>
  <payslip />
</template>

<script>
import Payslip from '@/components/pages/Payslip/Payslip.vue';

export default {
  name: 'App',
  components: {
    Payslip
  }
};
</script>

<style lang="scss">
  @import "@/scss/global/style.scss";
  #app {
    padding: $base-padding * 5 $base-padding * 2 0;
  }
</style>
