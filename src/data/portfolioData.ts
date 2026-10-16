import { AIApp, AIProject, PortfolioSettings, AIAd, AIVideo } from '../types';

export const INITIAL_APPS: AIApp[] = [
  {
    id: 'app-simple-pendulum',
    name: 'Simple Pendulum',
    subtitle: 'Interactive Physics & Harmonic Motion Simulation',
    description: 'An interactive physics application and computational laboratory modeling pendulum oscillation, period, angular displacement, and gravitational parameters with real-time dynamic visual feedback.',
    url: 'https://simplependulum.vercel.app/',
    alternateUrl: 'https://ai.studio/apps/08c1b1ea-7ba3-4436-9705-6f3fb1531583?fullscreenApplet=true',
    category: 'Physics & STEM Simulation',
    technologies: ['Google AI Studio', 'Vercel', 'Physics Simulation', 'JavaScript', 'Harmonic Motion'],
    featured: true,
  },
  {
    id: 'app-akagera-safari',
    name: 'Akagera Safari',
    subtitle: 'Interactive Rwandan Wildlife & Eco-Tour Experience',
    description: "An immersive interactive experience celebrating Rwanda's renowned Akagera National Park, showcasing rich East African biodiversity, wildlife conservation, and safari game drives.",
    url: 'https://akagera-safari.vercel.app/',
    alternateUrl: 'https://ai.studio/apps/8d923c64-7a02-4183-a344-60f5c889f17d?fullscreenApplet=true',
    category: 'Rwandan Heritage & Tourism',
    technologies: ['Vercel', 'Google AI Studio', 'Rwanda Heritage', 'Interactive UI', 'Generative Media'],
    featured: true,
  },
  {
    id: 'app-primary-math',
    name: 'Math Game in Primary School',
    subtitle: 'Primary School Arithmetic & Gamified Challenges',
    description: 'An interactive primary school mathematics learning application designed to make foundational arithmetic, numerical agility, and problem-solving intuitive and joyful for students.',
    url: 'https://mathprimary.vercel.app/',
    category: 'Educational AI Application',
    technologies: ['Vercel', 'React', 'TypeScript', 'Gamified Pedagogy'],
    featured: true,
  },
  {
    id: 'app-cinematic-torus',
    name: 'Cinematic Torus',
    subtitle: 'Mathematical 3D Geometry & Shader Visualization',
    description: 'A cinematic real-time 3D mathematical torus visualization rendering parametric geometric topologies, reflective lighting shaders, and dynamic coordinate transformations.',
    url: 'https://cinematic-torus-r4f9.vercel.app/',
    alternateUrl: 'https://ai.studio/apps/742f01cd-164e-4603-bdbc-06ce6345beae',
    category: 'Mathematical Visualization & 3D',
    technologies: ['Vercel', 'Google AI Studio', 'Three.js / WebGL', 'Mathematics', 'Shader Mechanics'],
    featured: true,
  },
  {
    id: 'app-hexahedron',
    name: 'The Hexahedron',
    subtitle: 'Platonic Solid & Spatial Polyhedral Geometry',
    description: 'An interactive 3D spatial geometry application exploring the regular hexahedron (cube), Cartesian symmetries, rotational axes, planar projections, and polyhedral topology.',
    url: 'https://ai.studio/apps/ba97f0e9-40f0-4219-bdc4-cb672d789fd7?fullscreenApplet=true',
    category: 'Mathematical Visualization & 3D',
    technologies: ['Google AI Studio', '3D Geometry', 'WebGL', 'Polyhedral Math'],
    featured: true,
  },
  {
    id: 'app-dodecahedron',
    name: 'The Dodecahedron',
    subtitle: 'Pentagonal Polyhedral Geometry & 3D Dynamics',
    description: 'An interactive 12-sided regular dodecahedron simulation demonstrating pentagonal face symmetries, golden ratio relationships, and dynamic real-time 3D polyhedral manipulation.',
    url: 'https://dodecahedron-seven.vercel.app/',
    category: 'Mathematical Visualization & 3D',
    technologies: ['Vercel', '3D Graphics', 'Mathematics', 'WebGL'],
    featured: true,
  },
  {
    id: 'app-tensor-calculus',
    name: 'Tensor Calculus Tutorial',
    subtitle: 'Advanced Mathematical Physics & Multilinear Algebra',
    description: 'An educational computational tutorial breaking down tensor analysis, Einstein summation convention, metric tensors, covariant differentiation, and differential geometry for physics and engineering.',
    url: 'https://tensorcalculus.vercel.app/',
    category: 'Physics & STEM Simulation',
    technologies: ['Vercel', 'Mathematics & Physics', 'Differential Geometry', 'Interactive Pedagogy'],
    featured: true,
  },
  {
    id: 'app-stock-management',
    name: 'Stock Management App',
    subtitle: 'Enterprise Inventory & Real-Time Logistics Tracking',
    description: 'Cloud-native inventory control and warehouse stock management application for tracking supply items, quantities, automated reorder thresholds, and ledger history.',
    url: 'https://ai.studio/apps/52cca26e-f40b-4813-872f-3b8198a4ffcf?fullscreenApplet=true',
    alternateUrl: 'https://ai.studio/apps/a14ec66e-ee55-4a18-941a-8bb3df6967e1?fullscreenApplet=true',
    category: 'Business Operations & Logistics',
    technologies: ['Google AI Studio', 'React', 'TypeScript', 'State Management', 'Cloud Storage'],
    featured: true,
  },
  {
    id: 'app-smartcalc',
    name: 'SmartCalc Kids',
    subtitle: "Let's make math fun!",
    description: 'This app quizzes children on basic arithmetic operations using adaptive AI prompts, dynamic challenges, and engaging visual feedback to foster mathematical confidence.',
    url: 'https://arithmetic-calculator-oxv2.vercel.app/',
    category: 'Educational AI Application',
    technologies: ['Google AI Studio', 'Vercel', 'GitHub', 'React', 'TypeScript'],
    featured: false,
  },
  {
    id: 'app-story-builder',
    name: 'Interactive Story Builder',
    subtitle: "Let's make a story with AI",
    description: 'An interactive storytelling engine where users choose their challenge and collaborate with generative AI to craft rich, branching narrative adventures.',
    url: 'https://story-builder-portfolio.vercel.app/',
    category: 'Generative Storytelling Engine',
    technologies: ['Google AI Studio', 'GitHub', 'Vercel', 'Gemini', 'Prompt Engineering'],
    featured: false,
  },
  {
    id: 'app-math-adventure',
    name: 'Math Adventure Land',
    subtitle: 'Choose your challenge and start the fun!',
    description: 'Gamified math learning platform that transforms core arithmetic, logic, and problem-solving into thrilling interactive quests for students.',
    url: 'https://mathadventuresnew.vercel.app/',
    category: 'AI-Powered Mathematical Games',
    technologies: ['Google AI Studio', 'GitHub', 'Vercel', 'Interactive UI/UX'],
    featured: false,
  },
  {
    id: 'app-interview-simulator',
    name: 'AI Interview Simulator',
    subtitle: "Let's make the interview fun!",
    description: 'An intelligent interview preparation tool that quizzes students and job seekers on technical and behavioral interview questions with real-time prompt-driven coaching.',
    url: 'https://jobinteriew-simulator.vercel.app/',
    category: 'Career & Training AI Tool',
    technologies: ['Google AI Studio', 'GitHub', 'Vercel', 'Prompt Engineering'],
    featured: false,
  },
  {
    id: 'app-snake-game',
    name: 'AI Snake Game',
    subtitle: "Let's make the snake game fun!",
    description: 'The classical arcade snake game reimagined with real-time prompt-based modifiers and adaptive dynamics, developed and hosted directly on Google AI Studio.',
    url: 'https://aistudio.google.com/app/apps/drive/1qe2R_e5GBHG6AYMajeEm65ECTTDMXdMI?showPreview=true',
    category: 'Interactive Game Mechanics',
    technologies: ['Google AI Studio', 'Prompt Architecture', 'JavaScript', 'Game Mechanics'],
    featured: false,
  },
];

