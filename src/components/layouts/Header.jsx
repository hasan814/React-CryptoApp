import { FcMoneyTransfer } from "react-icons/fc";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-bl-lg rounded-br-lg">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-extrabold tracking-wide">CryptoApp</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a
          href="/"
          className="flex items-center space-x-2 text-sm font-medium hover:text-gray-300"
        >
          <FcMoneyTransfer size={30} />
        </a>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">
          <span className="sr-only">Open Menu</span>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
