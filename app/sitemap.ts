import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.costag.com';

  // 1. Rutas Estáticas
  const routes = [
    '',
    '/servicios',
    '/proyectos',
    '/desarrollos',
    '/nosotros',
    '/blog',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Rutas Dinámicas: Servicios (Mock Data - En prod vendría de DB)
  const services = [
    'proyecto-ejecutivo',
    'construccion',
    'infraestructura-urbana',
    'rehabilitacion',
    'supervision',
    'remodelacion'
  ].map((slug) => ({
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 3. Rutas Dinámicas: Blog Posts (Pillars)
  const posts = [
    '10-tendencias-construccion-2025',
    'como-elegir-constructor-profesional',
    'fases-proyecto-construccion',
    'presupuesto-construccion-guia',
    'materiales-eco-amigables',
    'guia-compra-primer-departamento',
    'financiamiento-inmobiliario-2025',
    'como-invertir-bienes-raices'
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 4. Rutas Dinámicas: Proyectos Destacados
  const projects = [
    'residencial-polanco-cdmx',
    'puente-union'
  ].map((slug) => ({
    url: `${baseUrl}/proyectos/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 5. Rutas Dinámicas: Desarrollos
  const developments = [
    'torres-azules-torre-1'
  ].map((slug) => ({
    url: `${baseUrl}/desarrollos/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const, // Inventario cambia frecuentemente
    priority: 0.9,
  }));

  return [...routes, ...services, ...posts, ...projects, ...developments];
}