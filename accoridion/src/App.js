import React from 'react';

import './App.css';
import Accordion from './components/Accordion/accordion';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: 'Section 1',
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
					title: 'Section 2',
					content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
				},
				{
					title: 'Section 3',
					content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
				}
			],
			render: false
		};
	}
	

	render() {
		return (
			<div className='App'>
				{this.state.sections.map((section) => (
					<Accordion section={section} />
				))}

			</div>
		);
	}
}

export default App;
