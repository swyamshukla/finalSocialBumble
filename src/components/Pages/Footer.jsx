import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
<footer className="bg-white text-gray-800 mt-16 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Brand Section */}
    <div>
      <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-gray-900">
        StichSearch
      </h2>
      <p className="text-sm text-gray-500 leading-relaxed">
        Discover people, connect deeply, and spark real moments.
        Your journey to meaningful connections starts here.
      </p>
      <div className="mt-6 flex items-center bg-yellow-200 px-3 py-3 rounded-xl w-fit">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://stichsearch.com"
          alt="QR Code"
          className="w-16 h-16 rounded-md"
        />
        <p className="text-gray-800 text-sm ml-3 font-medium">
          Scan the QR code to get the StichSearch app
        </p>
      </div>
    </div>

    {/* Our Apps */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Apps</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-yellow-600">Stich Date</a></li>
        <li><a href="#" className="hover:text-yellow-600">Stich BFF</a></li>
        <li><a href="#" className="hover:text-yellow-600">Stich Pro</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-yellow-600">About</a></li>
        <li><a href="#" className="hover:text-yellow-600">Contact Us</a></li>
        <li><a href="#" className="hover:text-yellow-600">Careers</a></li>
        <li><a href="#" className="hover:text-yellow-600">The Buzz</a></li>
        <li><a href="#" className="hover:text-yellow-600">Support</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Legal</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-yellow-600">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-yellow-600">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-yellow-600">Accessibility</a></li>
        <li><a href="#" className="hover:text-yellow-600">Cookie Settings</a></li>
        <li><a href="#" className="hover:text-yellow-600">Notice at Collection</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 text-sm text-gray-500">
      <p>© {new Date().getFullYear()} <span className="font-semibold text-gray-900">StichSearch</span> — All rights reserved.</p>
      
      <div className="flex items-center gap-4 mt-3 md:mt-0">
        <div className="flex space-x-4 text-gray-600">
          <a href="#" className="hover:text-yellow-600"><i className="ri-instagram-line text-xl"></i></a>
          <a href="#" className="hover:text-yellow-600"><i className="ri-facebook-box-line text-xl"></i></a>
          <a href="#" className="hover:text-yellow-600"><i className="ri-linkedin-line text-xl"></i></a>
          <a href="#" className="hover:text-yellow-600"><i className="ri-twitter-x-line text-xl"></i></a>
          <a href="#" className="hover:text-yellow-600"><i className="ri-youtube-line text-xl"></i></a>
        </div>

        <div className="flex items-center gap-2 border px-3 py-1 rounded-full cursor-pointer hover:border-yellow-500 transition">
          <i className="ri-global-line"></i>
          <span>English</span>
        </div>

        <button className="border px-4 py-1 rounded-full hover:border-yellow-500 transition">
          Sign In
        </button>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
