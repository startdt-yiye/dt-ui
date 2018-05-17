<template>
	<section class="dt-container" :class="{ 'is-vertical': isVertical }">
		<slot></slot>
	</section>
</template>

<script>
	export default {
		name: 'DtContainer',
		componentName: 'DtContainer',

		props: {
			direction: String
		},

		computed: {
			isVertical() { // 依赖于 direction
				if (this.direction === 'vertical') { // 垂直布局
					return true;
				} else if (this.direction === 'horizontal') { // 水平布局
					return false;
				}

				// 默认，判断分发的 slots，default 是一个存放 vnode 的数组
				return this.$slots && this.$slots.default
					? this.$slots.default.some(vnode => {
						// 获取自定义组件的名字
						const tag = vnode.componentOptions && vnode.componentOptions.tag;

						// 子元素为 dt-header 或 dt-footer 就是垂直 vertical 布局
						return tag === 'dt-header' || tag === 'dt-footer';
					})
					: false;
			}
		}
	}
</script>