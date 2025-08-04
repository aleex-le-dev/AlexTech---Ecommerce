import { ArrowLeft, Package, Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const Retours = () => {
  const returnSteps = [
    {
      step: 1,
      title: 'Demande de retour',
      description: 'Connectez-vous à votre compte et demandez un retour',
      icon: FileText
    },
    {
      step: 2,
      title: 'Étiquette de retour',
      description: 'Recevez votre étiquette de retour par email',
      icon: Package
    },
    {
      step: 3,
      title: 'Envoi du colis',
      description: 'Envoyez votre produit dans les 14 jours',
      icon: ArrowLeft
    },
    {
      step: 4,
      title: 'Remboursement',
      description: 'Remboursement sous 5 jours ouvrés',
      icon: CheckCircle
    }
  ];

  const returnConditions = [
    {
      title: 'Produits éligibles',
      items: [
        'Produits non utilisés dans leur emballage d\'origine',
        'Produits défectueux sous garantie',
        'Erreur de commande de notre part',
        'Produits reçus endommagés'
      ],
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Produits non éligibles',
      items: [
        'Produits personnalisés ou sur mesure',
        'Produits de sécurité ou hygiène',
        'Produits numériques ou logiciels',
        'Produits utilisés ou endommagés par le client'
      ],
      icon: AlertCircle,
      color: 'red'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Retours & Échanges</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Politique de retour simple et transparente pour votre tranquillité
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Délai de retour */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Délai de retour</h2>
            <p className="text-xl text-gray-600 mb-6">
              Vous disposez de <span className="font-bold text-orange-600">14 jours</span> à compter de la réception 
              de votre commande pour retourner un produit.
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
              <p className="text-gray-700">
                <strong>Important :</strong> Le produit doit être retourné dans son état d'origine, 
                non utilisé et dans son emballage complet.
              </p>
            </div>
          </div>
        </div>

        {/* Processus de retour */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment retourner un produit</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez ces étapes simples pour retourner votre produit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {returnSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {index < returnSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-600 to-red-600 transform translate-x-4"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conditions de retour */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conditions de retour</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez quels produits peuvent être retournés et dans quelles conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {returnConditions.map((condition) => {
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
                        <IconComponent className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Frais de retour */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frais de retour</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Retour gratuit</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Produit défectueux</li>
                  <li>• Erreur de notre part</li>
                  <li>• Produit reçu endommagé</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Frais de retour</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Changement d'avis</li>
                  <li>• Mauvais choix de taille</li>
                  <li>• Produit non conforme à l'image</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Remboursement</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sous 5 jours ouvrés</li>
                  <li>• Même moyen de paiement</li>
                  <li>• Email de confirmation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions détaillées */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Instructions détaillées</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez ces instructions pour un retour optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Préparation du retour</h3>
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-gray-700">Vérifiez que le produit est dans son état d'origine</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-gray-700">Remettez tous les accessoires et la documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-gray-700">Utilisez un emballage adapté pour protéger le produit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span className="text-gray-700">Collez l'étiquette de retour sur le colis</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Envoi du retour</h3>
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-gray-700">Déposez votre colis dans un point relais ou bureau de poste</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-gray-700">Conservez le récépissé de dépôt</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-gray-700">Vous recevrez un email de confirmation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span className="text-gray-700">Suivez votre retour en ligne</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Contact support */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h3>
          <p className="text-gray-600 mb-6">
            Notre équipe support est là pour vous accompagner dans votre retour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200">
              Contacter le support
            </button>
            <button className="bg-white text-gray-700 py-3 px-8 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-200">
              Voir la FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retours; 