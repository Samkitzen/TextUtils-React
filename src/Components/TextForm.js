import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared!","danger");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    // const [myStyle, setmyStyle] = useState(null);
    // if(props.mode=="dark"){
    //     setmyStyle({backgroundColor: "black",color: "white"});
    // }else{
    //     setmyStyle({backgroundColor: "white",color: "black"});
    // }
    return (
        <>
            <div >
                <div className="container my-3">
                    <div className="mb-3">
                        <h3>{props.heading}</h3>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button type="button" onClick={handleUpClick} className="btn btn-outline-info mx-1 my-1">Convert To Uppercase</button>
                    <button type="button" onClick={handleLowClick} className="btn btn-outline-info mx-1 my-1">Convert To Lowercase</button>
                    <button type="button" onClick={handleClear} className="btn btn-outline-info mx-1 my-1">Clear Text</button>
                </div>
                <div className="container">
                    <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} Words, {text.length} Characters.</p>
                    <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>

    )
}
