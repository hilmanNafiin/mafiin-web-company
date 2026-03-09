import Image from "next/image";
import dynamic from "next/dynamic";
const BugFreeCode = dynamic(() => import("../Lottie/bugFreeCode"), {
  ssr: false,
});

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Founder Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <h3 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Meet Our Founder
          </h3>

          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* Founder Info - Proporsional */}
            <div className="">
              <h4 className="mb-2 text-2xl font-bold text-black dark:text-white md:text-3xl">
                {`Hilman Nafi'in`}
              </h4>
              <p className="mb-4 text-lg font-medium text-primary">
                Founder & Lead Developer
              </p>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                With over a decade of professional experience,{" "}
                {`Hilman Nafi'in`}
                established this company with a clear vision to deliver
                innovative and dependable digital solutions. He is committed to
                maintaining high standards of quality, integrity, and service
                excellence. Guided by a strong dedication to thoughtful
                craftsmanship and meaningful user experiences, he continues to
                lead the company in providing solutions that prioritize client
                satisfaction and long-term value.
              </p>

              {/* Social Links - Optional */}
              {/* <div className="mt-6 flex justify-center gap-4 md:justify-start">
                <a
                  href="https://www.linkedin.com/in/hilmannafiin/"
                  className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/nafiinn_"
                  className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary hover:text-white"
                  aria-label="instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.01 4 20 5.99 20 7.75v8.5c0 1.76-1.99 3.75-3.75 3.75h-8.5C5.99 20 4 18.01 4 16.25v-8.5C4 5.99 5.99 4 7.75 4zm4.25 3.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 2a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm4.75-.88a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z" />
                  </svg>
                </a>
              </div> */}
            </div>
            {/* Founder Image - Proporsional */}
            <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl md:h-80 md:w-80">
              <Image
                src="/images/about/hilman.png"
                alt="Hilman Nafi'in - Founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
