"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  // Duplikat data untuk efek infinite scroll
  const duplicatedBrands = [...brandsData, ...brandsData, ...brandsData];

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
                Our Clients
              </span>
            </div>
            <h2 className="text-2xl font-light text-gray-800 dark:text-gray-100 md:text-3xl lg:text-4xl">
              Dipercaya oleh{" "}
              <span className="font-semibold text-primary">
                Perusahaan Terkemuka
              </span>
            </h2>
            <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>

          {/* Animated brands showcase - 1 baris */}
          <div className="relative">
            {/* Glass effect container */}
            <div className="overflow-hidden rounded-3xl bg-white/40 shadow-sm backdrop-blur-[2px] dark:bg-gray-800/40">
              <div className="relative flex overflow-hidden py-6 md:py-8 lg:py-10">
                {/* Animasi ke kiri */}
                <div className="animate-marquee-left flex whitespace-nowrap">
                  {duplicatedBrands.map((brand, index) => (
                    <SingleBrand key={`${brand.id}-${index}`} brand={brand} />
                  ))}
                </div>
              </div>
            </div>

            {/* Elegant border gradient */}
            <div className="via-secondary/20 pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-primary/20"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }

        .animate-marquee-left:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-marquee-left {
            animation-duration: 18s;
          }
        }

        @media (max-width: 480px) {
          .animate-marquee-left {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="group mx-4 flex items-center justify-center sm:mx-6 md:mx-8">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-16 w-28 transition-all duration-500 ease-out hover:scale-110 sm:h-20 sm:w-32 md:h-24 md:w-40 lg:h-28 lg:w-48"
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
          className="hidden object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:block"
        />
        <Image
          src={image}
          alt={name}
          fill
          className="block object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:hidden"
        />
      </a>
    </div>
  );
};
