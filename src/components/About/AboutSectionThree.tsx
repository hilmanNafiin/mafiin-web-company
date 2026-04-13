import Image from "next/image";

const AboutSectionThree = () => {
  const teamMembers = [
    {
      name: "Hilman Nafi'in",
      role: "Founder & CEO",
      image: "/images/about/hilman.png",
    },
    {
      name: "M. Indra Kusuma",
      role: "Co-founder & Project Manager",
      image: "/images/about/indra.png",
    },
    {
      name: "Hannan Azka Tuminem",
      role: "Sales & Marketing",
      image: "/images/about/hanan.png",
    },
    {
      name: "Danendra",
      role: "Software Engineer",
      image: "/images/about/danen.png",
    },
    {
      name: "Boni Steven",
      role: "AI Engineer",
      image: "/images/about/boni.png",
    },
    {
      name: "Laudza",
      role: "Web3 Engineer",
      image: "/images/about/laudza.jpeg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-800 md:py-20 lg:py-28">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="bg-secondary/5 absolute -bottom-48 -right-48 h-96 w-96 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary dark:bg-primary/20">
            Our Leadership
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Meet the Minds Behind
            <span className="bg-clip-text text-primary"> Our Success</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 md:text-lg">
            Tim yang berdedikasi dengan pengalaman luas di berbagai bidang
            teknologi
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800"
            >
              {/* Image Container */}
              <div className="to-secondary/10 relative overflow-hidden bg-gradient-to-br from-primary/10 pb-8 pt-8">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-105 dark:border-gray-700 md:h-56 md:w-56">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary md:text-base">
                  {member.role}
                </p>
              </div>

              {/* Decorative Border */}
              <div className="to-secondary absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r from-primary transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
