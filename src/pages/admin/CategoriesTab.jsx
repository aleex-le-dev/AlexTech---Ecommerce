import { useState } from 'react';
import { FolderOpen, Plus, Edit, Trash2, Eye, X } from 'lucide-react';

const CategoriesTab = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Montres', description: 'Montres connectées et intelligentes', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', productCount: 5 },
    { id: 2, name: 'Audio', description: 'Écouteurs et enceintes connectées', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', productCount: 8 },
    { id: 3, name: 'Sécurité', description: 'Systèmes de sécurité intelligents', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', productCount: 3 },
    { id: 4, name: 'Maison', description: 'Objets connectés pour la maison', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', productCount: 6 }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const confirmDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirm(true);
  };

  const executeDelete = () => {
    setCategories(categories.filter(category => category.id !== itemToDelete.id));
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  const viewCategory = (category) => {
    setSelectedCategory(category);
    setIsEditingCategory(false);
    setShowCategoryModal(true);
  };

  const editCategory = (category) => {
    setSelectedCategory({...category});
    setIsEditingCategory(true);
    setShowCategoryModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gestion des Catégories</h2>
        <button
          onClick={() => {
            setSelectedCategory({ id: Date.now(), name: '', description: '', image: '', productCount: 0 });
            setIsEditingCategory(true);
            setShowCategoryModal(true);
          }}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une catégorie
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{category.productCount} produits</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => viewCategory(category)}
                    className="text-blue-600 hover:text-blue-900"
                    title="Voir la catégorie"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => editCategory(category)}
                    className="text-indigo-600 hover:text-indigo-900"
                    title="Modifier la catégorie"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => confirmDelete(category)}
                    className="text-red-600 hover:text-red-900"
                    title="Supprimer la catégorie"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de visualisation/édition catégorie */}
      {showCategoryModal && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {isEditingCategory ? 'Modifier la catégorie' : 'Détails de la catégorie'}
              </h3>
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setIsEditingCategory(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {isEditingCategory ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      value={selectedCategory.name}
                      onChange={(e) => setSelectedCategory({...selectedCategory, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={selectedCategory.description}
                      onChange={(e) => setSelectedCategory({...selectedCategory, description: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL de l'image</label>
                    <input
                      type="text"
                      value={selectedCategory.image}
                      onChange={(e) => setSelectedCategory({...selectedCategory, image: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        if (selectedCategory.id > 1000) {
                          // Nouvelle catégorie
                          setCategories([...categories, { ...selectedCategory, id: categories.length + 1 }]);
                        } else {
                          // Modification
                          setCategories(categories.map(c => 
                            c.id === selectedCategory.id ? selectedCategory : c
                          ));
                        }
                        setIsEditingCategory(false);
                        setShowCategoryModal(false);
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Sauvegarder
                    </button>
                    <button
                      onClick={() => setIsEditingCategory(false)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Annuler
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h4 className="text-lg font-semibold">{selectedCategory.name}</h4>
                  <p className="text-gray-600">{selectedCategory.description}</p>
                  <p className="text-sm text-gray-500">{selectedCategory.productCount} produits</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmation de suppression */}
      {showDeleteConfirm && itemToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-red-600">Confirmation de suppression</h3>
              <button
                onClick={cancelDelete}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 mb-2">
                Êtes-vous sûr de vouloir supprimer la catégorie :
              </p>
              <p className="font-semibold text-lg">
                {itemToDelete.name}
              </p>
              <p className="text-sm text-red-600 mt-2">
                Cette action est irréversible.
              </p>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={executeDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesTab; 