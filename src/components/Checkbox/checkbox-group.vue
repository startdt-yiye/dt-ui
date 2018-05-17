<template>
  <div class="dt-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DtCheckboxGroup',
  componentName: 'DtCheckboxGroup',

  props: {
    value: {}, // v-model 自定义组件默认接收 value 属性
    disabled: Boolean, // 禁止多选框可选
    size: String,
  },
  computed: {
    checkboxGroupSize() {
      return this.size
    }
  },
  created() {
    console.log(this.value, 'group')
  }
}
</script>

