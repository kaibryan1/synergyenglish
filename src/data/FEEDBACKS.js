const isLocal = window.location.hostname === "localhost";

import flower from "/assets/Others/Illu-Cloud.svg";

const CDN_IMAGES = {
  profiles: {
    mohmoh: "/Profiles/MohMoh.png",
    popo: "/Profiles/PoPo.png",
    shweyeewin: "/Profiles/ShweYeeWin.png",
  },
  illustrations: {
    Cloud: "/Others/Illu-Cloud.svg",
    Flower: "/Others/Illu-Flower.svg",
    Plant: "/Others/Illu-Plant.svg",
    Star: "/Others/Illu-Star.svg",
  },
};

const BASE_CDN_URL = import.meta.env.VITE_BASE_CDN_URL || "/assets/";
console.log(BASE_CDN_URL + CDN_IMAGES.illustrations.Flower);
console.log("/assets/Others/Illu-Cloud.svg");

export const FEEDBACKS = [
  [
    {
      id: 1,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Cloud,
    },
    {
      id: 2,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
    {
      id: 3,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Test Test",
        initial: "W",
        image: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
      },
      // illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Plant,
      illustration: flower,
    },
    {
      id: 4,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Star,
    },
  ],
  [
    {
      id: 5,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
    {
      id: 6,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Star,
    },
    {
      id: 7,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: "assets/Profiles/PoPo.png",
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
    {
      id: 8,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: "assets/Profiles/ShweYeeWin.png",
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Star,
    },
    {
      id: 9,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Plant,
    },
  ],
  [
    {
      id: 10,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Cloud,
    },
    {
      id: 11,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
    {
      id: 12,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Star,
    },
    {
      id: 13,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Plant,
    },
  ],
  [
    {
      id: 14,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
    {
      id: 15,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
    {
      id: 16,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
    {
      id: 17,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Flower,
    },
  ],
];
