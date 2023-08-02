import React from 'react'
import './FinanceOption.css'
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';

function FinanceOption() {
    return (
        <div className="why-us-finance">
            <div className="left-finance">
                <h6 className="secondary-heading why-us-qualities">Finance Options</h6>
                <h6 className="tertiary-heading">Let's Make Progress Easy</h6>
                <p className="paragraph">
                    With our exclusive financing program, you can now access funds of up to $100,000 to support your construction projects. Whether you are planning a residential renovation, a commercial expansion, or a complete construction project, our financing option is designed to cater to your unique needs. We believe that financial constraints should never hinder progress, which is why we strive to provide you with a seamless financing experience
                </p>
                <p className="paragraph">
                    Our dedicated team of experts will work closely with you to understand your specific requirements and tailor a financing solution that fits your budget. We believe in transparency and ensuring that you have a comprehensive understanding of the terms and conditions involved. With Rebel Developments, you can have peace of mind knowing that your construction project is not limited by financial barriers.
                </p>
                <button className="button finance-button">
                    GET IN CONTACT!
                </button>
            </div>
            <div className="right-finance">
                <img src={image1} className="keyhole keyhole-1" alt=""></img>
                <img src={image2} className="keyhole keyhole-2" alt=""></img>
                <img src={image3} className="keyhole keyhole-3" alt=""></img>
            </div>
        </div>
    )
}

export default FinanceOption