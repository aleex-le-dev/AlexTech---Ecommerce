import { useState } from 'react';
import { X } from 'lucide-react';

const CookieBanner = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    onAccept();
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex-1 mb-4 sm:mb-0">
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre utilisation des cookies.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDecline}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Accepter
            </button>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 