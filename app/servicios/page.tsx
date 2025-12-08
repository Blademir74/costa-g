import React from 'react';
import type { Metadata } from 'next';
import ServicesView from '../../components/views/ServicesView';

export const metadata: Metadata = {
  title: 'Servicios de Construcción | Remodelación | Diseño | Consultoría | COSTA G',
  description: 'Servicios profesionales de construcción, remodelación, diseño y consultoría. Expertos en proyectos residenciales y comerciales.',
};

export default function Services() {
  return <ServicesView />;
}