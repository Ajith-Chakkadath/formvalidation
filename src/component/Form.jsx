import React from "react";
import "./form.css";



export default function Form() {
  return (
    <div className="conatainer">
      <div className="forme">
        
<div className="nameDis">
<label>
            Enter your name:
          </label>
          <input type="text" />
</div>
          <div className="emailDis">
          <label>Enter Email ID:</label>
            <input type="mail" />
          </div>
           
            <button className="btn">Submit </button>
      </div>
    </div>
  );
}
