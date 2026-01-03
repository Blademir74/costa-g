/* ============================================
   DATABASE TYPES - COSTA G (AUDITADO)
   Este archivo define la estructura de datos
   conectada a Supabase para los 17 proyectos.
   ============================================ */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

/**
 * Categorías oficiales del portafolio Costa G
 */
export type CategoriaProyecto = 
  | 'Puentes' 
  | 'Carreteras' 
  | 'Caminos' 
  | 'Pavimentación' 
  | 'Educativa' 
  | 'Contención';

/**
 * Interfaz principal para el Frontend
 * Refleja los campos requeridos en la auditoría de los 17 proyectos
 */
export interface Project {
  id: string | number;
  title: string;           // Título corto y claro (máx 90 car)
  slug: string;            // URL amigable
  description: string;     // Descripción corta (1-2 frases)
  content: string;         // Descripción larga (3-5 frases)
  
  // Datos de Auditoría y Currículum
  contract_number: string; // Número de contrato (ej: SDUOPOT-FISE-AD-110-2019)
  client_name: string;     // Nombre del cliente
  agency_name: string;     // Dependencia (ej: CICAEG, SDUOPOT)
  
  // Ubicación y Tiempo
  location: string;        // Localidad, Municipio, Estado
  municipio: string;       // Solo el municipio
  year: number;            // Año de ejecución
  
  // Categorización y Relación
  category_id?: number;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
  
  // Activos (Imágenes)
  main_image_url: string;      // Imagen 1 (Hero / Portada)
  gallery_urls: string[] | null; // Imagen 2 y adicionales
  
  // Flags de UI
  is_featured: boolean;    // Para aparecer en Home
  order?: number;          // Orden de visualización
  created_at?: string;
}

/**
 * Tipos detallados de la base de datos Supabase
 */
export interface Database {
  public: {
    Tables: {
      projects: {
        Row: Project;
        Insert: Omit<Project, 'id' | 'created_at'> & { id?: string | number };
        Update: Partial<Project>;
      };
      categories: {
        Row: {
          id: number;
          name: string;
          slug: string;
          created_at: string;
        };
        Insert: {
          name: string;
          slug: string;
        };
        Update: Partial<{
          name: string;
          slug: string;
        }>;
      };
    };
  };
}

/**
 * Configuración visual de categorías (UI Helper)
 */
export const CATEGORIAS_CONFIG: Record<CategoriaProyecto, {
  label: string;
  icon: string;
  color: string;
  descripcion: string;
}> = {
  Puentes: {
    label: 'Rehabilitación de Puentes',
    icon: '🌉',
    color: 'bg-blue-500',
    descripcion: 'Conservación y restauración estructural de puentes vehiculares.',
  },
  Carreteras: {
    label: 'Infraestructura Carretera',
    icon: '🛣️',
    color: 'bg-gray-700',
    descripcion: 'Mantenimiento y rehabilitación de vías terrestres.',
  },
  Caminos: {
    label: 'Caminos Artesanales',
    icon: '🏔️',
    color: 'bg-amber-600',
    descripcion: 'Apertura y mejoramiento de caminos rurales con mano de obra local.',
  },
  Pavimentación: {
    label: 'Pavimentación Urbana',
    icon: '🛤️',
    color: 'bg-slate-500',
    descripcion: 'Pavimentación integral con concreto hidráulico.',
  },
  Educativa: {
    label: 'Infraestructura Educativa',
    icon: '🏫',
    color: 'bg-green-600',
    descripcion: 'Construcción de aulas, techados y canchas escolares.',
  },
  Contención: {
    label: 'Muros de Contención',
    icon: '🧱',
    color: 'bg-orange-700',
    descripcion: 'Obras de protección y estabilización de taludes.',
  },
};