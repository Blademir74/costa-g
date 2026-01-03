/**
 * SUPABASE CLIENT - COSTA G
 * 
 * Configuración del cliente de Supabase para:
 * - Autenticación de admin
 * - CRUD de proyectos
 * - Storage de imágenes
 * 
 * CONFIGURACIÓN REQUERIDA (.env.local):
 * NEXT_PUBLIC_SUPABASE_URL=your-project-url
 * NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
 */

import { createClient } from '@supabase/supabase-js'

// Tipos de la base de datos
export interface Proyecto {
  id: string
  titulo: string
  titulo_corto: string
  descripcion: string
  descripcion_larga?: string
  ubicacion: string
  municipio: string
  año: number
  categoria: 'Puentes' | 'Carreteras' | 'Caminos' | 'Pavimentación' | 'Educativa' | 'Muros'
  cliente?: string
  dependencia?: string
  contrato?: string
  imagen_principal: string
  imagenes_galeria?: string[]
  destacado: boolean
  created_at: string
  updated_at: string
}

export interface ProyectoInsert {
  titulo: string
  titulo_corto?: string
  descripcion: string
  descripcion_larga?: string
  ubicacion: string
  municipio: string
  año: number
  categoria: string
  cliente?: string
  dependencia?: string
  contrato?: string
  imagen_principal?: string
  imagenes_galeria?: string[]
  destacado?: boolean
}

export interface ProyectoUpdate extends Partial<ProyectoInsert> {
  id: string
}

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

// Cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/* ============================================
   FUNCIONES DE AUTENTICACIÓN
   ============================================ */

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession()
  return { session, error }
}

export async function getUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

/* ============================================
   FUNCIONES CRUD DE PROYECTOS
   ============================================ */

// Obtener todos los proyectos
export async function getProyectos() {
  const { data, error } = await supabase
    .from('proyectos')
    .select('*')
    .order('año', { ascending: false })
  
  return { data: data as Proyecto[] | null, error }
}

// Obtener un proyecto por ID
export async function getProyecto(id: string) {
  const { data, error } = await supabase
    .from('proyectos')
    .select('*')
    .eq('id', id)
    .single()
  
  return { data: data as Proyecto | null, error }
}

// Crear un nuevo proyecto
export async function createProyecto(proyecto: ProyectoInsert) {
  const { data, error } = await supabase
    .from('proyectos')
    .insert([proyecto])
    .select()
    .single()
  
  return { data: data as Proyecto | null, error }
}

// Actualizar un proyecto
export async function updateProyecto(id: string, updates: Partial<ProyectoInsert>) {
  const { data, error } = await supabase
    .from('proyectos')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  return { data: data as Proyecto | null, error }
}

// Eliminar un proyecto
export async function deleteProyecto(id: string) {
  const { error } = await supabase
    .from('proyectos')
    .delete()
    .eq('id', id)
  
  return { error }
}

/* ============================================
   FUNCIONES DE STORAGE (IMÁGENES)
   ============================================ */

const BUCKET_NAME = 'proyectos-images'

// Subir una imagen
export async function uploadImage(file: File, folder: string = 'projects') {
  const fileExt = file.name.split('.').pop()
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
  
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file, {
      cacheControl: '31536000', // 1 año
      upsert: false
    })
  
  if (error) return { url: null, error }
  
  // Obtener URL pública
  const { data: urlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(fileName)
  
  return { url: urlData.publicUrl, error: null }
}

// Eliminar una imagen
export async function deleteImage(path: string) {
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .remove([path])
  
  return { error }
}

// Obtener URL pública de una imagen
export function getImageUrl(path: string) {
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(path)
  
  return data.publicUrl
}

/* ============================================
   SQL PARA CREAR LA BASE DE DATOS
   
   Ejecutar en Supabase SQL Editor:
   
   -- Crear tabla de proyectos
   CREATE TABLE proyectos (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     titulo TEXT NOT NULL,
     titulo_corto TEXT,
     descripcion TEXT NOT NULL,
     descripcion_larga TEXT,
     ubicacion TEXT NOT NULL,
     municipio TEXT NOT NULL,
     año INTEGER NOT NULL,
     categoria TEXT NOT NULL CHECK (categoria IN ('Puentes', 'Carreteras', 'Caminos', 'Pavimentación', 'Educativa', 'Muros')),
     cliente TEXT,
     dependencia TEXT,
     contrato TEXT,
     imagen_principal TEXT,
     imagenes_galeria TEXT[],
     destacado BOOLEAN DEFAULT false,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );

   -- Habilitar RLS
   ALTER TABLE proyectos ENABLE ROW LEVEL SECURITY;

   -- Política de lectura pública
   CREATE POLICY "Public read access" ON proyectos
     FOR SELECT USING (true);

   -- Política de escritura solo para admins
   CREATE POLICY "Admin write access" ON proyectos
     FOR ALL USING (
       auth.jwt() ->> 'email' IN ('admin@costag.com')
     );

   -- Crear bucket de storage
   INSERT INTO storage.buckets (id, name, public)
   VALUES ('proyectos-images', 'proyectos-images', true);

   -- Política de storage público
   CREATE POLICY "Public read images" ON storage.objects
     FOR SELECT USING (bucket_id = 'proyectos-images');

   -- Política de escritura de imágenes para admins
   CREATE POLICY "Admin upload images" ON storage.objects
     FOR INSERT WITH CHECK (
       bucket_id = 'proyectos-images' AND
       auth.jwt() ->> 'email' IN ('admin@costag.com')
     );

   ============================================ */
