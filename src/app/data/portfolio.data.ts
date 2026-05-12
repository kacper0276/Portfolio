export const PORTFOLIO_DATA = {
  pl: {
    nav: { light: 'Jasny', dark: 'Ciemny', lang: 'EN' },
    about: {
      title: 'Kacper Renkel',
      subtitle: 'Inżynier Oprogramowania & Full Stack Developer',
      description:
        'Posiadam tytuł inżyniera informatyki i ponad dwuletnie komercyjne doświadczenie. Specjalizuję się w tworzeniu nowoczesnych aplikacji webowych w oparciu o ekosystem Angular oraz Node.js/Java.',
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
          details: [
            'Integracja z tablicami parkingowymi, konfigurowanie oraz wyświetlanie zawartości na nich przez aplikację WEB',
            'Aplikacja moblina (React Native) służąca do wyświetlania parametrów życiowych pacjentów',
            'Aplikacja mobilna służąca do uzupełniania karty gorączkowej oraz integracji z tacą lekową',
            'Napisanie api dla tacy lekowej, podświetlanie kubeczków (Arduino)',
            'Integracje z systemami parkingowymi, medycznymi oraz zliczającymi wejścia',
            'Tworzenie mikroserwisów dla serwisów backendowych',
            'Deploy aplikacji za pomocą Apache lub Nginx',
            'Tworzenie aplikacji backendowych dla systemów medycznych oraz parkingowych opartych na Nest oraz Express',
            'Tworzenie aplikacji frontendowych opartych na Angular, React oraz EJS',
            'Konteneryzacja stworzonych aplikacji',
          ],
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
          details: [
            'Tworzenie oprogramowania spedytowego w .NET',
            'Pisanie aplikacji frontendowej w Angular',
          ],
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
        {
          name: 'Aplikacja która pomaga utrzymać postanowienia',
          description:
            'Aplikacja, tworząca drzewa która pozwala trwać w postanowieniach.',
          tech: ['React', 'Nest.JS', 'MySQL', 'SCSS'],
          repoUrl: 'https://github.com/kacper0276/NazwaZespolu_IO_800_pi',
          liveUrl: null,
        },
        {
          name: 'Aplikacja służąca do rezerwacji pokoju hotelowego',
          description:
            'Aplikacja służąca do rezerwacji pokoju hotelowego wykonana w React oraz Spring.',
          tech: ['React', 'Spring', 'MySQL', 'SCSS'],
          repoUrl:
            'https://github.com/kacper0276/Project_PSI_Hotel_Management_System-React-Spring',
          liveUrl: null,
        },
        {
          name: 'Zadania programistyczne',
          description:
            'Różne zadania programistyczne ze stron SPOJ, Szkopuł, Codewars.',
          tech: ['JavaScript', 'Java', 'C++', 'Python', 'C#'],
          repoUrl: 'https://github.com/kacper0276/Programming_Challenges',
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
        'I hold a Bachelor of Engineering degree in Computer Science and have over two years of commercial experience. I specialize in building modern web applications based on the Angular ecosystem and Node.js/Java.',
    },
    education: {
      title: 'Education',
      items: [
        {
          degree:
            'Bachelor of Engineering in Computer Science (Final grade: 5)',
          school: 'University of Warmia and Mazury in Olsztyn',
          period: '2022 - 2026',
        },
      ],
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          role: 'Full Stack Developer',
          company: 'Wama Soft',
          period: '07.2024 - Present',
          summary: 'Designing and developing medical and parking systems.',
          details: [
            'Integrating with parking display boards, configuring and displaying content via a web application.',
            "Developing a mobile app (React Native) for displaying patients' vital signs.",
            'Creating a mobile app for filling out fever charts and integrating it with a smart medication tray.',
            'Writing an API for the medication tray, including LED illumination of medicine cups (Arduino).',
            'Integrating with parking, medical, and entry-counting systems.',
            'Creating microservices for backend systems.',
            'Deploying applications using Apache or Nginx.',
            'Building backend applications for medical and parking systems based on NestJS and Express.',
            'Developing frontend applications using Angular, React, and EJS.',
            'Containerizing the developed applications.',
          ],
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
            'Designing and developing an extensive freight forwarding system for internal company use.',
          details: [
            'Developing forwarding software using .NET.',
            'Building the frontend application in Angular.',
          ],
          tech: ['Angular', 'TypeScript', 'MySQL', 'C#', '.NET'],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          name: 'Technical High School Website',
          description:
            'Custom technical high school website with a bespoke CMS.',
          tech: ['React', 'MySQL', 'Node.js', 'Express'],
          repoUrl: 'https://github.com/kacper0276/School_Page-React-Node.JS',
          liveUrl: 'https://ckziubrodnica.pl',
        },
        {
          name: 'Tribal Wars Inspired Game',
          description: 'Web-based game inspired by the Tribal Wars series.',
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
        {
          name: 'Habit & Resolution Tracker',
          description:
            'An application that generates virtual trees to help users stick to their resolutions and habits.',
          tech: ['React', 'Nest.JS', 'MySQL', 'SCSS'],
          repoUrl: 'https://github.com/kacper0276/NazwaZespolu_IO_800_pi',
          liveUrl: null,
        },
        {
          name: 'Hotel Room Booking App',
          description:
            'A hotel room reservation application built with React and Spring Boot.',
          tech: ['React', 'Spring', 'MySQL', 'SCSS'],
          repoUrl:
            'https://github.com/kacper0276/Project_PSI_Hotel_Management_System-React-Spring',
          liveUrl: null,
        },
        {
          name: 'Programming Challenges',
          description:
            'Various programming challenges from platforms like SPOJ, Szkopuł, and Codewars.',
          tech: ['JavaScript', 'Java', 'C++', 'Python', 'C#'],
          repoUrl: 'https://github.com/kacper0276/Programming_Challenges',
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
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'Java', level: 60, color: '#ED8B00' },
      { name: 'C', level: 40, color: '#00599C' },
      { name: 'RxJS', level: 60, color: '#B7178C' },
    ],
  },
  {
    id: 'front',
    label: { pl: 'Frontend', en: 'Frontend' },
    type: 'front',
    items: [
      { name: 'JavaScript', level: 85, color: '#F7DF1E' },
      { name: 'SCSS / CSS', level: 80, color: '#CC6699' },
      { name: 'HTML5', level: 90, color: '#E34F26' },
      { name: 'Angular', level: 90, color: '#DD0031' },
      { name: 'React', level: 60, color: '#61DAFB' },
      { name: 'React Native', level: 50, color: '#61DAFB' },
    ],
  },
  {
    id: 'back',
    label: { pl: 'Backend & Bazy danych', en: 'Backend & Data' },
    type: 'back',
    items: [
      { name: 'Node.js', level: 70, color: '#339933' },
      { name: 'NestJS', level: 80, color: '#EA2845' },
      { name: 'Spring Boot', level: 30, color: '#6DB33F' },
      { name: 'Express', level: 70, color: '#000000' },
      { name: 'PostgreSQL', level: 70, color: '#336791' },
      { name: 'MySQL', level: 70, color: '#4479A1' },
      { name: 'Mongo', level: 70, color: '#47A248' },
      { name: 'SQLite', level: 70, color: '#003B57' },
    ],
  },
  {
    id: 'tools',
    label: { pl: 'Narzędzia & DevOps', en: 'Tools & DevOps' },
    type: 'tools',
    items: [
      { name: 'Git', level: 85, color: '#F05032' },
      { name: 'Docker', level: 60, color: '#2496ED' },
      { name: 'Nginx', level: 60, color: '#009639' },
      { name: 'Arduino', level: 50, color: '#00979D' },
      { name: 'Apache', level: 60, color: '#D22128' },
    ],
  },
];
