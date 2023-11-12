import { useCallback } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends React.PropsWithChildren
{
    disabled?: boolean,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (event: React.MouseEvent)=>void,
}


function Button(props: ButtonProps)
{
    const handleClick = useCallback((event: React.MouseEvent)=>
    {
        if (props.onClick)
            props.onClick(event);

        if (import.meta.env.DEV) console.log(`[Button.tsx] Button - "${props.children}": Clicked`)

    }, [props]);

    return (
        <button disabled={props.disabled}
                className={styles.container}
                onClick={(event)=>{handleClick(event)}}
                type={props.type}
        >
            {props.children}
        </button>
    );
}

export default Button;