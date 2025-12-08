// ========================================
// CONSTANTES DEL SITIO - COSTA G
// Datos del Curriculum Empresarial 2025
// ========================================

export const SITE_CONFIG = {
  name: 'Costa G',
  legalName: 'Comercializadora e Inmobiliaria Costa G S.A. de C.V.',
  tagline: 'Constructora Bio-Sustentable',
  description: 'Empresa constructora Bio-Sustentable en Guerrero y Estado de México. Especialistas en puentes vehiculares, edificaciones educativas, pavimentación y caminos artesanales. +243 puentes conservados desde 2018.',
  longDescription: 'CONSTRUCTORA COMERCIALIZADORA E INMOBILIARIA COSTA G S.A. DE C.V., es una empresa joven conformada por un equipo de profesionales enfocados en las necesidades de nuestros clientes y en la calidad de nuestros servicios. En un corto tiempo hemos desarrollado un conjunto de obras importantes en el sector privado y público cumpliendo con los costos y tiempos de ejecución. Contamos con personal técnico profesional para cumplir cualquier desafío de tiempo y costo. Somos una empresa emprendedora en proceso de crecimiento, con bases sólidas en ser una empresa constructora Bio-Sustentable.',
  url: 'https://costag.mx',
  locale: 'es_MX',
  foundingYear: 2018,
  
  // Misión
  mission: 'Nuestra misión es construir con los menores procesos contaminantes y dejar en cada obra una huella de carbono menor para preservar nuestro mundo, así mismo buscamos ser una empresa certificada en edificaciones Bio-Sustentables.',
  
  // Filosofía
  philosophy: 'Nos identificamos como una empresa responsable, comprometidos con las necesidades de nuestros clientes.',
  
  // Contacto
  contact: {
    phone: '747 273 5934',
    phoneRaw: '+527472735934',
    email: 'Inmob.costag@Hotmail.com',
    whatsapp: '527472735934',
    whatsappMessage: 'Hola, me interesa conocer más sobre sus servicios de construcción.',
  },
  
  // Dirección
  address: {
    street: 'Galo Soberon y Parra, Edif. C, Depto. #302',
    colony: 'Col. Las Torres',
    postalCode: '39076',
    city: 'Chilpancingo',
    state: 'Guerrero',
    country: 'México',
    full: 'Galo Soberon y Parra, Edif. C, Depto. #302, Col. Las Torres, C.P. 39076, Chilpancingo, Guerrero',
    coordinates: {
      lat: 17.5506,
      lng: -99.5024,
    },
  },
  
  // Horarios
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Cerrado',
  },
  
  // Redes Sociales
  social: {
    facebook: 'https://facebook.com/costag',
    instagram: 'https://instagram.com/costag',
    linkedin: 'https://linkedin.com/company/costag',
    youtube: 'https://youtube.com/@costag',
    website: 'https://comercializadoraeinmobiliariacostag1.webnode.mx/',
  },
  
  // SEO
  seo: {
    defaultTitle: 'Costa G | Constructora Bio-Sustentable en Guerrero',
    titleTemplate: '%s | Costa G',
    defaultDescription: 'Constructora Bio-Sustentable en Guerrero y Estado de México. +243 puentes conservados, infraestructura educativa, pavimentación y caminos artesanales desde 2018.',
    keywords: [
      'constructora guerrero',
      'construcción sustentable',
      'puentes vehiculares méxico',
      'conservación de puentes',
      'pavimentación concreto hidráulico',
      'caminos artesanales guerrero',
      'infraestructura educativa',
      'remodelación',
      'venta materiales construcción',
      'chilpancingo',
      'tlapa de comonfort',
      'coahuayutla',
      'ometepec',
      'constructora bio-sustentable',
    ],
  },
} as const

// ========================================
// NAVEGACIÓN
// ========================================

