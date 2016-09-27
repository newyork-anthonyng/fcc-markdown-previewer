import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import { Markdown } from '../../src/components/Markdown';
import { expect } from 'chai';

describe('Markdown', () => {
	it('should render a div', () => {
		const component = renderIntoDocument(<Markdown />);
		const markdown = findRenderedDOMComponentWithTag(component, 'div');

		expect(markdown.id).to.equal('markdown');
	});

	it('should render HTML', () => {
		const innerHTML = '<h1>Hello World</h1>';
		const component = renderIntoDocument(
			<Markdown
				html={innerHTML}
			/>
		);
		const div = findRenderedDOMComponentWithTag(component, 'div');

		expect(div.textContent).to.equal('Hello World');
	});
});
