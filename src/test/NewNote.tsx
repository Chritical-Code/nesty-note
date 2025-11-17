import { useState } from 'react';

type NewNoteProps = {
    onAddNote: Function;
}

export default function NewNote({onAddNote}: NewNoteProps){    
    //states
    const [text, setText] = useState("");

    function handleClick(){
        onAddNote(text);
        setText("");
    }
    
    return(
        <div className="note">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button onClick={() => handleClick()}>add</button>
        </div>
    );
}