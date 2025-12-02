import styles from "./Note.module.css";
import { useRef } from 'react';

type NoteProps = {
    text: string;
    editNote: Function;
    inKey: number;
    setFocusedTextArea: Function;
    redraw: Function;
}

export default function Note({text, editNote, inKey, setFocusedTextArea, redraw}: NoteProps){
    const textArea = useRef<HTMLTextAreaElement>(null);
    
    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        editNote(event.target.value, inKey);
    }

    function handleClick(){
        setFocusedTextArea(textArea.current);
        redraw();
    }
    
    return(
        <div className={styles.stickyNote}>
            <textarea className={styles.textArea} defaultValue={text} ref={textArea} onChange={(event) => handleChange(event)}></textarea>
            <div className={styles.noteControl} onClick={() => handleClick()}></div>
        </div>
    );
}