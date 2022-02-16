<template>
  <label class="checkbox">
    {{ label }}
    <input
      class="checkbox"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckBox',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
      type: String
    },
    modelValue: {
      default: ''
    },
    label: {
      type: String
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    isChecked () {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
    }
  },
  methods: {
    updateInput (event) {
      const isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit('change', newValue);
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: block;
  position: relative;
  padding-left: $base-padding * 4;
  margin-bottom: 6px;
  cursor: pointer;
  user-select: none;
  font-size: $base-font-size + 4;

  input {
    cursor: pointer;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: -13px;
    left: -4px;
    height: 14px;
    width: 14px;
    border-radius: 4px;
    background-color: $light-yellow;
    border: 2px solid $black;

    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 3px;
        top: 0px;
        width: 4px;
        height: 8px;
        border: solid $orange;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
  }

  &:hover input ~ .checkmark {
    background-color: $light-yellow;
  }

  input:checked ~ .checkmark {
    background-color: $white;
    &:after {
      display: block;
    }
  }
}
</style>
