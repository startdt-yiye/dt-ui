<template>
  <div class="dt-radio-group"
    role="radiogroup">
    <slot></slot>
    <span style="font-size: 20px;">{{value}}</span>
  </div>
</template>

<script>
export default {
  name: 'DtRadioGroup',
  componentName: 'DtRadioGroup',

  props: {
    value: {},
    size: String,
    disabled: Boolean
  },

  computed: {
    radioGroupSize() {
      return this.size
    }
  }
}
</script>
