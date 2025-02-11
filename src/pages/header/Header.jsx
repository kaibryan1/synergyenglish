import styles from "./Header.module.scss";

import Navbar from "../../components/navbar/Navbar";
export default function Header() {
  return (
    <header className={`section ${styles["section--header"]}`}>
      <div className="container">
        <Navbar></Navbar>
      </div>
    </header>
  );
}
