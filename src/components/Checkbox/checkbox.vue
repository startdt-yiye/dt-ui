<template>
  <label 
    class="dt-checkbox"
    :class="[
      border && checkboxSize ? 'dt-checkbox--' + checkboxSize : '',
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': isChecked }
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed': isChecked"
    :aria-disabled="isDisabled"
    :id="id"> 
    <span class="dt-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }">
      <!-- 复选框 -->
      <span class="dt-checkbox__inner"></span>
      <!-- 初始化勾选值，且隐藏 -->
      <input 
        v-if="trueLabel || falseLabel"
        class="dt-checkbox__original"

        type="checkbox"
        :name="name"
        v-model="model"
        
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"

        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"/>
      <!-- 渲染复选框，且隐藏 -->
      <input
        v-else
        class="dt-checkbox__original"
        
        type="checkbox"
        :name="name"
        :disabled="isDisabled"

        :value="label"
        v-model="model"

        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
        />
    </span>
    <span class="dt-checkbox__label" v-if="$slots.default || label">
      <!-- slot 内容分发 -->
      <slot></slot>
      <!-- label 属性分发 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '@/common/mixins/emitter'
export default {
  name: 'DtCheckbox',
  componentName: 'DtCheckbox',

  mixins: [Emitter],
  data() {
    return {
      selfModel: false, // 私有状态
      focus: false
    }
  },
  computed: {
    model: { // v-model 的绑定，依赖于 isGroup
      get() {
        return this.isGroup 
          ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set(val) {
        console.log(val, 'setmodel', this.isGroup)
        if (this.isGroup) {
          this.dispatch('DtCheckboxGroup', 'input', [val]);
        } else {
          // 使用 v-model 自定义组件，需抛出 input
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },

    isGroup() { // 判断是否上多选框组
      let parent = this.$parent;

      // 循环遍历
      while (parent) {
        if (parent.$options.componentName !== 'DtCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent; 
          return true;
        }
      }
      return false;
    },

    store() { // 多选框组返回私有变量的value，只有一个单选框返回value
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },

    isChecked() { // 检查是否已经勾选，依赖于 this.model
      if ({}.toString.call(this.model) === '[object Boolean]') { // 布尔
        return this.model;
      } else if (Array.isArray(this.model)) { // 数组
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },

    isDisabled() { // 分多选框组和单个的多选框：检查是否禁止勾选
      return this.isGroup 
        ? this._checkboxGroup.disabled || this.disabled 
        : this.disabled
    },

    checkboxSize() { // 分多选框组和单个的多选框：大小
      return this.isGroup
        ? this._checkboxGroup.checkboxGroupSize
        : this.size
    }
  },
  props: {
    value: {}, // v-model 会默认接收 value 
    label: {},
    indeterminate: Boolean,
    disabled: Boolean, // 禁止状态
    checked: Boolean, // 选中状态

    name: String, // 原生 name 属性
    trueLabel: [String, Number], // 默认选中值
    falseLabel: [String, Number], // 默认不选中值

    id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/

    border: Boolean, // 边框
    size: String // 大小
  },
  methods: {
    addToStore() {
      if ( // 查找 label 标签属性
        Array.isArray(this.model) &&
        this.model.indexOf(this.label) === -1
      ) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange(ev) {
      let value;
      if (ev.target.checked) {
        value = true;
      } else {
        value = false;
      }

      // 分发 checkbox change 事件
      this.$emit('change', value, ev);

      // 分发 checkbox-group change 事件
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('DtCheckboxGroup', 'change', [this._checkboxGroup.value]);
        }
      });
    }
  },
  created() {
    this.checked && this.addToStore();
  },
  mounted() {
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls);
    }
  }
}
</script>
