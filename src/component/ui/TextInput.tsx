import styles from "./TextInput.module.css";

export interface TextInputProps
{
    showError?: boolean,
    fullWidth?: boolean,
    reactHookRegister?: Object
};

function TextInput(props: TextInputProps)
{
    return (
    <div>
        <input className={`${styles.input} ${props.showError ? styles.input_border_error : ""}
        ${props.fullWidth ? styles.input_full_width : ""}`} type="text" {...props.reactHookRegister}/>

        <span className={styles.input_error}>{props.showError ? "*This is required." : ""}</span> 
    </div>
    );
}

export default TextInput;