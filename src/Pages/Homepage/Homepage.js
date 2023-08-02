import React from 'react';
import './Homepage.css'
import { Slide } from 'react-awesome-reveal';
import ServiceCardBundle from './data';
import AccordianItems from '../../Components/AccordianItems/AccordianItems';
import FinanceOption from '../../Components/FinanceOption/FinanceOption';
import TestomonialItems from '../../Components/TestomonialItems/TestomonialItems';
import InputFrom from '../../Components/InputForm/InputFrom';
import { FaLocationDot } from 'react-icons/fa6';
import { AiFillPhone, AiTwotoneMail, AiFillInstagram } from 'react-icons/ai';

const HomePage = () => {
    return (
        <div>
            <div className="Phone-Circle">
                <a href="tel:6472349020">
                    <AiFillPhone className="Phone-Circle-logo" />
                </a>
            </div>
            <div className='Background'>
                <div className='top-section'>
                    <Slide direction='left' triggerOnce>
                        <h1 className='main-heading'>Elevate Your Space</h1>
                        <p className='main-paragraph'>Welcome to our world of unparalleled craftsmanship and innovation. From exquisite custom homes to flawless basements and exceptional commercial properties, our expertise awaits your vision. Take the first step and click below to enquire now!</p>
                    </Slide>
                    <Slide direction='up' triggerOnce>
                        <button className='button main-button'>enquire now!</button>
                    </Slide>
                </div>
            </div>
            <div className='services' id="services">
                <div className='section-heading service-heading'>services</div>
                <div className='service_card_holder'>
                    <ServiceCardBundle />
                </div>
            </div>
            <div className='why-us' id="why-us">
                <div className="why-us-curve"></div>
                <h1 className="section-heading why-us-heading">Why Choose US?</h1>
                <div className="why-us-qualities">
                    <h6 className="secondary-heading why-us-qualities">Our Qualities</h6>
                    <AccordianItems />
                </div>
                <FinanceOption />
                <div className="why-us-review">
                    <h6 className="secondary-heading why-us-qualities">Glowing Testimonials</h6>
                    <TestomonialItems />
                </div>
                <div className="contact-us" id="contact-us">
                    <div className="contact-us-curve"></div>
                    <h3 className="section-heading contact-heading">CONTACT US</h3>
                    <InputFrom />
                    <div className="items-type">
                        <div className="item-type">
                            <FaLocationDot className="item-logo" />
                            <a href="https://www.google.com/maps/place/738+Steeles+Ave+W,+Brampton,+ON+L6Y+0B1/@43.6519017,-79.7493967,17z/data=!3m1!4b1!4m6!3m5!1s0x882b155ce2491fb1:0xc3f661b32d586214!8m2!3d43.6519017!4d-79.7493967!16s%2Fg%2F11c1yjrj8l?hl=en-CA&entry=ttu" className='last-item'>738 Steeles Ave W, Brampton</a>
                        </div>

                        <div className="item-type">
                            <AiFillPhone className="item-logo" />
                            <a style={{
                                TextDecoder: "none",
                            }} href="tel:6472349020" className='last-item'>+1 (647) 234 9020</a>
                        </div>

                        <div className="item-type">
                            <AiTwotoneMail className="item-logo" />
                            <a href="mailto:info@rebeldevelopments.ca" className='last-item'>info@rebeldevelopments.ca</a>
                        </div>

                        <div className="item-type">
                            <AiFillInstagram className="item-logo" />
                            <a href="https://www.google.com/maps/place/738+Steeles+Ave+W,+Brampton,+ON+L6Y+0B1/@43.6519017,-79.7493967,17z/data=!3m1!4b1!4m6!3m5!1s0x882b155ce2491fb1:0xc3f661b32d586214!8m2!3d43.6519017!4d-79.7493967!16s%2Fg%2F11c1yjrj8l?hl=en-CA&entry=ttu" className='last-item'>@your_instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;