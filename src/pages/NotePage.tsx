import { useState } from 'react';
import { useRef } from 'react';
import Section from "../components/Section";
import styles from "./NotePage.module.css";
import Toolbar from "../components/Toolbar";

export default function NotePage(){
    const [sectionData, setSectionData] = useState(["Section 1"]);
    const refNewNote = useRef<HTMLTextAreaElement>(null);

    const sections = sectionData.map((inTitle, index) => {
        return(
            <Section key={index} inKey={index} title={inTitle} refNewNote={refNewNote} focusNote={focusNote} renameSection={renameSection}></Section>
        );
    });

    function handleAddSection(newSection: string){
        setSectionData([...sectionData, newSection])
        refNewNote.current = null;
    }

    function focusNote(){
        refNewNote.current?.focus();
    }

    function renameSection(inTitle: string, inKey: number){
        const newSectionData = [...sectionData];
        newSectionData[inKey] = inTitle;
        setSectionData(newSectionData);
        refNewNote.current = null;
    }
    
    return(
        <div>
            <div className={styles.title}>
                <h1>Title</h1>
            </div>

            <Toolbar onAddSection={handleAddSection} />

            <div className={styles.sections}>
                {sections}
            </div>
        </div>
    );
}