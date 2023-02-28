
import classes from '../style.module.css'

function Title(props) {
    console.log(classes)
    const { children } = props
    return (
      <h1 className={classes.title}>
        {children}
      </h1>
    )
}

export default Title