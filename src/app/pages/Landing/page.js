"use client"
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ServiceSection from "../../components/ServiceSection/Index"
import IndustrySection from "../../components/IndustrySection";
import TechSection from "../../components/TechSection";
import Counter from "../../components/Counter";
import BigCard from "../../components/BigCard";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Chat from "../../components/Chat";
import Email from "../../components/Email";
import MoveUp from "../../components/MoveUp";

const AllPages = () => {
    return (
        <>
            <Navbar  />
            <Hero title = "We are Just a Click Away!"/>
            <ServiceSection />
            <IndustrySection />
            <TechSection />
            <Counter />
            <BigCard />
            <FAQ />
            <Email/>
            <Footer  />
            <Chat />
            <MoveUp />
        </>
    )
}

export default AllPages
