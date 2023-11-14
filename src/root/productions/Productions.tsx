import { useCallback, useEffect, useState } from "react";
import styles from "./Productions.module.css";
import { ProductionModel } from "src/models/production";
import { fontawesomeIcons } from "src/core/fontawesome-icons";
import SimpleList from "src/component/SimpleList/SimpleList";

function Productions()
{
    const [productions, setProductions] = useState<ProductionModel[]>([]);

    const handleClick = useCallback((item: ProductionModel, index: number)=>
    {
        console.log(`Item[@index=${index}]: ${JSON.stringify(item)}`)
    }, []);

    useEffect(()=>
    {
        let prod: ProductionModel[] = [];

        for (let i = 0; i < 10; i++)
        {
            prod.push({m_id: i, m_user_id: i+1, m_year: 2020 + i});
        };

        setProductions(prod);

    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h2 className={styles.title}>
                    <i className={`${fontawesomeIcons.production} ${styles.title_logo}`}/>
                    Productions
                </h2>
            </div>
            <SimpleList<ProductionModel> data={productions} getIcon={()=>fontawesomeIcons.production} getId={(item)=>item.m_id}
                getText={(item)=>item.m_year.toString()} onClick={handleClick}/>
        </div>
    );
}

export default Productions;