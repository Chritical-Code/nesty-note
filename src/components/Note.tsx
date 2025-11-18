import "./Note.css";

type NoteProps = {
    text: string;
}

export default function Note({text}: NoteProps){
    return(
        <div className="stickyNote">
            <textarea className="textArea" defaultValue={text}></textarea>
        </div>
    );
}