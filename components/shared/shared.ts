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
    description: "Pong! was my first game. It was built with JavaScript.",
    githubLink: "https://github.com/darwin911/pong",
  },
  {
    id: 1,
    href: "https://vinyl.surge.sh/",
    imgSrc: Vinyl,
    title: "Vinyl",
    description:
      "CRUD (Create, Read, Update, Delete) application, built with React, Express, Sequelize, Postgres. The UI controls are custom CSS, and are controlled with state. Tracks are uploaded through the server to an AWS S3 Bucket. Authentication implemented with JSON Web Tokens, storing hashed passwords to the database. Login and Register inputs with validation.",
    githubLink: "https://github.com/darwin911/vinyl-express",
  },
  {
    id: 2,
    href: "https://exercise-tracker-blink.netlify.app/",
    imgSrc: ExerciseTracker,
    title: "Exercise Tracker",
    description:
      "Logging, filtering and viewing exercises. Built with React, Mongo, Express. I also used framer-motion for various animations.",
    githubLink: "https://github.com/darwin911/exercise-tracker",
  },
  {
    id: 3,
    href: "https://www.juegacomocampeon.org/",
    imgSrc: JCC,
    title: "Juega Como Campeon",
    description:
      "Designed and built a static website for a non-profit working with underpriviledged children in the Dominican Republic.",
    githubLink: "",
  },
];
