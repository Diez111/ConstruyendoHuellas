import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Sobre la Psicopedagogía
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            La psicopedagogía es una disciplina que estudia los procesos de aprendizaje
            y desarrollo personal. Trabajamos para identificar y potenciar las capacidades
            de cada individuo, creando estrategias personalizadas que faciliten su
            crecimiento académico y personal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Nuestro Enfoque
              </h3>
              <p className="text-gray-600">
                Creemos en un abordaje integral que considera aspectos cognitivos,
                emocionales y sociales del aprendizaje.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Metodología
              </h3>
              <p className="text-gray-600">
                Utilizamos técnicas innovadoras y personalizadas para cada caso,
                garantizando los mejores resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}