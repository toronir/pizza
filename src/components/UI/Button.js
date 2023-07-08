import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={classes.button} type={props.type} {...props}>{props.children}</button>
    )
}

export default Button;