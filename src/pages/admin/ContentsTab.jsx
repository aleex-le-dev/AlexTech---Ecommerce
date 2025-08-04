import { useState } from 'react';
import { FileText, Plus, Edit, Trash2, Eye, X } from 'lucide-react';

const ContentsTab = () => {
  const [contents, setContents] = useState([
    { 
      id: 1, 
      title: 'Conditions Générales de Vente', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>1. Objet</h2>
        <p>Les présentes conditions générales de vente s'appliquent à toutes les prestations de vente conclues par AlexTech sur son site Internet.</p>
        
        <h2>2. Prix</h2>
        <p>Les prix de nos produits sont indiqués en euros toutes taxes comprises (TVA et autres taxes applicables au jour de la commande).</p>
        
        <h2>3. Commandes</h2>
        <p>Les informations contractuelles sont présentées en langue française et feront l'objet d'une confirmation au plus tard au moment de la validation de votre commande.</p>
        
        <h2>4. Validation de votre commande</h2>
        <p>Toute commande figurant sur le site suppose l'adhésion aux présentes Conditions Générales. Toute confirmation de commande entraîne votre adhésion pleine et entière aux présentes conditions générales, sans aucune réserve.</p>
        
        <h2>5. Paiement</h2>
        <p>Le fait de valider votre commande implique pour vous l'obligation de payer le prix indiqué. Le règlement de vos achats peut s'effectuer selon les moyens de paiement indiqués au moment de la commande.</p>
        
        <h2>6. Rétractation</h2>
        <p>Conformément aux dispositions légales en vigueur, vous disposez d'un délai de 14 jours à compter de la réception de vos produits pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalité.</p>
        
        <h2>7. Garanties</h2>
        <p>Tous nos produits bénéficient de la garantie légale de conformité et de la garantie des vices cachés, prévues par les articles 1641 et suivants du Code civil.</p>
        
        <h2>8. Remboursement</h2>
        <p>En cas d'exercice du droit de rétractation ou de retour d'un produit défectueux, le remboursement sera effectué dans un délai maximum de 14 jours à compter de la réception du retour. Le remboursement inclut le prix du produit et les frais de livraison initiaux.</p>
      `
    },
    { 
      id: 2, 
      title: 'Politique de Confidentialité', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>1. Collecte des informations</h2>
        <p>Nous recueillons les informations que vous nous fournissez directement, notamment lorsque vous créez un compte, passez une commande ou nous contactez.</p>
        
        <h2>2. Utilisation des informations</h2>
        <p>Nous utilisons les informations que nous collectons pour traiter vos commandes, vous fournir un service client, améliorer notre site et vous envoyer des communications marketing (avec votre consentement).</p>
        
        <h2>3. Partage des informations</h2>
        <p>Nous ne vendons, n'échangeons et ne louons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services qui nous aident à exploiter notre site.</p>
        
        <h2>4. Sécurité</h2>
        <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.</p>
        
        <h2>5. Cookies</h2>
        <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez contrôler l'utilisation des cookies dans les paramètres de votre navigateur.</p>
        
        <h2>6. Vos droits</h2>
        <p>Vous avez le droit d'accéder, de corriger, de supprimer et de limiter le traitement de vos informations personnelles. Vous pouvez également retirer votre consentement à tout moment.</p>
      `
    },
    { 
      id: 3, 
      title: 'Politique des Cookies', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>1. Qu'est-ce qu'un cookie ?</h2>
        <p>Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés pour faire fonctionner les sites web ou les faire fonctionner plus efficacement.</p>
        
        <h2>2. Types de cookies que nous utilisons</h2>
        <p><strong>Cookies essentiels :</strong> Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés.</p>
        <p><strong>Cookies de performance :</strong> Ces cookies nous permettent de compter les visites et les sources de trafic pour mesurer et améliorer les performances de notre site.</p>
        <p><strong>Cookies de fonctionnalité :</strong> Ces cookies permettent au site web de fournir des fonctionnalités et une personnalisation améliorées.</p>
        <p><strong>Cookies de ciblage :</strong> Ces cookies peuvent être définis par nos partenaires publicitaires pour créer un profil de vos intérêts.</p>
        
        <h2>3. Gestion des cookies</h2>
        <p>Vous pouvez contrôler et/ou supprimer des cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et configurer la plupart des navigateurs pour les empêcher d'en enregistrer.</p>
        
        <h2>4. Cookies tiers</h2>
        <p>Nous utilisons également des services tiers qui peuvent définir des cookies, notamment Google Analytics pour l'analyse du trafic et les réseaux sociaux pour le partage de contenu.</p>
      `
    },
    { 
      id: 4, 
      title: 'Informations de Livraison', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>1. Zones de livraison</h2>
        <p>Nous livrons en France métropolitaine, en Belgique, en Suisse et au Luxembourg.</p>
        
        <h2>2. Délais de livraison</h2>
        <p>Les délais de livraison sont de 2 à 5 jours ouvrés en France métropolitaine, et de 3 à 7 jours ouvrés pour les autres pays.</p>
        
        <h2>3. Frais de livraison</h2>
        <p>La livraison est gratuite pour toute commande supérieure à 250€. En dessous de ce montant, les frais de livraison s'élèvent à 9,90€.</p>
        
        <h2>4. Suivi de commande</h2>
        <p>Vous recevrez un email de confirmation avec un numéro de suivi dès que votre commande sera expédiée.</p>
        
        <h2>5. Livraison en point relais</h2>
        <p>Vous pouvez choisir la livraison en point relais pour plus de flexibilité. Plus de 6 000 points relais sont disponibles.</p>
      `
    },
    { 
      id: 5, 
      title: 'Politique de Retours', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>1. Droit de rétractation</h2>
        <p>Vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation.</p>
        
        <h2>2. Conditions de retour</h2>
        <p>Les produits doivent être retournés dans leur état d'origine, complets et dans leur emballage d'origine. Les produits personnalisés ou sur mesure ne peuvent pas être retournés.</p>
        
        <h2>3. Procédure de retour</h2>
        <p>Pour retourner un produit, connectez-vous à votre compte et suivez la procédure de retour en ligne. Vous recevrez une étiquette de retour prépayée.</p>
        
        <h2>4. Remboursement</h2>
        <p>Le remboursement sera effectué dans un délai maximum de 14 jours à compter de la réception du retour. Les frais de retour sont à votre charge sauf en cas de produit défectueux.</p>
        
        <h2>5. Produits défectueux</h2>
        <p>En cas de produit défectueux, nous nous engageons à le remplacer ou à vous rembourser intégralement, frais de retour inclus.</p>
      `
    },
    { 
      id: 6, 
      title: 'Politique de Remboursement', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>1. Délais de remboursement</h2>
        <p>Nous nous engageons à traiter votre demande de remboursement dans un délai maximum de 14 jours ouvrés à compter de la réception de votre retour ou de l'annulation de votre commande.</p>
        
        <h2>2. Conditions d'éligibilité au remboursement</h2>
        <p><strong>Remboursement complet :</strong> Produits retournés dans leur état d'origine, complets et dans leur emballage d'origine dans les 14 jours suivant la réception.</p>
        <p><strong>Remboursement partiel :</strong> Produits présentant des signes d'usage ou d'usure normale, avec déduction de la dépréciation.</p>
        <p><strong>Aucun remboursement :</strong> Produits personnalisés, produits numériques téléchargés, produits endommagés par l'utilisateur.</p>
        
        <h2>3. Montant du remboursement</h2>
        <p>Le remboursement inclut :</p>
        <ul>
          <li>Le prix du produit</li>
          <li>Les frais de livraison initiaux (si applicable)</li>
          <li>Les frais de retour (en cas de produit défectueux)</li>
        </ul>
        <p>Les frais de retour restent à votre charge sauf en cas de produit défectueux ou d'erreur de notre part.</p>
        
        <h2>4. Méthodes de remboursement</h2>
        <p>Le remboursement sera effectué selon le mode de paiement utilisé lors de la commande :</p>
        <ul>
          <li><strong>Carte bancaire :</strong> Remboursement sur la carte utilisée (délai 3-5 jours ouvrés)</li>
          <li><strong>PayPal :</strong> Remboursement sur le compte PayPal (délai 1-3 jours ouvrés)</li>
          <li><strong>Chèque :</strong> Envoi d'un chèque par courrier (délai 7-10 jours ouvrés)</li>
        </ul>
        
        <h2>5. Procédure de demande de remboursement</h2>
        <p>Pour demander un remboursement :</p>
        <ol>
          <li>Connectez-vous à votre compte client</li>
          <li>Accédez à la section "Mes commandes"</li>
          <li>Sélectionnez la commande concernée</li>
          <li>Cliquez sur "Demander un remboursement"</li>
          <li>Remplissez le formulaire de retour</li>
          <li>Imprimez l'étiquette de retour prépayée</li>
          <li>Expédiez le produit dans les 7 jours</li>
        </ol>
        
        <h2>6. Suivi du remboursement</h2>
        <p>Vous recevrez des emails de confirmation à chaque étape :</p>
        <ul>
          <li>Confirmation de réception de votre demande</li>
          <li>Confirmation de réception du retour</li>
          <li>Confirmation du traitement du remboursement</li>
          <li>Confirmation de l'envoi du remboursement</li>
        </ul>
        
        <h2>7. Cas particuliers</h2>
        <p><strong>Commande annulée avant expédition :</strong> Remboursement immédiat dans un délai de 24-48h.</p>
        <p><strong>Produit défectueux :</strong> Remboursement complet avec frais de retour inclus.</p>
        <p><strong>Erreur de notre part :</strong> Remboursement complet avec compensation si applicable.</p>
        
        <h2>8. Contact pour les remboursements</h2>
        <p>Pour toute question concernant votre remboursement :</p>
        <ul>
          <li>Email : remboursements@AlexTech.fr</li>
          <li>Téléphone : 01 23 45 67 89 (option 2)</li>
          <li>Chat en ligne : Disponible du lundi au vendredi de 9h à 18h</li>
        </ul>
      `
    },
    { 
      id: 7, 
      title: 'Contact', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>Notre équipe est à votre disposition</h2>
        <p>Pour toute question concernant nos produits, votre commande ou notre service client, n'hésitez pas à nous contacter :</p>
        
        <h3>Par email</h3>
        <p>contact@AlexTech.fr</p>
        
        <h3>Par téléphone</h3>
        <p>01 23 45 67 89<br/>
        Du lundi au vendredi de 9h à 18h</p>
        
        <h3>Par courrier</h3>
        <p>AlexTech<br/>
        123 Rue de la Tech<br/>
        75001 Paris, France</p>
        
        <h3>Réseaux sociaux</h3>
        <p>Suivez-nous sur Facebook, Instagram et Twitter pour découvrir nos nouveautés et offres exclusives.</p>
      `
    },
    { 
      id: 8, 
      title: 'FAQ - Questions Fréquentes', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>Commandes</h2>
        <h3>Comment passer une commande ?</h3>
        <p>Parcourez notre catalogue, ajoutez les produits souhaités à votre panier et suivez les étapes de commande.</p>
        
        <h3>Quels moyens de paiement acceptez-vous ?</h3>
        <p>Nous acceptons les cartes bancaires (Visa, Mastercard, American Express) et PayPal.</p>
        
        <h2>Livraison</h2>
        <h3>Quels sont les délais de livraison ?</h3>
        <p>Les délais varient de 2 à 7 jours ouvrés selon votre localisation.</p>
        
        <h3>La livraison est-elle gratuite ?</h3>
        <p>Oui, pour toute commande supérieure à 250€.</p>
        
        <h2>Retours</h2>
        <h3>Puis-je retourner un produit ?</h3>
        <p>Oui, vous disposez de 14 jours pour retourner un produit dans son état d'origine.</p>
        
        <h2>Remboursements</h2>
        <h3>Dans quel délai serai-je remboursé ?</h3>
        <p>Le remboursement est effectué dans un délai maximum de 14 jours à compter de la réception du retour.</p>
        
        <h3>Quels sont les frais de retour ?</h3>
        <p>Les frais de retour sont à votre charge sauf en cas de produit défectueux ou d'erreur de notre part.</p>
        
        <h2>Garantie</h2>
        <h3>Quelle est la garantie de vos produits ?</h3>
        <p>Tous nos produits bénéficient de la garantie légale de 2 ans minimum.</p>
      `
    },
    { 
      id: 9, 
      title: 'À propos de AlexTech', 
      type: 'page', 
      status: 'publié', 
      lastModified: '2024-01-10',
      content: `
        <h2>Notre histoire</h2>
        <p>AlexTech est né de la passion pour l'innovation technologique et le désir de rendre les objets connectés accessibles à tous. Depuis notre création, nous sélectionnons avec soin les meilleurs produits connectés pour améliorer votre quotidien.</p>
        
        <h2>Notre mission</h2>
        <p>Nous nous engageons à vous proposer une sélection rigoureuse de produits connectés innovants, alliant qualité, design et fonctionnalité. Notre objectif est de vous accompagner dans la transformation numérique de votre maison et de votre mode de vie.</p>
        
        <h2>Nos valeurs</h2>
        <ul>
          <li><strong>Qualité :</strong> Nous sélectionnons uniquement des produits de qualité supérieure</li>
          <li><strong>Innovation :</strong> Nous suivons les dernières tendances technologiques</li>
          <li><strong>Service :</strong> Notre équipe est dédiée à votre satisfaction</li>
          <li><strong>Durabilité :</strong> Nous privilégions les produits respectueux de l'environnement</li>
        </ul>
        
        <h2>Notre équipe</h2>
        <p>Une équipe passionnée de technophiles qui teste chaque produit avant de vous le proposer. Nous sommes là pour vous conseiller et vous accompagner dans vos choix.</p>
      `
    },
    { 
      id: 10, 
      title: 'Bannière Promotionnelle - Soldes', 
      type: 'banner', 
      status: 'publié', 
      lastModified: '2024-01-15',
      content: 'Profitez de nos soldes d\'hiver avec jusqu\'à -50% sur une sélection de produits connectés !'
    }
  ]);

  const [selectedContent, setSelectedContent] = useState(null);
  const [showContentModal, setShowContentModal] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const confirmDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirm(true);
  };

  const executeDelete = () => {
    setContents(contents.filter(content => content.id !== itemToDelete.id));
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  const viewContent = (content) => {
    setSelectedContent(content);
    setIsEditingContent(false);
    setShowContentModal(true);
  };

  const editContent = (content) => {
    // Récupérer le contenu complet depuis l'état contents
    const fullContent = contents.find(c => c.id === content.id);
    setSelectedContent({...fullContent});
    setIsEditingContent(true);
    setShowContentModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gestion des Contenus</h2>
        <button
          onClick={() => {
            setSelectedContent({ id: Date.now(), title: '', type: 'page', status: 'brouillon', lastModified: new Date().toISOString().split('T')[0] });
            setIsEditingContent(true);
            setShowContentModal(true);
          }}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un contenu
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Titre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dernière modification
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contents.map((content) => (
              <tr key={content.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {content.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    content.type === 'page' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {content.type === 'page' ? 'Page' : 'Bannière'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    content.status === 'publié' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {content.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(content.lastModified).toLocaleDateString('fr-FR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => viewContent(content)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Voir le contenu"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => editContent(content)}
                      className="text-indigo-600 hover:text-indigo-900"
                      title="Modifier le contenu"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => confirmDelete(content)}
                      className="text-red-600 hover:text-red-900"
                      title="Supprimer le contenu"
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

      {/* Modal de visualisation/édition contenu */}
      {showContentModal && selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {isEditingContent ? 'Modifier le contenu' : 'Détails du contenu'}
              </h3>
              <button
                onClick={() => {
                  setShowContentModal(false);
                  setIsEditingContent(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {isEditingContent ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                      <input
                        type="text"
                        value={selectedContent.title}
                        onChange={(e) => setSelectedContent({...selectedContent, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={selectedContent.type}
                        onChange={(e) => setSelectedContent({...selectedContent, type: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="page">Page</option>
                        <option value="banner">Bannière</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                    <select
                      value={selectedContent.status}
                      onChange={(e) => setSelectedContent({...selectedContent, status: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="brouillon">Brouillon</option>
                      <option value="publié">Publié</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contenu</label>
                    <div className="border border-gray-300 rounded-lg">
                      <div className="bg-gray-50 px-3 py-2 border-b border-gray-300">
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={() => {
                              const textarea = document.getElementById('content-editor');
                              const start = textarea.selectionStart;
                              const end = textarea.selectionEnd;
                              const text = textarea.value;
                              const before = text.substring(0, start);
                              const selection = text.substring(start, end);
                              const after = text.substring(end);
                              const newText = before + '<h2>' + selection + '</h2>' + after;
                              setSelectedContent({...selectedContent, content: newText});
                            }}
                            className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50"
                          >
                            H2
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const textarea = document.getElementById('content-editor');
                              const start = textarea.selectionStart;
                              const end = textarea.selectionEnd;
                              const text = textarea.value;
                              const before = text.substring(0, start);
                              const selection = text.substring(start, end);
                              const after = text.substring(end);
                              const newText = before + '<h3>' + selection + '</h3>' + after;
                              setSelectedContent({...selectedContent, content: newText});
                            }}
                            className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50"
                          >
                            H3
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const textarea = document.getElementById('content-editor');
                              const start = textarea.selectionStart;
                              const end = textarea.selectionEnd;
                              const text = textarea.value;
                              const before = text.substring(0, start);
                              const selection = text.substring(start, end);
                              const after = text.substring(end);
                              const newText = before + '<strong>' + selection + '</strong>' + after;
                              setSelectedContent({...selectedContent, content: newText});
                            }}
                            className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50"
                          >
                            <strong>B</strong>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const textarea = document.getElementById('content-editor');
                              const start = textarea.selectionStart;
                              const end = textarea.selectionEnd;
                              const text = textarea.value;
                              const before = text.substring(0, start);
                              const selection = text.substring(start, end);
                              const after = text.substring(end);
                              const newText = before + '<em>' + selection + '</em>' + after;
                              setSelectedContent({...selectedContent, content: newText});
                            }}
                            className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50"
                          >
                            <em>I</em>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const textarea = document.getElementById('content-editor');
                              const start = textarea.selectionStart;
                              const end = textarea.selectionEnd;
                              const text = textarea.value;
                              const before = text.substring(0, start);
                              const selection = text.substring(start, end);
                              const after = text.substring(end);
                              const newText = before + '<ul><li>' + selection + '</li></ul>' + after;
                              setSelectedContent({...selectedContent, content: newText});
                            }}
                            className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50"
                          >
                            Liste
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const textarea = document.getElementById('content-editor');
                              const start = textarea.selectionStart;
                              const end = textarea.selectionEnd;
                              const text = textarea.value;
                              const before = text.substring(0, start);
                              const selection = text.substring(start, end);
                              const after = text.substring(end);
                              const newText = before + '<p>' + selection + '</p>' + after;
                              setSelectedContent({...selectedContent, content: newText});
                            }}
                            className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50"
                          >
                            Paragraphe
                          </button>
                        </div>
                      </div>
                      <textarea
                        id="content-editor"
                        value={selectedContent.content || ''}
                        onChange={(e) => setSelectedContent({...selectedContent, content: e.target.value})}
                        rows={15}
                        placeholder="Saisissez le contenu de votre page..."
                        className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0 resize-none"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Utilisez les boutons ci-dessus pour formater votre texte ou saisissez directement du HTML.
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        if (selectedContent.id > 1000) {
                          // Nouveau contenu
                          setContents([...contents, { 
                            ...selectedContent, 
                            id: contents.length + 1,
                            lastModified: new Date().toISOString().split('T')[0]
                          }]);
                        } else {
                          // Modification
                          setContents(contents.map(c => 
                            c.id === selectedContent.id ? {
                              ...selectedContent,
                              lastModified: new Date().toISOString().split('T')[0]
                            } : c
                          ));
                        }
                        setIsEditingContent(false);
                        setShowContentModal(false);
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Sauvegarder
                    </button>
                    <button
                      onClick={() => setIsEditingContent(false)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Annuler
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Titre</p>
                      <p className="font-semibold">{selectedContent.title}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Type</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        selectedContent.type === 'page' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {selectedContent.type === 'page' ? 'Page' : 'Bannière'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Statut</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        selectedContent.status === 'publié' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedContent.status}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Contenu</p>
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                      {selectedContent.content ? (
                        <div 
                          className="prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: selectedContent.content }}
                        />
                      ) : (
                        <p className="text-gray-500 italic">Aucun contenu saisi</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Dernière modification: {new Date(selectedContent.lastModified).toLocaleDateString('fr-FR')}
                  </div>
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
                Êtes-vous sûr de vouloir supprimer le contenu :
              </p>
              <p className="font-semibold text-lg">
                {itemToDelete.title}
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

export default ContentsTab; 