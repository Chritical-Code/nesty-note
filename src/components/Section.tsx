import { useState } from 'react';
import Note from "./Note";

type SectionProps = {
    title: string;
}

export default function Section({title}: SectionProps){
    //states
    const [noteData, setNoteData] = useState(Array(0));

    //map note data to notes
    const notes = noteData.map((inText) => {
        return(
            <Note text={inText}></Note>
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

                <div className="note">
                    <input type="text"></input>
                    <button onClick={() => handleAddNote("hello")}>add</button>
                </div>
            </div>
        </div>
    );
}