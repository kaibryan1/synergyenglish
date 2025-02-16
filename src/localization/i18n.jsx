import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "my",
  resources: {
    en: {
      translation: {
        home: {
          nav: {
            Home: "Home",
            Mission: "Mission",
            Courses: "Courses",
            FAQ: "FAQ",
            Feedbacks: "Feedbacks",
          },
          mission: {
            sectionTitle: "Our Mission",
            firstTitle: "Fun learning is the most productive one!",
            firstSubtitle:
              " We believe our kids learn English best when they are having fun. So, we offer engaging lessons and as we see the smiles on our young kids, we are doing our best job as teachers.",
            secondTitle: "That’s why, we keep our kids happy!",
            secondSubtitle:
              "Our professional teachers truly understand the nature of our kids. Kids learn and do things better when they are in relax and comfortable environments. That’s why we don’t just teach! We as well put smiles on our kids!",
          },
          courses: {
            sectionTitle: "Our Courses",
            title: "Courses from age 6 to 16",
            subtitle:
              "From YLE starters to KET and beyond, we offer a wide range of engaging English courses tailored to young leaners. Our students are from age 6 to 16 who are building solid foundations for lifelong English success.",
            courseDetails: {
              yle: {
                title: "Young Learners English Course",
                shortDescription:
                  "YLE is a course we encourage students from age 6 to 16 to learn as it greatly assist our students in accessing their skills at a young age.",
                longDescription:
                  "YLE is a course we encourage students from age 6 to 16 to learn as it greatly assist our students in accessing their skills at a young age. YLE is a course we encourage students from age 6 to 16 to learn as it greatly assist our students in accessing their skills at a young age.",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              generalEnglish: {
                title: "General English Course",
                shortDescription:
                  "Our general english course is for kids with no background english to gain In just 60 lessons, you could see remarkable improvements in your speaking and listening skills, and we have six CEFR-aligned levels (A1 to C2) to suit every learner.",
                longDescription:
                  "Our general english course is for kids with no background english to gain In just 60 lessons, you could see remarkable improvements in your speaking and listening skills, and we have six CEFR-aligned levels (A1 to C2) to suit every learner. Our convenient Bangkok locations make it easy to learn English in-person, or you can choose online sessions for ultimate flexibility.",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              art: {
                title: "Art and Extracarriculars",
                shortDescription: "We don't just teach kids English.",
                longDescription:
                  "We don't just teach kids English. We like to keep our kids positive and excited to learn with us. That's why we have tailored some free learing clubs that are fun and enjoyable for our kids. ",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              phonic: {
                title: "Phonic For Kids",
                shortDescription:
                  "Pronounciation Training for kids between age of 6 to 16. We do encourage parents to help kids build up vocabularies and pronouciations since young age.",
                longDescription:
                  "Pronounciation Training for kids between age of 6 to 16. We do encourage parents to help kids build up vocabularies and pronouciations since young age. This course is designed to help your kids build a solid foundation for language fluency",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
            },
            button: "Learn More",
          },
          faq: {
            title: "Learn more about our center",
            accordians: [
              {
                title: "What course book are we using?",
                body: "Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "How long a course would take for 6 - 9 olds?",
                body: "Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "Are the classes only through online?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "From which level, are YLE Courses starting?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "Can my child of 5 years old attend?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "What are Synergy English Free Clubs?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
            ],
          },
          feedbacks: {
            sectionTitle: "မှတ်ချက်များ",
            title: "Synergy မှ ကျောင်းသားမိဘများရဲ့ မှတ်ချက်များ",
            button: "သင်တန်းအပ်ရန်",
          },
          footer: {
            title: "အတူတူ ပျော်ပျော်ရွှင်ရွှင် သင်ယူကြ‌ရအောင်",
            button: "သင်တန်းအပ်ရန်",
            nav: {
              Home: "Home",
              Mission: "Our Mission",
              Courses: "Courses",
              Faq: "FAQ Questions",
              Feedbacks: "Feedbacks",
            },
            learnMore: {
              Video: "Watch our video",
              Art: "Art and Craft",
              FreeClubs: "Free Synergy Clubs",
            },
          },
        },
      },
    },
    my: {
      translation: {
        home: {
          nav: {
            Home: "ပင်မ",
            Mission: "ရည်ရွယ်ချက်",
            Courses: "အတန်းများ",
            FAQ: "မေးခွန်းများ",
            Feedbacks: "မှတ်ချက်",
          },
          mission: {
            sectionTitle: "ရည်ရွယ်ချက်",
            firstTitle:
              "ပျော်ပျော်ရွှင်ရွှင်သင်ယူခြင်းက အထိအရောက်ဆုံး သင်ယူခြင်းပါပဲ",
            firstSubtitle:
              "သားသားမီးမီးလေးတွေက စာသင်တဲ့အခါမှာ ပျော်ပျော်ရွှင်ရွှင်ရှိနေမယ်၊ ပျင်းတယ်လို့ မခံစားရဘူးဆိုရင် အထိအရောက်ဆုံးသင်ယူနိုင်လိမ့်မယ်လို့ ခံယူထားပါတယ်။",
            secondTitle:
              "ဒါကြောင့်မို့ သားသားမီးမီးတို့ ပျော်ပျော်ရွှင်ရွှင်နဲ့သင်ယူနိုင်မို့ ရည်ရွယ်ထားပါတယ်။",
            secondSubtitle:
              "သားသားမီးမီးလေးတွေက စာသင်တဲ့အခါမှာ ပျော်ပျော်ရွှင်ရွှင်ရှိနေမယ်၊ ပျင်းတယ်လို့ မခံစားရဘူးဆိုရင် အထိအရောက်ဆုံးသင်ယူနိုင်လိမ့်မယ်လို့ ခံယူထားပါတယ်။",
          },
          courses: {
            sectionTitle: "အတန်းများ",
            title: "အသက် ၆ နှစ်မှ ၁၆ နှစ်ကလေးများအတွက်",
            subtitle:
              "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
            courseDetails: {
              yle: {
                title: "Young Learners English Course",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်. Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              generalEnglish: {
                title: "General English Course",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "Our general english course is for kids with no background english to gain In just 60 lessons, you could see remarkable improvements in your speaking and listening skills, and we have six CEFR-aligned levels (A1 to C2) to suit every learner. Our convenient Bangkok locations make it easy to learn English in-person, or you can choose online sessions for ultimate flexibility.",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              art: {
                title: "Art and Extracarriculars",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "We don't just teach kids English. We like to keep our kids positive and excited to learn with us. That's why we have tailored some free learing clubs that are fun and enjoyable for our kids. ",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
              phonic: {
                title: "Phonic For Kids",
                shortDescription:
                  "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
                longDescription:
                  "Pronounciation Training for kids between age of 6 to 16. We do encourage parents to help kids build up vocabularies and pronouciations since young age. This course is designed to help your kids build a solid foundation for language fluency",
                subDetails: {
                  duration: {
                    title: "Duration",
                    body: "From 4 to 6 months",
                  },
                  age: {
                    title: "Age",
                    body: "Kids from age of 6 to 16 years old",
                  },
                  level: {
                    title: "Level",
                    body: "Pre-starters, Starters, Movers, Flyers, KETs",
                  },
                  outcomes: {
                    title: "Outcomes",
                    body: "Essential 4 skills, Fluency focused with upbringing public speaking abilities",
                  },
                },
              },
            },
            button: "ပိုမိုဖတ်ရှူရန်",
          },
          faq: {
            title: "ကျောင်းအကြောင်းပိုမိုလေ့လာရန်",
            accordians: [
              {
                title: "What course book are we using?",
                body: "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်. Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
              },
              {
                title: "How long a course would take for 6 - 9 olds?",
                body: "Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်. Young Learner English (YLE) လို့ခေါ်တဲ့ စာမေးပွဲတွေဟာ Cambridge က တရားဝင်သတ်မှတ်ထားတဲ့ စာမေးပွဲ ဖြစ်ပြီးတော့ အသက် (6)နှစ် ကနေ (12)နှစ် အထိ ကလေးတွေ အတွက် ရည်ရွယ်ပါတယ်",
              },
              {
                title: "Are the classes only through online?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "From which level, are YLE Courses starting?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "Can my child of 5 years old attend?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
              {
                title: "What are Synergy English Free Clubs?",
                body: "It takes about lorem Power Up is a brand new course from the bestselling author team of Caroline Nixon and Michael Tomlinson. It provides the perfect start to life's great adventure, creating 'future ready' learners who embrace life with confidence",
              },
            ],
          },
          feedbacks: {
            sectionTitle: "မှတ်ချက်များ",
            title: "Synergy မှ ကျောင်းသားမိဘများရဲ့ မှတ်ချက်များ",
            button: "သင်တန်းအပ်ရန်",
          },
          footer: {
            title: "အတူတူ ပျော်ပျော်ရွှင်ရွှင် သင်ယူကြ‌ရအောင်",
            button: "သင်တန်းအပ်ရန်",
            nav: {
              Home: "ပင်မစာမျက်နှာ",
              Mission: "ရည်ရွယ်ချက်",
              Courses: "အတန်းများ",
              Faq: "မေးခွန်းများ",
              Feedbacks: "မှတ်ချက်",
            },
            learnMore: {
              Video: "ဗီဒီရို ကြည့်ရှူရန်",
              Art: "ပန်ချီ နှင့် လက်မှု အတန်း",
              FreeClubs: "အခြား Synergy အတန်းများ",
            },
          },
        },
      },
    },
  },
});

export default i18n;
