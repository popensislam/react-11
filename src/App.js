import ListText from './components/ListText';
import Title from './components/Title';

import './App.css';
import { useState } from 'react';

/**
 * То во что компилируется наш jsx
 * React.createElement('div', { className: App }, 'Hello World!, {
 *  React.createElement('div')
 * })
 */



function App() {
  
  const [ state, setState ] = useState(0)

  const isShow = true
  const arr = [ { name: 'John' }, { name: 'Smith' }, { name: 'Varlam' } ]
  
  if (!isShow) {
    return <></>
  }


  const title = 'Hello World!'

  return (
    <div className="App">
      {isShow && (
        <Title title={title} arr={arr}>
          Hello World!
        </Title>
      )}
      <ListText arr={arr}/>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>PLUS</button>
    </div>
  );
}

export default App;
