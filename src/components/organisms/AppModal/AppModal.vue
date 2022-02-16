<template>
  <div class="modal">
    <transition name="fade" appear>
      <div class="modal__overlay" v-if="showModal" @click="closeModal"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal__content" v-if="showModal">
        <slot></slot>
        <div class="modal__close" @click="closeModal">+</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('on-modal-close');
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  &__overlay {
    @include positionZero();
    position: fixed;
    z-index: 98;
    background-color: $lighter-gray;
  }

  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, calc(-50% + 18px));
    z-index: 99;
    width: calc(100vw - 72px);
    height: calc(100vh - 36px);
    background-color: $white;
    border-radius: 12px 12px 0 0;
    padding: $base-padding * 4;
  }

  &__close {
    background-color: $darker-gray;
    border-radius: 24px;
    color: $white;
    cursor: pointer;
    font-size: $base-font-size * 3;
    line-height: $base-height * 6;
    height: $base-height * 6;
    width: $base-height * 6;
    position: absolute;
    text-align: center;
    top: 30px;
    right: 30px;
    will-change: transform;
    transform: rotate(45deg);
    transition: transform 0.6s ease;

    &:hover {
      transform: rotate(135deg);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-50%) translateY(100vh);
}
</style>
