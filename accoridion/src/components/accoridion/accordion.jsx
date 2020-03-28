import React from 'react';

const Accordion = (props) => (
    
    <div>
        <ul> 
            <li> <button onClick={()=>props.setRender()}> {props.section.title}</button> </li>
            {props.render && (
                <li><p>{props.section.content}</p></li>
            )}
           
        </ul>

    </div>

);

export default Accordion;