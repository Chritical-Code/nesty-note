import { useState} from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Note from "./Note";
import styles from "./Section.module.css";

type SectionProps = {
    inKey: number;
    title: string;
    refTextArea: React.Ref<HTMLTextAreaElement>;
    focusNote: Function;
    renameSection: Function;
}

export default function Section({inKey, title, refTextArea, focusNote, renameSection}: SectionProps){
    const [noteData, setNoteData] = useState(Array(0));
    const refTitle = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        focusNote();
    });

    const notes = noteData.map((inText, index) => {
        return(
            <Note key={index} text={inText} refTextArea={refTextArea}></Note>
        );
    });
    
    function handleAddNote(newNote: string){
        setNoteData([...noteData, newNote]);
    }

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        renameSection(event.target.value, inKey);
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