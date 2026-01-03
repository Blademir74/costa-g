/**
 * src/services/projectService.ts
 * Este archivo conecta el frontend con Supabase.
 */

import { createClient } from '@/utils/supabase/server';
import { Project } from '@/types/database';

// 1. Obtener todos los proyectos
export const getProjects = async (): Promise<Project[]> => {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      category:categories (
        id,
        name,
        slug
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Error obteniendo proyectos:', error.message);
    return [];
  }

  return data as Project[];
};

// 2. Obtener un solo proyecto por Slug
export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      category:categories (
        id,
        name,
        slug
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) return null;
  return data as Project;
};