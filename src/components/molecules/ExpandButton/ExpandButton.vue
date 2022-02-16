<template>
  <div class="expand-button">
      <span class="expand-button__arrow-top">
        <base-icon class="expand-button__arrow" name="icon-chevron-left"></base-icon>
      </span>
      <span class="expand-button__arrow-bottom">
        <base-icon class="expand-button__arrow" name="icon-chevron-right" ></base-icon>
      </span>
  </div>
</template>

<script>
import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue';
export default {
  components: { BaseIcon },
  name: 'ExpandButton'
};
</script>

<style lang="scss" scoped>
.expand-button {
  background-color: transparent;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: $base-height * 4;
  width: $base-height * 3;
  position: relative;
  padding-left: 1px;
  will-change: background-color, opacity;
  transition-property: background-color, opacity;
  transition-duration: 0.6s;
  transition-timing-function: ease;

  &__arrow-bottom {
    @include arrow();
    margin-top: -2px;
  }
  &__arrow-top {
    @include arrow();
    margin-bottom: -2px;
  }

  &:hover {
    background-color: $black;

    .expand-button__arrow-top{
      margin-bottom: 1px;
    }

    .expand-button__arrow-bottom{
      margin-top: 1px;
    }

    :deep path[fill] {
      fill: $orange;
    }
  }

  &__active {
    border-radius: 12px;
    height: $base-height * 3;

    :deep .expand-button__arrow {
      transform: rotate(-90deg);
    }

    .expand-button__arrow-bottom {
      margin-top: 0;
    }

    .expand-button__arrow-top {
      margin-bottom: 0;
    }

    &:hover {
      .expand-button__arrow-top{
        margin-bottom: -3px;
      }

      .expand-button__arrow-bottom{
        margin-top: -3px;
      }
    }
  }
}
</style>
