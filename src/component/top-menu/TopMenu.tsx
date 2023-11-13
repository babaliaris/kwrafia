import styles from "./TopMenu.module.css";

function TopMenu()
{
    return (
        <div className={styles.container}>

            <div className={styles.logo_and_apptitle}>
                <label className={styles.app_logo}>App Logo</label>
                <label className={styles.app_title}>App Title</label>
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