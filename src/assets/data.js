import vinyl from '../assets/images/vinyl.png';
import octave from '../assets/images/octave.png';
import pong from '../assets/images/pong.png';
import citibike from '../assets/images/citibike-stations.png';
import postPic from '../assets/images/postpic.png';
import jcc from '../assets/images/jcc.png';
import calc from '../assets/images/calc.png';

const data = {
  blurb:
    'NYC based Full-stack Developer, with interest in UI/UX. I have experience designing and building responsive Front-end and Full-stack applications. I am passionate about quality, efficiency and effective problem-solving.',
  skills: [
    {
      title: 'HTML5',
      styles: 'html'
    },
    { title: 'CSS3', styles: 'css' },
    { title: 'Sass', styles: 'sass' },
    { title: 'JavaScript (ES6)', styles: 'javascript' },
    { title: 'React', styles: 'react' },
    { title: 'TypeScript', styles: 'typescript' },
    { title: 'Express.js', styles: 'express' },
    { title: 'Node.js', styles: 'nodejs' },
    { title: 'PostgreSQL', styles: 'postgresql' },
    { title: 'Firebase', styles: 'firebase' }
  ],
  projects: [
    {
      id: 1,
      title: 'Vinyl',
      img: vinyl,
      description:
        'CRUD (Create, Read, Update, Delete) application, built with React, Express, Sequelize, Postgres. The UI controls are custom CSS, and are controlled with state. Tracks are uploaded through the server to an AWS S3 Bucket. Authentication implemented with JSON Web Tokens, storing hashed passwords to the database. Login and Register inputs with validation.',
      github: 'https://github.com/darwin911/vinyl-express',
      link: 'https://vinyl.surge.sh/'
    },
    {
      id: 2,
      title: 'Octave',
      img: octave,
      description:
        'A collaborative React App built with Express. Consuming data from the Ticketmaster API, loading database with user selected artists, and venues. Authentication implemented with JSON Web Tokens, storing hashed passwords to the database. Design based off a mock-up from a UI/UX design team of students at General Assembly.',
      github: 'https://github.com/darwin911/octave',
      link: 'https://octave-bananas.surge.sh/'
    },
    {
      id: 3,
      title: 'CitiBike Stations',
      img: citibike,
      description:
        'React App, consuming NYC Open Data API (CitiBike Station Data) using Google Maps, Google Maps Geocoding API to power search fields. Custom styling with CSS3.',
      github: 'https://github.com/darwin911/citibike-react',
      link: 'https://citibike-react.netlify.com/'
    },
    {
      id: 4,
      title: 'PostPic',
      img: postPic,
      description:
        'React App on Express (node.js) server. This project was built to mimic web-apps/apps such as Instagram.',
      github: 'https://github.com/darwin911/imageSharingCRUD',
      link: 'http://luxuriant-bun.surge.sh/'
    },
    {
      id: 5,
      title: 'Pong',
      img: pong,
      description:
        'Built a one player version of the classic arcade game Pong in vanilla JavaScript during the Web Development Immersive (WDI) course at General Assembly. Wrote custom collision detection responsive to browser size and mobile devices.',
      github: 'https://github.com/darwin911/pong',
      link: 'https://pong-js.netlify.com/'
    },
    {
      id: 6,
      title: 'Juega Como Campeon',
      img: jcc,
      description:
        'Designed and built a static website for a non-profit working with underpriviledged children in the Dominican Republic.',
      link: 'http://www.juegacomocampeon.org'
    },
    {
      id: 7,
      title: 'Calculator',
      img: calc,
      description:
        'Created all buttons with an unordered list and added styles to make them look like such. Positioning was a bit tricky but helped me improve my CSS skills. JavaScript is what powers the actual functionality of the calculator. Event Listeners and functional programming was key for this project.',
      link: 'https://darwinpsmith.com/calc/index.html'
    }
  ]
};

export default data;
