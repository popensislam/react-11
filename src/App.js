
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Input from './components/Input';
import TodoList from './components/TodoList';


function App() {

  const [ list, setList ] = useState([])

  const addTodo = (todo) => {
    const newList = [ ...list, { ...todo, id: Date.now()} ]
    setList(newList)
  }

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
  }
  
  const editTodo = (todo) => {
    const newList = list.map((item) => {
      if (item.id === todo.id) {
        return todo
      } else {
        return item
      }
    })
    setList(newList)
  }

  const [ isShow, setIsShow ] = useState(false)

  const titleButton = isShow ? 'HIDE' : 'SHOW'
  
  return (
    <div className="App">
      <button onClick={() => setIsShow(!isShow)}>{titleButton}</button>
      {
        isShow && (
          <Counter/>
        )
      }
      <Input addTodo={addTodo}/>
      <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}

export default App;
