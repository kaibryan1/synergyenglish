const isLocal = window.location.hostname === "localhost";

// const BASE_CDN_URL = import.meta.env.VITE_BASE_CDN_URL || "/assets/";
const BASE_CDN_URL = "https://kaibryan1.github.io/synergyenglish/assets/";

const CDN_IMAGES = {
  illustrations: {
    yle: "/Others/YleKid.svg",
    general: "/Others/GeneralImage.svg",
    art: "/Others/CroppedEllipse.svg",
    phonic: "/Others/CroppedSquare.svg",
  },
};

const imageBase = isLocal ? "/assets" : BASE_CDN_URL;

export const COURSES = [
  {
    id: 1,
    key: "yle",
    title: "Young Learners English Course",
    description:
      "From YLE Starters to KET and beyond, we offer a wide rangeof engaging English courses tailor. Whether your child is just beginning their English journey or preparing for international certifications, we’re here to support their growth every step of the way.",
    illustration: imageBase + CDN_IMAGES.illustrations.yle,
    details: [
      { title: "Duration", text: "From 3 to 6 months" },
      { title: "Age", text: "Kids from age of 6 to 16 years old" },
      { title: "Level", text: "Pre-starters, Starters, Movers, Flyers, KETs" },
      {
        title: "Outcomes",
        text: "Essential 4 skills, Fluency focused with upbrining public speaking abilities",
      },
    ],
  },
  {
    id: 2,
    key: "art",
    title: "Art and Extracarriculars",
    description:
      "We don't just teach kids English. We like to keep our kids positive and excited to learn with us. That's why we have tailored some free learing clubs that are fun and enjoyable for our kids. ",
    illustration: imageBase + CDN_IMAGES.illustrations.art,
    details: [
      { title: "Duration", text: "From 3 to 6 months" },
      { title: "Age", text: "Kids from age of 6 to 16 years old" },
      { title: "Level", text: "Welcome all new learners and skill levels" },
      {
        title: "Outcomes",
        text: "Ability to follow the joyful activities through speaking and interacting using English",
      },
    ],
  },
  {
    id: 3,
    key: "phonic",
    title: "Phonic For Kids",
    description:
      "Pronounciation Training for kids between age of 6 to 16. We do encourage parents to help kids build up vocabularies and pronouciations since young age. This course is designed to help your kids build a solid foundation for language fluency",
    illustration: imageBase + CDN_IMAGES.illustrations.phonic,
    details: [
      { title: "Duration", text: "From 3 to 6 months" },
      { title: "Age", text: "Kids from age of 6 to 16 years old" },
      { title: "Level", text: "Pre-starters, Starters, Movers, Flyers, KETs" },
      {
        title: "Outcomes",
        text: "Essential 4 skills, Fluency focused with upbrining public speaking abilities",
      },
    ],
  },
  {
    id: 4,
    key: "generalEnglish",
    title: "General English Course",
    description:
      "Our general english course is for kids with no background english to gain In just 60 lessons, you could see remarkable improvements in your speaking and listening skills, and we have six CEFR-aligned levels (A1 to C2) to suit every learner. Our convenient Bangkok locations make it easy to learn English in-person, or you can choose online sessions for ultimate flexibility.",
    illustration: imageBase + CDN_IMAGES.illustrations.general,
    details: [
      { title: "Duration", text: "From 3 to 6 months" },
      { title: "Age", text: "Kids from age of 6 to 16 years old" },
      { title: "Level", text: "Pre-starters, Starters, Movers, Flyers, KETs" },
      {
        title: "Outcomes",
        text: "Essential 4 skills, Fluency focused with upbrining public speaking abilities",
      },
    ],
  },
];
