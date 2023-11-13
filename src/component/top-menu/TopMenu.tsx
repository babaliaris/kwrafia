import { useTranslation } from "react-i18next";
import styles from "./TopMenu.module.css";
import { fontawesomeIcons } from "src/core/fontawesome-icons";

function TopMenu()
{
    const {t} = useTranslation();

    return (
        <div className={styles.container}>

            <div className={styles.logo_and_apptitle}>
                <label className={`${styles.app_logo} ${fontawesomeIcons.app_logo}`}/>
                <label className={styles.app_title}>{t('app-title')}</label>
            </div>

            <div className={styles.items}>
                <label className={styles.item_button}>Item 1</label>
                <label className={styles.item_button}>Item 2</label>
                <label className={styles.item_button}>Item 3</label>
                <label className={styles.item_button}>Item 4</label>
                <label className={styles.item_button}>Item 5</label>
            </div>

        </div>
    );
}

export default TopMenu;