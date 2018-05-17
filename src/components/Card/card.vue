<template>
  <div class="dt-card">
    <div class="dt-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="dt-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DtCard',

    props: ['header', 'bodyStyle']
  }
</script>