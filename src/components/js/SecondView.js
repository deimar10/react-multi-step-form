import React, { useState, useEffect } from "react";
import '../css/plan.css'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

function SecondView({view, setView}) {

    const handleBack = () => {
        setView({...view, view1 : true, view2 : false});
    }

    const handleNext = () => {
        setView({...view, view3 : true, view2 : false});
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
                    <p>$9/mo</p>
                </div>
                <div class="second-grid-item">
                    <img src={advanced} />
                    <h3>Advanced</h3>
                    <p>$12/mo</p>
                </div>
                <div class="second-grid-item">
                    <img src={pro} />
                    <h3>Pro</h3>
                    <p>$15/mo</p>
                </div>  
            </div>
            <button onClick={handleBack} id='back'>Go back</button>
            <button onClick={handleNext} id='next'>Next step</button>
            </div>
        </div>
    )
}

export default SecondView;