export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Servicios',
    href: '/servicios',
    children: [
      { label: 'Construcción', href: '/servicios/construccion', icon: 'Building2' },
      { label: 'Remodelación', href: '/servicios/remodelacion', icon: 'Hammer' },
      { label: 'Venta de Materiales', href: '/servicios/materiales', icon: 'Package' },
      { label: 'Diseño Arquitectónico', href: '/servicios/diseno', icon: 'PenTool' },
      { label: 'Consultoría', href: '/servicios/consultoria', icon: 'FileCheck' },
    ],
  },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
] as const

// ========================================
// SERVICIOS
// ========================================

export const SERVICES = [
  {
    id: 'construccion',
    title: 'Construcción',
    slug: 'construccion',
    icon: 'Building2',
    shortDescription: 'Obra civil, puentes vehiculares, aulas, canchas deportivas y edificaciones públicas.',
    description: 'Ejecutamos proyectos de construcción de obra civil con especialización en puentes vehiculares, aulas escolares, canchas deportivas con techumbre, y edificaciones de infraestructura pública. Más de 243 puentes conservados en el Estado de México.',
    features: [
      'Puentes vehiculares y peatonales',
      'Construcción de aulas escolares',
      'Canchas deportivas con techumbre',
      'Muros de contención',
      'Edificaciones públicas',
      'Infraestructura educativa',
    ],
    image: '/images/services/construccion.jpg',
  },
  {
    id: 'remodelacion',
    title: 'Remodelación',
    slug: 'remodelacion',
    icon: 'Hammer',
    shortDescription: 'Rehabilitación estructural, renovación de espacios y restauración de inmuebles.',
    description: 'Especialistas en rehabilitación estructural de puentes vehiculares, renovación integral de espacios educativos y públicos, y restauración de inmuebles con enfoque en durabilidad y seguridad.',
    features: [
      'Rehabilitación estructural de puentes',
      'Renovación de espacios educativos',
      'Conservación estructural',
      'Restauración de inmuebles',
      'Ampliaciones',
      'Terminación de obras incompletas',
    ],
    image: '/images/services/remodelacion.jpg',
  },
  {
    id: 'materiales',
    title: 'Venta de Materiales',
    slug: 'materiales',
    icon: 'Package',
    shortDescription: 'Cemento, acero, agregados, block, acabados e impermeabilizantes de calidad.',
    description: 'Comercializamos materiales de construcción certificados: cemento, acero estructural, agregados (grava, arena), block, acabados de primera calidad e impermeabilizantes.',
    features: [
      'Cemento y concreto',
      'Acero estructural',
      'Agregados (grava, arena)',
      'Block y tabique',
      'Acabados de primera',
      'Impermeabilizantes',
    ],
    image: '/images/services/materiales.jpg',
  },
  {
    id: 'diseno',
    title: 'Diseño Arquitectónico',
    slug: 'diseno',
    icon: 'PenTool',
    shortDescription: 'Planos ejecutivos, renders 3D, diseño sustentable y trámites de permisos.',
    description: 'Desarrollamos proyectos arquitectónicos completos: planos ejecutivos, visualización 3D fotorrealista, diseño sustentable bioclimático y gestión de trámites ante dependencias gubernamentales.',
    features: [
      'Planos ejecutivos',
      'Renders 3D fotorrealistas',
      'Diseño sustentable',
      'Trámites y permisos',
      'Asesoría técnica',
      'Proyectos bioclimáticos',
    ],
    image: '/images/services/diseno.jpg',
  },
  {
    id: 'consultoria',
    title: 'Consultoría',
    slug: 'consultoria',
    icon: 'FileCheck',
    shortDescription: 'Estudios de viabilidad, supervisión de obra, auditorías, peritajes y análisis de costos.',
    description: 'Brindamos servicios profesionales de consultoría: estudios de viabilidad, supervisión de obra pública y privada, auditorías técnicas, peritajes estructurales y análisis de costos para licitaciones.',
    features: [
      'Estudios de viabilidad',
      'Supervisión de obra',
      'Auditorías técnicas',
      'Peritajes estructurales',
      'Análisis de costos',
      'Gestión de licitaciones',
    ],
    image: '/images/services/consultoria.jpg',
  },
] as const

