import OTPValidation from "./OtpValidation";
import VideoSection from "../components/VideoSection";
import TermsAndConditions from "../components/TermsAndConditions";
import Footer from "../components/Footer";
import LandingPage from "@/components/LandingPage";
import Footer1 from "../components/Footer1";

const Login = () => {
  return (
    <div className="bg-white">
            <LandingPage />
            <OTPValidation />
            <VideoSection />
            <TermsAndConditions />
            <Footer1 />
            <Footer />
    </div>
  );
};

export default Login;
