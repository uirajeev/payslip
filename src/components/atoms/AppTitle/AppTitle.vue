<template>
  <h1 class="app__title">{{ text2 }}</h1>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      text2: this.$t('app_title')
    };
  }
};
</script>

<style lang="scss">
.app__title {
  font-size: $h1-font-size;
  font-weight: $bold;
  line-height: $h1-line-height;
}
</style>
