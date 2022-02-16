<template>
  <div :class="`tooltip ${position}`">
    <slot></slot>
    <span class="tooltip__text">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    position: {
      type: String,
      default: 'top'
    },
    content: String
  }
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
  .tooltip__text {
    background-color: $black;
    color: $white;
    border-radius: 6px;
    font-size: $base-font-size + 2;
    padding: 5px 0;
    position: absolute;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s;
    visibility: hidden;
    width: 140px;
    white-space: nowrap;
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      border-width: 5px;
      border-style: solid;
    }
  }
  &:hover {
    .tooltip__text {
      visibility: visible;
      opacity: 1;
    }
  }
}
.top {
  .tooltip__text {
    bottom: 200%;
    left: 50%;
    margin-left: -60px;
    &::after {
      margin-left: -5px;
      left: 50%;
      top: 100%;
      border-color: $black transparent transparent transparent;
    }
  }
}
.right {
  .tooltip__text {
    top: -5px;
    left: 110%;
    &::after {
      top: 50%;
      margin-top: -5px;
      right: 100%;
      border-color: transparent $black transparent transparent;
    }
  }
}
.bottom {
  .tooltip__text {
    top: 100%;
    left: 50%;
    margin-left: -60px;
    &::after {
      margin-left: -5px;
      bottom: 100%;
      left: 50%;
      border-color: transparent transparent $black transparent;
    }
  }
}
.left {
  .tooltip__text {
    top: calc(100% - 24px);
    right: calc(100% + 24px);
    &::after {
      top: 50%;
      margin-top: -5px;
      left: 100%;
      border-color: transparent transparent transparent $black;
    }
  }
}
</style>
