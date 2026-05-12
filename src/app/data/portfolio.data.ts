export const PORTFOLIO_DATA = {
  pl: {
    nav: { light: 'Jasny', dark: 'Ciemny', lang: 'EN' },
    about: {
      title: 'Kacper Renkel',
      subtitle: 'Inżynier Oprogramowania & Full Stack Developer',
      description:
        'Posiadam tytuł inżyniera informatyki i ponad dwuletnie komercyjne doświadczenie. Specjalizuję się w tworzeniu nowoczesnych aplikacji webowych w oparciu o ekosystem Angular oraz Node.js/Java. Skupiam się na czystej architekturze, optymalizacji renderowania oraz dostarczaniu skalowalnych rozwiązań.',
    },
    education: {
      title: 'Edukacja',
      items: [
        {
          degree: 'Inżynier Informatyki (Ocena końcowa: 5)',
          school: 'Uniwersytet Warmińsko-Mazurski w Olsztynie',
          period: '2022 - 2026',
        },
      ],
    },
    experience: {
      title: 'Doświadczenie Zawodowe',
      items: [
        {
          role: 'Full Stack Developer',
          company: 'Wama Soft',
          period: '07.2024 - Obecnie',
          summary: 'Projektowanie i rozwój systemów medycznych, parkingowych.',
          details: [],
          tech: [
            'Angular',
            'TypeScript',
            'RxJS',
            'NestJS',
            'MySQL',
            'Express',
            'React',
            'React Native',
            'Docker',
            'Linux',
            'Arduino',
          ],
        },
        {
          role: 'Full Stack Developer',
          company: 'WOK sp. z o.o.',
          period: '07.2023 - 09.2023',
          summary:
            'Projektowanie i rozwój rozbudowanego systemu spedytowego używanego na potrzeby firmy',
          details: [],
          tech: ['Angular', 'TypeScript', 'MySQL', 'C#', '.NET'],
        },
      ],
    },
    projects: {
      title: 'Wybrane Projekty',
      items: [
        {
          name: 'Strona technikum',
          description: 'Autorska strona technikum z własnym CMS.',
          tech: ['React', 'MySQL', 'Node.js', 'Express'],
          repoUrl: 'https://github.com/kacper0276/School_Page-React-Node.JS',
          liveUrl: 'https://ckziubrodnica.pl',
        },
        {
          name: 'Aplikacja inspirowana grą plemiona',
          description: 'Gra webowa inspirowana serią plemiona.',
          tech: [
            'Angular',
            'Socket.io',
            'Nest.JS',
            'MySQL',
            'SCSS',
            'Docker',
            'Nginx',
          ],
          repoUrl: 'https://github.com/kacper0276/Praca_Inzynierska_Plemiona',
          liveUrl: null,
        },
      ],
    },
    stack: { title: 'Stack Technologiczny' },
  },
  en: {
    nav: { light: 'Light', dark: 'Dark', lang: 'PL' },
    about: {
      title: 'Kacper Renkel',
      subtitle: 'Software Engineer & Full Stack Developer',
      description:
        'I hold a Computer Science Engineering degree and over two years of commercial experience. I specialize in building modern web applications based on the Angular ecosystem and Node.js/Java. I focus on clean architecture, rendering optimization, and delivering scalable solutions.',
    },
    education: {
      title: 'Education',
      items: [
        {
          degree:
            'Bachelor of Engineering in Computer Science (Final grade: 5)',
          school: 'University of Warmia and Mazury in Olsztyn',
          period: '2022 - 20246',
        },
      ],
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          role: 'Full Stack Developer (Angular)',
          company: 'Software House',
          period: '2022 - Present',
          summary: 'Designing and developing a complex ERP system.',
          details: [
            'Building performant interfaces in Angular 15+ using Standalone Components.',
            'Managing complex application state using RxJS.',
            'Integrating with REST APIs and building endpoints in Node.js (NestJS).',
            'Optimizing SQL queries and designing PostgreSQL database structures.',
            'Conducting code reviews and maintaining code quality within the team.',
          ],
          tech: ['Angular', 'TypeScript', 'RxJS', 'NestJS', 'PostgreSQL'],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          name: 'Warehouse Management System',
          description:
            'Custom application for real-time inventory tracking with an analytical dashboard.',
          tech: ['Angular', 'NgRx', 'Node.js', 'Socket.io'],
          repoUrl: '#',
          liveUrl: '#',
        },
        {
          name: 'E-commerce Dashboard',
          description:
            'Responsive admin panel for online stores with third-party payment API integrations.',
          tech: ['Angular', 'Tailwind', 'Spring Boot', 'MySQL'],
          repoUrl: '#',
          liveUrl: null,
        },
      ],
    },
    stack: { title: 'Tech Stack' },
  },
};

export const STACK_CATEGORIES = [
  {
    id: 'core',
    label: { pl: 'Główne Technologie', en: 'Core Technologies' },
    type: 'core',
    items: [
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 60 },
      { name: 'C', level: 40 },
      { name: 'RxJS', level: 60 },
    ],
  },
  {
    id: 'front',
    label: { pl: 'Frontend', en: 'Frontend' },
    type: 'front',
    items: [
      { name: 'JavaScript', level: 85 },
      { name: 'SCSS / CSS', level: 80 },
      { name: 'HTML5', level: 90 },
      { name: 'Angular', level: 90 },
      { name: 'React', level: 60 },
      { name: 'React Native', level: 50 },
    ],
  },
  {
    id: 'back',
    label: { pl: 'Backend & Bazy danych', en: 'Backend & Data' },
    type: 'back',
    items: [
      { name: 'Node.js', level: 70 },
      { name: 'NestJS', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Spring Boot', level: 30 },
    ],
  },
  {
    id: 'tools',
    label: { pl: 'Narzędzia & DevOps', en: 'Tools & DevOps' },
    type: 'tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 60 },
    ],
  },
];
