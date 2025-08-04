export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  responsibilities: string[];
  featured: boolean;
  salaryRange?: string;
  skills?: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Greater Noida / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Join our agile development team! You\'ll build transformative digital experiences using React, Node.js, and cloud-native platforms. At WebStitch, your growth matters: competitive salary, hybrid work, and mentorship from industry veterans.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience with React and Node.js',
      'Strong knowledge of TypeScript and modern JavaScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Familiarity with database design and optimization',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with version control (Git) and CI/CD pipelines'
    ],
    responsibilities: [
      'Develop and maintain web applications using React and Node.js',
      'Collaborate with designers to implement pixel-perfect UI/UX',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and technical discussions',
      'Optimize applications for maximum speed and scalability',
      'Work with cross-functional teams to deliver high-quality products'
    ],
    benefits: [
      'Competitive salary: ₹8-15 LPA based on experience',
      'Flexible work arrangements (hybrid/remote options)',
      'Health insurance for you and your family',
      'Professional development budget (₹50,000/year)',
      'Latest MacBook Pro and development tools',
      'Annual team retreats and company events'
    ],
    featured: true,
    salaryRange: '₹8-15 LPA',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Git']
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Greater Noida / Remote',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Shape the future of digital experiences as our UI/UX Designer. Create intuitive, accessible, and beautiful interfaces that users love. Work with cutting-edge design tools and collaborate with world-class developers.',
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '2+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, and Adobe Creative Suite',
      'Strong understanding of design systems and component libraries',
      'Knowledge of accessibility standards (WCAG 2.1)',
      'Experience with user research and usability testing',
      'Portfolio demonstrating mobile and web design expertise'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Develop and maintain design systems',
      'Collaborate with developers to ensure design implementation',
      'Present design concepts to clients and stakeholders',
      'Stay updated with latest design trends and best practices'
    ],
    benefits: [
      'Competitive salary: ₹6-12 LPA based on experience',
      'Creative freedom and ownership of design decisions',
      'Access to premium design tools and resources',
      'Conference attendance and design workshop budget',
      'Flexible working hours and remote work options',
      'Mentorship from senior designers and creative directors'
    ],
    featured: true,
    salaryRange: '₹6-12 LPA',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Design Systems']
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Greater Noida / Remote',
    type: 'Full-time',
    experience: '3-6 years',
    description: 'Build and maintain the infrastructure that powers our applications. Work with cutting-edge cloud technologies, implement CI/CD pipelines, and ensure our systems are scalable, secure, and reliable.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of DevOps or infrastructure experience',
      'Strong knowledge of AWS, Azure, or Google Cloud Platform',
      'Experience with containerization (Docker, Kubernetes)',
      'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
      'Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
      'Scripting skills in Python, Bash, or PowerShell'
    ],
    responsibilities: [
      'Design and implement CI/CD pipelines',
      'Manage cloud infrastructure and deployments',
      'Monitor system performance and troubleshoot issues',
      'Implement security best practices and compliance',
      'Automate repetitive tasks and processes',
      'Collaborate with development teams on deployment strategies'
    ],
    benefits: [
      'Competitive salary: ₹10-18 LPA based on experience',
      'Cloud certification reimbursement',
      'Latest hardware and development tools',
      'Flexible work arrangements',
      'Performance bonuses and stock options',
      'Professional development opportunities'
    ],
    featured: false,
    salaryRange: '₹10-18 LPA',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Python']
  },
  {
    id: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Greater Noida',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Drive growth through data-driven digital marketing strategies. Manage SEO, content marketing, social media, and paid advertising campaigns to help our clients achieve their business goals.',
    requirements: [
      'Bachelor\'s degree in Marketing, Communications, or related field',
      '2+ years of digital marketing experience',
      'Strong knowledge of SEO and content marketing',
      'Experience with Google Analytics, Search Console, and advertising platforms',
      'Social media marketing expertise',
      'Excellent written and verbal communication skills',
      'Data analysis and reporting skills'
    ],
    responsibilities: [
      'Develop and execute SEO strategies for clients',
      'Create and manage content marketing campaigns',
      'Manage social media accounts and advertising',
      'Analyze campaign performance and provide insights',
      'Collaborate with design team on marketing materials',
      'Stay updated with digital marketing trends and best practices'
    ],
    benefits: [
      'Competitive salary: ₹5-10 LPA based on experience',
      'Performance-based bonuses',
      'Marketing tools and software access',
      'Conference and training opportunities',
      'Flexible working hours',
      'Career growth opportunities'
    ],
    featured: false,
    salaryRange: '₹5-10 LPA',
    skills: ['SEO', 'Google Analytics', 'Content Marketing', 'Social Media', 'PPC', 'Email Marketing']
  }
];

export const companyBenefits = [
  {
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries with performance bonuses and equity options',
    icon: 'DollarSign'
  },
  {
    title: 'Flexible Work',
    description: 'Hybrid and remote work options with flexible hours',
    icon: 'Clock'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
    icon: 'Heart'
  },
  {
    title: 'Learning & Growth',
    description: 'Professional development budget and mentorship programs',
    icon: 'BookOpen'
  },
  {
    title: 'Latest Technology',
    description: 'MacBook Pro, premium software, and cutting-edge tools',
    icon: 'Laptop'
  },
  {
    title: 'Team Culture',
    description: 'Inclusive environment with team events and retreats',
    icon: 'Users'
  }
];

export const companyValues = [
  {
    title: 'Innovation First',
    description: 'We embrace new technologies and creative solutions to solve complex problems.',
    icon: 'Lightbulb'
  },
  {
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in every line of code and pixel of design.',
    icon: 'Award'
  },
  {
    title: 'Collaborative Spirit',
    description: 'We believe great work happens when talented people work together.',
    icon: 'Users'
  },
  {
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth and encourage lifelong learning.',
    icon: 'BookOpen'
  }
];