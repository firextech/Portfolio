export interface Certification {
  id: string
  name: string
  badge: string
  category: 'admin' | 'developer' | 'consultant' | 'specialist' | 'associate'
  color: string
  gradient: [string, string]
  issueYear?: string
  description: string
}

export interface Experience {
  company: string
  companyShort: string
  role: string
  startDate: string
  endDate: string
  location: string
  type: 'full-time' | 'internship' | 'freelance'
  description: string[]
  skills: string[]
  current: boolean
}

export interface Skill {
  name: string
  category: 'desarrollo' | 'automatizacion' | 'plataforma' | 'administracion' | 'integraciones' | 'ia'
  level: 'Intermedio' | 'Avanzado' | 'Experto'
  levelPercent: number
}

// Ordered by importance: Consultant > Specialist > Developer > Admin > Associate
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'service-cloud',
    name: 'Service Cloud Consultant',
    badge: '/assets/certs/cert-service-cloud.png',
    category: 'consultant',
    color: '#0D9DDA',
    gradient: ['#0D9DDA', '#0A7DB3'],
    issueYear: '2023',
    description: 'Implementación de soluciones enterprise de atención al cliente',
  },
  {
    id: 'einstein-prediction',
    name: 'Einstein Prediction Builder',
    badge: '/assets/certs/cert-einstein-prediction.png',
    category: 'specialist',
    color: '#FF9900',
    gradient: ['#FF9900', '#E68A00'],
    issueYear: '2023',
    description: 'Predicciones con inteligencia artificial aplicada al CRM',
  },
  {
    id: 'ai-specialist',
    name: 'Salesforce AI Specialist',
    badge: '/assets/certs/cert-ai-specialist.png',
    category: 'specialist',
    color: '#7B5EA7',
    gradient: ['#7B5EA7', '#5E3D8F'],
    issueYear: '2024',
    description: 'Especialista en soluciones de IA generativa en Salesforce',
  },
  {
    id: 'app-builder',
    name: 'Platform App Builder',
    badge: '/assets/certs/cert-app-builder.png',
    category: 'developer',
    color: '#1B96FF',
    gradient: ['#1B96FF', '#0D7FD4'],
    issueYear: '2023',
    description: 'Desarrollo de aplicaciones personalizadas en la plataforma Lightning',
  },
  {
    id: 'administrator',
    name: 'Salesforce Administrator',
    badge: '/assets/certs/cert-administrator.png',
    category: 'admin',
    color: '#00A1E0',
    gradient: ['#00A1E0', '#007CB8'],
    issueYear: '2022',
    description: 'Administración completa de organizaciones Salesforce',
  },
  {
    id: 'marketing-associate',
    name: 'Marketing Associate',
    badge: '/assets/certs/cert-marketing-associate.png',
    category: 'associate',
    color: '#E8457C',
    gradient: ['#E8457C', '#C2305E'],
    issueYear: '2024',
    description: 'Fundamentos de marketing digital en el ecosistema Salesforce',
  },
  {
    id: 'ai-associate',
    name: 'Salesforce AI Associate',
    badge: '/assets/certs/cert-ai-associate.png',
    category: 'associate',
    color: '#00BCD4',
    gradient: ['#00BCD4', '#0097A7'],
    issueYear: '2023',
    description: 'Fundamentos de inteligencia artificial aplicada al CRM',
  },
  {
    id: 'associate',
    name: 'Salesforce Associate',
    badge: '/assets/certs/cert-associate.png',
    category: 'associate',
    color: '#6B7280',
    gradient: ['#6B7280', '#4B5563'],
    issueYear: '2022',
    description: 'Fundamentos de la plataforma Salesforce y CRM',
  },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'VIEWNEXT (IBM)',
    companyShort: 'VIEWNEXT',
    role: 'Desarrollador / Consultor Salesforce',
    startDate: 'Sep 2022',
    endDate: 'Presente',
    location: 'Salamanca, España',
    type: 'full-time',
    current: true,
    description: [
      'Diseño e implementación de soluciones Salesforce personalizadas para clientes enterprise.',
      'Desarrollo en Apex, Visualforce y Lightning Web Components (LWC) con foco en rendimiento.',
      'Automatización avanzada de procesos de negocio con Flows, validaciones y workflows.',
      'Gestión integral del modelo de seguridad: perfiles, conjuntos de permisos y jerarquías de roles.',
      'Integraciones REST/SOAP con sistemas externos y gestión de plataformas de eventos.',
      'Cargas y extracciones masivas de datos mediante Data Loader y herramientas ETL.',
      'Administración funcional de Service Cloud: casos, colas, reglas de asignación y SLAs.',
    ],
    skills: ['Apex', 'Flows', 'LWC', 'Service Cloud', 'SOQL', 'REST API', 'Seguridad'],
  },
  {
    company: 'NTT DATA',
    companyShort: 'NTT DATA',
    role: 'Prácticas — Desarrollo de Aplicaciones Web',
    startDate: 'Mar 2022',
    endDate: 'Jun 2022',
    location: 'Salamanca, España',
    type: 'internship',
    current: false,
    description: [
      'Formación intensiva en el ecosistema Salesforce y primeras certificaciones oficiales.',
      'Desarrollo de aplicaciones web y fundamentos de plataforma CRM.',
      'Aprendizaje de las mejores prácticas de desarrollo en entornos empresariales.',
    ],
    skills: ['Salesforce Admin', 'HTML/CSS', 'JavaScript', 'Formación'],
  },
  {
    company: 'Academia de Clases Particulares',
    companyShort: 'Academia',
    role: 'Profesor de Informática',
    startDate: 'Sep 2020',
    endDate: 'Mar 2022',
    location: 'Salamanca, España',
    type: 'freelance',
    current: false,
    description: [
      'Impartición de clases de informática a alumnos de todas las edades y niveles.',
      'Docencia en ofimática, programación básica, hardware y mantenimiento de equipos.',
      'Adaptación de contenidos y metodología pedagógica según el perfil de cada alumno.',
      'Resolución de dudas técnicas y acompañamiento en proyectos personales de aprendizaje digital.',
    ],
    skills: ['Docencia', 'Ofimática', 'Programación', 'Comunicación', 'Pedagogía'],
  },
]

