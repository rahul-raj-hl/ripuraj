import Image from 'next/image';
import OTPValidation from "./OtpValidation";
import VideoSection from "../components/VideoSection";
import TermsAndConditions from "../components/TermsAndConditions";
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;
