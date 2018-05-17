<template>
	<header class="dt-header" :style="{ height }">
		<slot></slot>
	</header>
</template>

<script>
	export default {
		name: 'DtHeader',
    componentName: 'DtHeader',

		props: {
			height: {
				type: String,
				default: '60px'
			}
		}
	}
</script>