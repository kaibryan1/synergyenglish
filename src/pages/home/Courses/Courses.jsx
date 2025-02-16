import styles from "./Courses.module.scss";

// React
import { useContext } from "react";

// data
import { COURSES } from "../../../data/Courses";

// Context
import { ModalContext } from "../../../store/ModalProvider";

// Custom Components
import Class from "./Course";
// modal
import CoursesModal from "../CoursesModal/CoursesModal";

// Localization
import "../../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function Courses() {
  // Localization
  const { t, i18n } = useTranslation();

  const { openModal, closeModal } = useContext(ModalContext);
  const handleOpenModal = (course) => {
    openModal(CoursesModal, { content: course, closeModal });
  };

  return (
    <section id="courses" className="section section--big--padding">
      <div className="container">
        <div className={styles.title__textWrapper}>
          <p className="title">{t("home.courses.sectionTitle")}</p>
          <h3>{t("home.courses.title")}</h3>
          <p className="body_big">
            {t("home.courses.subtitle") ||
              "From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailored to young learners aged 6 to 16, building strong foundations for lifelong success. */"}
          </p>
        </div>
        <div className="bento-grid">
          {COURSES.map((course, index) => {
            return (
              <Class
                onClick={() => handleOpenModal(course)}
                key={index}
                course={course}
                index={index}
              ></Class>
            );
          })}
        </div>
      </div>
    </section>
  );
}