// ========================================
// VALORES DE LA EMPRESA (Del curriculum)
// ========================================

export const VALUES = [
  {
    title: 'Honestidad',
    description: 'Transparencia total en cada proyecto y relación comercial.',
    icon: 'Shield',
  },
  {
    title: 'Capacidad',
    description: 'Personal técnico profesional para cumplir cualquier desafío de tiempo y costo.',
    icon: 'Award',
  },
  {
    title: 'Responsabilidad',
    description: 'Comprometidos con las necesidades de nuestros clientes y la calidad de nuestros servicios.',
    icon: 'CheckCircle',
  },
  {
    title: 'Proactividad',
    description: 'Empresa emprendedora en proceso de crecimiento con bases sólidas.',
    icon: 'Rocket',
  },
] as const

// ========================================
// ESTADÍSTICAS
// ========================================

export const STATS = [
  { value: '243', label: 'Puentes Conservados', suffix: '+' },
  { value: '17', label: 'Proyectos Completados', suffix: '+' },
  { value: '7', label: 'Años de Experiencia', suffix: '+' },
  { value: '100', label: 'Compromiso Eco-responsable', suffix: '%' },
] as const

// ========================================
// TIMELINE DE LA EMPRESA
// ========================================

export const TIMELINE = [
  {
    year: 2018,
    title: 'Fundación y Gran Inicio',
    description: 'Conservación rutinaria de 243 puentes vehiculares: 110 en Zona Texcoco y 133 en Zona Toluca, Estado de México.',
  },
  {
    year: 2019,
    title: 'Primera Obra Gubernamental',
    description: 'Construcción de aulas en Escuela Primaria Lorenzo Curiel Bazán y cancha deportiva en Preescolar María Montessori.',
  },
  {
    year: 2020,
    title: 'Expansión Regional',
    description: 'Construcción de cancha con techumbre en Escuela Nicolás Bravo y muro de contención en Jardín de Niños Nueva Era.',
  },
  {
    year: 2021,
    title: 'Consolidación',
    description: 'Terminación de construcción en Escuela Carmen Serdán y cancha de usos múltiples en Escuela Sec. Tec. Agropecuaria No. 82.',
  },
  {
    year: 2022,
    title: 'Pavimentación Especializada',
    description: 'Pavimentación con concreto hidráulico en calle Porfirio Díaz y calle Principal en Ometepec.',
  },
  {
    year: 2023,
    title: 'Programa Caminos Artesanales',
    description: 'Tres proyectos del Programa de Caminos Artesanales en Tlapa de Comonfort.',
  },
  {
    year: 2024,
    title: 'Rehabilitación de Puentes',
    description: 'Cuatro proyectos mayores en Coahuayutla: rehabilitación de puentes vehiculares y carreteras.',
  },
  {
    year: 2025,
    title: 'Expansión y Crecimiento',
    description: 'Objetivo de certificación Bio-Sustentable y expansión a nuevos mercados regionales.',
  },
] as const

// ========================================
// PROYECTOS COMPLETOS (Del curriculum 2025)
// ========================================

