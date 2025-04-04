import Image from 'next/image';
import OTPValidation from "./OtpValidation";
import VideoSection from "../components/VideoSection";
import TermsAndConditions from "../components/TermsAndConditions";
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='bg-white'> 
            <Image 
                src='/headerImage.png'
                layout="responsive"
                width={100}
                height={80}
                alt="Picture of the author"
                className={styles.responsiveImage} 
            />
            <OTPValidation />
            <VideoSection />
            <TermsAndConditions />
            <Footer />
        </div>
    );
};

export default Home;
