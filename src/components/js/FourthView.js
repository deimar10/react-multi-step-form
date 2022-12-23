import { useState } from "react"
import '../css/summary.css';

function FourthView({view, setView}){

    const handleBack = () => {
        setView({...view, view3 : true, view4: false})
    }
 return(
    <div>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div class="fourth-grid-container">
            <div id="fourth-view-summary">
                <h3>Arcade(Monthly)</h3>
                <button id="change">Change</button>
                <div id="fourth-price">
                    <p>4$</p>
                </div>
            </div>
            <div id="fourth-view-info">
                <div id="fourth-info">
                    <p>Online Services</p>
                </div>
                <div id="fourth-price">
                    <p>5$</p>
                </div>
            </div>
            <div id="fourth-view-info">
                <div id="fourth-info">
                    <p>Larger Storage</p>
                </div>
                <div id="fourth-price">
                    <p>6$</p>
                </div>
            </div>
        </div>
        <div id="fourt-view-bottom">
            <div id="fourth-view-total">
                <p>Total (per month)</p>
            </div>
            <div id="fourth-view-total-price">
                <p>+12$/mo</p>
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