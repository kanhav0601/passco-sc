/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import ccf from '../assets/images/Portfolio/ccf.png';
import navy from '../assets/images/Portfolio/navy.png';
import cisf from '../assets/images/Portfolio/cisf.png';
import eco from '../assets/images/Portfolio/eco.png';
import cvc from '../assets/images/Portfolio/cvc.png';
// import Stream from '../assets/images/Portfolio/Stream.png';\

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import MCEO from '../assets/images/TeamMembers/MCEO.jpg';

export const Services = [
  {
    title: 'Expert IT Optimization',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'High-Performance Equipment Supply',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'Robust Security Enhancements',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Income Tax Department',
    imageUrl: Recruiting,
    type: 'Development',
    responsibility: [
      'IT Optimization',
      'Equipment Supply',
      'Security Enhancements',
      'Technical Support',
      'Compliance Audits',
      'Staff Training',
    ],
    credit: 'https://www.incometaxindia.gov.in/',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Indian Navy',
    imageUrl: navy,
    type: 'Support',
    responsibility: [
      'IT Maintenance',
      'Equipment Supply',
    ],
    credit: 'https://www.indiannavy.nic.in/',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Central Vigilance Commission (CVC)',
    imageUrl: cvc,
    type: 'Support',
    responsibility: [
      'IT Maintenance',
      'System Integrity',
    ],
    credit: 'https://cvc.gov.in/',
  },
  {
    id: 'asd1293ufgdfgs4',
    title: 'Department of Economic Affairs',
    imageUrl: eco,
    type: 'Support',
    responsibility: [
      'Data Management',
      'IT Support',
    ],
    credit: 'https://dea.gov.in/',
  },
  {
    id: 'asd1293ulskmnb5',
    title: 'Central Industrial Security Forces (CISF)',
    imageUrl: cisf,
    type: 'Support',
    responsibility: [
      'Security Infrastructure',
      'Equipment Supply',
    ],
    credit: 'https://cisf.gov.in/',
  },
  {
    id: 'asd1293ulkmnb',
    title: 'Chief Controller of Factories',
    imageUrl: ccf,
    type: 'Development',
    responsibility: [
      'IT Support',
      'System Management',
    ],
    credit: 'https://labour.gov.in/ccof/',
  },
];

export const Advantages = [
  [{
    title: 'Experience',
    description: 'Proven expertise in delivering IT solutions for government operations.',
    imageUrl: Communicative, // Using Communicative image for 'Experience'
  },
  {
    title: 'Innovation',
    description: 'We are committed to innovation and excellence in every project.',
    imageUrl: Management, // Using Management image for 'Innovation'
  }],
  [{
    title: 'Customization',
    description: 'Our services are tailored to meet the unique operational needs of our clients.',
    imageUrl: Collaborative, // Using Collaborative image for 'Customization'
  },
  {
    title: 'Reliability',
    description: 'We deliver dependable solutions, ensuring seamless operations for our clients.',
    imageUrl: Favorite, // Using Favorite image for 'Reliability'
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'demo1',
    company: 'c1',
    testimoni: 'Thanks for Passco, you guys are the best! Keep up the great work!',
    imageUrl: Kruger,
  },
  {
    id: 2,
    name: 'demo2',
    company: 'c2',
    testimoni: 'I just wanted to let you know that it’s been great working with Passco.',
    imageUrl: Sasha,
  },
  {
    id: 3,
    name: 'demo3',
    company: 'c3',
    testimoni: 'Passco is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Praveen Jain',
    position: 'CEO',
    imageUrl: MCEO,
  },
  {
    name: 'Aarti Jain',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Shreyans Jain',
    position: 'Front End Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Saksham Jain',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
];
