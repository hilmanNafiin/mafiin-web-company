import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "ERP Solutions",
    paragraph:
      "Kami menyediakan layanan implementasi dan kustomisasi Enterprise Resource Planning (ERP) yang terintegrasi. Solusi kami membantu bisnis Anda mengelola keuangan, SDM, rantai pasok, dan operasional secara real-time, meningkatkan efisiensi dan pengambilan keputusan strategis.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V12L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 22C13 22 22 17 22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "IT Support",
    paragraph:
      "Layanan IT Support 24/7 kami siap membantu menyelesaikan masalah teknis, mulai dari perangkat keras, jaringan, hingga perangkat lunak. Tim ahli kami memastikan operasional bisnis Anda tetap berjalan lancar dengan respons cepat dan solusi preventif yang handal.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M4 10H20" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
        <circle cx="16" cy="15" r="1.5" fill="currentColor" />
        <circle cx="8" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Build Apk",
    paragraph:
      "Jasa pembuatan dan pengemasan aplikasi Android (APK) dari berbagai platform. Kami mengubah ide aplikasi Anda menjadi file APK yang siap pakai, dioptimalkan untuk performa tinggi, kompatibilitas perangkat luas, dan keamanan data pengguna.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 12V22" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Website Development",
    paragraph:
      "Layanan pengembangan website profesional yang responsif, cepat, dan SEO-friendly. Kami membangun website custom mulai dari company profile, e-commerce, hingga portal berita, dengan fokus pada user experience (UX) dan keamanan tingkat lanjut.",
  },
  {
    id: 5,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4L20 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 4L4 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Graphic Design",
    paragraph:
      "Kami menghadirkan desain grafis kreatif untuk branding, logo, konten media sosial, hingga materi cetak. Tim desainer kami memadukan estetika modern dengan identitas merek Anda, menghasilkan visual yang menarik dan komunikatif untuk audiens target.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Artificial Intelligence (AI)",
    paragraph:
      "Layanan pengembangan solusi AI kustom, termasuk machine learning, natural language processing (NLP), computer vision, dan predictive analytics. Kami membantu bisnis Anda mengotomatisasi proses, menggali wawasan data, dan menciptakan pengalaman cerdas bagi pengguna.",
  },
  {
    id: 7,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 18V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 12H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 12H2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M19.07 4.93L16.24 7.76"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M7.76 16.24L4.93 19.07"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16.24 16.24L19.07 19.07"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Web3 Development",
    paragraph:
      "Kami mengembangkan aplikasi terdesentralisasi (dApps), smart contracts, dan integrasi blockchain untuk berbagai kebutuhan Web3. Mulai dari marketplace NFT, DeFi, hingga solusi tokenisasi, tim kami siap membawa proyek Anda ke ekosistem blockchain yang aman dan inovatif.",
  },
  {
    id: 8,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 9V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 12H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M19 19L22 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Cyber Security",
    paragraph:
      "Layanan keamanan siber menyeluruh, termasuk penetration testing, vulnerability assessment, security audit, dan implementasi sistem keamanan (firewall, IDS/IPS). Kami melindungi aset digital Anda dari ancaman siber, memastikan kerahasiaan, integritas, dan ketersediaan data.",
  },
  {
    id: 9,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 18V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 12H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 12H2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16.24 16.24L19.07 19.07"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16.24 7.76L19.07 4.93"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4.93 19.07L7.76 16.24"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M20 20L22 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Internet of Things (IoT)",
    paragraph:
      "Kami mengembangkan solusi IoT yang menghubungkan perangkat fisik ke cloud untuk monitoring dan kontrol cerdas. Layanan mencakup perancangan perangkat keras, pengembangan firmware, platform IoT, hingga integrasi sensor untuk smart home, industri, dan agrikultur.",
  },
];

export default featuresData;
