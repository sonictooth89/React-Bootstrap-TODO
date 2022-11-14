import React from 'react';

import './App.css';
import FormInput from './FormInput';
import List from './List';
import Progress from './Progress';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        My to do list
      </header>
      <div>
      <Progress />
      </div>
      <div className='Form'>
        <FormInput />
      </div>
      <div className='List'>
        <List />
      </div>
    </div>
  );
}

export default App;
