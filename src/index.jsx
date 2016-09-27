import React from 'react';
import ReactDOM from 'react-dom';
import { TextArea } from './components/TextArea';
import { Markdown } from './components/Markdown';

const App = React.createClass({
	getInitialState: function() {
		return { text: '' };
	},

	handleTextChange: function(value) {
		this.setState({
			text: value
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

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
