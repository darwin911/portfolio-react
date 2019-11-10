import vinyl from '../assets/images/vinyl.png';
import octave from '../assets/images/octave.png';
import pong from '../assets/images/pong.png';
import citibike from '../assets/images/citibike-stations.png';
import postPic from '../assets/images/postpic.png';
import jcc from '../assets/images/jcc.png';
// import sagan from '../assets/sagan.png';
// import skywalker from '../assets/skywalker2.png';
import calc from '../assets/images/calc.png';
// import FCCProductLandingPage from '../assets/FCCProductLandingPage.png';
// import netherpurge from '../assets/netherpurge.png';

const data = {
  blurb:
    'New York City based Full-stack Developer, with a background in Law, Human Rights, and experience in the Service and Hospitality industry. I am passionate about quality, efficiency and effective problem-solving. I am determined, detail-oriented, and excited to make the world and the web a better place.',
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
      title: 'Vinyl',
      img: vinyl,
      description:
        'Vinyl, a CRUD app, built with an Express server and a React front-end. The UI controls are custom made and controlled with state. Tracks are uploaded through the express server to an AWS S3 Bucket.',
      github: 'https://github.com/darwin911/vinyl-express',
      link: 'https://vinyl.surge.sh/'
    },
    {
      title: 'Octave',
      img: octave,
      description:
        'A collaborative React App built with Express on Node.js and accessing data from the Ticketmaster API. Design based off a mock-up from a UI/UX design team of students at General Assembly.',
      github: 'https://github.com/darwin911/octave',
      link: 'https://octave-bananas.surge.sh/'
    },
    {
      title: 'Pong',
      img: pong,
      description:
        'Built a one player version of the classic arcade game Pong in vanilla JavaScript during the Web Development Immersive (WDI) course at General Assembly. Wrote custom collision detection responsive to browser size and mobile devices.',
      github: 'https://github.com/darwin911/pong',
      link: 'https://pong-js.netlify.com/'
    },
    {
      title: 'CitiBike Stations',
      img: citibike,
      description:
        'React App with custom CSS (Flexbox and Grid), using Mapbox and Google Maps Geocoding API to power search fields. Lots of love, too.',
      github: 'https://github.com/darwin911/citibike-react',
      link: 'https://citibike-react.netlify.com/'
    },
    {
      title: 'PostPic',
      img: postPic,
      description:
        'React App on Express (node.js) server. This project was built to mimic web-apps/apps such as Instagram.',
      github: 'https://github.com/darwin911/imageSharingCRUD',
      link: 'http://luxuriant-bun.surge.sh/'
    },
    {
      title: 'Juega Como Campeon (JCC)',
      img: jcc,
      description:
        'Designed and built a static website for a non-profit working with underpriviledged children in the Dominican Republic.',
      link: 'http://www.juegacomocampeon.org'
    },
    {
      title: 'Calculator',
      img: calc,
      description:
        'Created all buttons with an unordered list and added styles to make them look like such. Positioning was a bit tricky but helped me improve my CSS skills. JavaScript is what powers the actual functionality of the calculator. Event Listeners and functional programming was key for this project.',
      link: 'https://darwinpsmith.com/calc/index.html'
    }
  ]
};

export default data;
