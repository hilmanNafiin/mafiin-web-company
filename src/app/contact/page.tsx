import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mafiin Cloud",
  description: "Mafiin Cloud Konsultan",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Contact us if you have any questions or complaints you would like to ask or discuss about our services."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
