import React from 'react';
import type { Metadata } from 'next';
import ProjectsView from '../../components/views/ProjectsView';

export const metadata: Metadata = {
  title: 'Portafolio de Obras | Infraestructura, Residencial y Comercial | COSTA G',
  description: 'Explore nuestro portafolio de proyectos residenciales, comerciales y de infraestructura en México. Calidad y sustentabilidad en cada obra.',
};

export default function Projects() {
  return <ProjectsView />;
}