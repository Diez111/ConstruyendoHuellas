import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/90 to-green-100/90 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <BookOpen className="w-16 h-16 mx-auto text-rose-600" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-800">
            Construyendo Huellas
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-700">
            Espacio Psicopedagógico
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Acompañamos tu proceso de aprendizaje con dedicación y profesionalismo
          </p>
          
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Consulta nuestros servicios
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-rose-600" />
      </div>
    </header>
  );
}