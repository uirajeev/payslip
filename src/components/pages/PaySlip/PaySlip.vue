<template>
  <pay-slip-templates>
    <template #app-title>
      <hero />
    </template>

    <pay-slip-header-templet
      :active-index="activeManu"
      :menu-items="menuItems"
      @on-menu-click="menuSelected"
      @on-search="filterData"
    ></pay-slip-header-templet>

    <pay-slip-table
      :currency="currencys[activeManu]"
      :year="year"
      :table-row-data="jsonData"
    ></pay-slip-table>

    <div class="grpah__icon" @click="openModal">
      <tooltip :content="$t('view-salary-evolution')" position="left">
        <base-icon name="icon-graph"></base-icon>
      </tooltip>
    </div>
  </pay-slip-templates>

  <app-modal :show-modal="showModal" @on-modal-close="closeModal">
    <h2>{{ $t("no-data") }}</h2>
  </app-modal>
</template>

<script>
import jsonData from '@/data/payslips.json';
import PaySlipTemplates from '@/components/templates/PaySlipTemplates/PaySlipTemplates.vue';
import Hero from '@/components/atoms/Hero/Hero.vue';
import PaySlipHeaderTemplet from '@/components/templates/PaySlipHeaderTemplet/PaySlipHeaderTemplet.vue';
import PaySlipTable from '@/components/organisms/PaySlipTable/PaySlipTable.vue';
import AppModal from '@/components/organisms/AppModal/AppModal.vue';
import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue';
import Tooltip from '@/components/atoms/Tooltip/Tooltip.vue';

export default {
  name: 'PaySlip',
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
    PaySlipTemplates,
    Hero,
    PaySlipHeaderTemplet,
    PaySlipTable,
    AppModal,
    BaseIcon,
    Tooltip
  },
  computed: {
    menuItems () {
      const count = this.jsonData.reduce(
        (obj, item) => {
          obj[item.payslipEntries[0].currency] += 1;
          return obj;
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
    },
    setCount (data) {
      console.log(data);
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
</style>
