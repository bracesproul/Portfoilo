import React, { useState } from "react";
import { NavBar, LineBreak } from "../index.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAs7lK--vFaKCoutNemZCxdsFYYFHNARzg",
  authDomain: "portfolio-c2e19.firebaseapp.com",
  projectId: "portfolio-c2e19",
  storageBucket: "portfolio-c2e19.appspot.com",
  messagingSenderId: "403472456292",
  appId: "1:403472456292:web:8d989cf493466725c45d71",
  measurementId: "G-RFVN99QL4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();


function writeUserData(userId, name, email, message) {
    const db = getDatabase();
    set(ref(db, 'inquiries/' + userId), {
      name: name,
      email: email,
      message: message
    });
  }






class Header extends React.Component {


  render() {
    return (
        <div className="cHeaderMain">
        <div className="cHeader">
            <h1 className="cTitle">Contact</h1>
        </div>
        </div>
    );
  }
}

function AppTest() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleInput = (e) => {

        writeUserData(makeid(10), name, email, message);
    }

    return (
        <div className="contactForm">
            <input className="formField" type="text" id="cName" placeholder="Name" autoComplete="new-password" onChange={e => setName(e.target.value)} /> 
            <br/><br/>
            <input className="formField" type="email" id="cEmail" placeholder="Email" autoComplete="new-password" onChange={e => setEmail(e.target.value)} /> 
            <br/><br/>
            <textarea className="formTextArea" id="cMessage" placeholder="Message" spellCheck="true" onChange={e => setMessage(e.target.value)} /> 
            <br/><br/>
            <button className="btn" onClick={ () => handleInput() }>Submit</button>

        </div>
    )
}



class FancyBtn extends React.Component {
  render() {

    return (
        <div>
            <button id="btn">
                <p id="btnText">Submit</p>
                <div class="check-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
                </div>
            </button>
        </div>
    );
  }
}



export default function Home() {
    return (
        <div>
            <NavBar/>
            <LineBreak />
            <Header />
            <AppTest />
            <LineBreak />
        </div>

    )
}