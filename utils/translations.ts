import { Translation, LangCode } from "../types";

const en: Translation = {
  title: "SignatureBuilder",
  subtitle: "Professional Signature Creator",
  tabs: { details: "Details", social: "Social", design: "Design", addons: "Add-ons", marketing: "Marketing" },
  shapes: { circle: "Circle", rounded: "Rounded", square: "Square" },
  sizes: { small: "Small", medium: "Medium", large: "Large" },
  labels: {
    fullName: "Full Name", jobTitle: "Job Title", company: "Company", logoUrl: "Company Logo URL", logoLink: "Logo Link (Optional)", email: "Email", phone: "Phone (Office)", mobile: "Mobile",
    website: "Website", address: "Address", avatarUrl: "Avatar Image URL", themeColor: "Theme Color", textColor: "Text Color", 
    cardBackgroundColor: "Card Background", cardBorderRadius: "Card Roundness",
    imageShape: "Image Shape", animation: "Card Animation",
    typography: "Typography", layout: "Layout Template", ctaButton: "Call to Action Button", ctaText: "Button Text", ctaUrl: "Button URL",
    ctaColor: "Button Color", bannerUrl: "Banner Image URL", legalDisclaimer: "Legal Disclaimer", ecoMessage: "Add Eco-friendly message 🌿", 
    includeQr: "Include vCard QR Code", addSocial: "Add New",
    copyHtml: "Copy HTML", copied: "Copied!", livePreview: "Live Preview", previewDarkMode: "Simulate Dark Mode", htmlSource: "HTML Source", htmlFileName: "signature.html", noSocials: "No social links added yet.",
    utmSource: "UTM Source", utmMedium: "UTM Medium", utmCampaign: "UTM Campaign",
    saveProfile: "Save Profile", loadProfile: "Load", shareProfile: "Share Configuration", installGuide: "How to Install", visitAgency: "Visit My Company",
    marketingDescription: "UTM (Urchin Tracking Module) parameters are tags added to URLs to track the effectiveness of your signature in analytics tools like Google Analytics. They help you understand where your traffic comes from.",
    socialProfiles: "Profiles",
    gmail: "Gmail",
    outlook: "Outlook",
    appleMail: "Apple Mail",
    agencyName: "My Company",
    agencyLogoAlt: "My Company logo"
  },
  placeholders: { 
    url: "https://...", 
    cta: "e.g. Book a Demo", 
    profileName: "e.g. My Personal Signature",
    email: "name@company.com",
    phone: "+1 555 123 4567",
    mobile: "+1 555 987 6543",
    company: "Acme Inc.",
    jobTitle: "Product Manager",
    address: "123 Market St, San Francisco",
    utmSource: "email_signature",
    utmMedium: "email",
    utmCampaign: "employee_branding"
  },
  generatedContent: {
    abbreviations: { e: "E:", p: "P:", m: "M:", w: "W:", a: "A:" },
    disclaimer: "CONFIDENTIALITY NOTICE: The contents of this email message and any attachments are intended solely for the addressee(s) and may contain confidential and/or privileged information and may be legally protected from disclosure.",
    eco: "Please consider the environment before printing this email."
  },
  footer: {
    madeBy: "Made with ❤️ by",
    copyright: "All rights reserved."
  },
  privacyNotice: "We prioritize your privacy. No data is collected or sent to our servers. Your profile is saved exclusively in your browser's Local Storage.",
  installGuides: {
    gmail: "Go to Settings (Gear icon) > See all settings > General. Scroll down to 'Signature', click + Create new, paste your signature, and save.",
    outlook: "Go to Settings (Gear icon) > Mail > Compose and reply. Create a new signature, paste the content, and select it for new messages.",
    apple: "Open Mail > Settings > Signatures. Select your account, click +, uncheck 'Always match my default message font', and paste."
  },
  animations: {
    none: "None", fadeIn: "Fade In", slideUp: "Slide Up", pulse: "Pulse", bounce: "Bounce", flip: "Flip In",
    sliceIn: "Slice In (Cut)", foldDown: "Fold Down", zoomRotate: "Zoom & Rotate", swing: "Swing", wobble: "Wobble",
    blurReveal: "Blur Reveal 💎", glow: "Neon Glow 💎", float: "Premium Float 💎",
    diagonalStripes: "Diagonal Stripes (Cuts)", glitch: "Glitch Cut"
  }
};

