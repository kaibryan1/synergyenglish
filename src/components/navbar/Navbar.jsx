import styles from "./Navbar.module.scss";
import Button from "../button/Button";

// Context
import { ActiveNavContext } from "../../store/ActiveNavProvider";

// React
import { useContext, useEffect } from "react";

// Components
import Navlink from "./Navlink";
import logo from "/assets/Logo Type.svg";

export default function Navbar() {
  // Links
  const links = [
    { id: "hero", label: "Home", ref: "home" },
    { id: "mission", label: "Our Mission", ref: "our mission" },
    { id: "courses", label: "Courses", ref: "courses" },
    { id: "faq", label: "FAQ", ref: "faq" },
    { id: "feedbacks", label: "Feedbacks", ref: "feedbacks" },
  ];

  const { isNavActive, setIsNavActive, handleSelectNav } =
    useContext(ActiveNavContext);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNavActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className={styles.navwrapper}>
      <div>
        <img className={styles.logo} src={logo} alt="Logo image" />
      </div>
      <div className={styles.navLinks}>
        {links.map((link, index) => {
          return (
            <Navlink
              key={index}
              link={link}
              isActive={isNavActive === link.id}
              onClick={() => handleSelectNav(link.id)}
            />
          );
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <Button icon={null}>Join us</Button>
      </div>
    </div>
  );
}
