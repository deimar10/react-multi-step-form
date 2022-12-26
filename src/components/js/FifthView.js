import React from "react";
import thankYou from '../../assets/images/icon-thank-you.svg'
import '../css/App.css';

function FiftView(){

    return(
        <div id="fifth-main-container">
            <img src={thankYou} />
            <h2>Thank you!</h2>
            <p>Thanks for confirming your subscrption. 
                We hope you have fun using our platform. 
                If you ever need support, please feel free to email us 
                at support@loremgaming.com.
            </p>
        </div>
    )
}

export default FiftView;