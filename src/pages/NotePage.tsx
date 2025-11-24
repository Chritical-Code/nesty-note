import { useState } from 'react';
import { useRef } from 'react';
import Section from "../components/Section";
import "./NotePage.css";
import Toolbar from "../components/Toolbar";

export default function NotePage(){
    const [sectionData, setSectionData] = useState(["Section 1"]);
    const refTextArea = useRef<HTMLTextAreaElement>(null);

    //map section data to sections
    const sections = sectionData.map((inTitle, index) => {
        return(
            <Section key={index} title={inTitle} refTextArea={refTextArea} focusNote={focusNote}></Section>
        );
    });

    //adding sections
    function handleAddSection(newSection: string){
        setSectionData([...sectionData, newSection])
        refTextArea.current = null;
    }

    //focus on correct note
    function focusNote(){
        refTextArea.current?.focus();
        console.log(refTextArea.current)
    }
    
    return(
        <div className="page">
            <div className="title">
                <h1>Title</h1>
            </div>

            <Toolbar onAddSection={handleAddSection} />

            <div className="sections">
                {sections}
            </div>
        </div>
    );
}