import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  it('renders an empty li when the sections prop is not supplied', () => {
    const li = renderer.create(<Accordion />).toJSON();
    expect(li).toMatchSnapshot();
  })
})