import Image from 'next/image';
import OTPValidation from "./OtpValidation";
import VideoSection from "../components/VideoSection";
import TermsAndConditions from "../components/TermsAndConditions";
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import LandingPage from '@/components/LandingPage';
import Footer1 from '../components/Footer1';
import FormSubmitted from '@/components/FormSubmitted';
import Navbar from '@/components/Navbar';
import FormPage from '@/components/FormPage';

const Login = () => {
    return (
        <div className='bg-white'> 
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
