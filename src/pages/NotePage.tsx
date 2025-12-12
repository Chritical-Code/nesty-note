import SectionManager from "../components/SectionManager";
import styles from "./NotePage.module.css";

export default function NotePage(){
    return(
        <div>
            <div className={styles.title}>
                <h1>Title</h1>
            </div>

            <SectionManager></SectionManager>
        </div>
    );
}