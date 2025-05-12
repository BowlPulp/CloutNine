import React, { useState } from 'react';

const WhatsAppFloatButton = ({ 
  phoneNumber = '+1234567890', 
  message = 'Hello, I have a question!',
  className = '' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[9999] ${className}`}>
      {isExpanded && (
        <div className="absolute bottom-full mb-4 right-0 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-700 mb-2">Chat with us on WhatsApp</p>
          <button 
            onClick={handleWhatsAppChat}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="mr-2"
            >
              <path d="M12.036 5.339c-3.635 0-6.596 2.96-6.596 6.596 0 1.881.777 3.576 2.032 4.792L6.102 18.15l2.223-1.742a6.567 6.567 0 0 0 3.711 1.146c3.635 0 6.596-2.961 6.596-6.596s-2.961-6.596-6.596-6.596zM3.403 12.035c0-4.76 3.872-8.632 8.632-8.632s8.632 3.872 8.632 8.632c0 4.76-3.872 8.632-8.632 8.632-1.768 0-3.407-.534-4.77-1.444l-4.641 3.598 1.968-4.403a8.587 8.587 0 0 1-1.189-4.383z" />
              <path d="M11.5 14h1v-3h-1v3zm0-4h1V9h-1v1z" />
            </svg>
            Start Chat
          </button>
        </div>
      )}
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg relative"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12.036 5.339c-3.635 0-6.596 2.96-6.596 6.596 0 1.881.777 3.576 2.032 4.792L6.102 18.15l2.223-1.742a6.567 6.567 0 0 0 3.711 1.146c3.635 0 6.596-2.961 6.596-6.596s-2.961-6.596-6.596-6.596zM3.403 12.035c0-4.76 3.872-8.632 8.632-8.632s8.632 3.872 8.632 8.632c0 4.76-3.872 8.632-8.632 8.632-1.768 0-3.407-.534-4.77-1.444l-4.641 3.598 1.968-4.403a8.587 8.587 0 0 1-1.189-4.383z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppFloatButton;