import React from 'react';

const Markdown = React.createClass({
	propTypes: {
		html: React.PropTypes.string
	},

	render: function() {
		const markup = {
			__html: this.props.html
		};

		return (
			<div
				id="markdown"
				dangerouslySetInnerHTML={markup}
			/>
		);
	}
});

export { Markdown };
