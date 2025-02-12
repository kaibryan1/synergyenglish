// Sections
import Header from "../header/Header";
import Hero from "./Hero/Hero";
import Mission from "./Mission/Mission";
import CoursesGrid from "./Courses/CoursesGrid";
import FAQ from "./FAQ/Faq";
import Feedbacks from "./Feedbacks/Feedbacks";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <Mission />
      <CoursesGrid />
      <FAQ />
      <Feedbacks />
      <Footer />
    </main>
  );
}
