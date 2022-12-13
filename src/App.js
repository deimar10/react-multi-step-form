import './components/css/App.css';
import './components/css/Info.css'
import bgSidebar from './assets/images/bg-sidebar-desktop.svg';
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid-item" id="side-panel"
        style={{ 
          backgroundImage: `url(${bgSidebar})`
        }}>
          <div id="button-wrapper">
            <div id="steps">
             <p id='number'>1</p>
              <h2>step 1</h2>
            </div>
          <div id="text">
          <p>your info</p>
          </div>
          </div>
          <div id="button-wrapper">
            <div id="steps">
            <p id='number'>2</p>
              <h2>step 2</h2>
            </div>
          <div id="text">
          <p>Select plan</p>
          </div>
          </div>
          <div id="button-wrapper">
            <div id="steps">
            <p id='number'>3</p>
              <h2>step 3</h2>
            </div>
          <div id="text">
          <p>Add-ons</p>
          </div>
          </div>
          <div id="button-wrapper">
            <div id="steps">
            <p id='number'>4</p>
              <h2>step 4</h2>
            </div>
          <div id="text">
          <p>Summary</p>
          </div>
          </div>
        </div>
        <div class="grid-item" id="main-panel">
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone nubmer.</p>
           <form>
            <label>Name</label><br></br>
            <input placeholder='Name'></input>
            <label>Email</label><br></br>
            <input placeholder='Email'></input>
            <label>Phone number</label><br></br>
            <input placeholder='Number'></input>
           </form>
           <button id='next'>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default App;
