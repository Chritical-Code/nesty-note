import { useState } from 'react';
import Section from "../components/Section";
import "./NotePage.css";
import Toolbar from "../components/Toolbar";

export default function NotePage(){
    //states
    const [sectionData, setSectionData] = useState(["Section 1"]);

    //map section data to sections
    const sections = sectionData.map((inTitle) => {
        return(
            <Section title={inTitle}></Section>
        );
    });

    //adding sections
    function handleAddSection(newSection: string){
        setSectionData([...sectionData, newSection])
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