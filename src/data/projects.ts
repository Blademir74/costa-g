// ========================================
// DATOS DE PROYECTOS - COSTA G
// Basado en el Curriculum Empresarial 2025
// ========================================

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  mainImage: string
  gallery: string[]
  location: {
    municipality: string
    state: string
    address?: string
  }
  year: number
  sector: string
  client: string
  clientType: 'gobierno' | 'privado'
  contractNumber?: string
  dependency?: string
  servicesProvided: string[]
  hasTour360: boolean
  tour360Url?: string
  featured: boolean
  status: 'completado' | 'en-proceso'
}

// ========================================
// PROYECTOS DEL CURRICULUM
// ========================================

export const PROJECTS: Project[] = [
  // ========================================
  // 2018 - CONSERVACIÓN DE PUENTES
  // ========================================
  {
    id: 'proj-001',
    title: 'Conservación de 110 Puentes - Zona Texcoco',
    slug: 'conservacion-puentes-texcoco-2018',
    description: 'Proyecto de conservación y mantenimiento de 110 puentes vehiculares en la zona de Texcoco, Estado de México. Trabajos de rehabilitación estructural, señalización y mejoras de seguridad vial.',
    shortDescription: 'Conservación de 110 puentes vehiculares en zona Texcoco.',
    mainImage: '/images/projects/puentes-texcoco.jpg',
    gallery: [
      '/images/projects/puentes-texcoco-1.jpg',
      '/images/projects/puentes-texcoco-2.jpg',
      '/images/projects/puentes-texcoco-3.jpg',
    ],
    location: {
      municipality: 'Zona Texcoco',
      state: 'Estado de México',
    },
    year: 2018,
    sector: 'Puentes',
    client: 'Arrendadora San Juan Viejo S.A. de C.V.',
    clientType: 'privado',
    contractNumber: 'SJV-2018-001',
    servicesProvided: [
      'Conservación estructural',
      'Rehabilitación de parapetos',
      'Señalización vial',
      'Mantenimiento preventivo',
    ],
    hasTour360: false,
    featured: true,
    status: 'completado',
  },
  {
    id: 'proj-002',
    title: 'Conservación de 133 Puentes - Zona Toluca',
    slug: 'conservacion-puentes-toluca-2018',
    description: 'Proyecto integral de conservación de 133 puentes vehiculares en la zona de Toluca, Estado de México. Incluye trabajos de rehabilitación, mantenimiento estructural y mejoras en sistemas de drenaje.',
    shortDescription: 'Conservación de 133 puentes vehiculares en zona Toluca.',
    mainImage: '/images/projects/puentes-toluca.jpg',
    gallery: [
      '/images/projects/puentes-toluca-1.jpg',
      '/images/projects/puentes-toluca-2.jpg',
    ],
    location: {
      municipality: 'Zona Toluca',
      state: 'Estado de México',
    },
    year: 2018,
    sector: 'Puentes',
    client: 'Arrendadora San Juan Viejo S.A. de C.V.',
    clientType: 'privado',
    contractNumber: 'SJV-2018-002',
    servicesProvided: [
      'Conservación estructural',
      'Rehabilitación de juntas',
      'Sistemas de drenaje',
      'Mantenimiento correctivo',
    ],
    hasTour360: false,
    featured: true,
    status: 'completado',
  },

  // ========================================
  // 2019 - INFRAESTRUCTURA EDUCATIVA
  // ========================================
  {
    id: 'proj-003',
    title: 'Construcción de 2 Aulas - Esc. Prim. Lorenzo Curiel Bazán',
    slug: 'aulas-lorenzo-curiel-bazan-2019',
    description: 'Construcción de dos aulas didácticas en la Escuela Primaria Lorenzo Curiel Bazán en Tlapa de Comonfort. Proyecto de infraestructura educativa con acabados de calidad y espacios funcionales para el aprendizaje.',
    shortDescription: 'Construcción de 2 aulas en escuela primaria de Tlapa.',
    mainImage: '/images/projects/aulas-lorenzo-curiel.jpg',
    gallery: [
      '/images/projects/aulas-lorenzo-curiel-1.jpg',
      '/images/projects/aulas-lorenzo-curiel-2.jpg',
    ],
    location: {
      municipality: 'Tlapa de Comonfort',
      state: 'Guerrero',
    },
    year: 2019,
    sector: 'Escuelas',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Construcción de obra civil',
      'Instalaciones eléctricas',
      'Acabados interiores',
      'Mobiliario básico',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },
  {
    id: 'proj-004',
    title: 'Cancha de Usos Múltiples - Esc. María Montessori',
    slug: 'cancha-maria-montessori-2019',
    description: 'Construcción de cancha de usos múltiples con firme de concreto hidráulico en la Escuela María Montessori de Tlapa de Comonfort. Incluye demarcación deportiva y áreas de resguardo.',
    shortDescription: 'Cancha de usos múltiples en Escuela María Montessori.',
    mainImage: '/images/projects/cancha-montessori.jpg',
    gallery: [
      '/images/projects/cancha-montessori-1.jpg',
      '/images/projects/cancha-montessori-2.jpg',
    ],
    location: {
      municipality: 'Tlapa de Comonfort',
      state: 'Guerrero',
    },
    year: 2019,
    sector: 'Canchas',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Construcción de firme de concreto',
      'Demarcación deportiva',
      'Cercado perimetral',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },

  // ========================================
  // 2020 - INFRAESTRUCTURA DIVERSA
  // ========================================
  {
    id: 'proj-005',
    title: 'Cancha y Techumbre - Esc. Sec. Nicolás Bravo',
    slug: 'cancha-techumbre-nicolas-bravo-2020',
    description: 'Construcción de cancha deportiva con techumbre metálica en la Escuela Secundaria Nicolás Bravo de Xochihuehuetlan. Proyecto integral que incluye estructura metálica y acabados.',
    shortDescription: 'Cancha con techumbre en Esc. Sec. Nicolás Bravo.',
    mainImage: '/images/projects/cancha-nicolas-bravo.jpg',
    gallery: [
      '/images/projects/cancha-nicolas-bravo-1.jpg',
      '/images/projects/cancha-nicolas-bravo-2.jpg',
      '/images/projects/cancha-nicolas-bravo-3.jpg',
    ],
    location: {
      municipality: 'Xochihuehuetlan',
      state: 'Guerrero',
    },
    year: 2020,
    sector: 'Canchas',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Construcción de cancha',
      'Estructura metálica',
      'Techumbre de lámina',
      'Instalaciones eléctricas',
    ],
    hasTour360: false,
    featured: true,
    status: 'completado',
  },
  {
    id: 'proj-006',
    title: 'Muro de Contención - Col. Nueva Era',
    slug: 'muro-contencion-nueva-era-2020',
    description: 'Construcción de muro de contención para estabilización de taludes en la Colonia Nueva Era de Tlacoachistlahuaca. Obra de protección civil y seguridad estructural.',
    shortDescription: 'Muro de contención para protección en Tlacoachistlahuaca.',
    mainImage: '/images/projects/muro-nueva-era.jpg',
    gallery: [
      '/images/projects/muro-nueva-era-1.jpg',
      '/images/projects/muro-nueva-era-2.jpg',
    ],
    location: {
      municipality: 'Tlacoachistlahuaca',
      state: 'Guerrero',
    },
    year: 2020,
    sector: 'Muros',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Excavación y cimentación',
      'Construcción de muro de mampostería',
      'Sistema de drenaje',
      'Protección de taludes',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },

  // ========================================
  // 2021 - MÁS INFRAESTRUCTURA EDUCATIVA
  // ========================================
  {
    id: 'proj-007',
    title: 'Construcción de 2 Aulas - Esc. Prim. Carmen Serdán',
    slug: 'aulas-carmen-serdan-2021',
    description: 'Construcción de dos aulas didácticas en la Escuela Primaria Carmen Serdán de Tlapa de Comonfort. Espacios diseñados para optimizar el proceso de enseñanza-aprendizaje.',
    shortDescription: 'Construcción de 2 aulas en Esc. Prim. Carmen Serdán.',
    mainImage: '/images/projects/aulas-carmen-serdan.jpg',
    gallery: [
      '/images/projects/aulas-carmen-serdan-1.jpg',
      '/images/projects/aulas-carmen-serdan-2.jpg',
    ],
    location: {
      municipality: 'Tlapa de Comonfort',
      state: 'Guerrero',
    },
    year: 2021,
    sector: 'Escuelas',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Construcción de obra civil',
      'Instalaciones eléctricas',
      'Acabados interiores',
      'Pintura y herrería',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },
  {
    id: 'proj-008',
    title: 'Cancha y Techumbre - Esc. Sec. Téc. Vicente Guerrero',
    slug: 'cancha-vicente-guerrero-2021',
    description: 'Construcción de cancha deportiva con techumbre en la Escuela Secundaria Técnica Vicente Guerrero del municipio de Benito Juárez. Infraestructura deportiva de calidad.',
    shortDescription: 'Cancha con techumbre en Esc. Sec. Téc. Vicente Guerrero.',
    mainImage: '/images/projects/cancha-vicente-guerrero.jpg',
    gallery: [
      '/images/projects/cancha-vicente-guerrero-1.jpg',
      '/images/projects/cancha-vicente-guerrero-2.jpg',
    ],
    location: {
      municipality: 'Benito Juárez',
      state: 'Guerrero',
    },
    year: 2021,
    sector: 'Canchas',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Construcción de cancha',
      'Estructura y techumbre',
      'Instalación eléctrica',
      'Acabados finales',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },

  // ========================================
  // 2022 - PAVIMENTACIÓN
  // ========================================
  {
    id: 'proj-009',
    title: 'Pavimentación Calle Porfirio Díaz',
    slug: 'pavimentacion-porfirio-diaz-2022',
    description: 'Pavimentación con concreto hidráulico de la Calle Porfirio Díaz en Ometepec. Proyecto de mejoramiento urbano que incluye guarniciones, banquetas y sistema de drenaje pluvial.',
    shortDescription: 'Pavimentación con concreto hidráulico en Ometepec.',
    mainImage: '/images/projects/pav-porfirio-diaz.jpg',
    gallery: [
      '/images/projects/pav-porfirio-diaz-1.jpg',
      '/images/projects/pav-porfirio-diaz-2.jpg',
      '/images/projects/pav-porfirio-diaz-3.jpg',
    ],
    location: {
      municipality: 'Ometepec',
      state: 'Guerrero',
    },
    year: 2022,
    sector: 'Pavimentación',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Pavimento de concreto hidráulico',
      'Guarniciones y banquetas',
      'Drenaje pluvial',
      'Señalización vial',
    ],
    hasTour360: false,
    featured: true,
    status: 'completado',
  },
  {
    id: 'proj-010',
    title: 'Pavimentación Arroyo Barranca Honda',
    slug: 'pavimentacion-barranca-honda-2022',
    description: 'Pavimentación de calle principal en la localidad Arroyo Barranca Honda, Ometepec. Mejoramiento de vialidad con concreto hidráulico de alta resistencia.',
    shortDescription: 'Pavimentación en Arroyo Barranca Honda, Ometepec.',
    mainImage: '/images/projects/pav-barranca-honda.jpg',
    gallery: [
      '/images/projects/pav-barranca-honda-1.jpg',
      '/images/projects/pav-barranca-honda-2.jpg',
    ],
    location: {
      municipality: 'Ometepec',
      state: 'Guerrero',
    },
    year: 2022,
    sector: 'Pavimentación',
    client: 'SDUOPOT',
    clientType: 'gobierno',
    dependency: 'Secretaría de Desarrollo Urbano, Obras Públicas y Ordenamiento Territorial',
    servicesProvided: [
      'Pavimento de concreto hidráulico',
      'Conformación de base',
      'Acabados',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },

  // ========================================
  // 2023 - CAMINOS ARTESANALES
  // ========================================
  {
    id: 'proj-011',
    title: 'Camino Artesanal EC Tlapa - San Marcos',
    slug: 'camino-tlapa-san-marcos-2023',
    description: 'Construcción de camino artesanal que conecta la Entronque Carretero Tlapa con la comunidad de San Marcos. Proyecto del Programa de Caminos Artesanales del H. Ayuntamiento.',
    shortDescription: 'Camino artesanal EC Tlapa - San Marcos.',
    mainImage: '/images/projects/camino-san-marcos.jpg',
    gallery: [
      '/images/projects/camino-san-marcos-1.jpg',
      '/images/projects/camino-san-marcos-2.jpg',
    ],
    location: {
      municipality: 'Tlapa de Comonfort',
      state: 'Guerrero',
    },
    year: 2023,
    sector: 'Caminos',
    client: 'H. Ayuntamiento de Tlapa de Comonfort',
    clientType: 'gobierno',
    dependency: 'Dirección de Obras Públicas Municipal',
    servicesProvided: [
      'Trazo y nivelación',
      'Conformación de terracerías',
      'Empedrado artesanal',
      'Obras de drenaje',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },
  {
    id: 'proj-012',
    title: 'Camino Artesanal Tlaquilcinapa - Guadalupe',
    slug: 'camino-tlaquilcinapa-guadalupe-2023',
    description: 'Construcción de camino artesanal conectando las comunidades de Tlaquilcinapa y Guadalupe en Tlapa de Comonfort. Mejora de conectividad rural.',
    shortDescription: 'Camino artesanal Tlaquilcinapa - Guadalupe.',
    mainImage: '/images/projects/camino-tlaquilcinapa.jpg',
    gallery: [
      '/images/projects/camino-tlaquilcinapa-1.jpg',
      '/images/projects/camino-tlaquilcinapa-2.jpg',
    ],
    location: {
      municipality: 'Tlapa de Comonfort',
      state: 'Guerrero',
    },
    year: 2023,
    sector: 'Caminos',
    client: 'H. Ayuntamiento de Tlapa de Comonfort',
    clientType: 'gobierno',
    dependency: 'Dirección de Obras Públicas Municipal',
    servicesProvided: [
      'Trazo y nivelación',
      'Conformación de terracerías',
      'Empedrado artesanal',
      'Cunetas y alcantarillas',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },
  {
    id: 'proj-013',
    title: 'Camino Artesanal EC Tototepec - San Miguelito',
    slug: 'camino-tototepec-san-miguelito-2023',
    description: 'Construcción de camino artesanal del Entronque Carretero Tototepec a la comunidad de San Miguelito. Proyecto de infraestructura rural para mejorar accesibilidad.',
    shortDescription: 'Camino artesanal EC Tototepec - San Miguelito.',
    mainImage: '/images/projects/camino-tototepec.jpg',
    gallery: [
      '/images/projects/camino-tototepec-1.jpg',
      '/images/projects/camino-tototepec-2.jpg',
    ],
    location: {
      municipality: 'Tlapa de Comonfort',
      state: 'Guerrero',
    },
    year: 2023,
    sector: 'Caminos',
    client: 'H. Ayuntamiento de Tlapa de Comonfort',
    clientType: 'gobierno',
    dependency: 'Dirección de Obras Públicas Municipal',
    servicesProvided: [
      'Trazo y nivelación',
      'Terracerías',
      'Empedrado',
      'Obras de drenaje menores',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },

  // ========================================
  // 2024 - REHABILITACIÓN DE PUENTES Y CAMINOS
  // ========================================
  {
    id: 'proj-014',
    title: 'Rehabilitación Puente Vehicular El Naranjo',
    slug: 'rehabilitacion-puente-el-naranjo-2024',
    description: 'Rehabilitación estructural del Puente Vehicular El Naranjo en Coahuayutla de José María Izazaga. Trabajos de reforzamiento estructural, reparación de daños y mejora de capacidad de carga.',
    shortDescription: 'Rehabilitación del Puente Vehicular El Naranjo.',
    mainImage: '/images/projects/puente-el-naranjo.jpg',
    gallery: [
      '/images/projects/puente-el-naranjo-1.jpg',
      '/images/projects/puente-el-naranjo-2.jpg',
      '/images/projects/puente-el-naranjo-3.jpg',
    ],
    location: {
      municipality: 'Coahuayutla de José María Izazaga',
      state: 'Guerrero',
    },
    year: 2024,
    sector: 'Puentes',
    client: 'H. Ayuntamiento de Coahuayutla',
    clientType: 'gobierno',
    dependency: 'Dirección de Obras Públicas Municipal',
    servicesProvided: [
      'Evaluación estructural',
      'Reforzamiento de estructura',
      'Reparación de losa',
      'Parapetos y barandales',
      'Señalización',
    ],
    hasTour360: true,
    tour360Url: 'https://tour360.costag.mx/puente-naranjo',
    featured: true,
    status: 'completado',
  },
  {
    id: 'proj-015',
    title: 'Rehabilitación Puente Palo Cuarto',
    slug: 'rehabilitacion-puente-palo-cuarto-2024',
    description: 'Rehabilitación integral del Puente Palo Cuarto en Coahuayutla. Proyecto de conservación vial que incluye reparaciones estructurales y mejoras de seguridad.',
    shortDescription: 'Rehabilitación del Puente Palo Cuarto.',
    mainImage: '/images/projects/puente-palo-cuarto.jpg',
    gallery: [
      '/images/projects/puente-palo-cuarto-1.jpg',
      '/images/projects/puente-palo-cuarto-2.jpg',
    ],
    location: {
      municipality: 'Coahuayutla de José María Izazaga',
      state: 'Guerrero',
    },
    year: 2024,
    sector: 'Puentes',
    client: 'H. Ayuntamiento de Coahuayutla',
    clientType: 'gobierno',
    dependency: 'Dirección de Obras Públicas Municipal',
    servicesProvided: [
      'Rehabilitación estructural',
      'Reparación de apoyos',
      'Impermeabilización',
      'Acabados',
    ],
    hasTour360: false,
    featured: true,
    status: 'completado',
  },
  {
    id: 'proj-016',
    title: 'Rehabilitación Carretera Coahuayutla - Tonalá',
    slug: 'rehabilitacion-carretera-coahuayutla-tonala-2024',
    description: 'Trabajos de rehabilitación en la carretera que conecta Coahuayutla con Tonalá. Mejoramiento de superficie de rodamiento y obras de drenaje.',
    shortDescription: 'Rehabilitación de carretera Coahuayutla - Tonalá.',
    mainImage: '/images/projects/carretera-coahuayutla.jpg',
    gallery: [
      '/images/projects/carretera-coahuayutla-1.jpg',
      '/images/projects/carretera-coahuayutla-2.jpg',
    ],
    location: {
      municipality: 'Coahuayutla de José María Izazaga',
      state: 'Guerrero',
    },
    year: 2024,
    sector: 'Caminos',
    client: 'H. Ayuntamiento de Coahuayutla',
    clientType: 'gobierno',
    dependency: 'Dirección de Obras Públicas Municipal',
    servicesProvided: [
      'Bacheo y nivelación',
      'Reparación de cunetas',
      'Obras de drenaje',
      'Señalización vial',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },
  {
    id: 'proj-017',
    title: 'Rehabilitación Camino Crucero Vista Hermosa',
    slug: 'rehabilitacion-camino-vista-hermosa-2024',
    description: 'Rehabilitación del camino rural hacia la comunidad Vista Hermosa desde el Crucero principal en Coahuayutla. Mejora de accesibilidad rural.',
    shortDescription: 'Rehabilitación de camino hacia Vista Hermosa.',
    mainImage: '/images/projects/camino-vista-hermosa.jpg',
    gallery: [
      '/images/projects/camino-vista-hermosa-1.jpg',
      '/images/projects/camino-vista-hermosa-2.jpg',
    ],
    location: {
      municipality: 'Coahuayutla de José María Izazaga',
      state: 'Guerrero',
    },
    year: 2024,
    sector: 'Caminos',
    client: 'H. Ayuntamiento de Coahuayutla',
    clientType: 'gobierno',
    dependency: 'Dirección de Obras Públicas Municipal',
    servicesProvided: [
      'Rehabilitación de terracerías',
      'Conformación de base',
      'Obras de drenaje',
      'Mantenimiento de cunetas',
    ],
    hasTour360: false,
    featured: false,
    status: 'completado',
  },
]

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

/**
 * Obtener proyectos destacados
 */
export function getFeaturedProjects(limit?: number): Project[] {
  const featured = PROJECTS.filter((p) => p.featured)
  return limit ? featured.slice(0, limit) : featured
}

/**
 * Obtener proyectos por sector
 */
export function getProjectsBySector(sector: string): Project[] {
  if (sector.toLowerCase() === 'all' || sector.toLowerCase() === 'todos') {
    return PROJECTS
  }
  return PROJECTS.filter(
    (p) => p.sector.toLowerCase() === sector.toLowerCase()
  )
}

/**
 * Obtener proyectos por año
 */
export function getProjectsByYear(year: number): Project[] {
  return PROJECTS.filter((p) => p.year === year)
}

/**
 * Obtener proyectos por municipio
 */
export function getProjectsByMunicipality(municipality: string): Project[] {
  return PROJECTS.filter(
    (p) =>
      p.location.municipality.toLowerCase() === municipality.toLowerCase()
  )
}

/**
 * Obtener proyecto por slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

/**
 * Obtener años únicos de proyectos
 */
export function getProjectYears(): number[] {
  const years = [...new Set(PROJECTS.map((p) => p.year))]
  return years.sort((a, b) => b - a)
}

/**
 * Obtener municipios únicos
 */
export function getProjectMunicipalities(): string[] {
  const municipalities = [...new Set(PROJECTS.map((p) => p.location.municipality))]
  return municipalities.sort()
}

/**
 * Obtener sectores únicos
 */
export function getProjectSectors(): string[] {
  const sectors = [...new Set(PROJECTS.map((p) => p.sector))]
  return sectors.sort()
}

/**
 * Estadísticas de proyectos
 */
export function getProjectStats() {
  return {
    total: PROJECTS.length,
    byYear: getProjectYears().map((year) => ({
      year,
      count: getProjectsByYear(year).length,
    })),
    bySector: getProjectSectors().map((sector) => ({
      sector,
      count: getProjectsBySector(sector).length,
    })),
    puentesConservados: 243, // De Texcoco y Toluca
    municipiosAtendidos: getProjectMunicipalities().length,
  }
}
