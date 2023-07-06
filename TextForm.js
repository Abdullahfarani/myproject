import React, {useState} from "react";

function TextForm(){

    const [text,  setText ] = useState('Here is the text ');

    const changeText = () => {
        let setNewText = text.toUpperCase();
        setText(setNewText);
    }

    const changeTextLow = () => {
        let setNewText = text.toLowerCase();
        setText(setNewText);
    }

    const downloadText = () => {
        let setNewText = ' ';
        setText(setNewText);
    }

    const changeHandler = (event) => {

        setText(event.target.value);
    }

return(
    <>
    {/*
        <div className="mb-3">
    <label for="mybox" className="form-label" ><h1>Example textarea</h1></label>
    <textarea className="form-control" id="mybox" rows="6" value={text} onChange={changeHandler}></textarea>
    </div>

    <button className="btn btn-secondary mx-2"  onClick={changeText}>Conver to upperCase </button>
    <button className="btn btn-secondary mx-2"  onClick={changeTextLow}>Conver to LowerCase </button>
    <button className="btn btn-secondary mx-2"  onClick={downloadText}>Text Clear </button>

    <div>
        <h3>The number of words and characters are </h3>
        <p>{text.split(" ").length} are words {text.length} are characters</p>
        <h3><b>Preview </b></h3>
        {text}
</div>*/}
        
      

    </>
);

}
export default TextForm;