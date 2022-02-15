<template>
  <input type="text" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" class="input__text" />
</template>

<script>
export default {
  name: 'TextInput',
  props: ['modelValue']
}
</script>

<style lang="scss" scoped>
.input__text{
    border: 0;
    display: flex;
    flex-grow: 1;
    height: 36px;
    line-height: 36px;
    padding: 0 $base-padding * 2;

    &:focus {
        outline: none;
    }
}
</style>
