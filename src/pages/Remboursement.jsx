import { CreditCard, Clock, CheckCircle, AlertCircle, DollarSign, Shield } from 'lucide-react';

const Remboursement = () => {
  const refundMethods = [
    {
      method: 'Carte bancaire',
      duration: '3-5 jours ouvrés',
      icon: CreditCard,
      color: 'blue',
      description: 'Remboursement sur la carte utilisée pour le paiement'
    },
    {
      method: 'PayPal',
      duration: '1-3 jours ouvrés',
      icon: DollarSign,
      color: 'green',
      description: 'Remboursement sur votre compte PayPal'
    },
    {
      method: 'Virement bancaire',
      duration: '5-7 jours ouvrés',
      icon: CreditCard,
      color: 'purple',
      description: 'Remboursement par virement sur votre compte bancaire'
    }
  ];

  const refundConditions = [
    {
      title: 'Remboursement automatique',
      items: [
        'Produit défectueux sous garantie',
        'Erreur de commande de notre part',
        'Produit reçu endommagé',
        'Produit non conforme à la description'
      ],
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Remboursement conditionnel',
      items: [
        'Retour dans les 14 jours',
        'Produit dans son état d\'origine',
        'Emballage complet et intact',
        'Tous les accessoires inclus'
      ],
      icon: AlertCircle,
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Remboursement</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Politique de remboursement transparente et rapide
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Délai de remboursement */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Délai de remboursement</h2>
            <p className="text-xl text-gray-600 mb-6">
              Votre remboursement sera traité dans un délai de <span className="font-bold text-emerald-600">5 jours ouvrés</span> 
              maximum après réception et validation de votre retour.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <p className="text-gray-700">
                <strong>Garantie :</strong> Nous nous engageons à traiter votre remboursement 
                dans les plus brefs délais pour votre tranquillité.
              </p>
            </div>
          </div>
        </div>

        {/* Méthodes de remboursement */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Méthodes de remboursement</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la méthode de remboursement qui vous convient le mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {refundMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div key={method.method} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${getColorClasses(method.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.method}</h3>
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{method.duration}</div>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conditions de remboursement */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conditions de remboursement</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les conditions pour bénéficier d'un remboursement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {refundConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={condition.title} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${getColorClasses(condition.color)} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{condition.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {condition.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Processus de remboursement */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processus de remboursement</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez votre remboursement étape par étape
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Réception</h3>
                <p className="text-gray-600">Nous recevons votre retour</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vérification</h3>
                <p className="text-gray-600">Contrôle qualité du produit</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Validation</h3>
                <p className="text-gray-600">Approbation du remboursement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Remboursement</h3>
                <p className="text-gray-600">Virement sur votre compte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Garanties */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos garanties</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Remboursement garanti</h4>
                <p className="text-sm text-gray-600">
                  Si votre produit est défectueux, nous vous remboursons intégralement
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Délai respecté</h4>
                <p className="text-sm text-gray-600">
                  Nous nous engageons à traiter votre remboursement sous 5 jours ouvrés
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Support dédié</h4>
                <p className="text-sm text-gray-600">
                  Notre équipe est là pour vous accompagner dans chaque étape
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cas particuliers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cas particuliers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nous gérons les situations spécifiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Produit défectueux</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Remboursement intégral du prix d'achat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Frais de retour pris en charge</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Traitement prioritaire</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Erreur de commande</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Remboursement immédiat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Frais de retour offerts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bon d'achat de compensation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact support */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions sur votre remboursement ?</h3>
          <p className="text-gray-600 mb-6">
            Notre équipe support est disponible pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200">
              Contacter le support
            </button>
            <button className="bg-white text-gray-700 py-3 px-8 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-200">
              Suivre mon remboursement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remboursement; 