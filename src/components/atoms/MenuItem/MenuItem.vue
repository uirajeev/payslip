<template>
  <a
    class="menu-item"
    :class="{ 'menu-item__active': isActive}"
  > <slot></slot></a>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-item {
  color: $white;
  cursor: pointer;
  display: inline-block;
  font-size: $base-font-size + 2;
  font-weight: $bold;
  line-height: 56px;
  padding: 0 $base-padding * 2;

  &:hover,
  &__active {
    background: $orange;
  }
}
</style>
