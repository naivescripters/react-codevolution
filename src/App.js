import React, { Component } from 'react';
import './App.css';
import FocusInput from './components/FocusInput';
import RefsDemo from './components/RefsDemo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FocusInput />
        {/* <RefsDemo /> */}
      </div>
    )
  }
}

export default App