import dynamic from "next/dynamic";
const BugFreeCode = dynamic(() => import("../Lottie/bugFreeCode"), {
  ssr: false,
});

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <BugFreeCode />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Free Repair
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We appreciate any feedback you provide regarding the
                  performance of our app. If you encounter any issues or find
                  any bugs in the app, we want to let you know that our
                  technical team is ready to immediately fix them. This process
                  will be done at no additional cost. We are committed to
                  ensuring your app runs optimally, so you can continue to use
                  our services smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
