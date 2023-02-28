
import classes from '../style.module.css'

const ListText = ({ arr }) => {

    const boolean = true 

    return (
        <div>
            {arr.map((item) => 
                <h1 style={boolean ? { color: 'red' } : { color: 'blue'}} key={item}>{item.name}</h1>
            )}

            {
                boolean 
                ?
                <h1>TRUEEE</h1>
                :
                <h1>NOT TRUE</h1>
            }

            {
                boolean && (
                    <h1>TRUEEE WITH ONE IF</h1>
                )
            }
        </div>
    )
}

export default ListText