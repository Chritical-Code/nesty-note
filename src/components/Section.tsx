import { useState} from 'react';
import { useEffect } from 'react';
import Note from "./Note";
import styles from "./Section.module.css";

type SectionProps = {
    title: string;
    refTextArea: React.Ref<HTMLTextAreaElement>;
    focusNote: Function;
}

export default function Section({title, refTextArea, focusNote}: SectionProps){
    const [noteData, setNoteData] = useState(Array(0));

    //effects
    useEffect(() => {
        focusNote();
    });

    //map note data to notes
    const notes = noteData.map((inText, index) => {
        return(
            <Note key={index} text={inText} refTextArea={refTextArea}></Note>
        );
    });
    
    //adding notes
    function handleAddNote(newNote: string){
        setNoteData([...noteData, newNote]);
    }

    return(
        <div className={styles.section}>
            <div className={styles.titleDiv}>
                <textarea className={styles.title} defaultValue={title}></textarea>
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