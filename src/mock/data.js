import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Ikram | Software Engineering Major'
  lang: '', // e.g: en, es, fr, jp
  description: 'I build things using my tech skills.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Ikram Salim',
  subtitle: '           Software Engineering Major',
  cta: 'I have a great passion for technological advancement and I like throwing myself into interesting software projects.',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Here are few technologies I have worked with: ',
  paragraphTwo: 'MOBILE APP DEVELOPMENT(iOS, Google Flutter,Android), PYTHON, JAVA, DATASCIENCE, UNIX, DJANGO, BASH, DATA VISUALIZATION,UX DESIGN(Wireframing, Prototyping, UML Diagrams), WEB DEVELOPMENT using Node.JS, React.Js, Redux',
  paragraphThree: 'I have worked part time as an IT Support Specialist at the University of Saskatchewan and provided clients support in IT related problems.',
  paragraphFour: 'I also mentor and volunteer during my free times with Canada Learning Code and previously volunteered for Open Door ',
   // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'cookbookandroid.png',
    title: 'Cookbook Adroid App ',
    info: 'Created a cookbook recipe android app where you can search recipes, save recipes and easily use the unit converter provided.',
   // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'marsrover.jpg',
    title: 'Mars Rover ',
    info: 'Worked on Mars Rover using Python 3.5 and created a command line interpreter for the robocluster manager',
    // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'aerodesign.jpg',
    title: 'Aerodesign Team',
    info: 'Helped design the landing gear of an RC( Radio-Controlled) Airplane for AeroDesign Team using SolidWorks and printed using 3D Laser Printer',
     // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'cybersecurity.jpeg',
    title: 'Ethical Hacking',
    info: 'I did challenges in topics such as Reverse Engineering, Remote Exploitation, Web Scraping in Cyber Security Team',
     // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get In Touch',
  btn: 'Email Me',
  email: 'salimikram61@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/ikram_salim1',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ikram-salim-b477b0111/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ikramsalim',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
