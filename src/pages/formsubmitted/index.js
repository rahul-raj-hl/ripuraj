import Footer from "@/components/Footer";
import Footer1 from "@/components/Footer1";
import FormPage from "@/components/FormPage";
import FormSubmitted from "@/components/FormSubmitted";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import TermsAndConditions from "@/components/TermsAndConditions";
import React from "react";

const index = () => {
  return (
    <div>
      {/* company Logo */}
      <div className="flex justify-between left-0 right-0 items-center mx-[5%] absolute z-50 top-4">
        <div>
          <img className="w-35 md:w-40 lg:w-40 h-auto" src="/ripuraj-logo.png" alt="logo" />
        </div>
      </div>
      <FormSubmitted />
      <Footer1 />
      <Footer />
    </div>
  );
};

export default index;
