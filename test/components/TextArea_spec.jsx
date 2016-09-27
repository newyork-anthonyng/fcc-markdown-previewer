import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag,
	Simulate
} from 'react-addons-test-utils';
import { TextArea } from '../../src/components/TextArea';
import { expect } from 'chai';

describe('TextArea', () => {
	it('should render a textarea', () => {
		const component = renderIntoDocument(<TextArea />);
		const textArea = findRenderedDOMComponentWithTag(component, 'textarea');

		expect(textArea).to.be.ok;
	});

	it('should run callback when text is entered', () => {
		let onTextChangeInvoked = false;
		const callback = (value) => { onTextChangeInvoked = value };
		const component = renderIntoDocument(
			<TextArea
				onTextChange={callback}
			/>
		);
		const textArea = findRenderedDOMComponentWithTag(component, 'textarea');

		textArea.value = 'kittens';
		Simulate.change(textArea);

		expect(onTextChangeInvoked).to.equal('kittens');
	});
});