const it: Translation = {
  title: "SignatureBuilder",
  subtitle: "Generatore Firme Professionali",
  tabs: { details: "Dettagli", social: "Social", design: "Design", addons: "Extra", marketing: "Marketing" },
  shapes: { circle: "Cerchio", rounded: "Arrotondato", square: "Quadrato" },
  sizes: { small: "Piccolo", medium: "Medio", large: "Grande" },
  labels: {
    fullName: "Nome Completo", jobTitle: "Qualifica", company: "Azienda", logoUrl: "URL Logo Azienda", logoLink: "Link Logo (Opzionale)", email: "Email", phone: "Telefono (Ufficio)", mobile: "Cellulare",
    website: "Sito Web", address: "Indirizzo", avatarUrl: "URL Immagine Profilo", themeColor: "Colore Tema", textColor: "Colore Testo",
    cardBackgroundColor: "Sfondo Card", cardBorderRadius: "Arrotondamento Card",
    imageShape: "Forma Immagine", animation: "Animazione Card",
    typography: "Tipografia", layout: "Modello Layout", ctaButton: "Pulsante Call to Action", ctaText: "Testo Pulsante", ctaUrl: "URL Pulsante",
    ctaColor: "Colore Pulsante", bannerUrl: "URL Immagine Banner", legalDisclaimer: "Disclaimer Legale", ecoMessage: "Aggiungi messaggio Ecologico 🌿", 
    includeQr: "Includi QR Code vCard", addSocial: "Aggiungi",
    copyHtml: "Copia HTML", copied: "Copiato!", livePreview: "Anteprima Live", previewDarkMode: "Simula Dark Mode", htmlSource: "Codice Sorgente HTML", htmlFileName: "signature.html", noSocials: "Nessun social aggiunto.",
    utmSource: "UTM Source", utmMedium: "UTM Medium", utmCampaign: "UTM Campaign",
    saveProfile: "Salva Profilo", loadProfile: "Carica", shareProfile: "Condividi Config", installGuide: "Guida Installazione", visitAgency: "Visita My Company",
    marketingDescription: "I parametri UTM (Urchin Tracking Module) sono tag aggiunti agli URL per tracciare l'efficacia della tua firma in strumenti come Google Analytics. Ti aiutano a capire da dove proviene il traffico.",
    socialProfiles: "Profili",
    gmail: "Gmail",
    outlook: "Outlook",
    appleMail: "Apple Mail",
    agencyName: "My Company",
    agencyLogoAlt: "Logo My Company"
  },
  placeholders: { 
    url: "https://...", 
    cta: "es. Prenota una Call", 
    profileName: "es. Firma Mario",
    email: "nome@azienda.it",
    phone: "+39 02 1234 5678",
    mobile: "+39 333 123 4567",
    company: "Azienda Srl",
    jobTitle: "Direttore Marketing",
    address: "Via Roma 1, Milano",
    utmSource: "firma_email",
    utmMedium: "email",
    utmCampaign: "branding_dipendenti"
  },
  generatedContent: {
    abbreviations: { e: "E:", p: "T:", m: "C:", w: "W:", a: "I:" },
    disclaimer: "AVVISO DI RISERVATEZZA: Il contenuto di questo messaggio email e gli eventuali allegati sono destinati esclusivamente ai destinatari indicati e possono contenere informazioni confidenziali e/o privilegiate legalmente protette dalla divulgazione.",
    eco: "Per favore, considera l'ambiente prima di stampare questa email."
  },
  footer: {
    madeBy: "Realizzato con ❤️ da",
    copyright: "Tutti i diritti riservati."
  },
  privacyNotice: "Rispettiamo la tua privacy. Nessun dato viene raccolto o inviato ai nostri server. Il tuo profilo viene salvato esclusivamente nel Local Storage del tuo browser.",
  installGuides: {
    gmail: "Vai su Impostazioni (ingranaggio) > Visualizza tutte > Generali. Scorri fino a 'Firma', crea nuova, incolla la firma e salva in fondo alla pagina.",
    outlook: "Vai su Impostazioni > Posta > Componi e rispondi. Crea nuova firma, incolla il contenuto e selezionala per i nuovi messaggi.",
    apple: "Apri Mail > Impostazioni > Firme. Seleziona l'account, clicca +, togli la spunta a 'Usa sempre il font di default' e incolla."
  },
  animations: {
    none: "Nessuna", fadeIn: "Dissolvenza", slideUp: "Scivola Su", pulse: "Pulsazione", bounce: "Rimbalzo", flip: "Capriola",
    sliceIn: "Taglio", foldDown: "Piega", zoomRotate: "Zoom e Ruota", swing: "Oscillazione", wobble: "Traballante",
    blurReveal: "Svelamento Sfocato 💎", glow: "Bagliore Neon 💎", float: "Fluttuazione Premium 💎",
    diagonalStripes: "Strisce Diagonali (Tagli)", glitch: "Taglio Glitch"
  }
};

