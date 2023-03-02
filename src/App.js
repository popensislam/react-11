
import { useState } from 'react';
import './App.css';
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

  return (
    <div className="App">
      <Input addTodo={addTodo}/>
      <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}

export default App;
