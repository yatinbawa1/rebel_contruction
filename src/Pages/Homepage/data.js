import React from "react"
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { Slide } from "react-awesome-reveal";

const ServiceCardBundle = () => {
    return <>
        <Slide triggerOnce direction="left">
            <ServiceCard imageUrl={"https://images.unsplash.com/photo-1664353656876-4c5774be2986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                heading={"Commercial Restoration"}
                bck={"#F4DBD3"}
                crl={"#BC5938"}
                writing={"Restoring Commercial Spaces to Perfection: Witness the Remarkable Transformations Achieved through Our Expertise and Attention to Detail"} />
        </Slide>


        <Slide triggerOnce direction="right">
            <ServiceCard imageUrl={"https://plus.unsplash.com/premium_photo-1679002511417-6fbc566712aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                heading={"HOME Restoration"}
                bck={"#F4D0A0"}
                crl={"#6C420B"}
                writing={"Unveiling the Art of Home Restoration: Reviving Spaces with Impeccable Craftsmanship and Restoring the Essence of Timeless Beauty."} />
        </Slide>

        <Slide triggerOnce direction="left">

            <ServiceCard imageUrl={"https://plus.unsplash.com/premium_photo-1677782975062-56111703e90e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                heading={"CUSTOM HOME"}
                bck={"#FBFDC6"}
                crl={"#4A4D05"}
                writing={"Crafting Extraordinary Custom Homes: Where Imagination Meets Precision in Creating Your Dream Residence."} />

        </Slide>

        <Slide triggerOnce direction="right">
            <ServiceCard imageUrl={"https://images.unsplash.com/photo-1511190404154-700f574540f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}
                heading={"BASEMENT"}
                bck={"#FBEEE5"}
                crl={"#191917"}
                writing={"Unlocking Hidden Potential: Elevate Your Home with Exquisite Basement Transformations, Redefining Space and Comfort"} />
        </Slide>
    </>
}


export default ServiceCardBundle