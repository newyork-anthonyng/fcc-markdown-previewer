import React from 'react';

const TextArea = React.createClass({
	propTypes: {
		onTextChange: React.PropTypes.func
	},

	handleChange: function(event) {
		this.props.onTextChange(event.target.value);
	},

	render: function() {
		return (
			<textarea
				onChange={this.handleChange}
			/>
		);
	}
});

export { TextArea };
