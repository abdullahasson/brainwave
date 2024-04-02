import { navigation } from "../constants";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import { brainwave } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";
import HamburgerMenu from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setopenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      enablePageScroll();
    } else {
      setopenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setopenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b-1 border-n-6
    lg:border-n-8/90
      ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}
    `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave" width="190" height="40" />
        </a>

        <nav
          className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 
          lg:static lg:flex lg:mx-auto lg:bg-transparent
          ${openNavigation ? "flex" : "hidden"}
          `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`
                            block relative font-code text-2xl uppervase text-n-1 transition-colors px-6 py-6
                            hover:text-color-1 
                            md:py-8 
                            lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 
                            xl:px-12
                            ${item.onlyMobile ? "lg:hidden" : ""}
                            ${
                              item.url === pathname.hash
                                ? "z-2 lg:text-n-1"
                                : "lg:text-n-1/50"
                            }
                        `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#newaccount"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New accuont
        </a>

        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className={`ml-auto lg:hidden`}
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
