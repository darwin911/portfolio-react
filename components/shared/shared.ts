import Pong from "@/public/pong.png";
import JCC from "@/public/jcc.jpg";
import ExerciseTracker from "@/public/exercise-tracker.png";
import { StaticImageData } from "next/image";
import Vinyl from "@/public/vinyl.png";

export const MAIN_NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export type Project = {
  id: number;
  href: string;
  imgSrc: StaticImageData;
  title: string;
  description?: string;
  githubLink?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 0,
    href: "https://pong-js.netlify.app/",
    imgSrc: Pong,
    title: "PONG",
    description:
      "Developed my first game, 'Pong!', using JavaScript. It's a classic table tennis arcade game where players earn points by hitting the paddle.",
    githubLink: "https://github.com/darwin911/pong",
  },
  {
    id: 1,
    href: "https://vinyl.surge.sh/",
    imgSrc: Vinyl,
    title: "Vinyl",
    description:
      "This CRUD app, built with React, Express, Sequelize, and Postgres, features custom UI controls, AWS S3 track uploads, JWT authentication, and input validation for user registration and login.",
    githubLink: "https://github.com/darwin911/vinyl-express",
  },
  {
    id: 2,
    href: "https://exercise-tracker-blink.netlify.app/",
    imgSrc: ExerciseTracker,
    title: "Exercise Tracker",
    description:
      "Developed a logging and filtering system for exercises using React, Mongo, Express, and react-hook-form for client-side form handling, with added animations via framer-motion for a dynamic user experience.",
    githubLink: "https://github.com/darwin911/exercise-tracker",
  },
  {
    id: 3,
    href: "https://www.juegacomocampeon.org/",
    imgSrc: JCC,
    title: "Juega Como Campeon",
    description:
      "Designed and developed a static website for a Dominican Republic-based non-profit serving underprivileged children, and also responsible for ongoing site maintenance and updates.",
    githubLink: "",
  },
];
