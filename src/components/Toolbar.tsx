import styles from "./Toolbar.module.css";

type ToolbarProps = {
    onAddSection: Function;
}

export default function Toolbar({onAddSection}: ToolbarProps){
    return(
        <div className={styles.toolbar}>
            <p>Toolbar:</p>

            <button className={styles.addSection} onClick={() => onAddSection("Section")}>Add Section</button>
        </div>
    );
}