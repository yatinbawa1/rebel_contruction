import React from 'react'
import './TestomonialItems.css'
import { AiFillStar } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { AiFillCamera } from 'react-icons/ai';

const data = [
    {
        heading: "Home Renovation",
        text: "I am thrilled with the outstanding home renovation services delivered by Rebel Developments. Their team's expertise, dedication, and innovative approach brought new life to my home. The attention to detail and commitment to excellence were evident in every aspect of the project. Rebel Developments exceeded my expectations, delivering a breathtaking transformation that perfectly captures my style and preferences.",
        star: [1, 2, 3, 4],
        profileName: "Jack Dorsi",
        profileAddress: "1725 Fletcher's Creek, Brampton ",
        location: "/projects/jack_dorsi",
    },
    {
        heading: "Commercial Restoration",
        text: "Rebel Developments proved to be an invaluable partner in our commercial restoration project. Their unwavering commitment to preserving the historical integrity of our space while seamlessly integrating modern elements was truly remarkable. The team's expertise, attention to detail, and dedication to quality craftsmanship resulted in a stunning restoration that exceeded our highest expectations.",
        star: [1, 2, 3, 4, 5],
        profileName: "Local Grocery store",
        profileAddress: "925 Williams Pkwy, Brampton",
        location: "/projects/local_grocery_store",
    },
]

function TestomonialItems() {
    return (
        <div className="reviews">
            {data.map((item) => (
                <div className="Card">
                    <div className="CardHeader">
                        <h1 className="CardHeading">{item.heading}</h1>
                        <p className="CardPara">{item.text}</p>
                    </div>
                    <div className="CardFooter">
                        <div className="CardStart">
                            {item.star.map(() => (<AiFillStar style={{
                                color: "#E8DF11"
                            }} />))}
                        </div>
                        <div>
                            <h2 className="CardName">{item.profileName}</h2>
                            <div className="CardAdressColumn">
                                <FaLocationArrow style={{
                                    color: "#A4A4A4",
                                }} />
                                <h4 className="CardAdress">{item.profileAddress}</h4>
                            </div>
                        </div>
                    </div>
                    <button className="button CardButton">
                        <AiFillCamera style={{
                            color: "#fff",
                            marginRight: "5px"
                        }} />
                        Take A Look
                    </button>
                </div>))}
        </div>
    )
}

export default TestomonialItems