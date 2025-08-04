import { useState } from 'react';
import { Package, Users, ShoppingCart, FolderOpen, FileText } from 'lucide-react';
import ProductsTab from './admin/ProductsTab';
import UsersTab from './admin/UsersTab';
import OrdersTab from './admin/OrdersTab';
import CategoriesTab from './admin/CategoriesTab';
import ContentsTab from './admin/ContentsTab';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
          <p className="text-gray-600 mt-2">Gérez vos produits et utilisateurs</p>
        </div>

        {/* Onglets */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('products')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'products'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Package className="inline-block w-4 h-4 mr-2" />
              Produits
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="inline-block w-4 h-4 mr-2" />
              Utilisateurs
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'orders'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <ShoppingCart className="inline-block w-4 h-4 mr-2" />
              Commandes
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'categories'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FolderOpen className="inline-block w-4 h-4 mr-2" />
              Catégories
            </button>
            <button
              onClick={() => setActiveTab('contents')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contents'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText className="inline-block w-4 h-4 mr-2" />
              Contenus
            </button>
          </nav>
        </div>

        {/* Contenu des onglets */}
        {activeTab === 'products' && <ProductsTab />}
        {activeTab === 'users' && <UsersTab />}
        {activeTab === 'orders' && <OrdersTab />}
        {activeTab === 'categories' && <CategoriesTab />}
        {activeTab === 'contents' && <ContentsTab />}
      </div>
    </div>
  );
};

export default Admin; 