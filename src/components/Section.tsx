import { useState} from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Note from "./Note";
import styles from "./Section.module.css";

type SectionProps = {
    inKey: number;
    title: string;
    focusOnTextArea: Function;
    renameSection: Function;
    clearFocusedTextArea: Function;
    setFocusedTextArea: Function;
}

export default function Section({inKey, title, focusOnTextArea, renameSection, clearFocusedTextArea, setFocusedTextArea}: SectionProps){
    const [noteData, setNoteData] = useState(Array(0));
    const refTitle = useRef<HTMLTextAreaElement>(null);
    const [, setRedraw] = useState(0);

    useEffect(() => {
        focusOnTextArea();
    });

    const notes = noteData.map((inText, index) => {
        return(
            <Note key={index} inKey={index} text={inText} editNote={editNote} setFocusedTextArea={setFocusedTextArea} redraw={redraw}></Note>
        );
    });
    
    function handleAddNote(newNote: string){
        setNoteData([...noteData, newNote]);
    }

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        renameSection(event.target.value, inKey);
    }

    function editNote(inNote: string, inKey: number){
        const newNoteData = [...noteData];
        newNoteData[inKey] = inNote;
        setNoteData(newNoteData);
        clearFocusedTextArea();
    }

    function redraw() {
        setRedraw(x => x + 1);
    }

    return(
        <div className={styles.section}>
            <div className={styles.titleDiv}>
                <textarea className={styles.title} defaultValue={title} onChange={(event) => handleChange(event)} ref={refTitle}></textarea>
            </div>

            <div className={styles.notes}>
                {notes}

                <div className={styles.addNoteDiv}>
                    <button className={styles.addNote} onClick={() => handleAddNote("")}>add note</button>
                </div>
            </div>
        </div>
    );
}