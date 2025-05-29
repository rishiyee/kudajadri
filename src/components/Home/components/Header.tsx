import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import kudajadrilogo from "../../../assets/kudajadriLogo.svg";
import kudajadriDarkLogo from "../../../assets/kudajadriDarkLogo.svg";
import menuIcon from "/src/assets/menuIconHeader.svg";
import logoIcon from "/src/assets/homeMobileHeader.svg";
import whatAppIcon from "/src/assets/whatappHeader.svg";
import whatAppBlackIcon from "/src/assets/KudajadriMobileWhatapp.svg";
import HomeBlackIcon from "/src/assets/kudajadriHomeMobile.svg";
import MenuBlackIcon from "/src/assets/KudajadriMobileMenu.svg";
import { useEffect, useState } from "react";
interface HeaderProps {
  type?: "white" | "black";
}
export const Header = ({ type = "white" }: HeaderProps) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === "/" || location.pathname === "/about";
  const headerColor = scrolled ? "black" : type;


  useEffect(() => {
    if (!isHome) {
      setScrolled(true); // Always white on non-home pages
      return;
    }

    const handleScroll = () => {
      const heroHeight = 700;
      setScrolled(window.scrollY > heroHeight - 80); // adjust if your navbar isn't 80px tall
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);
  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="sm:py-6 flex gap-24 justify-center items-end mobile:hidden sm:flex">
        <NavLink
          to="/about"
          className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"
            } font-albertSans`}
        >
          About Us
        </NavLink>
        <a
          href="#a"
          className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"
            } font-albertSans`}
        >
          Facilities
        </a>
        <NavLink to="/">
          <div>
            {headerColor === "white" ? (
              <img src={kudajadrilogo} alt="" />
            ) : (
              <img src={kudajadriDarkLogo} alt="" />
            )}
          </div>
        </NavLink>
        <NavLink
          to="/gallery"
          className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"
            } font-albertSans`}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"
            } font-albertSans`}
        >
          Contact Us
        </NavLink>
      </div>
      <PhoneHeader headerColor={headerColor} />
    </div>
  );
};



const PhoneHeader = ({ headerColor }: { headerColor?: "white" | "black" }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  const openWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER; // Replace with the phone number you want to message
    const message = "Hello, I would like to inquire about your resort services."
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Try to open the WhatsApp app
    window.location.href = whatsappUrl;
  };

  return (
    <div className="flex justify-between p-4 sm:hidden">
      <div>
        {/* Menu icon triggers the sidebar toggle */}
        {headerColor === "black" ? (
          <img
            src={MenuBlackIcon}
            alt="Menu" // Add descriptive alt text
            onClick={toggleSidebar} // Toggle sidebar on click
            className="cursor-pointer" // Add cursor style to indicate interactivity
          />
        ) : (
          <img
            src={menuIcon}
            alt="Menu" // Add descriptive alt text
            onClick={toggleSidebar} // Toggle sidebar on click
            className="cursor-pointer" // Add cursor style to indicate interactivity
          />
        )}
      </div>
      <div>
        {headerColor === "black" ? (
          <img src={HomeBlackIcon} alt="Home" onClick={() => navigate("/")} className="cursor-pointer" />
        ) : (
          <img src={logoIcon} alt="Logo" onClick={() => navigate("/")} className="cursor-pointer" />
        )}
      </div>
      <div>
        {headerColor === "black" ? (
          <img
            src={whatAppBlackIcon}
            alt="WhatsApp"
            onClick={openWhatsApp} // Open WhatsApp directly on click
          />
        ) : (
          <img
            src={whatAppIcon}
            alt="WhatsApp"
            onClick={openWhatsApp} // Open WhatsApp directly on click
          />
        )}
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 flex z-50">
          {/* Overlay Effect */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={toggleSidebar}
          ></div>

          {/* Sidebar Content */}
          <div
            className={`w-64 bg-white p-4 transform transition-all duration-500 ease-in-out shadow-lg ${isSidebarOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
              }`}
          >
            <div className="flex justify-end">
              <button
                onClick={toggleSidebar}
                className="text-black text-lg font-semibold focus:outline-none" // Add outline none for better accessibility
              >
                Close
              </button>
            </div>
            <div className="text-black">
              <ul className="space-y-4 mt-6">
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
                  <Link to="/" className="text-lg font-medium" onClick={toggleSidebar}> {/* Close sidebar on link click */}
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
                  <Link to="/about" className="text-lg font-medium" onClick={toggleSidebar}> {/* Close sidebar on link click */}
                    About Us
                  </Link>
                </li>
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
                  <Link to="/gallery" className="text-lg font-medium" onClick={toggleSidebar}> {/* Close sidebar on link click */}
                    Gallery
                  </Link>
                </li>
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
                  <Link to="/contact" className="text-lg font-medium" onClick={toggleSidebar}> {/* Close sidebar on link click */}
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneHeader;


