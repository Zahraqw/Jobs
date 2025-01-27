import googleImage from "../src/assets/google.webp";
import netflixImage from "../src/assets/netflix.png";

export const ITEMS_PER_PAGE = 18;

// Job titles
export const JOB_TITLES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "DevOps Engineer",
  "UI/UX Designer",
  "Mobile App Developer",
  "Machine Learning Engineer",
  "Project Manager",
  "Software Engineer",
];

// Job types (aligned with filter)
export const JOB_TYPES = [
  "Full-Time Jobs",
  "Part-Time Jobs",
  "Remote Jobs",
  "Freelance",
  "Temporary",
];

// Experience levels
export const EXPERIENCE_LEVELS = [
  "Experts",
  "Senior",
  "Junior",
  "Regular",
  "Internship",
  "Associate",
];

// Categories
export const CATEGORIES = [
  "Engineering",
  "Marketing",
  "Sales",
  "Design",
  "Product Management",
  "HR",
  "Finance",
  "Customer Support",
];

// Locations
export const LOCATIONS = [
  "San Francisco, CA",
  "Austin, TX",
  "New York, NY",
  "Remote",
  "Seattle, WA",
  "Boston, MA",
  "Chicago, IL",
  "Los Angeles, CA",
];

// Dummy job data
export const DUMMY_JOB_DATA = [];

for (let i = 5; i <= 200; i++) {
  DUMMY_JOB_DATA.push({
    id: i,
    title: JOB_TITLES[i % JOB_TITLES.length],
    image: [googleImage, netflixImage][i % 2],
    type: JOB_TYPES[i % JOB_TYPES.length], // Job type
    experienceLevel: EXPERIENCE_LEVELS[i % EXPERIENCE_LEVELS.length], // Experience level
    description: `This is a ${JOB_TITLES[i % JOB_TITLES.length]} position.`,
    timePosted: `${(i % 24) + 1} hours ago`,
    location: LOCATIONS[i % LOCATIONS.length],
    salary: `${Math.floor(Math.random() * 5000) + 2000}`,
    category: CATEGORIES[i % CATEGORIES.length],
  });
}

// Filter options
export const FILTER_OPTIONS = [
  {
    title: "Job Types",
    values: JOB_TYPES, // Use JOB_TYPES directly
  },
  {
    title: "Experience Levels",
    values: EXPERIENCE_LEVELS, // Use EXPERIENCE_LEVELS directly
  },
];
