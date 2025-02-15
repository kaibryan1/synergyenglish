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

export default function Courses() {
  const { openModal, closeModal } = useContext(ModalContext);
  const handleOpenModal = (course) => {
    console.log("Clicked");
    openModal(CoursesModal, { content: course, closeModal }, course.title);
  };

  return (
    <section className="section section--big--padding">
      <div className="container">
        <div className={styles.title__textWrapper}>
          <p className="title">Our Courses</p>
          <h3>Courses from age 6 to 16</h3>
          <p className="body_big">
            From YLE Starters to KET and beyond, we offer a wide range of
            engaging English courses tailored to young learners aged 6 to 16,
            building strong foundations for lifelong success.
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
