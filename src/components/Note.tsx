import "./Note.css";

type NoteProps = {
    text: string;
    refTextArea: React.Ref<HTMLTextAreaElement>;
}

export default function Note({text, refTextArea}: NoteProps){
    return(
        <div className="stickyNote">
            <textarea className="textArea" defaultValue={text} ref={refTextArea}></textarea>
        </div>
    );
}