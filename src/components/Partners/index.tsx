import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Partners = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-900 dark:to-gray-800 md:py-28 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Elegant minimal header */}
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Our Partners
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Partnering with
              <span className="bg-clip-text text-primary">
                {" "}
                Leading Companies
              </span>
            </h2>
            <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>

          {/* Elegant partners showcase */}
          <div className="relative">
            {/* Glass effect container */}
            <div className="rounded-3xl bg-white/40 shadow-sm backdrop-blur-[2px] dark:bg-gray-800/40">
              <div
                className={`p-8 sm:p-10 md:p-12 ${
                  brandsData.length === 1
                    ? "flex items-center justify-center"
                    : "grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                }`}
              >
                {brandsData.length === 1 ? (
                  <div className="mx-auto w-full max-w-md">
                    <SingleBrand key={brandsData[0].id} brand={brandsData[0]} />
                  </div>
                ) : (
                  brandsData.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand} />
                  ))
                )}
              </div>
            </div>

            {/* Elegant border gradient */}
            <div className="via-secondary/20 pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="group flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full transition-all duration-500 ease-out hover:scale-105 md:h-24 lg:h-28"
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          }}
        ></div>
        <Image
          src={imageLight}
          alt={name}
          fill
          className="hidden object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
        />
        <Image
          src={image}
          alt={name}
          fill
          className="block object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
        />
      </a>
    </div>
  );
};
