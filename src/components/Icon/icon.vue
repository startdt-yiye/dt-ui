<template>
	<i :class="'dt-icon-' + name"></i>
</template>

<script>
	export default {
		name: 'DtIcon',

		props: {
			name: String
		}
	}
</script>