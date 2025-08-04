import { useState } from 'react';
import { Package, Plus, Edit, Trash2, Eye, X } from 'lucide-react';
import { products } from '../../data/products';

const ProductsTab = () => {
  const [productsList, setProductsList] = useState(products.map(product => ({
    ...product,
    stock: product.inStock ? Math.floor(Math.random() * 50) + 1 : 0
  })));

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const confirmDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirm(true);
  };

  const executeDelete = () => {
    setProductsList(productsList.filter(product => product.id !== itemToDelete.id));
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setIsEditingProduct(false);
    setShowProductModal(true);
  };

  const editProduct = (product) => {
    setSelectedProduct({...product});
    setIsEditingProduct(true);
    setShowProductModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gestion des Produits</h2>
        <button
          onClick={() => setShowAddProduct(true)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un produit
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Produit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productsList.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-lg object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.price}€
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    product.stock > 10 ? 'bg-green-100 text-green-800' : 
                    product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => viewProduct(product)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Voir le produit"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => editProduct(product)}
                      className="text-indigo-600 hover:text-indigo-900"
                      title="Modifier le produit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => confirmDelete(product)}
                      className="text-red-600 hover:text-red-900"
                      title="Supprimer le produit"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de visualisation/édition produit */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {isEditingProduct ? 'Modifier le produit' : 'Détails du produit'}
              </h3>
              <button
                onClick={() => {
                  setShowProductModal(false);
                  setIsEditingProduct(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {isEditingProduct && (
                  <input
                    type="text"
                    value={selectedProduct.image}
                    onChange={(e) => setSelectedProduct({...selectedProduct, image: e.target.value})}
                    placeholder="URL de l'image"
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                )}
              </div>
              <div className="space-y-4">
                {isEditingProduct ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        value={selectedProduct.name}
                        onChange={(e) => setSelectedProduct({...selectedProduct, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={selectedProduct.description}
                        onChange={(e) => setSelectedProduct({...selectedProduct, description: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Prix (€)</label>
                        <input
                          type="number"
                          value={selectedProduct.price}
                          onChange={(e) => setSelectedProduct({...selectedProduct, price: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                        <input
                          type="number"
                          value={selectedProduct.stock}
                          onChange={(e) => setSelectedProduct({...selectedProduct, stock: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                      <select
                        value={selectedProduct.category}
                        onChange={(e) => setSelectedProduct({...selectedProduct, category: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="montres">Montres</option>
                        <option value="audio">Audio</option>
                        <option value="securite">Sécurité</option>
                        <option value="maison">Maison</option>
                        <option value="eclairage">Éclairage</option>
                        <option value="telephonie">Téléphonie</option>
                        <option value="gaming">Gaming</option>
                        <option value="drones">Drones</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedProduct.inStock}
                        onChange={(e) => setSelectedProduct({...selectedProduct, inStock: e.target.checked, stock: e.target.checked ? selectedProduct.stock : 0})}
                        className="mr-2"
                      />
                      <label className="text-sm font-medium text-gray-700">En stock</label>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => {
                          setProductsList(productsList.map(p => 
                            p.id === selectedProduct.id ? selectedProduct : p
                          ));
                          setIsEditingProduct(false);
                          setShowProductModal(false);
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Sauvegarder
                      </button>
                      <button
                        onClick={() => setIsEditingProduct(false)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Annuler
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-semibold mb-2">{selectedProduct.name}</h4>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    <div className="space-y-2">
                      <p><span className="font-medium">Prix:</span> {selectedProduct.price}€</p>
                      <p><span className="font-medium">Catégorie:</span> {selectedProduct.category}</p>
                      <p><span className="font-medium">Stock:</span> {selectedProduct.stock}</p>
                      <p><span className="font-medium">En stock:</span> {selectedProduct.inStock ? 'Oui' : 'Non'}</p>
                      {selectedProduct.features && (
                        <div>
                          <p className="font-medium mb-1">Fonctionnalités:</p>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            {selectedProduct.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
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
                Êtes-vous sûr de vouloir supprimer le produit :
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

export default ProductsTab; 