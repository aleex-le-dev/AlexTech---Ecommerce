import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Lock, LogOut, Edit, Save, X } from 'lucide-react';

const Account = ({ user, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [userInfo, setUserInfo] = useState(user || {
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@email.com',
    phone: '06 12 34 56 78',
    address: '123 Rue de la Paix',
    city: 'Paris',
    postalCode: '75001',
    country: 'France'
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [activeTab, setActiveTab] = useState('infos');

  const handleInfoChange = (field, value) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveInfo = () => {
    // Simulation de sauvegarde
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    // Simulation de changement de mot de passe
    setIsChangingPassword(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mon Compte</h1>
          <p className="text-gray-600 mt-2">Gérez vos informations personnelles et vos préférences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{userInfo.firstName} {userInfo.lastName}</h3>
                  <p className="text-sm text-gray-500">{userInfo.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button
                  className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'infos' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('infos')}
                >
                  Informations personnelles
                </button>
                <button
                  className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'orders' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('orders')}
                >
                  Mes commandes
                </button>
                <button
                  className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'addresses' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('addresses')}
                >
                  Mes adresses
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Onglets dynamiques */}
            {activeTab === 'infos' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Informations personnelles</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <Edit size={16} />
                      <span>Modifier</span>
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSaveInfo}
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
                      >
                        <Save size={16} />
                        <span>Sauvegarder</span>
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <X size={16} />
                        <span>Annuler</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <input
                      type="text"
                      value={userInfo.firstName}
                      onChange={(e) => handleInfoChange('firstName', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input
                      type="text"
                      value={userInfo.lastName}
                      onChange={(e) => handleInfoChange('lastName', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-gray-400" />
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => handleInfoChange('email', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-gray-400" />
                      <input
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) => handleInfoChange('phone', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-gray-400" />
                      <input
                        type="text"
                        value={userInfo.address}
                        onChange={(e) => handleInfoChange('address', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                    <input
                      type="text"
                      value={userInfo.city}
                      onChange={(e) => handleInfoChange('city', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                    <input
                      type="text"
                      value={userInfo.postalCode}
                      onChange={(e) => handleInfoChange('postalCode', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Changement de mot de passe */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Sécurité</h2>
                    {!isChangingPassword ? (
                      <button
                        onClick={() => setIsChangingPassword(true)}
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <Lock size={16} />
                        <span>Changer le mot de passe</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleChangePassword}
                          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
                        >
                          <Save size={16} />
                          <span>Confirmer</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsChangingPassword(false);
                            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                          }}
                          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <X size={16} />
                          <span>Annuler</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {isChangingPassword && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe actuel</label>
                        <input
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label>
                        <input
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirmer le nouveau mot de passe</label>
                        <input
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Déconnexion */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Déconnexion</h2>
                      <p className="text-gray-600 mt-1">Fermez votre session en toute sécurité</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-6 py-3 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Se déconnecter</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Mes commandes</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N°</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      <tr>
                        <td className="px-4 py-2 font-mono text-sm">#1001</td>
                        <td className="px-4 py-2 text-sm">12/06/2024</td>
                        <td className="px-4 py-2 text-sm">89,99 €</td>
                        <td className="px-4 py-2 text-sm"><span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Livrée</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-mono text-sm">#1000</td>
                        <td className="px-4 py-2 text-sm">05/06/2024</td>
                        <td className="px-4 py-2 text-sm">49,99 €</td>
                        <td className="px-4 py-2 text-sm"><span className="inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">En cours</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Mes adresses</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Adresse principale</div>
                      <div className="text-gray-600 text-sm">{userInfo.address}, {userInfo.postalCode} {userInfo.city}, {userInfo.country}</div>
                      <div className="text-gray-500 text-xs mt-1">Téléphone : {userInfo.phone}</div>
                    </div>
                    <button className="text-blue-600 hover:underline text-sm">Modifier</button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between bg-gray-50">
                    <div>
                      <div className="font-medium text-gray-900">Ajouter une nouvelle adresse</div>
                      <div className="text-gray-500 text-sm">Vous pouvez enregistrer plusieurs adresses de livraison.</div>
                    </div>
                    <button className="text-blue-600 hover:underline text-sm">Ajouter</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account; 