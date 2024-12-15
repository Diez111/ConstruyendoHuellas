import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// API Key y configuración
const API_KEY = 'AIzaSyAz0Z46EvtFVRBYrTTmBQ9O038Tlns1ue0';
const genAI = new GoogleGenerativeAI(API_KEY);
const psicopedagogaRole = "Actúa como una psicopedagoga profesional llamada JuliBot. Eres amable, empática y tienes la capacidad de ayudar a las personas con sus dificultades emocionales y educativas. Responde de manera clara y accesible, brindando apoyo y orientación. Si la persona menciona algo relacionado con suicidio o preguntas sobre redes sociales, sugiere amablemente que se comunique con la Juli real en https://www.instagram.com/construyendo.huellas, pero evita hacerlo innecesariamente para no generar spam. Tus respuestas deben ser detalladas y completas cuando sea necesario, pero trata de no hablar en exceso. Intenta abordar cada tema de manera integral en un solo mensaje y luego pasar al siguiente tema o pregunta.";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: '¡Hola! Soy JuliBot, tu asistente psicopedagógica. ¿En qué puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (userInput: string) => {
    if (!userInput.trim()) return;

    // Ocultar el encabezado al iniciar el chat
    setIsHeaderVisible(false);
    
    // Mostrar mensaje del usuario
    setMessages(prev => [...prev, { type: 'user', content: userInput }]);
    setInput('');

    // Llamada a la API de Google Generative AI
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `${psicopedagogaRole} Usuario: ${userInput} Responde como una psicopedagoga profesional.`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setMessages(prev => [...prev, { type: 'bot', content: response.text() }]);
    } catch (error) {
      console.error('Error al generar contenido:', error);
      if (error.message?.includes('Resource has been exhausted')) {
        setMessages(prev => [...prev, { type: 'bot', content: 'La cuota de la API se ha agotado. Intenta nuevamente más tarde.' }]);
      } else {
        setMessages(prev => [...prev, { type: 'bot', content: 'Hubo un error al procesar tu solicitud. Intenta de nuevo.' }]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-rose-600 text-white p-4 rounded-full shadow-lg hover:bg-rose-700 transition-colors z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-[96%] md:max-w-[400px] bg-white rounded-lg shadow-xl z-50">
          {isHeaderVisible && (
            <div className="p-4 text-center border-b">
              <h3 className="font-semibold text-gray-800">Asistente Psicopedagoga</h3>
            </div>
          )}

          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold text-gray-800">Chat con JuliBot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={chatBoxRef} className="h-[60vh] md:h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
              <button
                type="submit"
                className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}