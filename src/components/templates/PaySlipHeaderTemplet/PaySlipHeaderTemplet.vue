<template>
  <div class="header">
    <menu-list
      :list-items="menuItems"
      :active-index="activeIndex"
      @on-menu-click="$event => $emit('on-menu-click', $event)"
    ></menu-list>
    <search @on-search="$event => $emit('on-search', $event)"></search>
  </div>
</template>

<script>
import Search from '@/components/organisms/Search/Search.vue'
import MenuList from '@/components/molecules/MenuList/MenuList.vue'

export default {
  name: 'PaySlipHeaderTemplet',
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MenuList,
    Search
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $black;
  border-radius: 8px 30px 30px 8px;
  padding-left: $base-padding * 4;
  position: relative;
  z-index: 2;
}
</style>
