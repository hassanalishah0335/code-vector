import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ServicePage from "../../components/ServicePage";
import TechSection from "../../components/TechSection";
import Industry  from "../../components/IndustrySection";
import Counter from "../../components/Counter";
import FAQ from '../../components/FAQ'
import Footer from "../../components/Footer";
import Email from "../../components/Email";
import Chat from "../../components/Chat";
import MoveUp from "../../components/MoveUp";


const AllPages = () => {
    return (
        <>
            <Navbar  />
            <Hero title = "Create UI/UX Designs with CodeVector"/>
            <ServicePage 
            title={"Elevate User Experiences with Our UI/UX Design Expertise"}
            text={"Explore our UI/UX design services to create user-centric, visually stunning digital experiences. We design with precision and passion, ensuring your brand’s success."}
            p1t1={"UI/UX Design Services for Mobile Apps"}
            p1t2={"Transform your app vision into a user-centric reality with our expert UI/UX design services. We craft intuitive, visually captivating interfaces, ensuring exceptional user experiences."}
            p1p1={""}
            p1p2={"User-Centric Design: Prioritizing the user journey and usability"}
            p1p3={"Visual Excellence: Creating aesthetically pleasing, on-brand designs"}
            p1p4={"Mobile Optimization: Ensuring seamless app functionality on various devices and platforms"}
            
            p2t1={"UI/UX Design Services for Web & Desktop Apps"}
            p2t2={"Elevate your web and desktop app experiences with our top-tier UI/UX design services. We combine user-centric design principles with visual excellence to create interfaces that captivate and engage."}
            p2p1={""}
            p2p2={"User-Centered Approach: Prioritizing usability and a seamless user journey"}
            p2p3={"Visual Excellence: Crafting aesthetically pleasing, brand-aligned designs."}
            p2p4={"Cross-Platform Consistency: Ensuring a cohesive experience across web and desktop environments."}

            p3t1={"Redesign services"}
            p3t2={"Revitalize your digital presence with our UI/UX redesign services. We breathe fresh life into your interfaces, enhancing usability, aesthetics, and user engagement."}
            p3p1={""}
            p3p2={"Enhanced User Experience: Improve user satisfaction and interaction."}
            p3p3={"Modern Visuals: Elevate the aesthetics with contemporary design trends."}
            p3p4={"Performance Optimization: Streamline functionality and responsiveness for greater efficiency."}

            p4t1={"Graphic Design Services"}
            p4t2={"Elevate your visual identity with our professional graphic design services. We transform your concepts into captivating visuals that communicate your brand’s essence and message."}
            p4p1={""}
            p4p2={"Custom Visual Solutions: Tailored designs to match your unique brand."}
            p4p3={"Creative Expertise: Innovative graphics that stand out in the digital landscape."}
            p4p4={"Consistent Branding: Ensure a unified and memorable brand image across all platforms."}


            />
            <Counter />
            <TechSection />
            <Industry/>
            <FAQ />
            <Email/>
            <Footer  />
            <Chat />
            <MoveUp />
        </>
    )
}

export default AllPages
