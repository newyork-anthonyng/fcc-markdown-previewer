import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import { TextArea } from '../../src/components/TextArea';
import { expect } from 'chai';

describe('TextArea', () => {
	it('should render a textarea', () => {
		const component = renderIntoDocument(<TextArea />);
		const textArea = findRenderedDOMComponentWithTag(component, 'textarea');

		expect(textArea).to.be.ok;
	});
});
