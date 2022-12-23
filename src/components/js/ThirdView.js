import React, {useState} from 'react';
import '../css/AddOns.css'

function ThirdView({ view, setView, billing }) {

    const[checked, setChecked] = useState({
        ServiceCompleted: false,
        StorageCompleted: false,
        ProfileCompleted: false
    });

    const handleBack = () => {
        setView({ ...view, view2: true, view3: false });
    }    
    return (
        <div>
            <h2>Pick add-ons</h2>
            <p>Add-ons help you enchance your gaming experience.</p>
            <div class="third-grid-container">
                <div 
                class="third-grid-item" 
                style={{
                    backgroundColor: checked.ServiceCompleted === true ? 
                    'hsl(233, 44%, 96%)' :
                    'rgba(255, 255, 255, 0.8)'
                }}>
                    <div className='input-wrapper'>
                        <div className='inpt'>
                            <input
                              onChange={() => setChecked({...checked, ServiceCompleted : !checked.ServiceCompleted})}
                              type="checkbox"
                              id="service" />
                            <span class="checkmark"></span>
                        </div>
                        <div className='description'>
                            <h3>Online Service</h3>
                            <p>Access to multiplayer games</p>
                        </div>
                        <div id='price'>
                            <h4>{billing === true ? 
                              '+$10/yr' : 
                              '+$1/mo'
                              }
                        </h4>
                        </div>
                    </div>
                </div>
                <div 
                class="third-grid-item" 
                style={{
                    backgroundColor: checked.StorageCompleted === true ? 
                    'hsl(233, 44%, 96%)' : 
                    'rgba(255, 255, 255, 0.8)'
                }}>
                    <div className='input-wrapper'>
                        <div className='inpt'>
                            <input
                              onChange={() => setChecked({...checked, StorageCompleted : !checked.StorageCompleted})}
                              type="checkbox"
                              id="service" />
                            <span class="checkmark"></span>
                        </div>
                        <div className='description'>
                            <h3>Larger Storage</h3>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                        <div id='price'>
                        <h4>{billing === true ? 
                              '+$20/yr' : 
                              '+$2/mo'
                              }
                        </h4>
                        </div>
                    </div>
                </div>
                <div 
                class="third-grid-item"
                style={{
                    backgroundColor: checked.ProfileCompleted === true ?
                    'hsl(233, 44%, 96%)' :
                    'rgba(255, 255, 255, 0.8)'
                }}>
                    <div className='input-wrapper'>
                        <div className='inpt'>
                            <input
                             onChange={() => setChecked({...checked, ProfileCompleted : !checked.ProfileCompleted})}
                              type="checkbox"
                              id="service" />
                            <span class="checkmark"></span>
                        </div>
                        <div className='description'>
                            <h3>Cuztomisable Profile</h3>
                            <p>Custom theme on your profile</p>
                        </div>
                        <div id='price'>
                        <h4>{billing === true ? 
                              '+$20/yr' : 
                              '+$2/mo'
                              }
                        </h4>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleBack} id='back'>Go back</button>
        </div>
    )
}

export default ThirdView;