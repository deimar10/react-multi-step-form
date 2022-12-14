import React, { useState } from "react";
import '../css/plan.css'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

function SecondView({view, setView, billing, setBilling, plan, setPlan, price, setPrice}) {
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
                <div onClick={() => setPlan({...plan, arcadePlan : !plan.arcadePlan})} 
                class="second-grid-item" 
                style={{
                    backgroundColor:  plan.arcadePlan === true ? 'hsl(233, 44%, 96%)' : 'transparent',
                    borderColor: plan.arcadePlan === true ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'
                }}>
                    <img src={arcade} />
                    <h3>Arcade</h3>
                    <p> ${billing ? price.arcadeYr + '/yr' : price.arcadeMo + '/mo'}</p>
                </div>
                <div onClick={() => setPlan({...plan, advancedPlan : !plan.advancedPlan})} 
                class="second-grid-item" 
                style={{
                    backgroundColor:  plan.advancedPlan === true ? 'hsl(233, 44%, 96%)' : 'transparent',
                    borderColor: plan.advancedPlan === true ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'
                }}>
                    <img src={advanced} />
                    <h3>Advanced</h3>
                    <p> ${billing ? price.advancedYr + '/yr' : price.advancedMo + '/mo'}</p>
                </div>
                <div onClick={() => setPlan({...plan, proPlan : !plan.proPlan})} 
                class="second-grid-item"
                style={{
                    backgroundColor:  plan.proPlan === true ? 'hsl(233, 44%, 96%)' : 'transparent',
                    borderColor: plan.proPlan === true ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'
                }}>
                    <img src={pro} />
                    <h3>Pro</h3>
                    <p> ${billing ? price.proYr + '/yr' : price.proMo + '/mo'}</p>
                </div>  
            </div>
            <div className="toggle-container">
              <span id="billings">Monthly</span>
                <label class="switch">
                    <input onChange={handleToggle} id="checked" 
                    type="checkbox" 
                    checked={billing}
                    />
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