const isLocal = window.location.hostname === "localhost";

// const BASE_CDN_URL = import.meta.env.VITE_BASE_CDN_URL || "/assets/";
const BASE_CDN_URL = "https://kaibryan1.github.io/synergyenglish/assets/";

const CDN_IMAGES = {
  images: {
    Boy: "/Footer/Kid%20Boy.png",
    Girl: "/Footer/Kid%20Girl.png",
    Man: "/Footer/Man.png",
    Woman: "/Footer/Woman.png",
  },
  illustrations: {
    Cloud: "/Footer/Cloud.svg",
    Flower: "/Footer/Flower.svg",
    Moon: "/Footer/Moon.svg",
    Pop: "/Footer/Pop.svg",
    Star: "/Footer/Star.svg",
  },
};

const imageBase = isLocal ? "/assets" : BASE_CDN_URL;

// Images
const boyImage = imageBase + CDN_IMAGES.images.Boy;
const girlImage = imageBase + CDN_IMAGES.images.Girl;
const manImage = imageBase + CDN_IMAGES.images.Man;
const womanImage = imageBase + CDN_IMAGES.images.Woman;

// Illustrations
const cloudImage = imageBase + CDN_IMAGES.illustrations.Cloud;
const flowerImage = imageBase + CDN_IMAGES.illustrations.Flower;
const moonImage = imageBase + CDN_IMAGES.illustrations.Moon;
const popImage = imageBase + CDN_IMAGES.illustrations.Pop;
const starImage = imageBase + CDN_IMAGES.illustrations.Star;

export const FOOTER_DATA = [
  [
    {
      image: boyImage,
      text: null,
      color: "var(--color-brand)",
    },
    {
      image: flowerImage,
      text: null,
      color: "var(--color-beige)",
    },
    {
      image: girlImage,
      text: null,
      color: "var(--color-brand)",
    },
    {
      image: null,
      text: "fun",
      color: "var(--color-white)",
    },
    {
      image: cloudImage,
      text: null,
      color: "var(--color-cloud)",
    },
    {
      image: boyImage,
      text: null,
      color: "var(--color-brand)",
    },
  ],
  [
    {
      image: starImage,
      text: null,
      color: "var(--color-taro)",
    },
    {
      image: null,
      text: "English",
      color: "var(--color-white)",
    },
    {
      image: moonImage,
      text: null,
      color: "var(--color-brand)",
    },
    {
      image: null,
      text: "for",
      color: "var(--color-white)",
    },
    {
      image: womanImage,
      text: null,
      color: "var(--color-brand)",
    },
  ],
  [
    {
      image: manImage,
      text: null,
      color: "var(--color-brand)",
    },
    {
      image: girlImage,
      text: null,
      color: "var(--color-brand)",
    },
    {
      image: null,
      text: "kids",
      color: "var(--color-white)",
    },
    {
      image: womanImage,
      text: null,
      color: "var(--color-brand)",
    },
    {
      image: popImage,
      text: null,
      color: "var(--color-beige)",
    },
    {
      image: moonImage,
      text: null,
      color: "var(--color-brand)",
    },
  ],
];
