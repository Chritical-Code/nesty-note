import { useRef } from 'react';
import Note from "./Note";
import styles from "./Section.module.css";
import NoteModel from "../models/NoteModel";

type SectionProps = {
    inKey: number;
    title: string;
    renameSection: Function;
    setFocusedTextArea: Function;
    clearFocusedTextArea: Function;
    noteData: NoteModel[];
    addNote: Function;
    redraw: Function;
}

export default function Section({inKey, title, setFocusedTextArea, renameSection, noteData, clearFocusedTextArea, addNote, redraw}: SectionProps){
    const refTitle = useRef<HTMLTextAreaElement>(null);
    const emptyRef = useRef<HTMLTextAreaElement>(null);

    const notes = noteData.map((note: NoteModel, index) => {
        return(
            <Note key={index} inKey={index} text={note.text} editNote={editNote} 
            setFocusedTextArea={setFocusedTextArea} redraw={redraw} textArea={note.textArea}></Note>
        );
    });
    
    function handleAddNote(inText: string){
        const newNote = new NoteModel(inText, emptyRef, inKey);
        addNote(newNote);
    }

    function handleChangeTitle(event: React.ChangeEvent<HTMLTextAreaElement>){
        clearFocusedTextArea();
        renameSection(event.target.value, inKey);
    }

    function editNote(inNote: string, inKey: number){
        const newNoteData = [...noteData];
        newNoteData[inKey].text = inNote;
        //setNoteData(newNoteData);
        clearFocusedTextArea();
    }

    return(
        <div className={styles.section}>
            <div className={styles.titleDiv}>
                <textarea className={styles.title} defaultValue={title} onChange={(event) => handleChangeTitle(event)} ref={refTitle}></textarea>
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