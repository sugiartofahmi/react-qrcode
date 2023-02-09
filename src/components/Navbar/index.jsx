import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [valid, setValid] = useState(false);

  return (
    <header className="pb-6 bg-white shadow-lg fixed w-full  lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-black">React QR Code</h1>
          </div>

          <button
            onClick={() => setValid(!valid)}
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <GiHamburgerMenu size={20} />
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link to="/">
              <h1 className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Home
              </h1>
            </Link>
            <Link to="/scan">
              <h1 className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Scan QR
              </h1>
            </Link>
            <Link to="/generate">
              <h1 className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Generate QR
              </h1>
            </Link>
          </div>
        </nav>

        {valid && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Solutions
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Resources
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get started now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