export const PROJECTS = [
  // 2018
  {
    id: 'puentes-texcoco-2018',
    title: 'Conservación Rutinaria de Puentes - Zona Texcoco',
    slug: 'conservacion-puentes-texcoco-2018',
    category: 'puentes',
    year: 2018,
    location: 'Estado de México',
    municipality: 'Zona Texcoco',
    client: 'Arrendadora San Juan Viejo S.A. de C.V.',
    dependency: 'SCT',
    contract: '3-o-cb-a-544-w-0-3',
    description: 'Conservación rutinaria de 110 puentes vehiculares durante 2018 en la Zona Texcoco del Estado de México.',
    scope: 'Meta: 110 puentes',
    featured: true,
    images: ['/images/projects/puentes-texcoco.jpg'],
  },
  {
    id: 'puentes-toluca-2018',
    title: 'Conservación Rutinaria de Puentes - Zona Toluca',
    slug: 'conservacion-puentes-toluca-2018',
    category: 'puentes',
    year: 2018,
    location: 'Estado de México',
    municipality: 'Zona Toluca',
    client: 'Arrendadora San Juan Viejo S.A. de C.V.',
    dependency: 'SCT',
    contract: '3-o-cb-a-545-w-0-3',
    description: 'Conservación rutinaria de 133 puentes vehiculares durante 2018 en la Zona Toluca del Estado de México.',
    scope: 'Meta: 133 puentes',
    featured: true,
    images: ['/images/projects/puentes-toluca.jpg'],
  },
  // 2019
  {
    id: 'aulas-lorenzo-curiel-bazan',
    title: 'Construcción de 2 Aulas - Escuela Primaria Lorenzo Curiel Bazán',
    slug: 'aulas-lorenzo-curiel-bazan',
    category: 'escuelas',
    year: 2019,
    location: 'Guerrero',
    municipality: 'Tlapa de Comonfort',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FISE-AD-110-2019',
    description: 'Construcción de 2 aulas y obra exterior en la Escuela Primaria Lorenzo Curiel Bazán C.C.T.12DPR595DI.',
    scope: '2 aulas + obra exterior',
    featured: true,
    images: ['/images/projects/aulas-lorenzo-curiel.jpg'],
  },
  {
    id: 'cancha-maria-montessori',
    title: 'Cancha Deportiva - Preescolar María Montessori',
    slug: 'cancha-maria-montessori',
    category: 'canchas',
    year: 2019,
    location: 'Guerrero',
    municipality: 'Tlapa de Comonfort',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FISE-AD-113-2019',
    description: 'Construcción de cancha deportiva de usos múltiples, techado y obra exterior en la Escuela Preescolar Indígena María Montessori CCT12DCC1090L.',
    scope: 'Cancha + techado + obra exterior',
    featured: false,
    images: ['/images/projects/cancha-montessori.jpg'],
  },
  // 2020
  {
    id: 'cancha-nicolas-bravo',
    title: 'Cancha y Techumbre - Escuela General Nicolás Bravo',
    slug: 'cancha-nicolas-bravo',
    category: 'canchas',
    year: 2020,
    location: 'Guerrero',
    municipality: 'Xochihuehuetlan',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FAFEF-AD-090-2020',
    description: 'Construcción de cancha y techumbre en la Escuela General "Nicolás Bravo" C.C.T.12DES0246O.',
    scope: 'Cancha deportiva + techumbre',
    featured: false,
    images: ['/images/projects/cancha-nicolas-bravo.jpg'],
  },
  {
    id: 'muro-nueva-era',
    title: 'Muro de Contención - Jardín de Niños Nueva Era',
    slug: 'muro-contencion-nueva-era',
    category: 'muros',
    year: 2020,
    location: 'Guerrero',
    municipality: 'Tlacoachistlahuaca',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FAFEF-AD-086-2020',
    description: 'Construcción de muro de contención en el Jardín de Niños Nueva Era CCT 12EJN0124T.',
    scope: 'Muro de contención',
    featured: false,
    images: ['/images/projects/muro-nueva-era.jpg'],
  },
  // 2021
  {
    id: 'aulas-carmen-serdan',
    title: 'Terminación de Aulas - Escuela Primaria Carmen Serdán',
    slug: 'aulas-carmen-serdan',
    category: 'escuelas',
    year: 2021,
    location: 'Guerrero',
    municipality: 'Tlapa de Comonfort',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FAFEF-AD-090-2021',
    description: 'Terminación de la construcción de 2 aulas + módulo de dirección + obra exterior en la Escuela Primaria Indígena "Carmen Serdán" C.C.T.12DPB0531P.',
    scope: '2 aulas + módulo de dirección + obra exterior',
    featured: false,
    images: ['/images/projects/aulas-carmen-serdan.jpg'],
  },
  {
    id: 'cancha-vicente-guerrero',
    title: 'Cancha de Usos Múltiples - Escuela Sec. Tec. Agropecuaria No. 82',
    slug: 'cancha-vicente-guerrero',
    category: 'canchas',
    year: 2021,
    location: 'Guerrero',
    municipality: 'Benito Juárez',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FAFEF-AD-110-2021',
    description: 'Construcción de cancha de usos múltiples y techado en la Escuela Sec. Tec. Agropecuaria No. 82 "Vicente Guerrero" C.C.T.12DST0105H.',
    scope: 'Cancha usos múltiples + techado',
    featured: false,
    images: ['/images/projects/cancha-vicente-guerrero.jpg'],
  },
  // 2022
  {
    id: 'pavimentacion-porfirio-diaz',
    title: 'Pavimentación Calle Porfirio Díaz',
    slug: 'pavimentacion-porfirio-diaz',
    category: 'pavimentacion',
    year: 2022,
    location: 'Guerrero',
    municipality: 'Ometepec',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FAFEF-AD-060-2022',
    description: 'Pavimentación con concreto hidráulico de la calle Porfirio Díaz en Las Iguanas, Ometepec.',
    scope: 'Pavimentación con concreto hidráulico',
    featured: false,
    images: ['/images/projects/pavimentacion-porfirio.jpg'],
  },
  {
    id: 'pavimentacion-barranca-honda',
    title: 'Pavimentación Calle Principal - Arroyo Barranca Honda',
    slug: 'pavimentacion-barranca-honda',
    category: 'pavimentacion',
    year: 2022,
    location: 'Guerrero',
    municipality: 'Ometepec',
    client: 'SDUOPOT',
    dependency: 'SDUOPOT',
    contract: 'SDUOPOT-FAFEF-AD-090-2022',
    description: 'Pavimentación con concreto hidráulico de la calle Principal en Arroyo Barranca Honda, Ometepec.',
    scope: 'Pavimentación con concreto hidráulico',
    featured: false,
    images: ['/images/projects/pavimentacion-barranca.jpg'],
  },
  // 2023
  {
    id: 'camino-tlapa-san-marcos',
    title: 'Camino EC Tlapa - San Marcos Xocotepec',
    slug: 'camino-tlapa-san-marcos',
    category: 'caminos',
    year: 2023,
    location: 'Guerrero',
    municipality: 'Tlapa de Comonfort',
    client: 'Comité Pro-Proyecto',
    dependency: 'H. Ayuntamiento Municipal de Tlapa de Comonfort',
    contract: 'Programa de Caminos Artesanales 2023',
    description: 'Camino EC (Tlapa – Chilpancingo) - San Marcos Xocotepec, tramo del KM 0+000 al km 2+500.',
    scope: '2.5 km de camino artesanal',
    featured: true,
    images: ['/images/projects/camino-san-marcos.jpg'],
  },
  {
    id: 'camino-tlaquilcinapa-guadalupe',
    title: 'Camino Tlaquilcinapa - Villa de Guadalupe',
    slug: 'camino-tlaquilcinapa-guadalupe',
    category: 'caminos',
    year: 2023,
    location: 'Guerrero',
    municipality: 'Tlapa de Comonfort',
    client: 'Comité Pro-Proyecto',
    dependency: 'H. Ayuntamiento Municipal de Tlapa de Comonfort',
    contract: 'Programa de Caminos Artesanales 2023',
    description: 'Camino Tlaquilcinapa - Tlaquilcingo - Villa de Guadalupe, tramo del km 1+000 al km 7+700.',
    scope: '6.7 km de camino artesanal',
    featured: true,
    images: ['/images/projects/camino-guadalupe.jpg'],
  },
  {
    id: 'camino-tototepec-san-miguelito',
    title: 'Camino EC Tototepec - San Miguelito',
    slug: 'camino-tototepec-san-miguelito',
    category: 'caminos',
    year: 2023,
    location: 'Guerrero',
    municipality: 'Tlapa de Comonfort',
    client: 'Comité Pro-Proyecto',
    dependency: 'H. Ayuntamiento Municipal de Tlapa de Comonfort',
    contract: 'Programa de Caminos Artesanales 2023',
    description: 'E.C (Tototepec) – San Miguelito del tramo: 0+000 al km. 1+000.',
    scope: '1 km de camino artesanal',
    featured: false,
    images: ['/images/projects/camino-miguelito.jpg'],
  },
  // 2024
  {
    id: 'puente-palo-cuarto',
    title: 'Rehabilitación Puente Vehicular Palo Cuarto',
    slug: 'puente-palo-cuarto',
    category: 'puentes',
    year: 2024,
    location: 'Guerrero',
    municipality: 'Coahuayutla de José Ma. Izazaga',
    client: 'H. Ayuntamiento Municipal de Coahuayutla',
    dependency: 'H. Ayuntamiento Municipal',
    contract: 'MCJMI/2021-2024/OP/AD/019/2024',
    description: 'Rehabilitación y conservación estructural del puente vehicular en intersección Palo Cuarto con Arroyo El Muerto.',
    scope: 'Rehabilitación estructural completa',
    featured: true,
    images: ['/images/projects/puente-palo-cuarto.jpg'],
  },
  {
    id: 'puente-el-naranjo',
    title: 'Rehabilitación Puente Vehicular El Naranjo',
    slug: 'puente-el-naranjo',
    category: 'puentes',
    year: 2024,
    location: 'Guerrero',
    municipality: 'Coahuayutla de José Ma. Izazaga',
    client: 'H. Ayuntamiento Municipal de Coahuayutla',
    dependency: 'H. Ayuntamiento Municipal',
    contract: 'MCJMI/2021-2024/OP/AD/035/2024',
    description: 'Rehabilitación del puente vehicular en Coahuayutla de José Ma. Izazaga, localidad El Naranjo.',
    scope: 'Rehabilitación puente vehicular',
    featured: true,
    images: ['/images/projects/puente-naranjo.jpg'],
  },
  {
    id: 'carretera-coahuayutla-tonala',
    title: 'Rehabilitación Carretera Coahuayutla - Tonalá',
    slug: 'carretera-coahuayutla-tonala',
    category: 'caminos',
    year: 2024,
    location: 'Guerrero',
    municipality: 'Coahuayutla de José Ma. Izazaga',
    client: 'H. Ayuntamiento Municipal de Coahuayutla',
    dependency: 'H. Ayuntamiento Municipal',
    contract: 'MCJMI/2021-2024/OP/AD/060/2024',
    description: 'Rehabilitación de la carretera E.C. (Coahuayutla – Antón Simón) – Tonalá.',
    scope: 'Rehabilitación de carretera',
    featured: false,
    images: ['/images/projects/carretera-tonala.jpg'],
  },
  {
    id: 'camino-crucero-vista-hermosa',
    title: 'Rehabilitación Camino Crucero Vista Hermosa',
    slug: 'camino-crucero-vista-hermosa',
    category: 'caminos',
    year: 2024,
    location: 'Guerrero',
    municipality: 'Coahuayutla de José Ma. Izazaga',
    client: 'H. Ayuntamiento Municipal de Coahuayutla',
    dependency: 'H. Ayuntamiento Municipal',
    contract: 'MCJMI/2021-2024/OP/AD/065/2024',
    description: 'Rehabilitación del camino Crucero de Vista Hermosa – Ciénega - El Sauce.',
    scope: 'Rehabilitación de camino',
    featured: false,
    images: ['/images/projects/camino-vista-hermosa.jpg'],
  },
] as const

