<template>
  <div :class="`tooltip ${position}`">
    <slot></slot>
    <span class="tooltip-text">{{ content }}</span>
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
}
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
  .tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: $black;
    color: $white;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
    &::after {
      content: "";
      position: absolute;
      border-width: 5px;
      border-style: solid;
    }
  }
  &:hover {
    .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
  }
}
.top {
  .tooltip-text {
    bottom: 200%;
    left: 50%;
    margin-left: -48px;
    &::after {
      margin-left: -5px;
      left: 50%;
      top: 100%;
      border-color: $black transparent transparent transparent;
    }
  }
}
.right {
  .tooltip-text {
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
  .tooltip-text {
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
  .tooltip-text {
    top: -5px;
    right: 110%;
    &::after {
      top: 50%;
      margin-top: -5px;
      left: 100%;
      border-color: transparent transparent transparent $black;
    }
  }
}
</style>
