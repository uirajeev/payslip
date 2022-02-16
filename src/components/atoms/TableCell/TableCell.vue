<template>
  <div class="table-cell" :data-heading="label"><slot></slot></div>
</template>

<script>
export default {
  name: 'TableCell',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.table-cell {
  display: inline-block;
}
</style>
