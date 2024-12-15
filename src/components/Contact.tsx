import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Ubicación y Contacto
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26246.86067711287!2d-58.50488152859158!3d-34.68354365723612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc947e5991d05%3A0x43f0a846cfe30757!2sPsicopedagoga%20-%20Lic.%20Julieta%20Zimarino!5e0!3m2!1ses!2sar!4v1734290098367!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">WhatsApp:</span>
                  <a 
                    href="https://wa.me/5491158048807"
                    className="text-rose-600 hover:text-rose-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +54 9 11 5804-8807
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">Instagram:</span>
                  <a 
                    href="https://www.instagram.com/construyendo.huellas"
                    className="text-rose-600 hover:text-rose-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @construyendo.huellas
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Horarios de Atención
              </h3>
              <p className="text-gray-600">
                Lunes a Viernes: 9:00 - 18:00<br />
                Sábados: 9:00 - 13:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}