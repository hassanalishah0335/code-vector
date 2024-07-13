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
            <Hero title = "Seach Engin Optimization with CodeVector"/>
            <ServicePage 
            title={"Search Engin Optimization"}
            text={"From optimizing your website’s SEO to crafting compelling social media strategies and running data-driven ad campaigns, we’re your partner in achieving digital success."}
            p1t1={"Facebook SEO"}
            p1t2={"Leveraging the power of Facebook’s vast user base, our Facebook SEO services help you connect with your target audience and generate leads."}
            p1p1={""}
            p1p2={"Targeted Advertising: Reach specific demographics, interests, and behaviors to ensure your ads are seen by the right people"}
            p1p3={"Ad Campaign Optimization: Continuously analyze and refine your ad campaigns for maximum ROI"}
            p1p4={"Engaging Content: Craft compelling ad creatives and content that resonate with your audience."}
            
            p2t1={"Instagram SEO"}
            p2t2={"Our Instagram SEO services tap into this visually-driven platform to enhance brand visibility, connect with influencers, and boost user engagement."}
            p2p1={""}
            p2p2={"Visual Storytelling: Create visually appealing content to convey your brand’s message"}
            p2p3={"Influencer Collaborations: Partner with influencers to expand your reach and credibility"}
            p2p4={"Hashtag Strategies: Leverage popular and relevant hashtags to increase discoverability"}

            p3t1={"Youtube SEO"}
            p3t2={"YouTube SEO utilizes video content to capture your audience’s attention, share your message, and drive engagement"}
            p3p1={""}
            p3p2={"Video Content Creation: Develop captivating video content that educates, entertains, or informs your audience."}
            p3p3={"Audience Engagement: Encourage likes, shares, comments, and subscriptions to boost visibility."}
            p3p4={"YouTube Ad Campaigns: Utilize YouTube’s advertising options for targeted promotions."}

            p4t1={"Google SEO"}
            p4t2={"Our Google and Social Media Ads services combine the power of Google Ads and various social media platforms to drive traffic, leads, and conversions."}
            p4p1={""}
            p4p2={"Targeted Campaigns: Create highly specific ad campaigns to reach your ideal audience."}
            p4p3={"A/B Testing: Experiment with ad variations to optimize performance."}
            p4p4={"Conversion Tracking: Monitor and analyze ad performance for continuous improvement."}


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
