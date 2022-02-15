<template>
  <ul class="menu">
    <li v-for="(item, index) in listItems" :key="index">
      <menu-item :is-active="activeIndex === index" @click="$emit('on-menu-click', index)">
        {{ item }}
      </menu-item>
    </li>
  </ul>
</template>

<script>
import MenuItem from '@/components/atoms/MenuItem/MenuItem.vue'

export default {
  name: 'MenuList',
  props: {
    listItems: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: Number,
      default: null
    }
  },
  components: { MenuItem }
}
</script>

<style lang="scss" scoped>
.menu {
  li {
    display: inline-block;
  }
}
</style>
