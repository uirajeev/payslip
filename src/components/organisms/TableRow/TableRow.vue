<template>
  <template v-if="paySlips.length">
    <div
      class="payslip__container"
      v-for="(item, index) in paySlips"
      :key="item.id"
      :class="{ payslip__active: index === activeIndex }"
    >
      <div class="payslip__row" @click="toggleRow(index)">
        <div>
          {{ index + 1 }}
          <base-check-box
            class="payslip__checkbox"
            lable=""
            :value="item.id"
          ></base-check-box>
        </div>

        <table-cell class="payslip__date" :label="header[0].label">
          <tooltip :content="index === activeIndex ? $t('close') : $t('open')">
            <span class="payslip__expand-button-container">
              <expand-button
                class="payslip__expand-button"
                :class="{ 'expand-button__active': index === activeIndex }"
              ></expand-button>
            </span>
          </tooltip>
          <span class="payslip__date-label">{{
            getMonthYear(item.payrollDate)
          }}</span>
        </table-cell>

        <table-cell :label="header[1].label">{{ item.fileAttachment.file.label }}</table-cell>

        <table-cell :label="header[2].label">{{
          getAmount(item.payslipEntries, $t("gross-key"))
        }}</table-cell>

        <table-cell :label="header[3].label">{{
          getAmount(item.payslipEntries, $t("net-pay-key"))
        }}</table-cell>

        <div class="payslip__menu">
          <div class="payslip__menu-icon">&#xFE19;</div>
        </div>
      </div>
      <div class="payslip__pdf-container">
        <div class="payslip__pdf-outer-frame">
          <div class="payslip__pdf-inner-frame">
            <iframe
              :src="`/web/pdfs/${item.fileAttachment.accessToken}.pdf#toolbar=0&view=Fit`"
              allowtransparency="true"
              frameborder="0"
              width="100%"
              height="1140"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  <div v-else class="payslip__no-data">
    {{$t('no-filter-data', {year: year, currency: currency})}}
  </div>
</template>

<script>
import { getMonthYear } from '@/utility/date';
import TableCell from '@/components/atoms/TableCell/TableCell.vue';
import BaseCheckBox from '@/components/atoms/BaseCheckBox/BaseCheckBox.vue';
import ExpandButton from '@/components/molecules/ExpandButton/ExpandButton.vue';

export default {
  name: 'TableRow',
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
  },
  data () {
    return {
      activeIndex: null,
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
  },
  components: { TableCell, BaseCheckBox, ExpandButton },
  computed: {
    paySlips () {
      return this.tableRowData.filter(
        (item) =>
          item.payslipEntries[0].currency === this.currency &&
          parseInt(item.payrollDate.split('-')[0]) === this.year
      );
    }
  },
  methods: {
    getMonthYear,
    getAmount (item, key) {
      const { amount, currency } = item.filter((item) => item.key === key)[0];
      return `${amount.toFixed(2)} ${currency}`;
    },
    toggleRow (index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style lang="scss" scoped>
.payslip {
  &__row {
    @include tableRow();
    border: 1px solid;
    border-color: $light-gray transparent transparent transparent;
    color: $black;
    cursor: pointer;
    font-size: $base-font-size + 2;
    transition-property: background-color, border-color;
    transition-duration: 0.6s;
    transition-timing-function: ease;
    will-change: background-color, border-color;

    &:last-child {
      border-color: $light-gray transparent $light-gray transparent;
    }

    .payslip__checkbox {
      opacity: 0;
      will-change: opacity;
      transition: opacity 0.5s ease;
    }

    .payslip__date-label {
      margin-left: 0;
      display: inline-block;
      transition: margin-left 0.6s ease;
      will-change: margin-left;
    }

    .payslip__expand-button-container {
      position: relative;
      display: inline-block;
    }

    .payslip__expand-button {
      top: -20px;
      position: absolute;
      opacity: 0;
    }

    .expand-button__active {
      top: -16px;
    }

    &:hover {
      background-color: $light-yellow;
      border-color: $black;

      .payslip__date-label {
        margin-left: $base-margin * 4;
        display: inline-block;
      }

      .payslip__expand-button,
      .payslip__checkbox {
        opacity: 1;
      }
    }

    :deep .payslip__date {
      color: $orange;
    }
  }

  &__pdf-container {
    border: 1px solid $black;
    border-top: 0;
    border-bottom-width: 0;
    max-height: 0;
    overflow: hidden;
    will-change: max-height;
    transition: max-height 0.6s ease;
  }

  &__pdf-outer-frame {
    max-width: 790px;
    max-height: 1120px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  &__pdf-inner-frame {
    width: 810px;
    margin: -10px 0 0 -10px;
  }

  &__active {
    box-shadow: $container-shadow;
    border: 1px solid $light-yellow;
    margin-bottom: $base-margin * 2;

    .payslip__row {
      background-color: $light-yellow;
      border-color: $black;
    }

    .payslip__pdf-container {
      border-bottom-width: 1px;
    }

    &:hover {
      .payslip__checkbox {
        opacity: 0;
      }
    }
    .payslip__date-label {
      margin-left: $base-margin * 4;
      display: inline-block;
    }

    .payslip__expand-button {
      opacity: 1;
    }
    .payslip__pdf-container {
      max-height: 2000px;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-items: center;
  }
  &__menu-icon {
    border-radius: 4px;
    cursor: pointer;
    font-size: $base-font-size * 2;
    height: $base-height * 4;
    line-height: $base-height * 4;
    width: $base-height * 4;
    text-align: center;
    transition-property: background-color, color;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    will-change: background-color, color;

    &:hover {
      background-color: $black;
      color: $white;
    }
  }
  &__no-data{
    padding: $base-padding * 5;
    font-size: $base-font-size * 3;
    text-align: center;
  }
}

@media only screen and (max-width: 1023px) {
  .payslip {
    &__row {
      padding-bottom: $base-padding * 2;
      grid-template-areas:
        "count count count count count action"
        "date date date date date date"
        "filename filename filename filename filename filename"
        "eur eur eur eur eur eur"
        "usd usd usd usd usd usd";
      & > div {
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          padding-left: 100px;
          position: relative;
          &::before {
            content: attr(data-heading);
            color: $dark-gray;
            font-weight: $bold;
            position: absolute;
            top: 2px;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
