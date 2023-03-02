import { Fragment, useRef, useState } from "react";


const Input = ({ addTodo }) => {

    const [ state, setState ] = useState('')

    const inputRef = useRef(null)
    
    const handleChange = (event) => {
        setState(event.target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        
        const todo = { title: state, desc: inputRef.current.value}
        
        addTodo(todo)
        setState('')
        inputRef.current.value = ''
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
            <input
                value={state} 
                onChange={handleChange} 
                className="input" 
                name='value' 
                placeholder="Write something"
            />
            <input
                ref={inputRef}
                className="input" 
                name='value' 
                placeholder="Write something"
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default Input;