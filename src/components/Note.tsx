import styles from "./Note.module.css";

type NoteProps = {
    text: string;
    refNewNote: React.Ref<HTMLTextAreaElement>;
}

export default function Note({text, refNewNote}: NoteProps){
    return(
        <div className={styles.stickyNote}>
            <textarea className={styles.textArea} defaultValue={text} ref={refNewNote}></textarea>
        </div>
    );
}