import { useState } from 'react';
import { ShoppingCart, Eye, X, CreditCard } from 'lucide-react';

const OrdersTab = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: 'CMD-2024-001',
      customerName: 'Jean Dupont',
      customerEmail: 'jean.dupont@email.com',
      status: 'en_attente',
      total: 299.99,
      date: '2024-01-15',
      refundStatus: null,
      refundAmount: 0,
      refundDate: null,
      items: [
        { id: 1, name: 'Montre Connectée SmartTech', quantity: 1, price: 299.99 }
      ]
    },
    {
      id: 2,
      orderNumber: 'CMD-2024-002',
      customerName: 'Marie Martin',
      customerEmail: 'marie.martin@email.com',
      status: 'confirmee',
      total: 449.98,
      date: '2024-01-14',
      refundStatus: null,
      refundAmount: 0,
      refundDate: null,
      items: [
        { id: 2, name: 'Écouteurs Sans Fil Pro', quantity: 2, price: 149.99 }
      ]
    },
    {
      id: 3,
      orderNumber: 'CMD-2024-003',
      customerName: 'Pierre Durand',
      customerEmail: 'pierre.durand@email.com',
      status: 'expediee',
      total: 199.99,
      date: '2024-01-13',
      refundStatus: null,
      refundAmount: 0,
      refundDate: null,
      items: [
        { id: 3, name: 'Thermostat Intelligent', quantity: 1, price: 199.99 }
      ]
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [refundData, setRefundData] = useState({
    amount: 0,
    reason: '',
    method: 'card',
    notes: ''
  });

  const viewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const initiateRefund = (order) => {
    setSelectedOrder(order);
    setRefundData({
      amount: order.total,
      reason: '',
      method: 'card',
      notes: ''
    });
    setShowRefundModal(true);
  };

  const processRefund = () => {
    if (refundData.amount > 0 && refundData.reason) {
      setOrders(orders.map(order => 
        order.id === selectedOrder.id ? {
          ...order,
          refundStatus: 'en_cours',
          refundAmount: refundData.amount,
          refundDate: new Date().toISOString().split('T')[0]
        } : order
      ));
      setShowRefundModal(false);
      setRefundData({ amount: 0, reason: '', method: 'card', notes: '' });
      alert('Remboursement initié avec succès !');
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  };

  const completeRefund = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, refundStatus: 'termine' } : order
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gestion des Commandes</h2>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                N° Commande
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remboursement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.orderNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                    <div className="text-sm text-gray-500">{order.customerEmail}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(order.date).toLocaleDateString('fr-FR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.total}€
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    order.status === 'en_attente' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'confirmee' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'expediee' ? 'bg-purple-100 text-purple-800' :
                    order.status === 'livree' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status === 'en_attente' ? 'En attente' :
                     order.status === 'confirmee' ? 'Confirmée' :
                     order.status === 'expediee' ? 'Expédiée' :
                     order.status === 'livree' ? 'Livrée' : 'Annulée'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.refundStatus ? (
                    <div className="flex flex-col space-y-1">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        order.refundStatus === 'en_cours' ? 'bg-orange-100 text-orange-800' :
                        order.refundStatus === 'termine' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.refundStatus === 'en_cours' ? 'En cours' :
                         order.refundStatus === 'termine' ? 'Terminé' : 'Échoué'}
                      </span>
                      {order.refundAmount > 0 && (
                        <span className="text-xs text-gray-500">
                          {order.refundAmount}€
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400">Aucun</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => viewOrder(order)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Voir la commande"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    {!order.refundStatus && (
                      <button 
                        onClick={() => initiateRefund(order)}
                        className="text-orange-600 hover:text-orange-900"
                        title="Initier un remboursement"
                      >
                        <CreditCard className="w-4 h-4" />
                      </button>
                    )}
                    {order.refundStatus === 'en_cours' && (
                      <button 
                        onClick={() => completeRefund(order.id)}
                        className="text-green-600 hover:text-green-900"
                        title="Marquer comme terminé"
                      >
                        ✓
                      </button>
                    )}
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className="text-xs border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="en_attente">En attente</option>
                      <option value="confirmee">Confirmée</option>
                      <option value="expediee">Expédiée</option>
                      <option value="livree">Livrée</option>
                      <option value="annulee">Annulée</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de visualisation commande */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Détails de la commande</h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">N° Commande</p>
                  <p className="text-lg font-semibold">{selectedOrder.orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Date</p>
                  <p>{new Date(selectedOrder.date).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Client</p>
                <p className="font-semibold">{selectedOrder.customerName}</p>
                <p className="text-gray-600">{selectedOrder.customerEmail}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Statut</p>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  selectedOrder.status === 'en_attente' ? 'bg-yellow-100 text-yellow-800' :
                  selectedOrder.status === 'confirmee' ? 'bg-blue-100 text-blue-800' :
                  selectedOrder.status === 'expediee' ? 'bg-purple-100 text-purple-800' :
                  selectedOrder.status === 'livree' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {selectedOrder.status === 'en_attente' ? 'En attente' :
                   selectedOrder.status === 'confirmee' ? 'Confirmée' :
                   selectedOrder.status === 'expediee' ? 'Expédiée' :
                   selectedOrder.status === 'livree' ? 'Livrée' : 'Annulée'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Articles</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">{item.price}€</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{selectedOrder.total}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de remboursement */}
      {showRefundModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Initier un remboursement</h3>
              <button
                onClick={() => setShowRefundModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Commande</p>
                <p className="font-semibold">{selectedOrder.orderNumber}</p>
                <p className="text-gray-600">{selectedOrder.customerName}</p>
                <p className="text-gray-600">Total: {selectedOrder.total}€</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Montant du remboursement (€) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={refundData.amount}
                  onChange={(e) => setRefundData({...refundData, amount: parseFloat(e.target.value) || 0})}
                  max={selectedOrder.total}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Raison du remboursement *
                </label>
                <select
                  value={refundData.reason}
                  onChange={(e) => setRefundData({...refundData, reason: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Sélectionner une raison</option>
                  <option value="retour_client">Retour client</option>
                  <option value="produit_defectueux">Produit défectueux</option>
                  <option value="erreur_commande">Erreur de commande</option>
                  <option value="annulation_client">Annulation client</option>
                  <option value="livraison_probleme">Problème de livraison</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Méthode de remboursement
                </label>
                <select
                  value={refundData.method}
                  onChange={(e) => setRefundData({...refundData, method: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="card">Carte bancaire</option>
                  <option value="paypal">PayPal</option>
                  <option value="cheque">Chèque</option>
                  <option value="credit_store">Crédit boutique</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (optionnel)
                </label>
                <textarea
                  value={refundData.notes}
                  onChange={(e) => setRefundData({...refundData, notes: e.target.value})}
                  rows={3}
                  placeholder="Informations supplémentaires..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowRefundModal(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={processRefund}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Initier le remboursement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersTab; 