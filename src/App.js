import {
  lazy, Suspense, useEffect, useState,
} from 'react';
import './App.css';
import Input from './components/Input';
import RenderProp from './components/RenderProp';
import TodoList from './components/TodoList';
import ErrorBoundary from './ErrorBoundary';

const ModalExm = lazy(() => import('./components/ModalExm'));

function App() {
  const [list, setList] = useState([]);

  const [isShow, setIsShow] = useState(false);

  const titleButton = isShow ? 'HIDE' : 'SHOW';

  const addTodo = (todo) => {
    const newList = [...list, { ...todo, id: Date.now() }];
    setList(newList);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);

    localStorage.setItem('list', JSON.stringify(newList));
    setList(newList);
  };

  const editTodo = (todo) => {
    const newList = list.map((item) => {
      if (item.id === todo.id) {
        return todo;
      }
      return item;
    });
    setList(newList);
  };

  useEffect(() => {
    const listLocal = JSON.parse(localStorage.getItem('list'));
    if (listLocal) {
      setList(listLocal);
    }
  }, []);

  useEffect(() => {
    if (list.length === 0) return;
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    throw new Error();
  }, []);

  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <RenderProp render={(state) => (
          <h1>
            {
                state.map((item) => <span>{item}</span>)
              }
          </h1>
        )}
        />

        <button onClick={() => setIsShow(!isShow)}>{titleButton}</button>

        {
          isShow && (
            <ModalExm isShow={isShow} setIsShow={setIsShow} />
          )
        }
        <Input addTodo={addTodo} />
        <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo} />
      </Suspense>
    </div>
  );
}

export default App;
