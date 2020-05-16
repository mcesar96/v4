module.exports = {
  siteTitle: 'Marcus Cesar | Software Engineer',
  siteDescription:
    'Marcus Cesar is a software engineer based in Fort Worth, TX with a demonstrated history of working in the defense industry.',
  siteKeywords:
    'Marcus Cesar, Marcus, Cesar, mcesar96, marcuscesar, software engineer, florida state, florida state university, fsu, defense, defense industry',
  siteUrl: 'https://marcuscesar.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Marcus Cesar',
  location: 'Fort Worth, TX',
  email: 'marcuscesar1996@gmail.com',
  github: 'https://github.com/mcesar96',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mcesar96',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/marcuscesar',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/marcuscesar',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/marcuscesar96',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
