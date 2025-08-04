import { useState } from 'react';
import { X, User, Lock } from 'lucide-react';

const AdminBanner = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('admin@admin.fr');
  const [password, setPassword] = useState('admin');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion admin ici
    console.log('Tentative de connexion admin:', { email, password });
  };

  if (!isOpen) return null;

  return (
    <div className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Titre */}
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-medium">Page Admin</h2>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@admin.fr"
                className="pl-10 pr-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-48"
              />
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin"
                className="pl-10 pr-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-48"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Connexion
            </button>
          </form>

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBanner; 