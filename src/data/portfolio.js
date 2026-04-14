export const profile = {
  name: "Srivathsan Raja",
  role: "Software Developer & Data Analyst",
  headline: "Building Practical Software and Insight-Driven Workflows",
  summary:
    "Final-year computer science student focused on software development and data analysis, building automation tools and analytics workflows using Python, FastAPI, SQL, and Power BI.",
  email: "srivathsan.r2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/srivathsan-raja/",
  github: "https://github.com/JINM0RI"
};

export const heroStats = [
  { label: "Projects", value: "3+" },
  { label: "Core Technologies", value: "12+" },
  { label: "Certifications", value: "7" }
];

export const services = [
  {
    title: "Backend & API Development",
    description:
      "Designing robust backend services with clean API architecture, async processing, and production-friendly structure.",
    tags: ["Python", "FastAPI", "SQLite/MySQL"]
  },
  {
    title: "Automation Solutions",
    description:
      "Automating repetitive business workflows such as payroll, certificate generation, and reporting pipelines.",
    tags: ["Python", "Excel Processing", "PDF Generation"]
  },
  {
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights using structured analysis and interactive dashboards.",
    tags: ["Pandas", "NumPy", "Power BI"]
  },
  {
    title: "Desktop Utility Apps",
    description:
      "Building lightweight desktop software for internal operations, billing, and workflow acceleration.",
    tags: ["PyQt5", "SQLite", "Installer Packaging"]
  },
  {
    title: "Deployment & Optimization",
    description:
      "Delivering deployment-ready builds with maintainable code structure, error handling, and performance-minded implementation.",
    tags: ["Git", "Version Control", "Maintainability"]
  }
];

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

export const certifications = [
  { title: "Google Data Analytics", track: "Analytics" },
  { title: "Data Science Methods and Algorithms", track: "Data Science" },
  { title: "Python Programming", track: "Development" },
  { title: "SQL for Data Analysis", track: "Database" },
  { title: "Power BI Essentials", track: "Visualization" },
  { title: "FastAPI Foundations", track: "Backend" },
  { title: "Git & GitHub Workflow", track: "Tools" }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Understand the business problem, current workflow, and where delays or errors are happening."
  },
  {
    step: "02",
    title: "Plan",
    text: "Define the data model, tool stack, and phased implementation plan with clear outcomes."
  },
  {
    step: "03",
    title: "Build",
    text: "Develop the core system with modular code, validation checks, and maintainable architecture."
  },
  {
    step: "04",
    title: "Integrate",
    text: "Connect uploads, databases, reports, and output formats into one consistent workflow."
  },
  {
    step: "05",
    title: "Validate",
    text: "Test with real scenarios and edge cases to ensure accuracy, speed, and reliability."
  },
  {
    step: "06",
    title: "Deliver",
    text: "Deploy a usable solution and document usage so teams can adopt it quickly."
  }
];
