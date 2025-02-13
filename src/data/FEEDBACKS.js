const isLocal = window.location.hostname === "localhost";

// const BASE_CDN_URL = import.meta.env.VITE_BASE_CDN_URL || "/assets/";
const BASE_CDN_URL = import.meta.env.VITE_BASE_CDN_URL;
console.log(BASE_CDN_URL);

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

const imageBase = isLocal ? "/assets" : BASE_CDN_URL;

// Profiles
const mohmohImage = imageBase + CDN_IMAGES.profiles.mohmoh;
const popoImage = imageBase + CDN_IMAGES.profiles.popo;
const shweyeewinImage = imageBase + CDN_IMAGES.profiles.shweyeewin;

// Illustrations
const flowerImage = imageBase + CDN_IMAGES.illustrations.Flower;
const cloudImage = imageBase + CDN_IMAGES.illustrations.Cloud;
const plantImage = imageBase + CDN_IMAGES.illustrations.Plant;
const starImage = imageBase + CDN_IMAGES.illustrations.Star;

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
      illustration: cloudImage,
    },
    {
      id: 2,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 3,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Moh Moh",
        initial: "W",
        image: mohmohImage,
      },
      // illustration: BASE_CDN_URL + CDN_IMAGES.illustrations.Plant,
      illustration: flowerImage,
    },
    {
      id: 4,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
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
      illustration: flowerImage,
    },
    {
      id: 6,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
    },
    {
      id: 7,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: popoImage,
      },
      illustration: flowerImage,
    },
    {
      id: 8,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: shweyeewinImage,
      },
      illustration: starImage,
    },
    {
      id: 9,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: plantImage,
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
      illustration: cloudImage,
    },
    {
      id: 11,
      body: "“ From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 12,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
    },
    {
      id: 13,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: plantImage,
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
      illustration: flowerImage,
    },
    {
      id: 15,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: flowerImage,
    },
    {
      id: 16,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: starImage,
    },
    {
      id: 17,
      body: "“From YLE Starters to KET and beyond, we offer a wide range of engaging English courses tailor ”",
      parent: {
        name: "Ma Wah Wah",
        initial: "W",
        image: null,
      },
      illustration: cloudImage,
    },
  ],
];
