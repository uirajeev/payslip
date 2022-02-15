<template>
  <template v-if="paySlips">
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

        <table-cell class="payslip__date">
          <tooltip content="Top tooltip">
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

        <table-cell>{{ item.fileAttachment.file.label }}</table-cell>

        <table-cell>{{
          getAmount(item.payslipEntries, $t("gross-key"))
        }}</table-cell>

        <table-cell>{{
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
</template>

<script>
import jsonData from '@/data/payslips.json'
import { getMonthYear } from '@/utility/date'
import TableCell from '@/components/atoms/TableCell/TableCell.vue'
import BaseCheckBox from '@/components/atoms/BaseCheckBox/BaseCheckBox.vue'
import ExpandButton from '@/components/molecules/ExpandButton/ExpandButton.vue'

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
    }
  },
  data () {
    return {
      paySlipJson: jsonData,
      activeIndex: null
    }
  },
  components: { TableCell, BaseCheckBox, ExpandButton },
  computed: {
    paySlips () {
      return this.paySlipJson.filter(
        (item) =>
          item.payslipEntries[0].currency === this.currency &&
          parseInt(item.payrollDate.split('-')[0]) === this.year
      )
    }
  },
  methods: {
    getMonthYear,
    getAmount (item, key) {
      const { amount, currency } = item.filter((item) => item.key === key)[0]
      return `${amount.toFixed(2)} ${currency}`
    },
    toggleRow (index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>

<style lang="scss" scoped>
.payslip {
  &__row {
    align-items: center;
    border: 1px solid;
    border-color: $light-gray transparent transparent transparent;
    color: $black;
    cursor: pointer;
    display: grid;
    font-size: $base-font-size + 2;
    grid-template-columns: 26px 3fr 10fr 2fr 2fr 32px;
    grid-column-gap: $base-margin * 3;
    padding: $base-padding - 1 $base-padding * 3;
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
}
</style>
