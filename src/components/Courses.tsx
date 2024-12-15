import React from 'react';

const courses = [
  {
    title: 'Técnicas de Estudio Efectivas',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Aprende metodologías probadas para optimizar tu aprendizaje.',
  },
  {
    title: 'Desarrollo Infantil',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Comprende las etapas del desarrollo y cómo acompañarlas.',
  },
  {
    title: 'Apoyo Escolar Integral',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Estrategias para el acompañamiento académico efectivo.',
  },
];

export default function Courses() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Cursos y Talleres
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>
                <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}