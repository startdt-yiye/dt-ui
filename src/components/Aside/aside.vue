<template>
  <aside class="dt-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'DtAside',

    componentName: 'DtAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  }
</script>

