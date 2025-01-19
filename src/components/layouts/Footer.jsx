const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 rounded-tl-lg rounded-tr-lg">
      <div className=" px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold mb-4 md:mb-0">CryptoApp</div>

          <nav className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#support" className="hover:text-gray-400">
              Support
            </a>
          </nav>
        </div>

        <div className="text-center text-sm mt-4">
          &copy; {new Date().getFullYear()} CryptoApp. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
