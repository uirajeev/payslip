<template>
  <h1 class="app-heading">{{ text2 }}</h1>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      text2: this.$t('app_title')
    }
  }
}
</script>

<style lang="scss">
.app-heading {
  font-size: $h1-font-size;
  font-weight: $bold;
  line-height: $h1-line-height;
}
</style>
