import { useState} from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Note from "./Note";
import styles from "./Section.module.css";

type SectionProps = {
    inKey: number;
    title: string;
    refNewNote: React.Ref<HTMLTextAreaElement>;
    focusNote: Function;
    renameSection: Function;
    clearRefNewNote: Function;
}

export default function Section({inKey, title, refNewNote, focusNote, renameSection, clearRefNewNote}: SectionProps){
    const [noteData, setNoteData] = useState(Array(0));
    const refTitle = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        focusNote();
    });

    const notes = noteData.map((inText, index) => {
        return(
            <Note key={index} inKey={index} text={inText} refNewNote={refNewNote} editNote={editNote}></Note>
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
        clearRefNewNote();
    }

    return(
        <div className={styles.section}>
            <div className={styles.titleDiv}>
                <textarea className={styles.title} defaultValue={title} onChange={(event) => handleChange(event)} ref={refTitle}></textarea>
            </div>

            <div className={styles.notes}>
                {notes}

                <div className={styles.addNoteDiv}>
                    <button className={styles.addNote} onClick={() => handleAddNote("default text")}>add note</button>
                </div>
            </div>
        </div>
    );
}