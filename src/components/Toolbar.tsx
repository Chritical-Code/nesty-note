import "./Toolbar.css";

type ToolbarProps = {
    onAddSection: Function;
}

export default function Toolbar({onAddSection}: ToolbarProps){
    return(
        <div className="toolbar">
            <p>Toolbar:</p>

            <button className="addSection" onClick={() => onAddSection("Test")}>Add Section</button>
        </div>
    );
}