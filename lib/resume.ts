export interface Resume {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  certificatesUrl?: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
}

export const resume: Resume = {
  name: 'Azan Ali',
  title: 'Artificial Intelligence Engineer',
  email: 'azanaliworks@gmail.com',
  phone: '+92 3415123633',
  location: 'Pakistan',
  certificatesUrl: 'https://www.linkedin.com/in/malikazan/details/certifications/',
  about:
    'Artificial Intelligence Engineer and Machine Learning Engineer with strong expertise in developing predictive models, NLP solutions, and scalable AI systems. Skilled in Python and automation tools, with a passion for building intelligent, data-driven solutions that improve performance, enhance decision-making, and reduce manual effort through innovative AI-driven projects.',
  skills: [
    {
      category: 'Core AI/ML',
      items: ['NLP', 'Machine Learning', 'Deep Learning', 'LLMs', 'Data Science'],
    },
    {
      category: 'Languages & Frameworks',
      items: ['Python', 'PyTorch', 'LangChain', 'Transformers', 'Scikit-learn'],
    },
    {
      category: 'Specialized Techniques',
      items: ['Retrieval Augmented Generation (RAG)', 'Semantic Analysis', 'Model Deployment'],
    },
    {
      category: 'Tools & Platforms',
      items: ['FastAPI', 'Streamlit', 'Gradio', 'Docker', 'Git'],
    },
    {
      category: 'Data & Analysis',
      items: ['Data Analysis', 'Data Processing', 'MLOps', 'Real-time Analytics'],
    },
    {
      category: 'Certifications Focus',
      items: ['Agentic Systems', 'LLM Applications', 'Deep Learning', 'Prompt Engineering'],
    },
  ],
  experience: [
    {
      title: 'AI/ML Project Developer',
      company: 'Self-Directed Learning',
      duration: '2023 - Present',
      description:
        'Developing innovative NLP and machine learning projects focused on real-world applications and intelligent systems.',
      achievements: [
        'Built multiple production-ready AI applications',
        'Specialized in NLP and LLM-based solutions',
        'Implemented RAG systems for enhanced context-aware responses',
      ],
      technologies: ['Python', 'LangChain', 'PyTorch', 'FastAPI', 'Streamlit'],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Semantic Book Recommender',
      description:
        'NLP-powered book recommendation system utilizing semantic similarity to enhance user book discovery experience.',
      technologies: ['Python', 'NLP', 'LLMs', 'Gradio', 'Sentence Transformers'],
      github: 'https://github.com/DevAzan786/book-recommender',
      demo: 'https://www.linkedin.com/posts/malikazan_bookrecommendations-nlp-machinelearning-activity-7299342558416060416-FU2g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZf6HMBeyw0Vy2vuEJnnx3fCheOYkFIQ1Q',
    },
    {
      id: 2,
      title: 'TedPal: TED Talks Chatbot',
      description:
        'RAG-based chatbot providing instant TED Talk summaries, eliminating manual searching and boosting learning efficiency.',
      technologies: ['Python', 'LangChain', 'RAG', 'FastAPI', 'Streamlit'],
      github: 'https://github.com/Maliksaad231224/TedPal-RAG-Chatbot-using-PineCone-and-Flask',
      demo: 'https://www.linkedin.com/posts/malikazan_for-our-information-retrieval-semester-project-activity-7336430579866861569-ggoA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZf6HMBeyw0Vy2vuEJnnx3fCheOYkFIQ1Q',
    },
    {
      id: 3,
      title: 'Log Classification System',
      description:
        'Real-time log analysis system using hybrid machine learning approach with advanced contextual understanding.',
      technologies: ['Python', 'Logistic Regression', 'DeepSeek LLM', 'FastAPI', 'Streamlit'],
      github: 'https://github.com/DevAzan786/Log-Classification',
      demo: 'https://www.linkedin.com/posts/malikazan_ai-deepseek-fastapi-activity-7294227425947742209-o9NT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZf6HMBeyw0Vy2vuEJnnx3fCheOYkFIQ1Q',
    },
    {
      id: 4,
      title: 'AI CRM Campaign Manager Chatbot',
      description:
        'AI-powered CRM chatbot that answers natural-language queries over structured bank campaign data, delivering accurate insights and CRM-style automation using FastAPI and Supabase.',
      technologies: ['Python', 'FastAPI', 'Supabase', 'JavaScript', 'HTML', 'CSS', 'GitHub Actions'],
      github: 'https://github.com/Maliksaad231224/CRM-Compaign-Manager-Chatbot-using-Fastapi-and-Supabase',
      demo: 'https://www.linkedin.com/posts/malikazan_ai-crm-chatbot-activity-7408894221312503808-E2is?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZf6HMBeyw0Vy2vuEJnnx3fCheOYkFIQ1Q',
    },
    {
      id: 5,
      title: 'AI Video Violence Detection System',
      description:
        'Lightweight spatio-temporal surveillance model that classifies CCTV clips as Normal, Violence, or Weaponized Activity using MobileNetV2 features and a BiLSTM temporal head for real-time inference.',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'MobileNetV2', 'BiLSTM', 'Video Analytics'],
      github: 'https://github.com/DevAzan786/voilence-detection',
      demo: 'https://www.linkedin.com/posts/sham-lal-ai-enthusiatic23_deeplearning-computervision-videoanalytics-ugcPost-7408449205993676801-QqVD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZf6HMBeyw0Vy2vuEJnnx3fCheOYkFIQ1Q',
    },
    {
      id: 6,
      title: 'House Price Prediction Web App',
      description:
        'Flask-based machine learning app that predicts house prices from property features, delivering real-time estimates with a trained regression pipeline and practical, user-friendly interface.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn', 'Data Science'],
      github: 'https://github.com/DevAzan786/house-price-prediction',
      demo: 'https://www.linkedin.com/posts/malikazan_machinelearning-datascience-flask-activity-7283820267682848768-yjGM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZf6HMBeyw0Vy2vuEJnnx3fCheOYkFIQ1Q',
    },
  ],
  certifications: [
    {
      id: 1,
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: 'Aug 2025',
      credential: '7TRE90LSBJ6Q',
    },
    {
      id: 2,
      title: 'Developing LLM Applications with LangChain',
      issuer: 'DataCamp',
      date: 'Sep 2025',
      credential: '8a116c7afe8f26ca69c56260855ad58eb287e388',
    },
    {
      id: 3,
      title: 'Retrieval Augmented Generation (RAG) with LangChain',
      issuer: 'DataCamp',
      date: 'Sep 2025',
      credential: 'e39f87c0a475f772153f8d080816bd57067e7170',
    },
    {
      id: 4,
      title: 'Intermediate Deep Learning with PyTorch',
      issuer: 'DataCamp',
      date: 'Nov 2025',
      credential: '2160f49c1a569c205b90020e18f709d20e9ed539',
    },
    {
      id: 5,
      title: 'Designing Agentic Systems with LangChain',
      issuer: 'DataCamp',
      date: 'Nov 2025',
      credential: 'e9f4e3c8aff3b4b60e709c059b87831890356e40',
    },
  ],
};
