import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ServicePage from "../../components/ServicePage";
import TechSection from "../../components/TechSection";
import Industry  from "../../components/IndustrySection";
import Counter from "../../components/Counter";
import FAQ from '../../components/FAQ'
import Footer from "../../components/Footer";
import Chat from "../../components/Chat";
import Email from "../../components/Email";
import MoveUp from "../../components/MoveUp";



const AllPages = () => {
    return (
        <>
            <Navbar  />
            <Hero title = "Web Development with CodeVector"/>
            <ServicePage 
            title={"Custom Web Development Services"}
            text={"With the help of our professional web developers, you can create a website that will engage visitors, get traffic, and attract paying customers. We can create custom-coded pages or templates; execute and craft them, and test them thoroughly to ensure they work as you want them to."}
            p1t1={"PWA Development Services"}
            p1t2={"CodeVector harnesses the capabilities of Progressive Web Apps (PWAs) to provide you with easily discoverable, linkable, and high-performing products. Our PWAs ensure seamless cross-platform compatibility, offering end-users pleasant and engaging app experiences."}
            p1p1={"Our PWA Services include:"}
            p1p2={"PWA Development"}
            p1p3={"PWA Migration"}
            p1p4={"Integration of PWAs with External IT Systems"}
            
            p2t1={"Web UI UX Excellence"}
            p2t2={"Partner with our in-house UI/UX maestros to achieve exceptional outcomes. We design interfaces that not only captivate users but also authentically mirror your brand’s identity, strengths, and values"}
            p2p1={"Discover how we can assist you:"}
            p2p2={"User Research"}
            p2p3={"Planning, Blueprinting, and Design"}
            p2p4={"UI/UX Audits and Enhancement"}

            p3t1={"Staff Augmentation"}
            p3t2={"When you have your project plan in place but need the right talent to bring it to life, our company swiftly provides the required expertise within your budget. With a track record of successfully completing numerous web development projects, we understand how to meet deadlines and stay within your budget."}
            p3p1={"CodeVector Web Project Staff Augmentation offers"}
            p3p2={"Access to a vast talent pool with exceptional qualifications."}
            p3p3={"On-time delivery under your guidance and complete control"}
            p3p4={"Scalability, transparency, and cost-effectiveness."}

            p4t1={"QA for Web Projects"}
            p4t2={"CodeVector commitment to quality in Web projects extends to meeting the highest standards expected by end-users. Through our Web Testing Services, we guarantee that your product aligns with contemporary requirements, ensuring a convenient, productive, and seamless user experience."}
            p4p1={"Our QA Services encompass:"}
            p4p2={"Functional, compatibility, and performance testing."}
            p4p3={"Usability and accessibility testing."}
            p4p4={"Localization, security, and recovery testing."}


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
