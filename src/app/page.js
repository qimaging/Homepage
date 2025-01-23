import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Home/Banner";
import Featured from "../components/Home/Featured";
import AboutContent from "../components/Home/AboutContent";
import Services from "../components/Home/Services";
import Webinar from "../components/Home/Webinar";
import Partner from "../components/Home/Partner";
import Feedback from "../components/Home/Feedback";
import PricingTable from "../components/Home/PricingTable";
import BlogPost from "../components/Home/BlogPost";
import SubscribeForm from "../components/Home/SubscribeForm";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <Featured />

      <AboutContent />

      <Services />

      <Webinar />

      <Partner />

      <Feedback />

      {/* <PricingTable /> */}

      <BlogPost />

      <SubscribeForm />

      <Footer />
    </>
  );
}
