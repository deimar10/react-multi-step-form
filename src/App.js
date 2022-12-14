import './components/css/App.css';
import './components/css/Info.css';
import bgSidebar from './assets/images/bg-sidebar-desktop.svg';
import React, { useState } from "react";
import FirstView from './components/js/FirstView';
import SecondView from './components/js/SecondView';
import ThirdView from "./components/js/ThirdView";
import FourthView from './components/js/FourthView';
import FifthView from './components/js/FifthView';

function App() {

  const [view, setView] = useState({
    view1: true,
    view2: false,
    view3: false,
    view4: false,
    view5: false
  });

  const[billing, setBilling] = useState(false);

  const[plan, setPlan] = useState({
    arcadePlan: false,
    advancedPlan: false,
    proPlan: false,
});

const[price, setPrice] = useState({
  arcadeMo: 9,
  advancedMo: 12,
  proMo: 15,
  arcadeYr: 90,
  advancedYr: 120,
  proYr: 150 
});

const[checked, setChecked] = useState({
  ServiceCompleted: false,
  StorageCompleted: false,
  ProfileCompleted: false
});

const[addonPrice, setAddonPrice] = useState({
  serviceMo: '+$1/mo',
  storageMo: '+$2/mo',
  profileMo: '+$2/mo',
  serviceYr: '+$10/yr',
  storageYr: '+$20/yr',
  profileYr: '+$20/yr'
})

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
          {view.view1 ? 
          <FirstView view={view} setView={setView} 
          /> 
          : null 
          }
          {view.view2 ? 
          <SecondView view={view} setView={setView} billing={billing} setBilling={setBilling} 
          plan={plan} setPlan={setPlan} price={price} setPrice={setPrice} 
          /> 
          : null 
          }
          {view.view3 ? 
          <ThirdView view={view} setView={setView} billing={billing} 
          checked={checked} setChecked={setChecked} 
          /> : 
          null 
          }
          {view.view4 ? 
          <FourthView view={view} setView={setView} plan={plan} 
          setPlan={setPlan} billing={billing} price={price} checked={checked}
          addonPrice={addonPrice}
          /> 
          : null 
          }
          {view.view5 ? 
          <FifthView/>
          : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
