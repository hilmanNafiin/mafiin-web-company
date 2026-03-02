import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mafiin Cloud",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Mafiin Cloud Consultants is here to support your business in creating professional, high quality software. Our team is ready to help you create a website that meets your business needs."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
