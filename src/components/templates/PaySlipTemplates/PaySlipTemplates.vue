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
  name: 'PaySlipTemplates'
}
</script>

<style lang="scss" scoped>
.payslip{
    margin-top: $base-margin * 4;
}
</style>