// ========================================
// CATEGORÍAS DE PROYECTOS
// ========================================

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'Todos', color: 'neutral' },
  { id: 'puentes', label: 'Puentes', color: 'primary' },
  { id: 'escuelas', label: 'Escuelas', color: 'accent' },
  { id: 'caminos', label: 'Caminos', color: 'secondary' },
  { id: 'pavimentacion', label: 'Pavimentación', color: 'amber' },
  { id: 'canchas', label: 'Canchas', color: 'eco' },
  { id: 'muros', label: 'Muros', color: 'neutral' },
] as const

// ========================================
// CLIENTES / DEPENDENCIAS
// ========================================

export const CLIENTS = [
  {
    id: 'sct',
    name: 'SCT',
    fullName: 'Secretaría de Comunicaciones y Transportes',
    type: 'federal',
  },
  {
    id: 'sduopot',
    name: 'SDUOPOT',
    fullName: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    type: 'estatal',
  },
  {
    id: 'ayuntamiento-tlapa',
    name: 'H. Ayuntamiento de Tlapa',
    fullName: 'H. Ayuntamiento Municipal de Tlapa de Comonfort',
    type: 'municipal',
  },
  {
    id: 'ayuntamiento-coahuayutla',
    name: 'H. Ayuntamiento de Coahuayutla',
    fullName: 'H. Ayuntamiento Municipal de Coahuayutla de José Ma. Izazaga',
    type: 'municipal',
  },
  {
    id: 'arrendadora-san-juan',
    name: 'Arrendadora San Juan Viejo',
    fullName: 'Arrendadora San Juan Viejo S.A. de C.V.',
    type: 'privado',
  },
] as const

