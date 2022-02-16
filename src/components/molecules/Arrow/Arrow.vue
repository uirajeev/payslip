<template>
  <div
    class="arrow"
    :class="`arrow__${arrow}`"
  >
      <base-icon :name="`icon-chevron-${arrow}`"></base-icon>
  </div>
</template>

<script>
import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue';

export default {
  name: 'Arrow',
  props: {
    arrow: String,
    validator: value => {
      return ['left', 'right'].indexOf(value) !== -1;
    }
  },
  components: { BaseIcon }
};
</script>

<style lang="scss" scoped>
.arrow {
  background: $orange;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  will-change: background-color;
  transition: background-color 0.6s ease;

  &:hover {
     background-color: $dark-orange;
  }
  &__left {
    border-radius: 50% 0 0 50%;
  }

  &__right {
    border-radius: 0 50% 50% 0;
  }
}
</style>