export const INITIAL_PROJECTS: AIProject[] = [
  {
    id: 'proj-notebooklm-samsung',
    title: 'Samsung Galaxy User Guide (NotebookLM)',
    subtitle: 'Features, Settings, and Troubleshooting',
    description: 'An AI research and thinking partner built on NotebookLM and powered by Gemini models, grounded in authentic Samsung Galaxy documentation to answer complex user queries.',
    driveLink: 'https://notebooklm.google.com/notebook/7496251b-f78f-4105-a937-2a98a93339d9',
    linkType: 'notebooklm',
    category: 'AI Research & Knowledge Synthesis',
    technologies: ['NotebookLM', 'Gemini', 'Perplexity AI', 'Technical Documentation'],
  },
  {
    id: 'proj-notebooklm-rwanda-coffee',
    title: 'Kuzamura Ikawa mu Rwanda: Porogaramu Nshya',
    subtitle: 'Agricultural Strategy & Value Addition for Rwandan Coffee',
    description: 'A comprehensive AI NotebookLM research project exploring agronomic strategies, processing innovations, and socio-economic farmer support programs in Rwanda.',
    driveLink: 'https://notebooklm.google.com/notebook/8b3bc8ba-c22d-49c9-bb70-045a4e1617a7',
    linkType: 'notebooklm',
    category: 'Agricultural Intelligence & Policy',
    technologies: ['NotebookLM', 'Agricultural Data', 'Gemini', 'Rwanda Development'],
  },
  {
    id: 'proj-notebooklm-grafton',
    title: 'Grafton Architects: Humanistic Architecture Synthesis',
    subtitle: 'Pritzker Laureates Study on Spatial Empathy & Civic Dialogue',
    description: 'Architectural research exploring the humanistic design philosophy, spatial proportion, and civic presence of Yvonne Farrell and Shelley McNamara through AI synthesis.',
    driveLink: 'https://notebooklm.google.com/notebook/8ea65b8f-e23a-4145-b167-28abaa11d9c4',
    linkType: 'notebooklm',
    category: 'Spatial Design & Architectural Theory',
    technologies: ['NotebookLM', 'ArchiCAD Insights', 'Spatial Theory', 'Gemini'],
  },
  {
    id: 'proj-kilimo-smart',
    title: 'Kilimo-Smart: AI na Drones kusaidia Wakulima',
    subtitle: 'AI, Satellite Data & Drones for East African Agriculture',
    description: 'Interactive presentation detailing how satellite data (ESA SNAP), GIS mapping, drone multispectral imagery, and AI models empower smallholder farmers across East Africa.',
    driveLink: 'https://docs.google.com/presentation/d/1lEB-yDSj9IFeQo69iW8YmvI1iSbvnJg97qJqQtggoTs/present',
    linkType: 'presentation',
    category: 'Satellite & Drone AgTech',
    technologies: ['Google Slides', 'ESA SNAP', 'GIS', 'Drone Tech', 'AI for Agriculture'],
  },
  {
    id: 'proj-ember-kivu',
    title: 'Ember Kivu: Eco Smart Coffee & Charging System',
    subtitle: 'Lake Kivu Specialty Coffee with Solar Charging Tech',
    description: 'A brand storybook and product strategy combining Rwandan specialty coffee from Lake Kivu with eco-smart solar charging stations for clean energy and digital connectivity.',
    driveLink: 'https://docs.google.com/presentation/d/1t0p0wM8VH4_XDIz3QYAP86XB9d1ZeGEgBLRq7nZFU4Q/present',
    linkType: 'presentation',
    category: 'Sustainable Tech & Storytelling',
    technologies: ['Google Slides', 'Canva', 'Sustainable Energy', 'Product Design'],
  },
  {
    id: 'proj-video-storytelling',
    title: 'AI Video Storytelling: My Morning with AI & Campaigns',
    subtitle: 'Next-Gen Video Generation, Voice Synthesis & Editing',
    description: 'A multi-part video production portfolio covering daily AI workflow demonstrations ("My Morning with AI"), promotional campaigns (Epson printer), and narrative shorts.',
    driveLink: 'https://sites.google.com/view/pierre-k-gatwaza-ai-portofolio/ai-video-epson-printer-ad-video',
    linkType: 'video',
    category: 'Generative Video & Audio',
    technologies: ['CapCut', 'Canva', 'ElevenLabs', 'Runway ML', 'InVideo'],
  },
];

