<template>
	<footer class="dt-footer" :style="{ height }">
		<slot></slot>
	</footer>
</template>

<script>
	export default {
		name: 'DtFooter',
    componentName: 'DtFooter',

		props: {
			height: {
				type: String,
				default: '60px'
			}
		}
	}
</script>