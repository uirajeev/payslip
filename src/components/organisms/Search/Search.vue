<template>
  <div class="search">
      <arrow arrow="left" @click="prevYear" />
      <input-text v-model="year" @keyup="searchVal($event)" />
      <arrow arrow="right" @click="nextYear" />
  </div>
</template>

<script>
import Arrow from '@/components/molecules/Arrow/Arrow.vue'
import InputText from '@/components/atoms/TextInput/TextInput.vue'

export default {
  name: 'Search',
  components: { Arrow, InputText },
  data () {
    return {
      year: 2019
    }
  },
  methods: {
    prevYear () {
      this.year--
      this.$emit('on-search', this.year)
    },
    nextYear () {
      this.year = parseInt(this.year) + 1
      this.$emit('on-search', this.year)
    },
    searchVal (event) {
      this.$emit('on-search', parseInt(event.target.value))
    }
  },
  mounted () {
    this.$emit('on-search', this.year)
  }
}
</script>

<style lang="scss" scoped>
.search {
    align-items: center;
    background: $white;
    border: 4px solid $white;
    border-radius: 29px;
    display: flex;
    justify-items: center;
    margin-right: $base-margin;
    width: 100%;
    max-width: 336px;
    height: 40px;
}
</style>
