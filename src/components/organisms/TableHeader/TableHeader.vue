<template>
  <div class="payslip__header">
    <div class="payslip__header-checkbox">1</div>

    <table-cell
      v-for="item in header"
      :key="item.label"
    >{{item.label}}</table-cell>

    <div class="payslip__header-menu">
      <base-icon name="icon-filter" hoverEffect></base-icon>
    </div>
  </div>
</template>

<script>
import TableCell from '@/components/atoms/TableCell/TableCell.vue';
import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue';

export default {
  components: { TableCell, BaseIcon },
  name: 'TableHeader',
  data () {
    return {
      header: [
        {
          label: this.$t('month')
        },
        {
          label: this.$t('payslip')
        },
        {
          label: this.$t('gross-salary')
        },
        {
          label: this.$t('net-pay')
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.payslip {
  &__header {
    @include tableRow();
    color: $dark-gray;
    font-weight: $bold;
  }
}
</style>
