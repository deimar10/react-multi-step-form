import './components/css/App.css';
import './components/css/Info.css';
import bgSidebar from './assets/images/bg-sidebar-desktop.svg';
import React, { useState } from "react";
import FirstView from './components/js/FirstView';
import SecondView from './components/js/SecondView';
import ThirdView from "./components/js/ThirdView";
import FourthView from './components/js/FourthView';

function App() {

  const [view, setView] = useState({
    view1: true,
    view2: false,
    view3: false,
    view4: false
  });

  const[billing, setBilling] = useState(false);

  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid-item" id="side-panel"
        style={{ 
          backgroundImage: `url(${bgSidebar})`
        }}>
          <div id="button-wrapper">
            <div id="steps">
             <p id='number' style={{
                backgroundColor: view.view1 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
                color: view.view1 === true ? 'black' : 'white'
             }}>
              1
              </p>
              <h2>step 1</h2>
            </div>
          <div id="text">
          <p>your info</p>
          </div>
          </div>
          <div id="button-wrapper">
            <div id="steps">
            <p id='number' style={{
                backgroundColor: view.view2 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
                color: view.view2 === true ? 'black' : 'white'
             }}>
              2
              </p>
              <h2>step 2</h2>
            </div>
          <div id="text">
          <p>Select plan</p>
          </div>
          </div>
          <div id="button-wrapper">
            <div id="steps">
            <p id='number' style={{
              backgroundColor: view.view3 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
              color: view.view3 === true ? 'black' : 'white'
            }}>
              3
              </p>
              <h2>step 3</h2>
            </div>
          <div id="text">
          <p>Add-ons</p>
          </div>
          </div>
          <div id="button-wrapper">
            <div id="steps">
            <p id='number'
            style={{
              backgroundColor: view.view4 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
              color: view.view4 === true ? 'black' : 'white'
            }}>
              4
              </p>
              <h2>step 4</h2>
            </div>
          <div id="text">
          <p>Summary</p>
          </div>
          </div>
        </div>
        <div class="grid-item" id="main-panel">
          {view.view1 ? <FirstView view={view} setView={setView} /> : null }
          {view.view2 ? <SecondView view={view} setView={setView} billing={billing} setBilling={setBilling} /> : null }
          {view.view3 ? <ThirdView view={view} setView={setView} billing={billing} /> : null }
          {view.view4 ? <FourthView view={view} setView={setView} /> : null }
        </div>
      </div>
    </div>
  );
}

export default App;
