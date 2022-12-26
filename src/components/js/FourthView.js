import React, { useState } from "react"
import '../css/summary.css';

function FourthView({view, setView, plan, price, billing, checked, addonPrice}){

    const handleBack = () => {
        setView({...view, view3 : true, view4: false})
    }

    const handleChange = () => {
        setView({...view, view2 : true, view4 : false})
    }

 return(
    <div>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div class="fourth-grid-container">
            <div id="fourth-view-summary">
                <div id="fourth-view-plan-summary">
                <h3>
                    { billing === false && plan.arcadePlan === true ? 'Arcade (Monthly)' : ''}
                </h3>
                <h3>
                    { billing === true && plan.arcadePlan === true ? 'Arcade (Yearly)' : ''}
                </h3>
                <p> 
                    { billing === false && plan.arcadePlan === true ? '$' + price.arcadeMo + '/mo' : ''}
                </p>
                <p> 
                    { billing === true && plan.arcadePlan === true ? '$' + price.arcadeYr + '/yr' : ''}
                </p>
                </div>
                <div id="fourth-view-plan-summary">
                <h3>
                   { billing === false && plan.advancedPlan === true ? 'Advanced (Monthly)' : ''}
                </h3>
                <h3>
                   { billing === true && plan.advancedPlan === true ? 'Advanced (Yearly)' : ''}
                </h3>
                <p>
                    { billing === false && plan.advancedPlan === true ? '$' + price.advancedMo  + '/mo': ''}
                </p>
                <p>
                    { billing === true && plan.advancedPlan === true ? '$' + price.advancedYr + '/yr' : ''}
                </p>
                </div>
                <div id="fourth-view-plan-summary">
                <h3>
                   { billing === false && plan.proPlan === true ? 'Pro (Monthly)' : ''}
                </h3>
                <h3>
                   { billing === true && plan.proPlan === true ? 'Pro (Yearly) ' : ''}
                </h3>
                <p>
                    { billing === false && plan.proPlan === true ? '$' + price.proMo + '/mo' : ''}
                </p>
                <p>
                    { billing === true && plan.proPlan === true ? '$' + price.proYr + '/yr' : ''}
                </p>
                </div>
                <button onClick={handleChange} id="change">Change</button>
                </div>
            <div id="fourth-view-info">
                <div id="fourth-info">
                <h3>
                    { checked.ServiceCompleted === true ? 'Online Service' : ''}
                </h3>
                     <p>
                         {billing === false && checked.ServiceCompleted === true ?  addonPrice.serviceMo : '' }
                     </p>
                     <p>
                         {billing === true && checked.ServiceCompleted === true ? addonPrice.serviceYr : '' }
                     </p>
                </div>
                <div id="fourth-info">
                    <h3>
                        { checked.StorageCompleted === true ? 'Larger Storage' : ''}
                    </h3>
                    <p>
                    { billing === false && checked.StorageCompleted === true ? addonPrice.storageMo : ''}
                    </p>
                    <p>
                    { billing === true && checked.StorageCompleted === true ? addonPrice.storageYr : ''}
                    </p>
                </div>
                <div id="fourth-info">
                    <h3>
                        { checked.ProfileCompleted === true ? 'Cuztomisable Profile' : ''}
                    </h3>
                    <p>
                    { billing === false && checked.ProfileCompleted === true ? addonPrice.profileMo : '' }
                    </p>
                    <p>
                    { billing === true && checked.ProfileCompleted === true ? addonPrice.profileYr : ''}
                    </p>
                </div>
            </div>
        </div>
        <div id="fourt-view-bottom">
            <div id="fourth-view-total">
                <p>Total { billing === false ? '(Per Month)' : '(Per Year)'} </p>
            </div>
            <div id="fourth-view-total-price">
                <p>
                    { !billing && checked.ServiceCompleted && checked.StorageCompleted 
                    ? 'sum' : '' }
                </p>
            </div>
        </div>
            <div id="fourth-button-wrapper">
                <button onClick={handleBack} id='back'>Go back</button>
                <button id="confirm">Confirm</button>
            </div>
    </div>
 )
}

export default FourthView;