const es: Translation = {
  title: "SignatureBuilder",
  subtitle: "Creador de Firmas Profesionales",
  tabs: { details: "Detalles", social: "Social", design: "Diseño", addons: "Extras", marketing: "Marketing" },
  shapes: { circle: "Círculo", rounded: "Redondeado", square: "Cuadrado" },
  sizes: { small: "Pequeño", medium: "Mediano", large: "Grande" },
  labels: {
    fullName: "Nombre Completo", jobTitle: "Cargo", company: "Empresa", logoUrl: "URL del Logo", logoLink: "Enlace del Logo (Opcional)", email: "Correo", phone: "Teléfono", mobile: "Móvil",
    website: "Sitio Web", address: "Dirección", avatarUrl: "URL del Avatar", themeColor: "Color del Tema", textColor: "Color del Texto",
    cardBackgroundColor: "Fondo de Tarjeta", cardBorderRadius: "Redondez de Tarjeta",
    imageShape: "Forma de Imagen", animation: "Animación",
    typography: "Tipografía", layout: "Plantilla", ctaButton: "Botón de Llamada a la Acción", ctaText: "Texto del Botón", ctaUrl: "URL del Botón",
    ctaColor: "Color del Botón", bannerUrl: "URL del Banner", legalDisclaimer: "Aviso Legal", ecoMessage: "Añadir mensaje Ecológico 🌿", 
    includeQr: "Incluir QR vCard", addSocial: "Añadir",
    copyHtml: "Copiar HTML", copied: "¡Copiado!", livePreview: "Vista Previa", previewDarkMode: "Simular Modo Oscuro", htmlSource: "Código Fuente HTML", htmlFileName: "signature.html", noSocials: "Sin redes sociales.",
    utmSource: "UTM Source", utmMedium: "UTM Medium", utmCampaign: "UTM Campaign",
    saveProfile: "Guardar Perfil", loadProfile: "Cargar", shareProfile: "Compartir Config", installGuide: "Cómo Instalar", visitAgency: "Visita My Company",
    marketingDescription: "Los parámetros UTM (Urchin Tracking Module) son etiquetas añadidas a las URL para rastrear la efectividad de su firma en herramientas de análisis como Google Analytics.",
    socialProfiles: "Perfiles",
    gmail: "Gmail",
    outlook: "Outlook",
    appleMail: "Apple Mail",
    agencyName: "My Company",
    agencyLogoAlt: "Logo de My Company"
  },
  placeholders: { 
    url: "https://...", 
    cta: "ej. Reservar Demo", 
    profileName: "ej. Firma Personal",
    email: "nombre@empresa.es",
    phone: "+34 91 123 45 67",
    mobile: "+34 600 123 456",
    company: "Soluciones S.L.",
    jobTitle: "Director Comercial",
    address: "Gran Vía 1, Madrid",
    utmSource: "firma_email",
    utmMedium: "email",
    utmCampaign: "branding_empleados"
  },
  generatedContent: {
    abbreviations: { e: "E:", p: "T:", m: "M:", w: "W:", a: "D:" },
    disclaimer: "AVISO DE CONFIDENCIALIDAD: El contenido de este mensaje de correo electrónico y cualquier archivo adjunto están destinados únicamente a los destinatarios especificados y pueden contener información confidencial.",
    eco: "Por favor, considere el medio ambiente antes de imprimir este correo."
  },
  footer: {
    madeBy: "Hecho con ❤️ por",
    copyright: "Todos los derechos reservados."
  },
  privacyNotice: "Priorizamos su privacidad. No recopilamos datos ni los enviamos a servidores. Su perfil se guarda exclusivamente en el almacenamiento local de su navegador.",
  installGuides: {
    gmail: "Configuración > Ver todos los ajustes > General. Baja hasta 'Firma', crea una nueva, pega y guarda.",
    outlook: "Configuración > Correo > Redactar y responder. Crea nueva firma, pega y selecciona para nuevos mensajes.",
    apple: "Mail > Ajustes > Firmas. Selecciona cuenta, + , desmarca 'Usar siempre mi tipo de letra' y pega."
  },
  animations: {
    none: "Ninguno", fadeIn: "Aparecer", slideUp: "Deslizar arriba", pulse: "Pulso", bounce: "Rebote", flip: "Voltear",
    sliceIn: "Cortar", foldDown: "Plegar", zoomRotate: "Zoom y Rotar", swing: "Balanceo", wobble: "Tambaleo",
    blurReveal: "Revelación Borrosa 💎", glow: "Brillo Neón 💎", float: "Flotador Premium 💎",
    diagonalStripes: "Rayas Diagonales (Cortes)", glitch: "Corte Glitch"
  }
};

