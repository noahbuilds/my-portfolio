import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  greetMsg: string = '';
  showIframe: boolean = false;

  experiences = [
    {
      role: 'Software Engineer',
      company: 'Wizer Consulting',
      period: 'Present',
      type: '',
      bullets: [
        'Build and maintain backend APIs for Aquila, a digital banking platform (myaquila.com).',
        'Develop front-end interfaces and admin dashboards using Angular, React, and Next.js.',
        'Collaborate with client engineering teams to deliver scalable digital banking solutions.',
        'Participate in code reviews and contribute to technical architecture discussions.',
      ],
    },
    {
      role: 'Full Stack Engineer',
      company: 'Hyper Infinity Systems Ltd (HIS)',
      period: 'Apr 2025 – Nov 2025',
      type: '',
      bullets: [
        'Developed backend services using Node.js and MongoDB for a marketplace platform.',
        'Designed and implemented a real-time messaging system supporting one-to-one messaging, group conversations, channels, and media sharing.',
        'Implemented real-time communication and message delivery using Socket.IO/WebSockets.',
        'Developed APIs and backend functionality consumed by React-based administrative dashboards.',
        'Structured backend functionality into modular, reusable components to improve maintainability.',
        'Investigated and resolved application issues across development and production environments.',
        'Automated deployment of backend services to AWS EC2 and frontend applications to AWS S3.',
        'Collaborated with frontend engineers and other stakeholders in an agile development environment.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Gitit Technologies',
      period: 'Jul 2024 – Jun 2025',
      type: '',
      bullets: [
        'Built and maintained fintech microservices using Java and Node.js.',
        'Implemented event-driven architecture for financial transaction processing and inter-service communication.',
        'Integrated with third-party financial services, payment gateways, and banking APIs.',
        'Optimised data access layers using MySQL and Redis caching for high-throughput workloads.',
        'Contributed to microservices design, deployment pipelines, and cross-team technical discussions.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Multilent Software',
      period: 'May 2022 – Apr 2024',
      type: '',
      bullets: [
        'Built full-stack web applications using NestJS and PostgreSQL.',
        'Developed and maintained large-scale CBT examination platforms handling thousands of concurrent users.',
        'Designed RESTful APIs for examination management, candidate processing, and result computation.',
        'Collaborated with cross-functional teams to ship reliable EdTech products on tight deadlines.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Avanq',
      period: '~3-month contract',
      type: 'Contract',
      bullets: [
        'Developed cross-platform mobile application features using React Native.',
        'Built fintech and investment-related screens, flows, and API integrations.',
        'Worked closely with product and design to deliver a polished user experience.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Javascript Minna',
      period: 'Internship',
      type: 'Internship',
      bullets: [
        'Built and maintained front-end components for web applications.',
        'Gained hands-on experience with JavaScript, HTML, and CSS in a collaborative team environment.',
        'Contributed to UI improvements and bug fixes across multiple projects.',
      ],
    },
  ];

  toolsBox: Array<string> = [
    'html',
    'css',
    'js-official',
    'typescript-logo',
    'python',
    'material-ui',
    'bootstrap',
    'tailwindcss-icon',
    'react-javascript-js-framework-facebook',
    'nextjs',
    'angular',
    'nodejs-logo',
    'nestjs',
    'express',
    'mongo',
    'postgresql',
    'docker',
    'kubernetes',
  ];
  constructor() {}

  ngOnInit(): string {
    return this.greeter();
  }

  greeter(): string {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    if (hours >= 0 && hours <= 11 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good morning');
    }
    if (hours >= 12 && hours <= 15 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good afternoon');
    }
    if (hours >= 16 && hours <= 23 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good evening');
    }
    return '';
  }
}
