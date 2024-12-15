import React from 'react';
import Map from './Map';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Ubicación y Contacto
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Map />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}