export const SKILLS: Skill[] = [
  // Desarrollo
  { name: 'Apex', category: 'desarrollo', level: 'Experto', levelPercent: 92 },
  { name: 'SOQL / SOSL', category: 'desarrollo', level: 'Experto', levelPercent: 90 },
  { name: 'Visualforce', category: 'desarrollo', level: 'Avanzado', levelPercent: 80 },
  { name: 'Lightning Web Components', category: 'desarrollo', level: 'Avanzado', levelPercent: 78 },
  // Automatización
  { name: 'Flows', category: 'automatizacion', level: 'Experto', levelPercent: 95 },
  { name: 'Validation Rules', category: 'automatizacion', level: 'Experto', levelPercent: 90 },
  { name: 'Workflows / Process Builder', category: 'automatizacion', level: 'Avanzado', levelPercent: 85 },
  // Plataforma
  { name: 'Service Cloud', category: 'plataforma', level: 'Experto', levelPercent: 90 },
  { name: 'Einstein Analytics', category: 'plataforma', level: 'Avanzado', levelPercent: 75 },
  { name: 'Sales Cloud', category: 'plataforma', level: 'Intermedio', levelPercent: 65 },
  // Administración
  { name: 'Perfiles y Permisos', category: 'administracion', level: 'Experto', levelPercent: 95 },
  { name: 'Modelo de Seguridad', category: 'administracion', level: 'Experto', levelPercent: 92 },
  { name: 'Cargas de Datos', category: 'administracion', level: 'Avanzado', levelPercent: 85 },
  { name: 'Gestión de Usuarios', category: 'administracion', level: 'Experto', levelPercent: 90 },
  // Integraciones
  { name: 'REST API', category: 'integraciones', level: 'Avanzado', levelPercent: 82 },
  { name: 'Platform Events', category: 'integraciones', level: 'Avanzado', levelPercent: 78 },
  { name: 'Named Credentials', category: 'integraciones', level: 'Avanzado', levelPercent: 75 },
  { name: 'SOAP API', category: 'integraciones', level: 'Intermedio', levelPercent: 62 },
  // IA & Python
  { name: 'ChatGPT / Claude / Copilot', category: 'ia', level: 'Experto', levelPercent: 95 },
  { name: 'Python en Salesforce', category: 'ia', level: 'Avanzado', levelPercent: 82 },
  { name: 'Procesos ETL con Python', category: 'ia', level: 'Avanzado', levelPercent: 80 },
  { name: 'Prompt Engineering', category: 'ia', level: 'Avanzado', levelPercent: 85 },
  { name: 'Einstein Prediction Builder', category: 'ia', level: 'Avanzado', levelPercent: 78 },
  { name: 'IA Generativa en CRM', category: 'ia', level: 'Avanzado', levelPercent: 76 },
]

export const TRAILHEAD_STATS = {
  rank: 'Ranger',
  rankLevel: 4,
  superbadges: 35,
  modules: 200,
  points: 120000,
  profileUrl: 'https://www.salesforce.com/trailblazer/dgiljimnez',
}

export const CONTACT = {
  linkedin: 'https://www.linkedin.com/in/diego-giljiménez-941595240',
  trailblazer: 'https://www.salesforce.com/trailblazer/dgiljimnez',
}

export const SKILL_CATEGORIES = {
  desarrollo:     { label: 'Desarrollo',      color: '#1B96FF', bg: 'rgba(27,150,255,0.1)' },
  automatizacion: { label: 'Automatización',  color: '#00A1E0', bg: 'rgba(0,161,224,0.1)' },
  plataforma:     { label: 'Plataforma',      color: '#7B5EA7', bg: 'rgba(123,94,167,0.1)' },
  administracion: { label: 'Administración',  color: '#00BCD4', bg: 'rgba(0,188,212,0.1)' },
  integraciones:  { label: 'Integraciones',   color: '#FF9900', bg: 'rgba(255,153,0,0.1)' },
  ia:             { label: 'IA & Python',     color: '#E8457C', bg: 'rgba(232,69,124,0.1)' },
}
