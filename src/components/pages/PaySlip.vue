<template>
  <pay-slip-templates>
    <template #app-title>
      <hero />
    </template>

    <pay-slip-header-templet
    :active-index="activeManu"
    :menu-items="menuItems"
    @on-menu-click="menuSelected"
    @on-search="filterData"></pay-slip-header-templet>

    <pay-slip-table :currency="currencys[activeManu]" :year="year"></pay-slip-table>

  </pay-slip-templates>
</template>

<script>
import PaySlipTemplates from '@/components/templates/PaySlipTemplates/PaySlipTemplates.vue'
import Hero from '@/components/atoms/Hero/Hero.vue'
import PaySlipHeaderTemplet from '@/components/templates/PaySlipHeaderTemplet/PaySlipHeaderTemplet.vue'
import PaySlipTable from '@/components/organisms/PaySlipTable/PaySlipTable.vue'

export default {
  name: 'PaySlip',
  data () {
    return {
      activeManu: 0,
      year: 2021,
      currencys: [this.$t('EURO'), this.$t('USD')]
    }
  },
  components: { PaySlipTemplates, Hero, PaySlipHeaderTemplet, PaySlipTable },
  computed: {
    menuItems () {
      return [`${this.$t('EURO')} ()`, `${this.$t('USD')} ()`]
    }
  },
  methods: {
    menuSelected (index) {
      this.activeManu = index
    },
    filterData (year) {
      this.year = year
    }
  }
}
</script>

<style scoped>

</style>