const fr: Translation = {
  title: "SignatureBuilder",
  subtitle: "Générateur de Signature Pro",
  tabs: { details: "Détails", social: "Social", design: "Design", addons: "Extras", marketing: "Marketing" },
  shapes: { circle: "Cercle", rounded: "Arrondi", square: "Carré" },
  sizes: { small: "Petit", medium: "Moyen", large: "Grand" },
  labels: {
    fullName: "Nom Complet", jobTitle: "Poste", company: "Entreprise", logoUrl: "URL Logo Entreprise", logoLink: "Lien Logo (Optionnel)", email: "Email", phone: "Téléphone", mobile: "Mobile",
    website: "Site Web", address: "Adresse", avatarUrl: "URL Avatar", themeColor: "Couleur Thème", textColor: "Couleur Texte",
    cardBackgroundColor: "Fond de Carte", cardBorderRadius: "Arrondi de Carte",
    imageShape: "Forme Image", animation: "Animation",
    typography: "Typographie", layout: "Mise en page", ctaButton: "Bouton d'Action", ctaText: "Texte du Bouton", ctaUrl: "URL du Bouton",
    ctaColor: "Couleur du Bouton", bannerUrl: "URL de la Bannière", legalDisclaimer: "Avis Légal", ecoMessage: "Message Écologique 🌿", 
    includeQr: "Inclure QR vCard", addSocial: "Ajouter",
    copyHtml: "Copier HTML", copied: "Copié !", livePreview: "Aperçu en direct", previewDarkMode: "Simulation Mode Sombre", htmlSource: "Source HTML", htmlFileName: "signature.html", noSocials: "Aucun lien social.",
    utmSource: "UTM Source", utmMedium: "UTM Medium", utmCampaign: "UTM Campaign",
    saveProfile: "Sauvegarder", loadProfile: "Charger", shareProfile: "Partager Config", installGuide: "Guide d'installation", visitAgency: "Visiter My Company",
    marketingDescription: "Les paramètres UTM (Urchin Tracking Module) sont des balises ajoutées aux URL pour suivre l'efficacité de votre signature dans des outils d'analyse comme Google Analytics.",
    socialProfiles: "Profils",
    gmail: "Gmail",
    outlook: "Outlook",
    appleMail: "Apple Mail",
    agencyName: "My Company",
    agencyLogoAlt: "Logo My Company"
  },
  placeholders: { 
    url: "https://...", 
    cta: "ex. Prendre RDV", 
    profileName: "ex. Ma Signature",
    email: "nom@societe.fr",
    phone: "+33 1 23 45 67 89",
    mobile: "+33 6 12 34 56 78",
    company: "Agence SAS",
    jobTitle: "Chef de Projet",
    address: "15 Rue de Rivoli, Paris",
    utmSource: "signature_email",
    utmMedium: "email",
    utmCampaign: "branding_employes"
  },
  generatedContent: {
    abbreviations: { e: "E:", p: "T:", m: "P:", w: "W:", a: "A:" },
    disclaimer: "AVIS DE CONFIDENTIALITÉ : Le contenu de ce message électronique et les éventuelles pièces jointes sont destinés exclusivement aux destinataires indiqués et peuvent contenir des informations confidentielles.",
    eco: "Merci de penser à l'environnement avant d'imprimer cet email."
  },
  footer: {
    madeBy: "Fait avec ❤️ par",
    copyright: "Tous droits réservés."
  },
  privacyNotice: "Nous privilégions votre vie privée. Aucune donnée n'est collectée. Votre profil est sauvegardé exclusivement dans le stockage local de votre navigateur.",
  installGuides: {
    gmail: "Paramètres > Voir tous les paramètres > Général. Descendez à 'Signature', créez-en une, collez et enregistrez.",
    outlook: "Paramètres > Courrier > Composer et répondre. Nouvelle signature, collez et sélectionnez pour les nouveaux messages.",
    apple: "Mail > Réglages > Signatures. Sélectionnez le compte, +, décochez 'Toujours utiliser ma police', et collez."
  },
  animations: {
    none: "Aucune", fadeIn: "Fondu", slideUp: "Glisser vers le haut", pulse: "Pulsation", bounce: "Rebondir", flip: "Retourner",
    sliceIn: "Couper", foldDown: "Plier", zoomRotate: "Zoom & Rotation", swing: "Balancement", wobble: "Tremblement",
    blurReveal: "Révélation Floue 💎", glow: "Lueur Néon 💎", float: "Flottement Premium 💎",
    diagonalStripes: "Bandes Diagonales (Coupes)", glitch: "Coupe Glitch"
  }
};

