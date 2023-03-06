import { useState } from "react";

const IsEditTo = ({ name, isEdit, setIsEdit, title, handleChange, newValue }) => { 

    if (isEdit) {
        return <input name={name} value={newValue} onChange={handleChange} placeholder="EDIT"/>
    } else {
        return <h1 onClick={() => setIsEdit(true)}>{title}</h1>
    }
}

const TodoList = ({ list, deleteTodo, editTodo }) => {

    const [ isEdit, setIsEdit ] = useState(false)
    const [ newValue, setNewValue ] = useState({
        title: '',
        desc: ''
    })

    const handleChange = (e) => {
        setNewValue({ ...newValue, [ e.target.name ]: e.target.value })
    }

    const submitNewValue = (todo) => {
        const newTodo = { ...todo, title: newValue.title, desc: newValue.desc }
        editTodo(newTodo)
        setIsEdit(false)
    }

    return ( 
        <div>
            {list.map((todo) =>
                <div key={todo.id}>
                    <IsEditTo
                        name='title' 
                        newValue={newValue.title} 
                        handleChange={handleChange} 
                        isEdit={isEdit} 
                        setIsEdit={setIsEdit} 
                        title={todo.title}
                    />

                    <IsEditTo
                        name='desc' 
                        newValue={newValue.desc} 
                        handleChange={handleChange} 
                        isEdit={isEdit} 
                        setIsEdit={setIsEdit} 
                        title={todo.desc}
                    />

                    {
                        isEdit
                            ?
                                <button onClick={() => submitNewValue(todo)}>Сохранить</button>
                            :
                                <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
                    }
                </div>
            )}
        </div>
    );
}
 
export default TodoList;