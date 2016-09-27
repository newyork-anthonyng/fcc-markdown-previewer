import React from 'react';
import ReactDOM from 'react-dom';
import { TextArea } from './components/TextArea';

const App = React.createClass({
	handleTextChange: function(value) {
	},

	render: function() {
		return (
			<TextArea
				onTextChange={this.handleTextChange}
			/>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
