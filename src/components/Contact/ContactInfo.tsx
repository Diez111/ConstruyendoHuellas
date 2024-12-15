import React from 'react';
import { Phone, Instagram, Clock } from 'lucide-react';

const contactLinks = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+54 9 11 5804-8807',
    href: 'https://wa.me/5491158048807'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@construyendo.huellas',
    href: 'https://www.instagram.com/construyendo.huellas'
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Información de Contacto
        </h3>
        <div className="space-y-4">
          {contactLinks.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3">
              <contact.icon className="w-5 h-5 text-rose-600" />
              <span className="font-semibold text-gray-700">{contact.label}:</span>
              <a 
                href={contact.href}
                className="text-rose-600 hover:text-rose-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="w-5 h-5 text-rose-600" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Horarios de Atención
          </h3>
        </div>
        <div className="space-y-2 text-gray-600">
          <p>Lunes a Viernes: 9:00 - 18:00</p>
          <p>Sábados: 9:00 - 13:00</p>
        </div>
      </div>
    </div>
  );
}