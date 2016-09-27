import React from 'react';
import ReactDOM from 'react-dom';
import { TextArea } from './components/TextArea';

const App = React.createClass({
	render: function() {
		return (
			<TextArea />
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
