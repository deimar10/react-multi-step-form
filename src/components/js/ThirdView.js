import React, {useState} from 'react';
import '../css/AddOns.css'

function ThirdView({ view, setView }) {

    const[checked, setChecked] = useState({
        completed: false
    });

    const handleBack = () => {
        setView({ ...view, view2: true, view3: false });
    }

    const handleCheck = () => {
        setChecked({...checked, completed : !checked.completed});
    }
    

    console.log(checked)

    return (
        <div>
            <h2>Pick add-ons</h2>
            <p>Add-ons help you enchance your gaming experience.</p>
            <div class="third-grid-container">
                <div class="third-grid-item">
                    <div className='input-wrapper'>
                        <div className='inpt'>
                            <input
                              onChange={handleCheck}
                              type="checkbox"
                              id="service" />
                            <span class="checkmark"></span>
                        </div>
                        <div className='description'>
                            <h3>Online Service</h3>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                </div>
                <div class="third-grid-item">
                    <div className='input-wrapper'>
                        <div className='inpt'>
                            <input
                              onChange={handleCheck}
                              type="checkbox"
                              id="service" />
                            <span class="checkmark"></span>
                        </div>
                        <div className='description'>
                            <h3>Larger Storage</h3>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                    </div>
                </div>
                <div class="third-grid-item">
                    <div className='input-wrapper'>
                        <div className='inpt'>
                            <input
                              onChange={handleCheck}
                              type="checkbox"
                              id="service" />
                            <span class="checkmark"></span>
                        </div>
                        <div className='description'>
                            <h3>Cuztomisable Profile</h3>
                            <p>Custom theme on your profile</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleBack} id='back'>Go back</button>
        </div>
    )
}

export default ThirdView;