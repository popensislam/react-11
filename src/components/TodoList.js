import { useState } from "react";

const IsEditTo = ({ isEdit, setIsEdit, todo }) => { 

    if (isEdit) {
        return <input placeholder="EDIT"/>
    } else {
        return <h1 onClick={() => setIsEdit(true)}>{todo.title}</h1>
    }
}

const TodoList = ({ list, deleteTodo }) => {

    const [ isEdit, setIsEdit ] = useState(false)
    
    return ( 
        <div>
            {list.map((todo) => 
                    <div key={todo.id}>
                        <IsEditTo isEdit={isEdit} setIsEdit={setIsEdit} todo={todo}/>
                        <p>{todo.desc}</p>
                        <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
                    </div>
            )}
        </div>
    );
}
 
export default TodoList;