import { useState } from "react";

export default function Form({ dispatch }){
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;

        dispatch({ type: "add", text });
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a task" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    )
}