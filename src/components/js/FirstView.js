import React, { useState } from "react";
import '../css/Info.css';

function FirstView ({view, setView}) {

    const[formValues, setFormValues] = useState({
      name: "",
      email: "",
      number: ""
    });

    const[formErrors, setFormErrors] = useState({
      nameError: "",
      emailError: "",
      phonenrError: ''
    });

    const[FormIsValid, setFormIsValid] = useState({
      nameValid: false,
      emailValid: false,
      phoneValid: false
    });

    const handleChange = (e) => {
      setFormValues({...formValues, [e.target.name] : e.target.value})
    }

    const validate = () => {
      let nameError = '';
      let emailError = '';
      let phonenrError = '';

      const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      const phonenrRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

      if(!formValues.name) {
        nameError = "Name is required!"
      }
      if(!formValues.email || !formValues.email.match(emailRegex)) {
        emailError = "Invalid or empty email!"
      }
      if(!formValues.number || !formValues.number.match(phonenrRegex)) {
        phonenrError = "Invalid or empty number!"
      }
      if(nameError) {
        setFormErrors({...formErrors, nameError : nameError});
        setFormIsValid({...FormIsValid, nameValid : false});
        return false;
      } 
      if(emailError) {
        setFormErrors({...formErrors, emailError : emailError});
        setFormIsValid({...formErrors, emailValid : false});
        return false;
      } 
      if(phonenrError) {
        setFormErrors({...formErrors, phonenrError : phonenrError});
        setFormIsValid({...formErrors, phoneValid : false});
        return false;
      } 
      return true;
    }

    const handleClick = () => {

      let isValid = validate()

        if (isValid === true) {
          setFormIsValid({...formErrors, formErrors : true});
          setView({...view, view1 : false, view2 : true});
        }
      }

      console.log(formErrors)
    return(
        <div>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone nubmer.</p>
         <form>
          <label>Name</label>
          <span id="errorMessage">
           { FormIsValid.nameValid === false ? formErrors.nameError : '' }
          </span><br></br>
          <input 
            type="text" 
            name="name"
            placeholder='Name' 
            value={formValues.name} 
            onChange={handleChange}
            />
          <label>Email</label>
          <span id="errorMessage">
          { FormIsValid.emailValid === false ? formErrors.emailError : '' }
          </span><br></br>
          <input 
            type="text"
            name="email"
            placeholder='Email'
            vale={formValues.email}
            onChange={handleChange}
          />
          <label>Phone number</label>
          <span id="errorMessage">
            { FormIsValid.phoneValid === false ? formErrors.phonenrError : '' }
          </span>
          <br></br>
          <input
            type="number"
            name="number"
            placeholder='Number'
            value={formValues.number}
            onChange={handleChange}
           />
         </form>
         <button onClick={handleClick} id='next'>Next Step</button>
         </div>
    )
}

export default FirstView;