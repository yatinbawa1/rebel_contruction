import React, { useState } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'
import './InputForm.css'


function InputFrom() {

    const [userName, setUserName] = useState("");
    const [userWorkType, setUserWorkType] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");

    return (
        <div className="InputFrom">
            <input name="username" value={userName} placeholder="Enter Name" type="text" className="input input-text" onChange={(e) => {
                setUserName(e.target.value);
            }} />

            <input name="worktype" value={userWorkType} placeholder="Enter Message" type="text" className="input input-text" onChange={(e) => {
                setUserWorkType(e.target.value);
            }} />


            <input name="phone" value={userPhoneNumber} placeholder="Enter Phone Number" type="phone" className="input input-text" onChange={(e) => {
                setUserPhoneNumber(e.target.value);
            }} />
            <button className="input button send-button">
                <a style={{
                    color: "#171653"
                }} href={`mailto:info@rebeldevelopments.ca?subject=Contact from website: ${userName} ${userPhoneNumber}?body=${userWorkType}`}>
                    SEND MESSAGE<BiSolidSend style={{
                        color: "#0A3646",
                        marginLeft: "5px",
                    }} />
                </a>
            </button>
            <button className="input button whatsapp-button">
                <a style={{
                    color: "#075E54"
                }} href={`//api.whatsapp.com/send?phone=16476149020&text=Hi!, ${userWorkType}`}>
                    Whatsapp <IoLogoWhatsapp style={{
                        color: "#075E54",
                        marginLeft: "5px"
                    }} />
                </a>
            </button>
        </div>
    )
}

export default InputFrom