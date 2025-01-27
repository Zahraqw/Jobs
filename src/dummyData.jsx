import googleImage from "../src/assets/google.webp";
import netflixImage from "../src/assets/netflix.png";

const dummyJobData = [
  {
    id: 1,
    title: "Frontend Developer",
    image: googleImage,
    type: "Full-Time",
    description: "Build interactive UIs with React.",
    timePosted: "5 mins ago",
    location: "San Francisco, CA",
    salary: "3500",
  },
  {
    id: 2,
    title: "Backend Developer",
    image: netflixImage,
    type: "Part-Time",
    description: "Develop server-side logic using Node.js.",
    timePosted: "10 mins ago",
    location: "Austin, TX",
    salary: "2500",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    image: googleImage,
    type: "Full-Time",
    description: "Work on both front-end and back-end development.",
    timePosted: "15 mins ago",
    location: "New York, NY",
    salary: "4200",
  },
  {
    id: 4,
    title: "Data Scientist",
    image: netflixImage,
    type: "Contract",
    description: "Analyze data to extract valuable insights.",
    timePosted: "1 hour ago",
    location: "Remote",
    salary: "5000",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    image: googleImage,
    type: "Freelance",
    description: "Design user interfaces and experiences.",
    timePosted: "2 hours ago",
    location: "Los Angeles, CA",
    salary: "3000",
  },
  {
    id: 6,
    title: "Software Engineer",
    image: netflixImage,
    type: "Full-Time",
    description: "Develop and maintain software solutions.",
    timePosted: "3 hours ago",
    location: "Chicago, IL",
    salary: "4500",
  },
  {
    id: 7,
    title: "Project Manager",
    image: googleImage,
    type: "Full-Time",
    description: "Manage project timelines and teams.",
    timePosted: "4 hours ago",
    location: "Seattle, WA",
    salary: "4700",
  },
  {
    id: 8,
    title: "QA Tester",
    image: netflixImage,
    type: "Part-Time",
    description: "Test software and report bugs.",
    timePosted: "5 hours ago",
    location: "Dallas, TX",
    salary: "2200",
  },
  {
    id: 9,
    title: "Product Manager",
    image: googleImage,
    type: "Full-Time",
    description: "Lead product development teams.",
    timePosted: "6 hours ago",
    location: "San Francisco, CA",
    salary: "5300",
  },
  {
    id: 10,
    title: "DevOps Engineer",
    image: netflixImage,
    type: "Contract",
    description: "Manage infrastructure and deployment pipelines.",
    timePosted: "7 hours ago",
    location: "Remote",
    salary: "4800",
  },
  {
    id: 11,
    title: "Frontend Developer",
    image: googleImage,
    type: "Full-Time",
    description: "Design and develop web applications with React.",
    timePosted: "8 hours ago",
    location: "Miami, FL",
    salary: "3500",
  },
  {
    id: 12,
    title: "Backend Developer",
    image: netflixImage,
    type: "Part-Time",
    description: "Build server-side logic with Node.js.",
    timePosted: "9 hours ago",
    location: "Los Angeles, CA",
    salary: "2500",
  },
  {
    id: 13,
    title: "iOS Developer",
    image: googleImage,
    type: "Full-Time",
    description: "Develop mobile applications for iOS.",
    timePosted: "10 hours ago",
    location: "Austin, TX",
    salary: "4000",
  },
  {
    id: 14,
    title: "Android Developer",
    image: netflixImage,
    type: "Freelance",
    description: "Develop mobile applications for Android.",
    timePosted: "11 hours ago",
    location: "Remote",
    salary: "3800",
  },
  {
    id: 15,
    title: "Web Developer",
    image: googleImage,
    type: "Full-Time",
    description: "Develop websites and web applications.",
    timePosted: "12 hours ago",
    location: "Chicago, IL",
    salary: "4200",
  },
  {
    id: 16,
    title: "Network Engineer",
    image: netflixImage,
    type: "Part-Time",
    description: "Design and maintain network infrastructures.",
    timePosted: "13 hours ago",
    location: "Seattle, WA",
    salary: "3000",
  },
  {
    id: 17,
    title: "Security Engineer",
    image: googleImage,
    type: "Full-Time",
    description: "Ensure the security of software systems.",
    timePosted: "14 hours ago",
    location: "Dallas, TX",
    salary: "4500",
  },
  {
    id: 18,
    title: "Business Analyst",
    image: netflixImage,
    type: "Freelance",
    description: "Analyze business needs and provide solutions.",
    timePosted: "15 hours ago",
    location: "Remote",
    salary: "3500",
  },
  {
    id: 19,
    title: "Cloud Engineer",
    image: googleImage,
    type: "Full-Time",
    description: "Manage cloud infrastructure and services.",
    timePosted: "16 hours ago",
    location: "San Francisco, CA",
    salary: "4900",
  },
  {
    id: 20,
    title: "Game Developer",
    image: netflixImage,
    type: "Part-Time",
    description: "Create games and game assets for various platforms.",
    timePosted: "17 hours ago",
    location: "Miami, FL",
    salary: "3500",
  },
  {
    id: 21,
    title: "Database Administrator",
    image: googleImage,
    type: "Full-Time",
    description: "Maintain databases and optimize queries.",
    timePosted: "18 hours ago",
    location: "Austin, TX",
    salary: "4000",
  },
  {
    id: 22,
    title: "Data Engineer",
    image: netflixImage,
    type: "Contract",
    description: "Build data pipelines and systems for data management.",
    timePosted: "19 hours ago",
    location: "Chicago, IL",
    salary: "4800",
  },
  {
    id: 23,
    title: "Web Designer",
    image: googleImage,
    type: "Freelance",
    description: "Design and create website layouts.",
    timePosted: "20 hours ago",
    location: "Seattle, WA",
    salary: "2500",
  },
  {
    id: 24,
    title: "Software Architect",
    image: netflixImage,
    type: "Full-Time",
    description: "Design high-level software solutions.",
    timePosted: "21 hours ago",
    location: "Dallas, TX",
    salary: "6000",
  },
  {
    id: 25,
    title: "Front-End Engineer",
    image: googleImage,
    type: "Full-Time",
    description: "Develop front-end architecture with modern frameworks.",
    timePosted: "22 hours ago",
    location: "San Francisco, CA",
    salary: "4200",
  },
  {
    id: 26,
    title: "Back-End Engineer",
    image: netflixImage,
    type: "Part-Time",
    description: "Handle server-side application logic.",
    timePosted: "23 hours ago",
    location: "Miami, FL",
    salary: "3200",
  },
  {
    id: 27,
    title: "Java Developer",
    image: googleImage,
    type: "Full-Time",
    description: "Develop and optimize Java-based applications.",
    timePosted: "1 day ago",
    location: "New York, NY",
    salary: "4500",
  },
  {
    id: 28,
    title: "C++ Developer",
    image: netflixImage,
    type: "Freelance",
    description: "Develop applications using C++ programming language.",
    timePosted: "1 day ago",
    location: "Remote",
    salary: "4300",
  },
  {
    id: 29,
    title: "Ruby on Rails Developer",
    image: googleImage,
    type: "Full-Time",
    description: "Develop web applications using Ruby on Rails.",
    timePosted: "1 day ago",
    location: "Austin, TX",
    salary: "4200",
  },
  {
    id: 30,
    title: "Python Developer",
    image: netflixImage,
    type: "Full-Time",
    description: "Work with Python to develop scalable applications.",
    timePosted: "2 days ago",
    location: "Los Angeles, CA",
    salary: "4600",
  },
  {
    id: 31,
    title: "UX Researcher",
    image: googleImage,
    type: "Part-Time",
    description: "Conduct user research to improve UX design.",
    timePosted: "2 days ago",
    location: "Chicago, IL",
    salary: "3000",
  },
  {
    id: 32,
    title: "Business Intelligence Analyst",
    image: netflixImage,
    type: "Freelance",
    description: "Analyze data to support business decision-making.",
    timePosted: "3 days ago",
    location: "Remote",
    salary: "4000",
  },
  {
    id: 33,
    title: "Game Designer",
    image: googleImage,
    type: "Full-Time",
    description: "Design and develop video game content.",
    timePosted: "4 days ago",
    location: "San Francisco, CA",
    salary: "5500",
  },
  {
    id: 34,
    title: "Quality Assurance Engineer",
    image: netflixImage,
    type: "Full-Time",
    description: "Ensure software quality through testing.",
    timePosted: "5 days ago",
    location: "Austin, TX",
    salary: "3800",
  },
  {
    id: 35,
    title: "Mobile App Developer",
    image: googleImage,
    type: "Part-Time",
    description: "Develop mobile apps for Android and iOS.",
    timePosted: "6 days ago",
    location: "New York, NY",
    salary: "4000",
  },
  {
    id: 36,
    title: "Network Administrator",
    image: netflixImage,
    type: "Freelance",
    description: "Configure and maintain networks for organizations.",
    timePosted: "7 days ago",
    location: "Dallas, TX",
    salary: "3500",
  },
  {
    id: 37,
    title: "Cloud Consultant",
    image: googleImage,
    type: "Full-Time",
    description: "Provide cloud solutions and advice to businesses.",
    timePosted: "8 days ago",
    location: "Miami, FL",
    salary: "5000",
  },
  {
    id: 38,
    title: "Application Developer",
    image: netflixImage,
    type: "Contract",
    description: "Develop and maintain applications for clients.",
    timePosted: "9 days ago",
    location: "Seattle, WA",
    salary: "4500",
  },
  {
    id: 39,
    title: "Enterprise Architect",
    image: googleImage,
    type: "Full-Time",
    description: "Design and implement enterprise-level architecture.",
    timePosted: "10 days ago",
    location: "Remote",
    salary: "5500",
  },
  {
    id: 40,
    title: "System Administrator",
    image: netflixImage,
    type: "Part-Time",
    description: "Maintain and manage IT systems and networks.",
    timePosted: "11 days ago",
    location: "Chicago, IL",
    salary: "3500",
  },
];

export default dummyJobData;
