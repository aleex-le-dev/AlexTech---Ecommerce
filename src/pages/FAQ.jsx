import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, ShoppingBag, Truck, CreditCard, Shield } from 'lucide-react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = {
    general: {
      title: 'Général',
      icon: HelpCircle,
      questions: [
        {
          question: 'Comment créer un compte sur AlexTech ?',
          answer: 'Pour créer un compte, cliquez sur l\'icône "Mon compte" en haut à droite, puis sur "Créer un compte". Remplissez le formulaire avec vos informations personnelles et validez votre email.'
        },
        {
          question: 'Comment modifier mes informations personnelles ?',
          answer: 'Connectez-vous à votre compte, allez dans "Mon profil" et cliquez sur "Modifier mes informations". Vous pourrez alors mettre à jour vos coordonnées, adresse de livraison, etc.'
        },
        {
          question: 'Comment supprimer mon compte ?',
          answer: 'Pour supprimer votre compte, contactez notre service client. Nous traiterons votre demande dans les plus brefs délais après vérification de votre identité.'
        },
        {
          question: 'AlexTech livre-t-il à l\'étranger ?',
          answer: 'Oui, nous livrons dans toute l\'Europe et les DOM-TOM. Les frais de livraison et délais varient selon la destination. Consultez notre page Livraison pour plus de détails.'
        }
      ]
    },
    commandes: {
      title: 'Commandes',
      icon: ShoppingBag,
      questions: [
        {
          question: 'Comment suivre ma commande ?',
          answer: 'Vous recevrez un email de confirmation avec un numéro de suivi dès l\'expédition de votre commande. Vous pouvez également suivre votre commande dans votre espace client.'
        },
        {
          question: 'Puis-je modifier ou annuler ma commande ?',
          answer: 'Vous pouvez modifier ou annuler votre commande dans les 2 heures suivant la validation. Contactez notre service client pour toute demande ultérieure.'
        },
        {
          question: 'Quels moyens de paiement acceptez-vous ?',
          answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay et les virements bancaires pour les commandes supérieures à 100€.'
        },
        {
          question: 'Ma commande est-elle sécurisée ?',
          answer: 'Absolument. Toutes nos transactions sont sécurisées par cryptage SSL. Nous ne stockons jamais vos informations bancaires et utilisons les standards de sécurité les plus élevés.'
        }
      ]
    },
    livraison: {
      title: 'Livraison',
      icon: Truck,
      questions: [
        {
          question: 'Quels sont les délais de livraison ?',
          answer: 'Livraison standard : 3-5 jours ouvrés (gratuite dès 49€). Livraison express : 1-2 jours ouvrés (9,90€). Livraison premium : le lendemain (19,90€).'
        },
        {
          question: 'Puis-je choisir un créneau de livraison ?',
          answer: 'Pour les livraisons express et premium, vous recevrez un SMS avec un créneau de livraison que vous pourrez modifier selon vos disponibilités.'
        },
        {
          question: 'Que faire si je ne suis pas là lors de la livraison ?',
          answer: 'Le livreur déposera un avis de passage. Vous pourrez reprogrammer la livraison ou récupérer votre colis en point relais dans les 7 jours.'
        },
        {
          question: 'Livrez-vous en point relais ?',
          answer: 'Oui, vous pouvez choisir la livraison en point relais lors du checkout. Votre colis sera conservé 7 jours dans le point relais sélectionné.'
        }
      ]
    },
    paiement: {
      title: 'Paiement',
      icon: CreditCard,
      questions: [
        {
          question: 'Mes informations de paiement sont-elles sécurisées ?',
          answer: 'Oui, nous utilisons un cryptage SSL 256 bits et respectons les normes PCI DSS. Vos données bancaires ne sont jamais stockées sur nos serveurs.'
        },
        {
          question: 'Puis-je payer en plusieurs fois ?',
          answer: 'Oui, nous proposons le paiement en 3 ou 4 fois sans frais pour les commandes supérieures à 100€, via notre partenaire Klarna.'
        },
        {
          question: 'Comment fonctionne la garantie de prix ?',
          answer: 'Si vous trouvez un produit moins cher ailleurs dans les 30 jours suivant votre achat, nous vous remboursons la différence.'
        },
        {
          question: 'Que faire en cas de problème de paiement ?',
          answer: 'Vérifiez que votre carte n\'est pas bloquée et que vous avez suffisamment de fonds. Si le problème persiste, contactez notre service client.'
        }
      ]
    },
    garantie: {
      title: 'Garantie & SAV',
      icon: Shield,
      questions: [
        {
          question: 'Quelle est la durée de garantie de vos produits ?',
          answer: 'Tous nos produits bénéficient d\'une garantie légale de conformité de 2 ans et d\'une garantie commerciale de 1 an minimum selon les produits.'
        },
        {
          question: 'Comment faire valoir ma garantie ?',
          answer: 'En cas de défaut, contactez notre service client avec votre numéro de commande et une description du problème. Nous vous guiderons dans les démarches.'
        },
        {
          question: 'Proposez-vous un service après-vente ?',
          answer: 'Oui, notre équipe SAV est disponible pour diagnostiquer et réparer vos produits. Nous proposons également un service de remplacement express.'
        },
        {
          question: 'Que faire si mon produit tombe en panne après la garantie ?',
          answer: 'Nous proposons des extensions de garantie et un service de réparation payant. Contactez notre SAV pour un devis personnalisé.'
        }
      ]
    }
  };

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredData = Object.entries(faqData).reduce((acc, [category, data]) => {
    const filteredQuestions = data.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (filteredQuestions.length > 0) {
      acc[category] = { ...data, questions: filteredQuestions };
    }
    
    return acc;
  }, {});

  const categories = [
    { id: 'general', title: 'Général', icon: HelpCircle },
    { id: 'commandes', title: 'Commandes', icon: ShoppingBag },
    { id: 'livraison', title: 'Livraison', icon: Truck },
    { id: 'paiement', title: 'Paiement', icon: CreditCard },
    { id: 'garantie', title: 'Garantie & SAV', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">FAQ</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Barre de recherche */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher dans la FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Navigation par catégories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              const hasResults = filteredData[category.id];
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  disabled={!hasResults}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : hasResults
                      ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions et réponses */}
        <div className="space-y-8">
          {Object.entries(filteredData).map(([category, data]) => {
            const IconComponent = data.icon;
            return (
              <div key={category} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{data.title}</h2>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {data.questions.map((item, index) => {
                    const key = `${category}-${index}`;
                    const isExpanded = expandedItems[key];
                    
                    return (
                      <div key={index} className="px-8 py-6">
                        <button
                          onClick={() => toggleItem(category, index)}
                          className="w-full flex items-center justify-between text-left hover:bg-gray-50 rounded-lg p-4 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {item.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="mt-4 pl-4 pr-8">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Aucun résultat */}
        {Object.keys(filteredData).length === 0 && searchTerm && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-600 mb-6">
              Aucune question ne correspond à votre recherche "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
            >
              Effacer la recherche
            </button>
          </div>
        )}

        {/* Contact support */}
        <div className="mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous ne trouvez pas votre réponse ?</h3>
          <p className="text-gray-600 mb-6">
            Notre équipe support est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
              Contacter le support
            </button>
            <button className="bg-white text-gray-700 py-3 px-8 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-200">
              Chat en ligne
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 