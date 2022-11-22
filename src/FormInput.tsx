import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListItem from './ListItem';

function FormInput() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setText(e.target.value)
  }

  return (
    <>
    <Form className='px-5 py-5'>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Item</Form.Label>
          <Form.Control 
            type='text'
            value={text}
            onChange={handleChange}
            id="TextInput" 
            placeholder="item..." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Priority</Form.Label>
          <Form.Select id="Select">
            <option>priority high</option>
            <option>priority medium</option>
            <option>priority low</option>
          </Form.Select>
        </Form.Group>
        
        <Button 
          className='btn btn-info btn-lg text-white px-5 my-3'
          type="submit"
          onClick={handleClick} 

          >Add</Button>
      </fieldset>
    </Form>
    </>
  );
}

export default FormInput;