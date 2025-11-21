import { useState, type TextareaHTMLAttributes } from 'react';
import { useRef } from 'react';
import Note from "./Note";
import "./Section.css";

type SectionProps = {
    title: string;
}

export default function Section({title}: SectionProps){
    //states
    const [noteData, setNoteData] = useState(Array(0));
    const myRef = useRef<HTMLTextAreaElement>(null);

    //map note data to notes
    const notes = noteData.map((inText, index) => {
        return(
            <Note key={index} text={inText} inRef={myRef}></Note>
        );
    });
    
    //adding notes
    function handleAddNote(newNote: string){
        setNoteData([...noteData, newNote]);
        myRef.current?.focus();
    }

    return(
        <div className="section">
            <div className="sectionTitle">
                <h2>{title}</h2>
            </div>

            <div className="notes">
                {notes}

                <div className="stickyNote addNoteDiv">
                    <button className="addNote" onClick={() => handleAddNote("")}>add note</button>
                </div>
            </div>
        </div>
    );
}