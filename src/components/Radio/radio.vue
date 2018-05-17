<template>
  <label
    class="dt-radio"
    :class="[
      border && radioSize ? 'dt-radio--' + radioSize : '',
      { 'is-checked': model === label },
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-focus': focus },
    ]"
    role="radio"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = label"

    :aria-checked="model === label"
    :aria-disabled="isDisabled"
  >
    <span class="dt-radio__input"
      :class="{
        'is-checked': model === label,
        'is-disabled': isDisabled
      }">
      <span class="dt-radio__inner"></span>
      <input
        class="dt-radio__original"
        type="radio"

        :value="label"
        v-model="model"
        @change="handleChange"

        :name="name"
        @focus="focus = true"
        @blur="focus = false"
        tabIndex="-1"
      />
    </span>
    <span class="dt-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '@/common/mixins/emitter'

export default {
  name: 'DtRadio',
  componentName: 'DtRadio',

  mixins: [Emitter],

  props: {
    value: {}, // 组件支持 v-model
    label: {},
    disabled: Boolean,
    border: Boolean,
    size: String,
    name: String,
  },

  data() {
    return {
      focus: false
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('DtRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val); // 与 v-model 绑定
        }
      }
    },
    isGroup() {
      let parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'DtRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }

      return false;
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled
        : this.disabled
    },
    radioSize() {
      return this.size
    },
    tabIndex() {
      return !this.isDisabled ? 0 : -1;
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.model);

      this.$nextTick(() => {
        this.isGroup && this.dispatch('DtRadioGroup', 'change', this.model);
      })
    }
  }
}
</script>
