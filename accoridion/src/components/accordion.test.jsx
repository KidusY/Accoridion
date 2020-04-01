import React from 'react';
import renderer from 'react-test-renderer';
import Accordion from './Accordion/accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
const sectionsProp = {
	title   : '',
	content : ''
};
describe('<Accordion />', () => {
	it('renders an empty li when the sections prop is not supplied.', () => {
		const wrapper = shallow(<Accordion />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('Renders no section active by default', () => {
		const wrapper = shallow(<Accordion sections={sectionsProp} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	it('Opens a clicked section', () => {
		const wrapper = shallow(<Accordion sections={sectionsProp} />);
		console.log('>>> FIND(BUTTON) <<<');
		console.log(wrapper.find('button').debug());
		wrapper.find('button').at(0).simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
