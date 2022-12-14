import React, {useEffect} from 'react';

function ThirdView ({view, setView}) {

    const handleBack = () => {
        setView({...view, view2 : true, view3 : false});
    }

    return(
        <div>
            <h2>Pick add-ons</h2>
            <button onClick={handleBack} id='back'>Go back</button>
        </div>
    )
}

export default ThirdView;