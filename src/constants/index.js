import {
  backend,
  creator,
  mobile,
  web,
  css,
  python,
  java,
  power,
  msppt,
  msword,
  msexcel,
  rpro,
  mysql,
  express,
  aws,
  mui,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  blood,
  voice,
  woillence,
  resume,
  person,
  yhills,
  black,
  smart,
  micro,
} from '../assets'

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
  {  title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Auto CAD Designer",
    icon: backend,
  },
  {  title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
  {
    title: "Photographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PowerPoint",
    icon: msppt,
  },
  {
    name: "MS Word",
    icon: msword,
  },
  {
    name: "MS Excel",
    icon: msexcel,
  },
  {
    name: "Power BI",
    icon: power,
  },
  {
    name: "R Programming",
    icon: rpro,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Generative AI Engineer",
    company_name: "Blackbuck Engineers with APSCHE",
    icon: black,
    iconBg: "#383E56",
    date: "Jun - Jul 2024",
    points: [
      "Explored the fundamentals of Generative AI, NLP, and large language models like ChatGPT.",
      "Created mini-projects leveraging OpenAI APIs for chatbot and content automation.",
      "Studied prompt engineering techniques for improving response quality.",
      "Understood ethical implications and responsible use of generative models.",
    ],
  },
  {
    title: "Artificial Intelligence Project Intern",
    company_name: "YHills pvt ltd",
    icon: yhills,
    iconBg: "#383E56",
    date: "Jun - Jul 2024",
    points: [
      "Designed and implemented an AI solution using TensorFlow for object detection/image classification.",
      "Worked with large datasets to train and validate models, achieving high accuracy rates.",
      "Focused on dataset cleaning, augmentation, and model accuracy improvement.",
      "Learned how to deploy AI models on cloud platforms (Google Colab/AWS).",
      "Explored use cases of AI in healthcare and education through project simulations.",
    ],
  },
  {
    title: "Smart AI Solutions Intern",
    company_name: "SmartED",
    icon: smart,
    iconBg: "#383E56",
    date: "Oct - Dec 2024",
    points: [
      "Completed modules on supervised and unsupervised learning, neural networks, and deep learning.",
      "Built end-to-end AI mini-projects including recommendation systems and sentiment analysis.",
      "Learned to preprocess data, train models, and evaluate performance metrics.",
      "Utilized tools like Jupyter Notebook, Pandas, NumPy, and Keras.",
      "Strengthened conceptual knowledge through quizzes, assignments, and mentor sessions.",
    ],
  },
  {
    title: "AI/ML Intern",
    company_name: "Micro IIT",
    icon: micro,
    iconBg: "#383E56",
    date: "May 2025",
    points: [
      "Developed and optimized machine learning models for predictive analytics tasks using Python and scikit-learn.",
      "Worked with real-time datasets to identify patterns and trends for business insights.",
      "Gained hands-on experience in data preprocessing, model training, evaluation, and tuning.",
      "Collaborated in an agile environment, participating in daily stand-ups and weekly sprint reviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dhanuschandra's AI-driven project Woillence blew us away with its innovation. It’s not just smart—it’s impactful.",
    name: "Dr. S. Prasad",
    designation: "Hackathon Mentor",
    company: "AVISHKAAR 2.0",
    image: person,
  },
  {
    testimonial:
      "HeaLink is exactly the kind of solution labs need. Dhanuschandra is a visionary developer and a strong team leader.",
    name: "Dr. M. Nagavali",
    designation: "Professor",
    company: "Ramachandra College of Engineering",
    image: person,
  },
  {
    testimonial:
      "I’ve seen many resume tools, but this one’s logic and simplicity stand out. Excellent contribution by Dhanuschandra and his team.",
    name: "Srinivas K.",
    designation: "Tech Trainer",
    company: "SmartED",
    image: person,
  },
];

const projects = [
  {
    name: "HeaLink – Pathology Lab System",
    description:
      "A digital platform designed to streamline pathology lab operations, enabling seamless test reporting, patient data management, and diagnostic collaboration between labs and doctors.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: blood, // Replace with actual screenshot
    source_code_link: "https://github.com/Dhanuschandra/HeaLink", // Replace if available
  },
  {
    name: "Resume Builder",
    description:
      "An ATS-friendly resume building tool that helps users create clean, formatted resumes by optimizing keywords, layout, and section structure for job screening systems.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "white-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: resume, // Replace with UI screenshot
    source_code_link: "https://github.com/Dhanuschandra/Resume-Builder", // Replace if available
  },
  {
    name: "Voice Running OS",
    description:
      "A voice-controlled system interface that performs system operations through speech recognition. Designed to improve accessibility and automation for users with different needs.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "speechrecognition", color: "green-text-gradient" },
      { name: "pyttsx3", color: "pink-text-gradient" },
    ],
    image: voice, // Replace with terminal/voice demo image
    source_code_link: "https://github.com/Dhanuschandra/Voice-OS", // Replace if public
  },
  {
    name: "Woillence – AI Surveillance System",
    description:
      "An AI-powered surveillance project for real-time detection of crimes and accidents using video analytics, object detection, and alert generation to enhance public safety.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "tensorflow", color: "pink-text-gradient" },
    ],
    image: woillence, // Replace with image from demo
    source_code_link: "https://github.com/Dhanuschandra/Woillence", // Replace if public
  },
];


export { services, technologies, experiences, testimonials, projects };
