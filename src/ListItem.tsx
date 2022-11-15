
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import './ListItem.css';


const ListItem = () => {

    const [id, setId] = useState(1);
    const [content, setContent] = useState('');
    const [complete, setComplete] = useState(false);

    const items = [
        {
            id: 1,
            content: "Tidy my room",
            complete: false
        }, 
        {
            id: 2,
            content: "Cooking dinner",
            complete: true
        },
        {
            id: 3,
            content: "Video Call with mom",
            complete: false
        },
    ];

    

    return (
        <div>
            {items.map(item => {
                return <ListGroup.Item 
                            key={item.id} 
                            className={item.complete ? "completed" : ""}>
                                {item.id} {item.content} {item.complete ? " - done! -" : ""}
                        </ListGroup.Item>
            })}
        </div>
        
    )
}
 
export default ListItem;