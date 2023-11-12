import styles from "./TextInput.module.css";

export interface TextInputProps
{
    showError?: boolean,
    errorMessage?: string,
    fullWidth?: boolean,
    fontawesomeIcon?: string,
    reactHookRegister?: Object
};

function TextInput(props: TextInputProps)
{
    return (
    <div className={styles.container}>

        <div>
            {
                props.fontawesomeIcon &&
                <label className={`${styles.icon} ${props.showError ? styles.icon_error : ""} ${props.fontawesomeIcon}`}>
                    Icon
                </label>
            }

            <input className={`${styles.input} ${props.showError ? styles.input_border_error : ""}
            ${props.fullWidth ? styles.input_full_width : ""}`} type="text" {...props.reactHookRegister}/>
        </div>

        <div>
            <span className={`${styles.input_error} ${props.fontawesomeIcon ? styles.input_error_margin : ""}`}>
                {props.showError ? props.errorMessage : ""}
            </span> 
        </div>
    </div>
    );
}

export default TextInput;