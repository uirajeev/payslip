<template>
  <div class="table__container">
    <table-header></table-header>
    <table-row
      :currency="currency"
      :year="year"
      :table-row-data="tableRowData"
    ></table-row>
  </div>
</template>

<script>
import TableHeader from '@/components/organisms/TableHeader/TableHeader.vue';
import TableRow from '@/components/organisms/TableRow/TableRow.vue';

export default {
  name: 'PayslipTable',
  components: { TableHeader, TableRow },
  props: {
    currency: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: null
    },
    tableRowData: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.table__container {
  background: $white;
  box-shadow: $container-shadow;
  border: 1px solid $light-yellow;
  border-radius: 0 0 12px 12px;
  min-height: 80vh;
  margin-top: -28px;
  padding: ($base-padding * 5) ($base-padding * 6) 0 ($base-padding * 9);
  position: relative;
  z-index: 1;
}
</style>
