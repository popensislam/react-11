import { useState } from "react";

const IsEditTo = ({ name, isEdit, title, handleChange, newValue }) => { 

    if (isEdit) {
        return <input className="editInput" name={name} value={newValue} onChange={handleChange} placeholder="EDIT"/>
    } else {
        return <h1 className="cardTitle">{title}</h1>
    }
}

const TodoList = ({ list, deleteTodo, editTodo }) => {

    const [ isEdit, setIsEdit ] = useState('')
    const [ newValue, setNewValue ] = useState({
        title: '',
        desc: ''
    })

    const handleChange = (e) => {
        setNewValue({ ...newValue, [ e.target.name ]: e.target.value })
    }

    const openEditPanel = (todo) => {
        setNewValue({ title: todo.title, desc: todo.desc })
        setIsEdit(todo.id)
    }

    const submitNewValue = (todo) => {
        const newTodo = { ...todo, title: newValue.title, desc: newValue.desc }
        editTodo(newTodo)
        setIsEdit(false)
    }

    return (
        <div className="listWrapper">
            {list.map((todo) =>
                <div className="todoCard" key={todo.id}>
                    <div className="todoCardTitleWrapper">
                        <IsEditTo
                            name='title' 
                            newValue={newValue.title} 
                            handleChange={handleChange} 
                            isEdit={isEdit === todo.id} 
                            title={todo.title}
                        />

                        <IsEditTo
                            name='desc' 
                            newValue={newValue.desc} 
                            handleChange={handleChange}
                            isEdit={isEdit === todo.id} 
                            title={todo.desc}
                        />
                    </div>
                    <div className="todoCardBtnWrapper">
                        <button className="btnCard" onClick={() => openEditPanel(todo)}>Edit</button>
                        {
                            isEdit
                                ?
                                    <button className="btnCard" onClick={() => submitNewValue(todo)}>Сохранить</button>
                                :
                                    <button className="btnCard" onClick={() => deleteTodo(todo.id)}>Удалить</button>
                        }
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default TodoList;