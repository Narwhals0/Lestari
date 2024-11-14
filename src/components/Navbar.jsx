import { useState } from "react";

const Navbar = () => {
  const Menus = [
    { icon: "home-outline", dis: "translate-x-0" },
    { icon: "trash-outline", dis: "translate-x-16" },
    { icon: "gift-outline", dis: "translate-x-32" },
    { icon: "person-outline", dis: "translate-x-48" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="flex justify-center fixed bottom-0 w-screen">
      <div className="bg-[rgb(94,133,50)] max-h-[4.4rem] pb-5 rounded-t-xl w-full flex justify-center">
        <ul className="flex relative">
          <span
            className={`bg-gradient-to-r from-[#5E8532] to-[#88C04F] duration-300 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute
         -top-2 rounded-full`}
          ></span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl text-white cursor-pointer duration-500 ${
                    i === active && "-mt-3"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
