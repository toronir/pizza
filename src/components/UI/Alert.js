import classes from "./Alert.module.css";

const Alert = ({message, type = "error"}) => {
    return(
        <>
        <p className={`${classes.alert} ${classes[`${type}`]}`}>{message}</p>
        </>
    )
}

export default Alert;