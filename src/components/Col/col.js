export default {
	name: 'DtCol',

	props: {
		span: {
			type: Number,
			default: 24
		}
	},

	render(createElement) {
		let classList = [];
		// 根据 span 来计算百分比
		if (this.span || this.span === 0) {
			classList.push(`dt-col-${this.span}`)
		}

		return createElement(
			'div',
			{
				class: [
					'dt-col',
					classList
				]
			},
			this.$slots.default);
	}
}