export const INITIAL_ADS: AIAd[] = [
  {
    id: 'ad-eco-smart-charger',
    title: 'Eco Smart Charger Campaign',
    subtitle: 'Advertisement for an innovative charging system',
    concept: 'A fusion of creativity, strategic marketing, and advanced generative AI knowledge to craft compelling brand narratives and product launch campaigns.',
    copy: 'I bring a unique fusion of creativity, strategic marketing, and advanced AI knowledge to craft compelling brand narratives like the Eco Smart Charger campaign. From persuasive copywriting and product storytelling to visual branding and audience psychology, I design messages that not only sell but resonate. My expertise in generative AI tools allows me to tailor ads with precision—adapting tone, style, and imagery for maximum impact. With a deep understanding of emerging tech trends, consumer behavior, and digital engagement, I turn bold ideas into unforgettable campaigns. Whether launching a startup or reimagining a classic, I build brands that feel alive, intelligent, and irresistible.',
    category: 'CleanTech Ad & Brand Narrative',
    technologies: ['ChatGPT', 'Canva', 'Leonardo AI', 'Midjourney', 'Copywriting'],
    galleryType: 'Commercial Ad Campaign',
    docLink: 'https://sites.google.com/view/pierre-k-gatwaza-ai-portofolio/ai-ad-eco-smart-coffee/advertisement-for-an-innovative-charging-system',
  },
  {
    id: 'ad-eco-smart-coffee',
    title: 'Ember Kivu: Eco Smart Coffee',
    subtitle: 'Advertisement & Logo for Eco Smart Coffee',
    concept: 'Brand identity, emblem design, and commercial advertisement combining Rwandan Lake Kivu specialty coffee with eco-conscious clean living.',
    copy: 'Crafting memorable brand identities where culture meets sustainability. The Ember Kivu campaign fuses Rwandan volcanic coffee heritage with clean solar charging technology to appeal to modern eco-travelers and conscious coffee connoisseurs.',
    category: 'Brand Identity & Visual Design',
    technologies: ['Canva', 'Leonardo AI', 'ChatGPT', 'Brand Strategy'],
    galleryType: 'Identity & Commercial Ad',
    docLink: 'https://sites.google.com/view/pierre-k-gatwaza-ai-portofolio/ai-ad-eco-smart-coffee',
  },
  {
    id: 'ad-barcelona-tour',
    title: 'Tourism & Travel — Barcelona Experience',
    subtitle: 'Visual Advertising & Itinerary Strategy',
    concept: 'Strategic destination promotion, day-by-day architectural storytelling, and generative visual advertising designed for international travel engagement.',
    category: 'Travel & Tourism Campaign',
    technologies: ['ChatGPT', 'Leonardo AI', 'Google Docs', 'Visual Curation'],
    galleryType: 'Travel Campaign Document',
    docLink: 'https://docs.google.com/document/d/1p9sKZ-c_I-wgLR4hNNW__o6Lvv3yg3dEz_iCfkGO_E8/preview',
  },
  {
    id: 'ad-florence-tour',
    title: 'Tours & Travel — Renaissance Florence',
    subtitle: 'Architectural Heritage & Cultural Travel Campaign',
    concept: 'Visual storytelling showcasing the artistic legacy, architectural majesty, and historic urban charm of Florence, Italy using AI image generation.',
    category: 'Cultural Heritage & Tourism Ad',
    technologies: ['ChatGPT', 'Leonardo AI', 'Spatial Narrative'],
    galleryType: 'Destination Campaign',
    docLink: 'https://sites.google.com/view/pierre-k-gatwaza-ai-portofolio/ai-ad-eco-smart-coffee/tours-and-travel-florence',
  },
];

