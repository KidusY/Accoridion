import React from 'react';

class Accordion extends React.Component{
    constructor (props) {
        super ();
        this.state = {
            render: false
        }
    }
    setRender = () => {
        this.setState({ render: !this.state.render });
        console.log('button')
	};
    render () {
        return (
        
        <div>
            <ul> 
                <li> <button onClick={()=>this.setRender()}> {this.props.section.title}</button> </li>
                {this.state.render && (
                    <li><p>{this.props.section.content}</p></li>
                )}
               
            </ul>
        </div>)
    
    }
    

};

export default Accordion;