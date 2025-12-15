import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Section from "../components/Section";
import Toolbar from "../components/Toolbar";
import styles from "./SectionManager.module.css";
import NoteModel from "../models/NoteModel";

export default function SectionManager(){
    const [sectionData, setSectionData] = useState(["Section 1"]);
    const [noteData, setNoteData] = useState<NoteModel[]>([]);
    const focusedTextArea = useRef<HTMLTextAreaElement>(null);
    const [, setRedraw] = useState(0);

    //focus
    useEffect(() => {
        focusOnTextArea();
    });

    //make an array to sectionize notes
    const secNotes: NoteModel[][] = Array.from({length: sectionData.length}, () => []);
    noteData.forEach((note) => {
        if(note.section < sectionData.length){
            secNotes[note.section].push(note);
        }
    });

    const sections = sectionData.map((inTitle, index) => {
        return(
            <Section key={index} inKey={index} title={inTitle} setFocusedTextArea={setFocusedTextArea} renameSection={renameSection} 
            clearFocusedTextArea={clearFocusedTextArea} noteData={secNotes[index]} addNote={addNote} editNote={editNote} redraw={redraw}></Section>
        );
    });

    function handleAddSection(newSection: string){
        setSectionData([...sectionData, newSection])
        clearFocusedTextArea();
    }

    function renameSection(inTitle: string, inKey: number){
        const newSectionData = [...sectionData];
        newSectionData[inKey] = inTitle;
        setSectionData(newSectionData);
        clearFocusedTextArea();
    }

    function focusOnTextArea(){
        focusedTextArea.current?.focus();
    }

    function setFocusedTextArea(textArea: HTMLTextAreaElement){
        focusedTextArea.current = textArea;
    }

    function clearFocusedTextArea(){
        focusedTextArea.current = null;
    }

    function addNote(newNote: NoteModel){
        setNoteData([...noteData, newNote]);
    }

    function editNote(inNote: string, inKey: number){
        const newNoteData = [...noteData];
        newNoteData[inKey].text = inNote;
        setNoteData(newNoteData);
        clearFocusedTextArea();
    }

    function redraw() {
        setRedraw(x => x + 1);
    }

    return(
        <>
            <Toolbar onAddSection={handleAddSection} />

            <div className={styles.sections}>
                {sections}
            </div>
        </>
    );
}