import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Partners from "@/components/Partners";

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
        description="MafiinCloud adalah perusahaan IT konsultan yang
menyediakan solusi digital terintegrasi untuk membantu
bisnis berkembang di era teknologi modern. Kami
berfokus pada pengembangan sistem yang efisien,
scalable, dan sesuai dengan kebutuhan operasional
perusahaan.


Dengan menggabungkan teknologi terbaru dan
pendekatan berbasis kebutuhan klien, MafiinCloud hadir
sebagai partner strategis dalam transformasi digital mulai
dari perencanaan, pengembangan, hingga implementasi
sistem."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <Partners />
    </>
  );
};

export default AboutPage;
