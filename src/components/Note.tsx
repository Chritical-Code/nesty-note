import "./Note.css";

type NoteProps = {
    text: string;
    inRef: React.Ref<HTMLTextAreaElement>;
}

export default function Note({text, inRef}: NoteProps){
    return(
        <div className="stickyNote">
            <textarea className="textArea" defaultValue={text} ref={inRef}></textarea>
        </div>
    );
}