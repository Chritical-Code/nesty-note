import { useState } from 'react';
import Note from "./Note";
import "./Section.css";

type SectionProps = {
    title: string;
}

export default function Section({title}: SectionProps){
    //states
    const [noteData, setNoteData] = useState(Array(0));

    //map note data to notes
    const notes = noteData.map((inText, index) => {
        return(
            <Note key={index} text={inText}></Note>
        );
    });
    
    //adding notes
    function handleAddNote(newNote: string){
        setNoteData([...noteData, newNote])
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