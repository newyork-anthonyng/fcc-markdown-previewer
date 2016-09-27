import React from 'react';
import { TextArea } from './TextArea';
import { Markdown } from './Markdown';
import marked from 'marked';

const App = React.createClass({
	getInitialState: function() {
		return { text: '' };
	},

	handleTextChange: function(value) {
		this.setState({
			text: marked(value)
		});
	},

	render: function() {
		return (
			<div>
				<TextArea
					onTextChange={this.handleTextChange}
				/>
				<Markdown
					html={this.state.text}
				/>
			</div>
		);
	}
});

export { App };
