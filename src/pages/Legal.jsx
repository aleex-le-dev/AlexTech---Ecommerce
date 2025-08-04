import { useParams } from 'react-router-dom';

const Legal = () => {
  const { type } = useParams();

  const legalContent = {
    terms: {
      title: "Conditions Générales de Vente",
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
    privacy: {
      title: "Politique de Confidentialité",
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
    cookies: {
      title: "Politique des Cookies",
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
    shipping: {
      title: "Informations de Livraison",
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
    returns: {
      title: "Politique de Retours",
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
    refund: {
      title: "Politique de Remboursement",
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
    contact: {
      title: "Contact",
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
    faq: {
      title: "FAQ - Questions Fréquentes",
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
    about: {
      title: "À propos de AlexTech",
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
    }
  };

  const currentContent = legalContent[type] || legalContent.terms;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-light mb-8">{currentContent.title}</h1>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: currentContent.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Legal; 