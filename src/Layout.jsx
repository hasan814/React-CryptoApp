import PropTypes from "prop-types";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 max-w-[1000px] mx-auto">
      <Header />
      <main className="flex-grow px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
