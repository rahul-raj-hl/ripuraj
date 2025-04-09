import Footer from '@/components/Footer'
import Footer1 from '@/components/Footer1'
import FormPage from '@/components/FormPage'
import LandingPage from '@/components/LandingPage'
import TermsAndConditions from '@/components/TermsAndConditions'
import VideoSection from '@/components/VideoSection'
import OTPValidation from '@/screens/OtpValidation'
import React from 'react'

const index = () => {
  return (
    <div className='bg-white'> 
            <LandingPage />
            <FormPage />
            <TermsAndConditions />
            <Footer1 />
            <Footer />
        </div>
  )
}

export default index