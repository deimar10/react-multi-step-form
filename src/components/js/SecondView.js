import React, { useState, useEffect } from "react";
import '../css/plan.css'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

function SecondView({view, setView}) {

    const[billing, setBilling] = useState(false);
    const[price, setPrice] = useState({
        arcadeMo: "$9/mo",
        advancedMo: "$12/mo",
        proMo: "$15/mo",
        arcadeYr: "$90/yr",
        advancedYr: "$120/yr",
        proYr: "$150/yr" 
    });

    const handleBack = () => {
        setView({...view, view1 : true, view2 : false});
    }

    const handleNext = () => {
        setView({...view, view3 : true, view2 : false});
    }

    const handleToggle = () => {
        setBilling(!billing);
    }

    return (
        <div className="main-container">
            <div>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            <div class="second-grid-container">
                <div class="second-grid-item">
                    <img src={arcade} />
                    <h3>Arcade</h3>
                    <p> {billing ? price.arcadeYr : price.arcadeMo} </p>
                </div>
                <div class="second-grid-item">
                    <img src={advanced} />
                    <h3>Advanced</h3>
                    <p> {billing ? price.advancedYr : price.advancedMo} </p>
                </div>
                <div class="second-grid-item">
                    <img src={pro} />
                    <h3>Pro</h3>
                    <p> {billing ? price.proYr : price.proMo} </p>
                </div>  
            </div>
            <div className="toggle-container">
              <span id="billings">Monthly</span>
                <label class="switch">
                    <input onChange={handleToggle} id="checked" type="checkbox" />
              <span class="slider round"></span>
                </label>
              <span id="billings">Yearly</span>
            </div>
            <button onClick={handleBack} id='back'>Go back</button>
            <button onClick={handleNext} id='next'>Next Step</button>
            </div>
        </div>
    )
}

export default SecondView;