const de: Translation = {
  title: "SignatureBuilder",
  subtitle: "Professioneller Signatur-Generator",
  tabs: { details: "Details", social: "Sozial", design: "Design", addons: "Extras", marketing: "Marketing" },
  shapes: { circle: "Kreis", rounded: "Abgerundet", square: "Quadrat" },
  sizes: { small: "Klein", medium: "Mittel", large: "Groß" },
  labels: {
    fullName: "Vollständiger Name", jobTitle: "Position", company: "Firma", logoUrl: "Firmenlogo URL", logoLink: "Logo Link (Optional)", email: "E-Mail", phone: "Telefon", mobile: "Mobil",
    website: "Webseite", address: "Adresse", avatarUrl: "Avatar URL", themeColor: "Themenfarbe", textColor: "Textfarbe",
    cardBackgroundColor: "Kartenhintergrund", cardBorderRadius: "Kartenrundung",
    imageShape: "Bildform", animation: "Animation",
    typography: "Typografie", layout: "Layout", ctaButton: "Call-to-Action Button", ctaText: "Button-Text", ctaUrl: "Button-URL",
    ctaColor: "Button-Farbe", bannerUrl: "Banner Bild URL", legalDisclaimer: "Haftungsausschluss", ecoMessage: "Öko-Nachricht hinzufügen 🌿", 
    includeQr: "QR Code vCard", addSocial: "Hinzufügen",
    copyHtml: "HTML Kopieren", copied: "Kopiert!", livePreview: "Vorschau", previewDarkMode: "Dunkelmodus simulieren", htmlSource: "HTML-Quellcode", htmlFileName: "signature.html", noSocials: "Keine Social Links.",
    utmSource: "UTM Source", utmMedium: "UTM Medium", utmCampaign: "UTM Campaign",
    saveProfile: "Profil speichern", loadProfile: "Laden", shareProfile: "Teilen", installGuide: "Installationsanleitung", visitAgency: "My Company besuchen",
    marketingDescription: "UTM-Parameter (Urchin Tracking Module) sind Tags, die URLs hinzugefügt werden, um die Wirksamkeit Ihrer Signatur in Analysetools wie Google Analytics zu verfolgen.",
    socialProfiles: "Profile",
    gmail: "Gmail",
    outlook: "Outlook",
    appleMail: "Apple Mail",
    agencyName: "My Company",
    agencyLogoAlt: "My Company Logo"
  },
  placeholders: { 
    url: "https://...", 
    cta: "z.B. Termin buchen", 
    profileName: "z.B. Meine Signatur",
    email: "name@firma.de",
    phone: "+49 30 12345678",
    mobile: "+49 170 1234567",
    company: "Musterfirma GmbH",
    jobTitle: "Projektmanager",
    address: "Musterstraße 1, Berlin",
    utmSource: "email_signatur",
    utmMedium: "email",
    utmCampaign: "mitarbeiter_branding"
  },
  generatedContent: {
    abbreviations: { e: "E:", p: "T:", m: "M:", w: "W:", a: "A:" },
    disclaimer: "VERTRAULICHKEITSHINWEIS: Der Inhalt dieser E-Mail und etwaiger Anhänge ist ausschließlich für die genannten Empfänger bestimmt und kann vertrauliche Informationen enthalten.",
    eco: "Bitte denken Sie an die Umwelt, bevor Sie diese E-Mail drucken."
  },
  footer: {
    madeBy: "Gemacht mit ❤️ von",
    copyright: "Alle Rechte vorbehalten."
  },
  privacyNotice: "Wir priorisieren Ihre Privatsphäre. Es werden keine Daten gesammelt. Ihr Profil wird ausschließlich im lokalen Speicher Ihres Browsers gespeichert.",
  installGuides: {
    gmail: "Einstellungen > Alle Einstellungen > Allgemein. Scrollen zu 'Signatur', neu erstellen, einfügen und speichern.",
    outlook: "Einstellungen > E-Mail > Verfassen und Antworten. Neue Signatur, einfügen und auswählen.",
    apple: "Mail > Einstellungen > Signaturen. Account wählen, +, 'Standard-Schriftart' abwählen, einfügen."
  },
  animations: {
    none: "Keine", fadeIn: "Einblenden", slideUp: "Nach oben schieben", pulse: "Pulsieren", bounce: "Hüpfen", flip: "Umdrehen",
    sliceIn: "Schnitt", foldDown: "Falten", zoomRotate: "Zoom & Drehen", swing: "Schwingen", wobble: "Wackeln",
    blurReveal: "Weichzeichner Reveal 💎", glow: "Neon-Glow 💎", float: "Premium-Schweben 💎",
    diagonalStripes: "Diagonale Streifen (Schnitte)", glitch: "Glitch-Schnitt"
  }
};

