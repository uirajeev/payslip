<template>
  <div class="app__title">
    <slot name="app-title"></slot>
  </div>
  <div class="payslip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PayslipTemplates'
};
</script>

<style lang="scss" scoped>
.payslip{
  margin: $base-margin * 4 $base-margin * 4 0 0;
}
</style>
