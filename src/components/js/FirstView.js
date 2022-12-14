import React from "react";

function FirstView ({view, setView}) {

    const handleClick = () => {
        setView({...view, view1 : false, view2 : true});
      }

    return(
        <div>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone nubmer.</p>
         <form>
          <label>Name</label><br></br>
          <input placeholder='Name'></input>
          <label>Email</label><br></br>
          <input placeholder='Email'></input>
          <label>Phone number</label><br></br>
          <input placeholder='Number'></input>
         </form>
         <button onClick={handleClick} id='next'>Next Step</button>
         </div>
    )
}

export default FirstView;