const pt: Translation = {
  title: "SignatureBuilder",
  subtitle: "Criador de Assinaturas Profissionais",
  tabs: { details: "Detalhes", social: "Social", design: "Design", addons: "Extras", marketing: "Marketing" },
  shapes: { circle: "Círculo", rounded: "Arredondado", square: "Quadrado" },
  sizes: { small: "Pequeno", medium: "Médio", large: "Grande" },
  labels: {
    fullName: "Nome Completo", jobTitle: "Cargo", company: "Empresa", logoUrl: "URL do Logo", logoLink: "Link do Logo (Opcional)", email: "Email", phone: "Telefone", mobile: "Celular",
    website: "Site", address: "Endereço", avatarUrl: "URL do Avatar", themeColor: "Cor do Tema", textColor: "Cor do Texto",
    cardBackgroundColor: "Fundo do Cartão", cardBorderRadius: "Arredondamento",
    imageShape: "Forma da Imagem", animation: "Animação",
    typography: "Tipografia", layout: "Layout", ctaButton: "Botão de Ação", ctaText: "Texto do Botão", ctaUrl: "URL do Botão",
    ctaColor: "Cor do Botão", bannerUrl: "URL do Banner", legalDisclaimer: "Aviso Legal", ecoMessage: "Mensagem Ecológica 🌿", 
    includeQr: "Incluir QR vCard", addSocial: "Adicionar",
    copyHtml: "Copiar HTML", copied: "Copiado!", livePreview: "Pré-visualização", previewDarkMode: "Simular Modo Escuro", htmlSource: "Código HTML", htmlFileName: "signature.html", noSocials: "Sem redes sociais.",
    utmSource: "UTM Source", utmMedium: "UTM Medium", utmCampaign: "UTM Campaign",
    saveProfile: "Salvar Perfil", loadProfile: "Carregar", shareProfile: "Compartilhar", installGuide: "Como Instalar", visitAgency: "Visitar My Company",
    marketingDescription: "Parâmetros UTM (Urchin Tracking Module) são tags adicionadas às URLs para rastrear a eficácia de sua assinatura em ferramentas de análise como o Google Analytics.",
    socialProfiles: "Perfis",
    gmail: "Gmail",
    outlook: "Outlook",
    appleMail: "Apple Mail",
    agencyName: "My Company",
    agencyLogoAlt: "Logo My Company"
  },
  placeholders: { 
    url: "https://...", 
    cta: "ex. Agendar Demo", 
    profileName: "ex. Minha Assinatura",
    email: "nome@empresa.pt",
    phone: "+351 21 123 4567",
    mobile: "+351 91 234 5678",
    company: "Inovação Lda",
    jobTitle: "Gerente de Marketing",
    address: "Av. da Liberdade 1, Lisboa",
    utmSource: "assinatura_email",
    utmMedium: "email",
    utmCampaign: "branding_funcionarios"
  },
  generatedContent: {
    abbreviations: { e: "E:", p: "T:", m: "C:", w: "W:", a: "E:" },
    disclaimer: "AVISO DE CONFIDENCIALIDADE: O conteúdo desta mensagem de e-mail e quaisquer anexos destinam-se exclusivamente aos destinatários especificados e podem conter informações confidenciais.",
    eco: "Por favor, considere o meio ambiente antes de imprimir este e-mail."
  },
  footer: {
    madeBy: "Feito com ❤️ por",
    copyright: "Todos os direitos reservados."
  },
  privacyNotice: "Priorizamos sua privacidade. Nenhum dado é coletado. Seu perfil é salvo exclusivamente no armazenamento local do seu navegador.",
  installGuides: {
    gmail: "Configurações > Ver todas > Geral. Vá até 'Assinatura', crie nova, cole e salve no final.",
    outlook: "Configurações > Email > Redigir e responder. Nova assinatura, cole e selecione para novos emails.",
    apple: "Mail > Ajustes > Assinaturas. Selecione conta, +, desmarque 'Usar sempre fonte padrão', e cole."
  },
  animations: {
    none: "Nenhum", fadeIn: "Aparecer", slideUp: "Deslizar", pulse: "Pulsar", bounce: "Pular", flip: "Virar",
    sliceIn: "Cortar", foldDown: "Dobrar", zoomRotate: "Zoom e Girar", swing: "Balançar", wobble: "Tremo",
    blurReveal: "Revelação Desfocada 💎", glow: "Brilho Neon 💎", float: "Flutuação Premium 💎",
    diagonalStripes: "Listras Diagonais (Cortes)", glitch: "Corte Glitch"
  }
};

