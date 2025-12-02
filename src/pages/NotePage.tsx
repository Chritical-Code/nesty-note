import { useState } from 'react';
import { useRef } from 'react';
import Section from "../components/Section";
import styles from "./NotePage.module.css";
import Toolbar from "../components/Toolbar";

export default function NotePage(){
    const [sectionData, setSectionData] = useState(["Section 1"]);
    const focusedTextArea = useRef<HTMLTextAreaElement>(null);

    const sections = sectionData.map((inTitle, index) => {
        return(
            <Section key={index} inKey={index} title={inTitle} focusOnTextArea={focusOnTextArea} 
            renameSection={renameSection} clearFocusedTextArea={clearFocusedTextArea} setFocusedTextArea={setFocusedTextArea}></Section>
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