import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Construyendo Huellas</h3>
            <p className="text-gray-400">
              Todos merecemos aprender y crecer en nuestro propio ritmo y manera.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5491158048807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +54 9 11 5804-8807
              </a>
              <a 
                href="https://www.instagram.com/construyendo.huellas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @construyendo.huellas
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Construyendo Huellas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}