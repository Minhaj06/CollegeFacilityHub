import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-16">
      <div className="px-3">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link to="#" className="flex items-center text-3xl font-bold">
              <span className="text-primary">College</span>Hub
            </Link>
            <p className="mt-4">Your One-Stop College Facilities Solution</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h3>
            <p>456 College Avenue, Town</p>
            <p>Phone: (987) 654-3210</p>
            <p>Email: info@collegefacilityhub.com</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Follow Us</h3>
            <div className="flex">
              <Link to="#" className="mr-2">
                <FaFacebookSquare className="text-4xl md:text-5xl" />
              </Link>
              <Link to="#" className="mr-2">
                <FaTwitterSquare className="text-4xl md:text-5xl" />
              </Link>
              <Link to="#" className="mr-2">
                <FaInstagramSquare className="text-4xl md:text-5xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p className="text-lg md:text-xl">
            &copy; {new Date().getFullYear()} CollegeFacilityHub. All rights reserved.
          </p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
