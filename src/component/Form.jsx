import React from "react";
import "./form.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Form() {
  const [nameValue, setNameValue] = useState('');

const naviagate =useNavigate()

  function readValue(e) {
    e.preventDefault()
    alert("Thank you")
    naviagate("/display/"+`${nameValue}`)


  }

  return (
    <div className="conatainer">
      <div className="forme">
        <form onSubmit={readValue}>
          <div className="nameDis">
            <label>Enter your name:</label>
            <input type="text" name="fname" value={nameValue} onChange={e=>setNameValue(e.target.value)} required/>
          </div>
          <div className="emailDis">
            <label>Enter Email ID:</label>
            <input type="mail" />
          </div>

          <button className="btn" type="submit">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
