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
      className={`border-b-2 top-0 sticky z-10 border-black text-black font-bold text-2xl transition ease-in ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <ul
        className={`flex transition ease-in-out duration-1000  ${
          isScrolled ? "flex-row" : "flex-row-reverse"
        } `}
      >
        <a
          href="#three"
          className={` hover:bg-orange-600 transition ease-in ${
            isScrolled ? "p-5" : "p-10"
          }`}
        >
          Contact
        </a>
        <a
          href="#two"
          className={` hover:bg-orange-600 transition ease-in ${
            isScrolled ? "p-5" : "p-10"
          }`}
        >
          Skill
        </a>
        <a
          href="#one"
          className={` hover:bg-orange-600 transition ease-in ${
            isScrolled ? "p-5" : "p-10"
          }`}
        >
          Profile
        </a>
      </ul>
    </nav>
  );
}
