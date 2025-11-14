type NoteProps = {
    text: string;
}

export default function Note({text}: NoteProps){
    return(
        <div className="note">
            <p>{text}</p>
        </div>
    );
}