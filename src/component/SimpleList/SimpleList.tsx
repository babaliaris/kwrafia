import { useCallback } from "react";
import styles from "./SimpleList.module.css";


export interface SimpleListProps<T>
{
    data: T[],
    getIcon: ()=>string,
    getText: (item: T)=>string,
    getId: (item: T)=>number,
    onClick?: (item: T, index: number)=>void

}

function SimpleList<T>(props: SimpleListProps<T>)
{


    const handleClick = useCallback((item: T, index: number)=>
    {
        if (props.onClick)
            props.onClick(item, index);

    }, [props]);

    return (
        <div className={styles.list_container}>
            {
                props.data.map((item: T, index: number)=>
                {
                    return (
                        <div className={styles.list_item} key={props.getId(item)} onClick={()=>handleClick(item, index)}>
                            
                            <i className={`${props.getIcon()} ${styles.item_icon}`}/>
                            <label className={styles.item_name}>{props.getText(item)}</label>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SimpleList;  