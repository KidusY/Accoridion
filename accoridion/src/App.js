import React from 'react';

import './App.css';
import Accordion from './components/accoridion/accordion';
class App extends React.Component {
	constructor () {
		super();
		this.state = {
			sections : [
				{
					title   : 'Section 1',
					content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
					title   : 'Section 2',
					content : 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
				},
				{
					title   : 'Section 3',
					content : 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
				}
			],
			render   : false
		};
	}
	setRender = () => {
		this.setState({ render: !this.state.render });
	};

	render () {
		return (
			<div className='App'>
				<Accordion section={this.state.sections} render={this.state.render} setRender={this.setRender} />
			</div>
		);
	}
}

export default App;
