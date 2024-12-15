import React from 'react';
import { MapPin } from 'lucide-react';

export default function Map() {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26246.86067711287!2d-58.50488152859158!3d-34.68354365723612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc947e5991d05%3A0x43f0a846cfe30757!2sPsicopedagoga%20-%20Lic.%20Julieta%20Zimarino!5e0!3m2!1ses!2sar!4v1734290098367!5m2!1ses!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="hidden absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-6 text-center">
        <MapPin className="w-12 h-12 text-rose-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
        <p className="text-gray-600">
          Lomas de Zamora, Buenos Aires<br />
          Argentina
        </p>
      </div>
    </div>
  );
}