import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const Menus = [
    { icon: "home-outline", path: "/", dis: "translate-x-0" },
    { icon: "trash-outline", path: "/camera", dis: "translate-x-16" },
    { icon: "gift-outline", path: "/gifts", dis: "translate-x-32" },
    { icon: "person-outline", path: "/profile", dis: "translate-x-48" },
  ];

  const location = useLocation();
  const [active, setActive] = useState(0);

  // Update active menu based on the current route
  useEffect(() => {
    const activeIndex = Menus.findIndex((menu) => menu.path === location.pathname);
    setActive(activeIndex === -1 ? 0 : activeIndex); // Default to 0 if not found
  }, [location, Menus]);
  
  return (
    <div className="flex justify-center fixed bottom-0 w-screen">
      <div className="bg-[rgb(94,133,50)] max-h-[4.4rem] pb-5 rounded-t-xl w-full flex justify-center">
        <ul className="flex relative">
          <span
            className={`bg-gradient-to-r from-[#5E8532] to-[#88C04F] ${Menus[active].dis} border-4 border-white h-16 w-16 absolute
             -top-2 rounded-full transition-transform`}
          ></span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <Link to={menu.path} className="flex flex-col text-center pt-6">
                <span
                  className={`text-xl text-white cursor-pointer ${
                    i === active && "-mt-3"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
