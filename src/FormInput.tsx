import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function FormInput() {
  const [text, setText] = useState('');


  return (
    <>
    <Form className='px-5 py-5'>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Item.</Form.Label>
          <Form.Control 
            type='text'
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
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
          onClick={() => {

          }}

          >Add</Button>
      </fieldset>
    </Form>
    </>
  );
}

export default FormInput;