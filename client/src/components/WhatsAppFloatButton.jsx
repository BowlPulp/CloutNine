import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const WhatsAppFloatButton = ({ 
  phoneNumber = '+9137612106', 
  message = 'Hello, I have a question!',
  className = '' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    // Create a portal container at the document level
    let element = document.getElementById('whatsapp-portal-container');
    
    if (!element) {
      element = document.createElement('div');
      element.id = 'whatsapp-portal-container';
      
      // Apply styles to ensure it's always on top
      element.style.position = 'fixed';
      element.style.zIndex = '99999'; // Higher than anything else
      element.style.pointerEvents = 'none'; // Allow clicks to pass through by default
      element.style.width = '100%';
      element.style.height = '100%';
      element.style.top = '0';
      element.style.left = '0';
      
      // Add to body
      document.body.appendChild(element);
      
      // Add global CSS to ensure other elements don't overlap
      const style = document.createElement('style');
      style.innerHTML = `
        /* Make sure the problematic div stays behind */
        .mx-auto.flex.max-w-7xl.items-end.justify-between.p-4,
        .mx-auto.flex.max-w-7xl.items-end.justify-between.md\\:p-8,
        .mx-auto.flex.max-w-7xl.items-end.justify-between.p-4.md\\:p-8 {
          z-index: 10 !important;
          position: relative !important;
        }
        
        /* Make sure whatsapp button is always on top */
        #whatsapp-portal-container {
          isolation: isolate;
        }
        
        #whatsapp-portal-container > div {
          pointer-events: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    setPortalElement(element);
    
    // Cleanup on unmount
    return () => {
      // Only remove if this is the only instance using it
      if (document.querySelectorAll('[id^="whatsapp-float-"]').length <= 1) {
        document.body.removeChild(element);
      }
    };
  }, []);

  const handleWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Component to be rendered into the portal
  const WhatsAppButtonContent = () => (
    <div 
      id={`whatsapp-float-${Math.random().toString(36).substr(2, 9)}`}
      className={`${className}`} 
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        pointerEvents: 'auto',
      }}
    >
      {isExpanded && (
        <div 
          className="absolute bottom-full mb-4 right-0 bg-white shadow-lg rounded-lg p-4 border border-gray-200"
        >
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

  // Render nothing in the component's original place, and use portal instead
  return (
    <>
      {portalElement && ReactDOM.createPortal(
        <WhatsAppButtonContent />,
        portalElement
      )}
    </>
  );
};

export default WhatsAppFloatButton;