const zh: Translation = {
  title: "SignatureBuilder",
  subtitle: "专业邮件签名生成器",
  tabs: { details: "详细信息", social: "社交媒体", design: "设计", addons: "附加组件", marketing: "营销" },
  shapes: { circle: "圆形", rounded: "圆角", square: "方形" },
  sizes: { small: "小", medium: "中", large: "大" },
  labels: {
    fullName: "全名", jobTitle: "职位", company: "公司", logoUrl: "公司标志 URL", logoLink: "标志链接 (可选)", email: "电子邮件", phone: "电话", mobile: "手机",
    website: "网站", address: "地址", avatarUrl: "头像链接", themeColor: "主题颜色", textColor: "文字颜色",
    cardBackgroundColor: "卡片背景", cardBorderRadius: "卡片圆角",
    imageShape: "头像形状", animation: "动画",
    typography: "字体", layout: "布局模板", ctaButton: "行动号召按钮", ctaText: "按钮文字", ctaUrl: "按钮链接",
    ctaColor: "按钮颜色", bannerUrl: "横幅图片链接", legalDisclaimer: "法律免责声明", ecoMessage: "添加环保信息 🌿", 
    includeQr: "包含 vCard 二维码", addSocial: "添加",
    copyHtml: "复制 HTML", copied: "已复制！", livePreview: "实时预览", previewDarkMode: "模拟黑暗模式", htmlSource: "HTML 源代码", htmlFileName: "signature.html", noSocials: "尚未添加社交链接。",
    utmSource: "UTM 来源", utmMedium: "UTM 媒介", utmCampaign: "UTM 活动",
    saveProfile: "保存配置", loadProfile: "加载", shareProfile: "分享配置", installGuide: "安装指南", visitAgency: "访问 My Company", socialProfiles: "个人资料", gmail: "Gmail", outlook: "Outlook", appleMail: "Apple Mail", agencyName: "My Company", agencyLogoAlt: "My Company 标志",
    marketingDescription: "UTM（Urchin Tracking Module）参数是添加到 URL 的标签，用于在 Google Analytics 等分析工具中跟踪签名的有效性。"
  },
  placeholders: { 
    url: "https://...", 
    cta: "例如：预约演示", 
    profileName: "例如：我的签名",
    email: "li.ming@company.cn",
    phone: "+86 21 1234 5678",
    mobile: "+86 138 0000 0000",
    company: "未来科技有限公司",
    jobTitle: "市场总监",
    address: "南京路 88 号, 上海",
    utmSource: "邮件签名",
    utmMedium: "email",
    utmCampaign: "员工品牌"
  },
  generatedContent: {
    abbreviations: { e: "邮:", p: "电:", m: "手:", w: "网:", a: "地:" },
    disclaimer: "保密声明：本电子邮件及附件内容仅供指定收件人查阅，可能包含保密信息。",
    eco: "打印此邮件前请考虑环保。"
  },
  footer: {
    madeBy: "由 ❤️ 制作",
    copyright: "保留所有权利。"
  },
  privacyNotice: "我们重视您的隐私。不收集任何数据。您的配置仅保存在浏览器的本地存储中。",
  installGuides: {
    gmail: "设置 > 查看所有设置 > 常规。向下滚动到“签名”，新建，粘贴并保存。",
    outlook: "设置 > 邮件 > 撰写和回复。新建签名，粘贴并选择用于新邮件。",
    apple: "邮件 > 设置 > 签名。选择帐户，+，取消选中“始终匹配我的默认字体”，然后粘贴。"
  },
  animations: {
    none: "无", fadeIn: "淡入", slideUp: "向上滑动", pulse: "脉冲", bounce: "弹跳", flip: "翻转",
    sliceIn: "切入", foldDown: "折叠", zoomRotate: "缩放旋转", swing: "摇摆", wobble: "晃动",
    blurReveal: "模糊展现 💎", glow: "霓虹发光 💎", float: "高级悬浮 💎",
    diagonalStripes: "对角线条(切变)", glitch: "故障切割"
  }
};

