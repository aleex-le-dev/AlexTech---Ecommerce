import { Truck, Clock, Shield, MapPin, Package, CheckCircle } from 'lucide-react';

const Livraison = () => {
  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Livraison Standard',
      price: 'Gratuite',
      duration: '3-5 jours ouvrés',
      icon: Truck,
      color: 'blue',
      features: ['Suivi en ligne', 'Livraison à domicile', 'Signature requise']
    },
    {
      id: 'express',
      name: 'Livraison Express',
      price: '9,90 €',
      duration: '1-2 jours ouvrés',
      icon: Clock,
      color: 'green',
      features: ['Livraison prioritaire', 'Suivi en temps réel', 'Livraison avant 13h']
    },
    {
      id: 'premium',
      name: 'Livraison Premium',
      price: '19,90 €',
      duration: 'Livraison le lendemain',
      icon: Shield,
      color: 'purple',
      features: ['Livraison garantie', 'Installation incluse', 'Support prioritaire']
    }
  ];

  const deliverySteps = [
    {
      step: 1,
      title: 'Commande confirmée',
      description: 'Votre commande est validée et préparée',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'En préparation',
      description: 'Votre colis est préparé et emballé',
      icon: Package
    },
    {
      step: 3,
      title: 'En transit',
      description: 'Votre colis est en route vers vous',
      icon: Truck
    },
    {
      step: 4,
      title: 'Livré',
      description: 'Votre commande est livrée',
      icon: CheckCircle
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Livraison</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Livraison rapide et sécurisée partout en France métropolitaine
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Options de livraison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Options de livraison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez l'option de livraison qui correspond le mieux à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div key={option.id} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${getColorClasses(option.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{option.price}</div>
                    <p className="text-gray-600">{option.duration}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                    Choisir cette option
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Processus de livraison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez votre commande étape par étape jusqu'à la livraison
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {index < deliverySteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transform translate-x-4"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Zones de livraison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zones de livraison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous livrons partout en France métropolitaine et dans les DOM-TOM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">France métropolitaine</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Livraison gratuite dès 49€</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Délai de 3-5 jours ouvrés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Suivi en ligne disponible</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">DOM-TOM</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Frais de port calculés selon la zone</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Délai de 7-14 jours ouvrés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Livraison à domicile ou en point relais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Informations importantes */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations importantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Horaires de livraison</h4>
              <p className="text-gray-600 mb-4">
                Nos transporteurs livrent du lundi au vendredi de 8h à 18h. 
                Pour les livraisons express, vous recevrez un SMS avec un créneau de livraison.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Signature requise</h4>
              <p className="text-gray-600 mb-4">
                Une signature est requise pour toutes les livraisons. 
                En cas d'absence, un avis de passage sera déposé.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Suivi de commande</h4>
              <p className="text-gray-600 mb-4">
                Vous recevrez un email de confirmation avec un numéro de suivi 
                dès que votre commande sera expédiée.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Point relais</h4>
              <p className="text-gray-600 mb-4">
                Vous pouvez choisir la livraison en point relais lors du checkout. 
                Votre colis sera conservé 7 jours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livraison; 