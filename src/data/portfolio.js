export const profile = {
  name: "Srivathsan Raja",
  role: "Software Developer & Data Analyst",
  headline: "Building Practical Software and Insight-Driven Workflows.",
  summary:
    "Final-year computer science student focused on data analysis and software development, using Python, SQL, and FastAPI to build real-world automation solutions.",
  phone: "+91 99940 58686",
  email: "srivathsan.r20003@gmail.com",
  linkedin: "https://www.linkedin.com/in/srivathsan-raja/",
  github: "https://github.com/JINM0RI"
};

export const skillGroups = [
  {
    title: "Development",
    skills: ["Python", "FastAPI", "JavaScript", "HTML", "CSS", "PyQt5"]
  },
  {
    title: "Data Analysis",
    skills: [
      "Pandas",
      "NumPy",
      "SQL (MySQL)",
      "Power BI",
      "Jupyter",
      "MS Excel",
      "Matplotlib"
    ]
  },
  {
    title: "Tools & Certifications",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Data Analytics",
      "Data Science Methods and Algorithms"
    ]
  }
];

export const projects = [
  {
    title: "Billing System",
    problem:
      "Store billing and inventory activities were difficult to manage manually, creating delays and mismatched records.",
    solution:
      "Built a desktop billing application with user login, admin dashboard, purchase management, and invoice generation using SQL-backed data tables.",
    stack: "Python, PyQt5, SQL, SQLite",
    github: "https://github.com/JINM0RI/Billing_System"
  },
  {
    title: "Auto Certificate Generator",
    problem:
      "Generating and sending personalized certificates for large participant lists was repetitive and error-prone.",
    solution:
      "Developed a FastAPI web app that uploads Excel participant data and templates, supports live name-position adjustments, bulk generates PDFs, and sends them automatically via email.",
    stack: "Python, FastAPI, HTML, CSS, JavaScript, ReportLab, Pillow, SMTP",
    github: "https://github.com/JINM0RI/auto-certificate-generator"
  },
  {
    title: "TechVault",
    problem:
      "Technical notes and cheat sheets often become scattered, making revision and reuse difficult.",
    solution:
      "Built an interactive knowledge vault with category-note-topic hierarchy, a block-based editor, cheat sheet integration, and Python code execution for hands-on learning.",
    stack: "FastAPI, Next.js, TypeScript, SQLite, BlockNote",
    github: "https://github.com/JINM0RI/techvault"
  }
];

export const experiences = [
  {
    title: "Freelance Software Developer",
    org: "Sacsita Granite",
    date: "Jan 2026 - Feb 2026",
    points: [
      "Built a FastAPI payroll automation system that reduced manual processing by 70% using asynchronous task handling and bulk PDF generation from Excel uploads.",
      "Designed a standalone Windows installer to deliver zero-configuration deployment and remove all client-side dependency issues."
    ]
  },
  {
    title: "Data Analyst Intern",
    org: "SNOWFORCE Technologies",
    date: "Aug 2025 - Sep 2025",
    points: [
      "Used Pandas and NumPy to audit more than 1,000 rows of financial data and identify inconsistencies by isolating faulty input logic.",
      "Designed an interactive Power BI dashboard to track sales and error rates, reducing manual reporting effort by 20% and enabling faster decisions.",
      "Presented data quality findings that improved internal governance procedures and standardized report formats."
    ]
  },
  {
    title: "Marketing Head",
    org: "Intellects Club",
    date: "Oct 2023 - Oct 2024",
    points: [
      "Led digital outreach that increased student event attendance by 40%, with average turnout rising from 50 to over 70 participants per event.",
      "Coordinated marketing across five-plus departments while leading a seven-member cross-functional team.",
      "Executed campaign and polling strategies that increased engagement by 25% across social channels and events."
    ]
  }
];