export const INITIAL_VIDEOS: AIVideo[] = [
  {
    id: 'vid-morning-ai-epson',
    title: 'My Morning with AI (Epson Printer Commercial)',
    subtitle: 'Tools: CapCut, Canva, AI Voice, Runway ML, InVideo',
    description: 'A commercial routine video showing how artificial intelligence enhances daily workflows. Produced with script optimization, AI voice synthesis, and dynamic video editing.',
    statement: 'Hello, I’m Pierre K. Gatwaza, a creative professional with a fresh edge in AI-powered video production and editing, backed by my recent completion of an AI for Business course. This journey has equipped me with the strategic insight and technical skills to harness artificial intelligence in transforming storytelling, marketing, and brand engagement through video. I specialize in using next-generation tools like Runway ML, Pika, InVideo, and Google AI Studio, CapCut, to generate, edit, and optimize videos with speed, precision, and style.',
    previewUrl: 'https://drive.google.com/file/d/1kqt-27h4iAaidqLdchYbuI8UvL29hJld/preview',
    category: 'Commercial Ad & Daily Routine',
    technologies: ['CapCut', 'Canva', 'AI Voice', 'Runway ML', 'NotebookLM'],
  },
  {
    id: 'vid-hagar-story',
    title: 'Hagar Story — Bible Study & Dramatic Narrative',
    subtitle: 'Tools: CapCut, Canva, HeyGen, ElevenLabs, AI Voice',
    description: 'An educational and emotive biblical story utilizing HeyGen AI avatars, ElevenLabs multi-speaker voice synthesis, and cinematic sound design.',
    previewUrl: 'https://drive.google.com/file/d/1o97b2ntbkCC1fwNYQWZifO2uujdVOTTE/preview',
    category: 'Narrative Storytelling & Faith Education',
    technologies: ['HeyGen', 'ElevenLabs', 'CapCut', 'Canva', 'AI Voice'],
  },
  {
    id: 'vid-olympics-sports',
    title: 'Olympic Games Paris — Artistic Natation',
    subtitle: 'Tools: ChatGPT, InVideo',
    description: 'High-energy sports highlight reel covering the Olympic Games Paris artistic natation tournament with synchronized pacing and dynamic video transitions.',
    previewUrl: 'https://drive.google.com/file/d/1yopzFKy5NzHe0dMVDxMkkHnjLe6qMrgJ/preview',
    category: 'Sports & Entertainment Highlight',
    technologies: ['ChatGPT', 'InVideo', 'Pacing Algorithms', 'Video Synthesis'],
  },
  {
    id: 'vid-stickman-story',
    title: 'Stickman Story: “I’m Not Just a Math Person”',
    subtitle: 'Tools: ChatGPT, CapCut',
    description: 'Witty, philosophical animated short highlighting the balance between mathematical precision, physics principles, and whimsical creative imagination.',
    previewUrl: 'https://drive.google.com/file/d/1f93wsnKU2VhpC-IpxQCvr3IJN8SyCRsC/preview',
    category: 'Character Animation & Creative Comedy',
    technologies: ['ChatGPT', 'CapCut', 'Motion Design', 'Scriptwriting'],
  },
  {
    id: 'vid-summer-rainfall',
    title: 'Summer Rainfall: Sensory Ambient Video',
    subtitle: 'Tools: Pixabay, CapCut, ElevenLabs',
    description: 'Atmospheric audiovisual composition combining rainfall scenery with layered ambient audio generated through generative sound synthesis.',
    previewUrl: 'https://drive.google.com/file/d/1fskgLikViYReV_cpAOyB_FwoDPYYZwzy/preview',
    category: 'Atmospheric & Ambient Video',
    technologies: ['Pixabay', 'CapCut', 'ElevenLabs', 'Sound Design'],
  },
];

