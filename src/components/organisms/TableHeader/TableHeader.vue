<template>
  <div class="payslip__header">
    <div class="payslip__header-checkbox">1</div>

    <table-cell
      v-for="item in header"
      :key="item.label"
    >{{item.label}}</table-cell>

    <div class="payslip__header-menu">
      <base-icon name="filter-icon" hoverEffect></base-icon>
    </div>
  </div>
</template>

<script>
import TableCell from '@/components/atoms/TableCell/TableCell.vue'
import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue'

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
    }
  }
}
</script>

<style lang="scss" scoped>
.payslip {
  &__header {
    align-items: center;
    color: $dark-gray;
    display: grid;
    grid-template-columns: 26px 3fr 10fr 2fr 2fr 32px;
    grid-column-gap: $base-margin * 3;
    padding: $base-padding - 1 $base-padding * 3;
    font-weight: $bold;
  }
}
</style>
