<template>
  <payslip-templates>
    <template #app-title>
      <app-title />
    </template>

    <payslip-header-template
      :active-index="activeManu"
      :menu-items="menuItems"
      @on-menu-click="menuSelected"
      @on-search="filterData"
    ></payslip-header-template>

    <payslip-table
      :currency="currencys[activeManu]"
      :year="year"
      :table-row-data="jsonData"
    ></payslip-table>

    <div class="grpah__icon" @click="openModal">
      <tooltip :content="$t('view-salary-evolution')" position="left">
        <base-icon name="icon-graph"></base-icon>
      </tooltip>
    </div>
  </payslip-templates>

  <app-modal :show-modal="showModal" @on-modal-close="closeModal">
    <div class="no__data">{{ $t("no-data") }}</div>
  </app-modal>
</template>

<script>
import jsonData from '@/data/payslips.json';
import PayslipTemplates from '@/components/templates/PayslipTemplates/PayslipTemplates.vue';
import AppTitle from '@/components/atoms/AppTitle/AppTitle.vue';
import PayslipHeaderTemplate from '@/components/templates/PayslipHeaderTemplate/PayslipHeaderTemplate.vue';
import PayslipTable from '@/components/organisms/PayslipTable/PayslipTable.vue';
import AppModal from '@/components/organisms/AppModal/AppModal.vue';
import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue';
import Tooltip from '@/components/atoms/Tooltip/Tooltip.vue';

export default {
  name: 'Payslip',
  data () {
    return {
      jsonData,
      showModal: false,
      activeManu: 0,
      year: 2021,
      currencys: [this.$t('EURO'), this.$t('USD')]
    };
  },
  components: {
    PayslipTemplates,
    AppTitle,
    PayslipHeaderTemplate,
    PayslipTable,
    AppModal,
    BaseIcon,
    Tooltip
  },
  computed: {
    menuItems () {
      const count = this.jsonData.reduce(
        (payslipCount, item) => {
          payslipCount[item.payslipEntries[0].currency] += 1;
          return payslipCount;
        },
        {
          EUR: 0,
          USD: 0
        }
      );
      return [
        `${this.$t('EURO')} (${count.EUR})`,
        `${this.$t('USD')} (${count.USD})`
      ];
    }
  },
  methods: {
    menuSelected (index) {
      this.activeManu = index;
    },
    filterData (year) {
      this.year = year;
    },
    closeModal () {
      this.showModal = false;
    },
    openModal () {
      this.showModal = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.grpah__icon {
  border-radius: 50%;
  border: 4px solid $light-grayish-blue;
  box-sizing: content-box;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: $base-height * 6;
  position: absolute;
  top: 190px;
  right: 20px;
  width: $base-height * 6;
  z-index: 3;
  will-change: background-color;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: $light-yellow;
  }
}
.no__data{
    padding: $base-padding * 5;
    font-size: $base-font-size * 3;
    text-align: center;
  }
</style>