// ========================================
// FAQ
// ========================================

export const FAQ = [
  {
    question: '¿En qué zonas trabajan?',
    answer: 'Trabajamos principalmente en el estado de Guerrero y Estado de México. Hemos realizado proyectos en municipios como Tlapa de Comonfort, Coahuayutla, Ometepec, Xochihuehuetlan, Tlacoachistlahuaca, Benito Juárez, y las zonas Texcoco y Toluca del Estado de México.',
  },
  {
    question: '¿Qué tipos de proyectos realizan?',
    answer: 'Nos especializamos en conservación y rehabilitación de puentes vehiculares, construcción de infraestructura educativa (aulas, canchas deportivas con techumbre), pavimentación con concreto hidráulico, caminos artesanales, muros de contención y rehabilitación de carreteras.',
  },
  {
    question: '¿Cuánto tiempo tarda una cotización?',
    answer: 'Una cotización preliminar la entregamos en 48-72 horas. Para presupuestos detallados de proyectos complejos, el tiempo estimado es de 1-2 semanas dependiendo del alcance del proyecto.',
  },
  {
    question: '¿Qué significa ser una empresa Bio-Sustentable?',
    answer: 'Nuestra misión es construir con los menores procesos contaminantes y dejar en cada obra una huella de carbono menor para preservar nuestro mundo. Buscamos ser una empresa certificada en edificaciones Bio-Sustentables.',
  },
  {
    question: '¿Trabajan con gobierno y sector privado?',
    answer: 'Sí, trabajamos con ambos sectores. Hemos ejecutado proyectos para dependencias gubernamentales como SDUOPOT, SCT, y diversos ayuntamientos municipales, así como para clientes del sector privado.',
  },
  {
    question: '¿Cuál es su experiencia en conservación de puentes?',
    answer: 'Tenemos amplia experiencia en conservación de puentes. En 2018, conservamos más de 243 puentes vehiculares en el Estado de México (110 en Zona Texcoco y 133 en Zona Toluca). En 2024 realizamos rehabilitaciones estructurales de puentes en Coahuayutla.',
  },
] as const

// ========================================
// ÁREAS DE SERVICIO
// ========================================

export const SERVICE_AREAS = [
  { state: 'Guerrero', municipalities: ['Chilpancingo', 'Tlapa de Comonfort', 'Coahuayutla', 'Ometepec', 'Xochihuehuetlan', 'Tlacoachistlahuaca', 'Benito Juárez'] },
  { state: 'Estado de México', municipalities: ['Zona Texcoco', 'Zona Toluca'] },
] as const
