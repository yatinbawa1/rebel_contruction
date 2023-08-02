import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './AccordianItems.css';

const AccordianItems = () => {
    const data = [
        { heading: "Exceptional Expertise", para: "Our team of experienced professionals brings a wealth of knowledge and expertise to every project, ensuring the highest quality craftsmanship and attention to detail." },
        { heading: "PROVEN TRACK RECORD", para: "Our team of experienced professionals brings a wealth of knowledge and expertise to every project, ensuring the highest quality craftsmanship and attention to detail." }
    ]

    return (
        <Accordion className="main-accordian" allowZeroExpanded={true}>
            {
                data.map((item) => (
                    <AccordionItem uuid={item.heading.replace(" ", "")} className="Accordian-Item">
                        <AccordionItemHeading className="Accordian-Heading">
                            <AccordionItemButton>
                                <p className="Accrordian-h1">{item.heading}</p>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="Accordian-Panel">
                            <p className="Accordian-Panel-p">{item.para}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default AccordianItems;