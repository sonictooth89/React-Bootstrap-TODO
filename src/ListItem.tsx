
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import './ListItem.css';

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

export const ListItem = () => {

    const [id, setId] = useState(1);
    const [content, setContent] = useState('');
    const [complete, setComplete] = useState(false);


    return (
        <div>
            {items.map(oneItem => {
                return <ListGroup.Item 
                        key={oneItem.id} 
                        className={oneItem.complete ? "completed" : ""}>
                        {oneItem.id} {oneItem.content} {oneItem.complete ? " - done! -" : ""}
                        </ListGroup.Item>
            })}
        </div>
        
    )
}
 