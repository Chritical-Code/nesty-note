import styles from "./Note.module.css";

type NoteProps = {
    text: string;
    refNewNote: React.Ref<HTMLTextAreaElement>;
    editNote: Function;
    inKey: number;
}

export default function Note({text, refNewNote, editNote, inKey}: NoteProps){
    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        editNote(event.target.value, inKey);
    }
    
    return(
        <div className={styles.stickyNote}>
            <textarea className={styles.textArea} defaultValue={text} ref={refNewNote} onChange={(event) => handleChange(event)}></textarea>
        </div>
    );
}