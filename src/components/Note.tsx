import styles from "./Note.module.css";

type NoteProps = {
    text: string;
    refTextArea: React.Ref<HTMLTextAreaElement>;
}

export default function Note({text, refTextArea}: NoteProps){
    return(
        <div className={styles.stickyNote}>
            <textarea className={styles.textArea} defaultValue={text} ref={refTextArea}></textarea>
        </div>
    );
}