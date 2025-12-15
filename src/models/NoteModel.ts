export default class NoteModel{
    text: string;
    textArea: React.RefObject<HTMLTextAreaElement | null>;
    section: number;

    constructor(text: string, emptyRef: React.RefObject<HTMLTextAreaElement | null>, section: number){
        this.text = text;
        this.textArea = {...emptyRef};
        this.section = section;
    }
}