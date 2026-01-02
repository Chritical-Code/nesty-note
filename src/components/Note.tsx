import styles from "./Note.module.css";
import { useEffect, useState, useRef } from 'react';

type NoteProps = {
    text: string;
    editNote: Function;
    inKey: number;
    setFocusedTextArea: Function;
    redraw: Function;
    textArea: React.RefObject<HTMLTextAreaElement | null>;
}

export default function Note({text, editNote, inKey, setFocusedTextArea, redraw, textArea}: NoteProps){
    const [mouseMode, setMouseMode] = useState("none");
    const timer = useRef<number | undefined>(undefined);
    
    useEffect(() => {
        //

        return () => {
            setMouseMode("none");
            clearTimeout(timer.current);
        }
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        editNote(event.target.value, inKey);
    }

    function handleMouseDown(){
        setMouseMode("edit")
        timer.current = setTimeout(() => {
            setMouseMode("drag");
        }, 500);
    }

    function handleMouseUp(){
        if(mouseMode == "edit"){
            setFocusedTextArea(textArea.current);
            redraw();
            setMouseMode("none");
            clearTimeout(timer.current);
        }
        else if(mouseMode == "drag"){
            setMouseMode("none");
            clearTimeout(timer.current);
        }
    }
    
    return(
        <div className={styles.stickyNote}>
            <textarea className={styles.textArea} defaultValue={text} ref={textArea} onChange={(event) => handleChange(event)}></textarea>
            <div className={styles.noteControl} onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()}></div>
        </div>
    );
}