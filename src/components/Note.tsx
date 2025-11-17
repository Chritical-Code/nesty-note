type NoteProps = {
    text: string;
}

export default function Note({text}: NoteProps){
    return(
        <div className="note">
            <textarea className="noteTextArea">{text}</textarea>
        </div>
    );
}