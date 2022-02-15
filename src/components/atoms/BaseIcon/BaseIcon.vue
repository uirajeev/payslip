<template>
  <div
    class="base-icon"
    :class="{'base-icon__hover' : hoverEffect}"
  >
    <component
      :is="name"
      role="img"
    />
  </div>
</template>

<script>
import ChevronLeft from '@/assets/icons/ChevronLeft.svg'
import ChevronRight from '@/assets/icons/ChevronRight.svg'
import FilterIcon from '@/assets/icons/FilterIcon.svg'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    hoverEffect: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    'filter-icon': FilterIcon
  }
}
</script>

<style lang="scss" scoped>
.base-icon {
  cursor: pointer;
  display: inline-block;

  &__hover {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $base-height * 2;
    height:  $base-height * 4;
    width:  $base-height * 4;
    will-change: background-color;
    transition: background-color 0.6s ease-in-out;

    &:hover {
      background-color: $light-yellow;
    }
  }
}
</style>
