import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setScrolled] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
      window.addEventListener("scroll", changeNavbarColor);
  }, [])
  
  return (
    <nav
      className={`hidden  top-[30%] fixed z-10 text-black font-medium md:text-xl transition ease-in text-sm md:flex justify-center`}
    >
      <ul
        className={`flex transition ease-in-out duration-1000 gap-6 flex-col-reverse`}
      >
        <a
          href="#three"
          className={` hover:bg-[#fed000] transition ease-in p-2 hover:opacity-100 ${
            isScrolled && "opacity-50"
          }`}
        >
          Contact
        </a>
        <a
          href="#two"
          className={` hover:bg-[#fed000] transition ease-in p-2 hover:opacity-100 ${
            isScrolled && "opacity-50"
          }`}
        >
          Project
        </a>
        <a
          href="#one"
          className={` hover:bg-[#fed000] transition ease-in p-2 hover:opacity-100 tracking-tighter ${
            isScrolled && "opacity-50"
          }`}
        >
          About Me
        </a>
        <a
          href="#one"
          className={` hover:bg-[#fed000] transition ease-in p-2 hover:opacity-100 tracking-tighter ${
            isScrolled && "opacity-50"
          }`}
        >
          Hey There
        </a>
      </ul>
    </nav>
  );
}
