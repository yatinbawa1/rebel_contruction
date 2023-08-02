import React from 'react'
import "./ServiceCard.css"

function ServiceCard({ imageUrl, heading, writing, bck, crl, link }) {

    return (
        <div className='service_card_sherif'>
            <div className='service_card' style={{
                backgroundImage: `url('${imageUrl}')`
            }}>
                <h2 className='service_card_heading'>{heading}</h2>
                <p className='service_card_paragraph'>{writing}</p>
                <button style={{
                    backgroundColor: bck,
                    color: crl
                }} className='button service_card_button'>SOME PROJECTS</button>
            </div>
            <div className='    service_photo_booth'>

            </div>
        </div>
    )
}

export default ServiceCard