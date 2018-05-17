export default {
	name: 'DtRow',

	// 绘制 vnode 节点
	render(createElement) {
		return createElement(
			// 一个 HTML 标签字符串，组件选项对象或者解析以上两种的一个异步函数, { String | Object | Function }
			'div',

			// 包含模版相关属性的数据对象, { Object }
			{
				class: [
					'dt-row'
				]
			},

			// 子节点, { String | Object }
			this.$slots.default);
	}
}