import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const redirectToWhatsApp = () => {
    const phoneNumber = "6285718935040";

    const message = "Halo, saya ingin menghubungi Anda";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-[96px] right-6 z-[99] flex flex-col items-center gap-3">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[4px] h-2.5 w-2.5 rotate-45 border-l-2 border-t-2 border-white"></span>
        </button>
      )}

      <button
        onClick={redirectToWhatsApp}
        aria-label="Chat via WhatsApp"
        title="Hubungi kami via WhatsApp"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95"
      >
        <FaWhatsapp className="h-7 w-7 text-white" />
      </button>
    </div>
  );
}
