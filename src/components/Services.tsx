import React from 'react';
import { Brain, Users, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Psicopedagogía Clínica',
    description: 'Evaluaciones y tratamientos personalizados para potenciar el aprendizaje.',
  },
  {
    icon: Users,
    title: 'Diagnóstico TDAH/TEA',
    description: 'Procesos de diagnóstico confiables y acompañamiento profesional.',
  },
  {
    icon: BookOpen,
    title: 'Cursos y Talleres',
    description: 'Formación continua para padres, docentes y profesionales.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-rose-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <button className="text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                Saber más →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}