const ja: Translation = {
  title: "SignatureBuilder",
  subtitle: "プロフェッショナル署名作成ツール",
  tabs: { details: "詳細", social: "ソーシャル", design: "デザイン", addons: "アドオン", marketing: "マーケティング" },
  shapes: { circle: "円形", rounded: "角丸", square: "正方形" },
  sizes: { small: "小", medium: "中", large: "大" },
  labels: {
    fullName: "氏名", jobTitle: "役職", company: "会社名", logoUrl: "会社ロゴURL", logoLink: "ロゴリンク (任意)", email: "メール", phone: "電話番号", mobile: "携帯番号",
    website: "ウェブサイト", address: "住所", avatarUrl: "アバターURL", themeColor: "テーマ色", textColor: "文字色",
    cardBackgroundColor: "カード背景色", cardBorderRadius: "カードの丸み",
    imageShape: "画像形状", animation: "アニメーション",
    typography: "フォント", layout: "レイアウト", ctaButton: "CTAボタン", ctaText: "ボタンのテキスト", ctaUrl: "ボタンのURL",
    ctaColor: "ボタンの色", bannerUrl: "バナー画像のURL", legalDisclaimer: "法的免責事項", ecoMessage: "エコメッセージを追加 🌿", 
    includeQr: "vCard QRコードを含める", addSocial: "追加",
    copyHtml: "HTMLをコピー", copied: "コピー完了！", livePreview: "ライブプレビュー", previewDarkMode: "ダークモードをシミュレート", htmlSource: "HTMLソースコード", htmlFileName: "signature.html", noSocials: "ソーシャルリンクなし。",
    utmSource: "UTM ソース", utmMedium: "UTM メディア", utmCampaign: "UTM キャンペーン",
    saveProfile: "保存", loadProfile: "読み込み", shareProfile: "共有", installGuide: "インストール方法", visitAgency: "My Company を訪問", socialProfiles: "プロフィール", gmail: "Gmail", outlook: "Outlook", appleMail: "Apple Mail", agencyName: "My Company", agencyLogoAlt: "My Company ロゴ",
    marketingDescription: "UTM（Urchin Tracking Module）パラメータは、Googleアナリティクスなどの分析ツールで署名の有効性を追跡するためにURLに追加されるタグです。"
  },
  placeholders: { 
    url: "https://...", 
    cta: "例：デモを予約", 
    profileName: "例：私の署名",
    email: "ken.sato@company.jp",
    phone: "+81 3 1234 5678",
    mobile: "+81 90 1234 5678",
    company: "株式会社ミライ",
    jobTitle: "営業部長",
    address: "東京都渋谷区 1-1-1",
    utmSource: "メール署名",
    utmMedium: "email",
    utmCampaign: "社員ブランディング"
  },
  generatedContent: {
    abbreviations: { e: "E:", p: "T:", m: "M:", w: "W:", a: "A:" },
    disclaimer: "機密保持に関する通知：この電子メールおよび添付ファイルの内容は、指定された受信者のみを対象としており、機密情報が含まれている場合があります。",
    eco: "このメールを印刷する前に、環境への配慮をお願いします。"
  },
  footer: {
    madeBy: "❤️で作られました",
    copyright: "全著作権所有。"
  },
  privacyNotice: "私たちはあなたのプライバシーを優先します。データは収集されません。プロフィールはブラウザのローカルストレージにのみ保存されます。",
  installGuides: {
    gmail: "設定 > すべての設定を表示 > 全般。「署名」までスクロールし、新規作成、貼り付けて保存。",
    outlook: "設定 > メール > 作成と返信。新しい署名を作成し、貼り付けて新しいメッセージ用に選択。",
    apple: "メール > 設定 > 署名。アカウントを選択、+、「常にデフォルトのフォントを使用」のチェックを外し、貼り付け。"
  },
  animations: {
    none: "なし", fadeIn: "フェードイン", slideUp: "スライドアップ", pulse: "パルス", bounce: "バウンス", flip: "フリップ",
    sliceIn: "スライス", foldDown: "折りたたむ", zoomRotate: "ズーム回転", swing: "スイング", wobble: "ぐらつき",
    blurReveal: "ぼかし表示 💎", glow: "ネオングロウ 💎", float: "プレミアムフロート 💎",
    diagonalStripes: "斜めストライプ（カット）", glitch: "グリッチカット"
  }
};

export const translations: Record<LangCode, Translation> = { en, it, es, fr, de, pt, zh, ja };

export const getBrowserLang = (): LangCode => {
  const lang = navigator.language.split('-')[0];
  if (['en', 'it', 'es', 'fr', 'de', 'pt', 'zh', 'ja'].includes(lang)) {
    return lang as LangCode;
  }
  return 'en';
};
