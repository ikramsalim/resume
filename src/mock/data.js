import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Ikram | '
  lang: '', // e.g: en, es, fr, jp
  description: 'I build things using my tech skills.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is',
  name: 'Ikram Salim',
  subtitle: '',
  cta: 'I am passionate about human-centered designs, data-driven impactful projects, user research and empowerment. ',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'At Collab Lab, I created a smart grocery shopping list web app using React, React Hooks, HTML, CSS, and Firebase'  ' In Summer of 2020, I helped nonprofits raise money through a tech startup called every.org using Typescript and Figma to design their social media posts. I am proud to use my technical skills at Every.org to increase the giving percentage which has stuck on 2% in North America in the last 30 years. ',
  paragraphTwo: 'Technologies and Languages: Java, Python, SQL, JavaScript, HTML, CSS, React, Node.js, Google Flutter.',
  paragraphThree: ' UX DESIGN: Wireframing, Prototyping, UML Diagrams',
  paragraphFour: 'I also mentor and volunteer during my free times with Canada Learning Code and previously volunteered for Open Door ',
   // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  
  {
    id: uuidv1(),
    img: 'cookbookandroid.png',
    title: 'Cookbook Android App ',
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
  email: 'ikramsalim.pm@gmail.com',
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
      url: 'https://www.linkedin.com/in/ikramsalim/',
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
