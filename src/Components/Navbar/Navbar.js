import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cartIcon);
  const firstStyle = {
    height: "25px",
    width: "25px",
  };
  return (
    <div>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <a className="text-xl text-white pr-2 font-semibold" href="#">
              Redux
            </a>

            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a className="nav-link text-white" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center relative">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
              href="#"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shopping-cart"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                ></path>
              </svg>
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                {cart}
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