export const CERTIFICATIONS_AND_DOMAINS = [
  {
    title: 'Physics & Mathematics',
    field: 'Foundational Sciences',
    details: 'Analytical reasoning, calculus, linear algebra, and first-principles modeling.',
  },
  {
    title: 'ICT (C++ & Python)',
    field: 'Software & Algorithms',
    details: 'Algorithmic efficiency, software engineering, and machine learning pipelines.',
  },
  {
    title: 'AI for Business',
    field: 'Certified Specialization',
    details: 'Process automation, predictive analytics, prompt architecture, and enterprise AI transformation.',
  },
  {
    title: 'ESA SNAP & Satellite Data',
    field: 'Earth Observation & Remote Sensing',
    details: 'Satellite radar & optical data processing from the European Space Agency for environmental insight.',
  },
  {
    title: 'GIS & Spatial Mapping',
    field: 'Geographic Information Systems',
    details: 'Spatial analytics, multi-layer cartography, and terrain modeling.',
  },
  {
    title: 'CISCO Networking & IoT',
    field: 'Certified Network Infrastructure',
    details: 'Network protocols, edge connectivity, and Internet of Things deployment.',
  },
  {
    title: 'CAD (ArchiCAD)',
    field: 'Spatial Architecture & 3D Modeling',
    details: 'Architectural drafting, structural planning, and volumetric design systems.',
  },
  {
    title: 'Google AI Studio & Cloud',
    field: 'Applied AI Ecosystem',
    details: 'Prompt engineering, rapid prototyping, multimodal integration, and API deployment.',
  },
];

export const SKILL_GROUPS = [
  {
    group: 'Generative Models & Reasoning',
    skills: ['ChatGPT', 'Gemini', 'Claude AI', 'Google AI Studio'],
  },
  {
    group: 'Research, Synthesis & Flow',
    skills: ['Google Flow', 'NotebookLM', 'Perplexity AI'],
  },
  {
    group: 'Multimedia, Audio & Creative Studio',
    skills: ['Canva', 'ElevenLabs', 'CapCut'],
  },
  {
    group: 'Engineering, Spatial & Code',
    skills: ['Python', 'C++', 'ESA SNAP', 'GIS', 'ArchiCAD', 'CISCO IoT'],
  },
];

export const ALL_SKILLS = [
  'ChatGPT',
  'Gemini',
  'Claude AI',
  'Canva',
  'ElevenLabs',
  'CapCut',
  'Google Flow',
  'NotebookLM',
  'Perplexity AI',
  'Google AI Studio',
  'Python',
  'C++',
  'ESA SNAP',
  'GIS',
  'ArchiCAD',
  'CISCO Networking & IoT',
];

export const DEFAULT_SETTINGS: PortfolioSettings = {
  name: 'Pierre K. Gatwaza',
  tagline: 'Creative AI developer.',
  email: 'pkaligirgt@gmail.com',
  whatsapp: '+250782207515',
  phone: '0782207515 (MTN)',
  location: 'Kigali, Rwanda',
  googleSiteUrl: 'https://sites.google.com/view/pierrekgatwaza/accueil/my-ai-apps',
  apps: INITIAL_APPS,
  projects: INITIAL_PROJECTS,
  ads: INITIAL_ADS,
  videos: INITIAL_VIDEOS,
};

// Using version 10 with verified Google AI Studio Stock Management App
const STORAGE_KEY = 'pkg_portfolio_settings_v10';
const PREVIOUS_STORAGE_KEYS = ['pkg_portfolio_settings_v9', 'pkg_portfolio_settings_v8', 'pkg_portfolio_settings_v7'];

export function loadPortfolioSettings(): PortfolioSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
      || localStorage.getItem('pkg_portfolio_settings_v9')
      || localStorage.getItem('pkg_portfolio_settings_v8')
      || localStorage.getItem('pkg_portfolio_settings_v7');
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    const loadedVideos = Array.isArray(parsed.videos) && parsed.videos.length > 0
      ? parsed.videos.filter((v: AIVideo) => v.id !== 'vid-florence-architecture' && !v.title?.includes('Florence'))
      : INITIAL_VIDEOS;

    let loadedApps: AIApp[] = INITIAL_APPS;
    if (Array.isArray(parsed.apps) && parsed.apps.length > 0) {
      let foundStockApp = false;
      loadedApps = parsed.apps.map((a: AIApp) => {
        if (a.id === 'app-stock-management' || a.name?.toLowerCase().includes('stock management')) {
          foundStockApp = true;
          return {
            ...a,
            id: 'app-stock-management',
            url: 'https://ai.studio/apps/52cca26e-f40b-4813-872f-3b8198a4ffcf?fullscreenApplet=true',
            alternateUrl: 'https://ai.studio/apps/a14ec66e-ee55-4a18-941a-8bb3df6967e1?fullscreenApplet=true',
            technologies: a.technologies?.includes('Google AI Studio')
              ? a.technologies
              : ['Google AI Studio', ...(a.technologies || ['React', 'TypeScript', 'State Management'])],
            featured: true,
          };
        }
        return a;
      });

      if (!foundStockApp) {
        const stockApp = INITIAL_APPS.find((a) => a.id === 'app-stock-management');
        if (stockApp) loadedApps.push(stockApp);
      }
    }

    const settings: PortfolioSettings = {
      ...DEFAULT_SETTINGS,
      ...parsed,
      apps: loadedApps,
      projects: Array.isArray(parsed.projects) && parsed.projects.length > 0 ? parsed.projects : INITIAL_PROJECTS,
      ads: Array.isArray(parsed.ads) && parsed.ads.length > 0 ? parsed.ads : INITIAL_ADS,
      videos: loadedVideos,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }

    return settings;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function savePortfolioSettings(settings: PortfolioSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings to localStorage', e);
  }
}

