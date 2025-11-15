// ==========================================================
// VOTRE "ADMIN PANEL" NO-CODE
// Modifiez uniquement les textes ci-dessous pour tout préparer.
// ==========================================================
const SITE_CONTENT = {
    // --- Code de dérogation Chef de Bord ---
    adminBypassCode: 'equirungblove127',
    
    // --- Phase 1: Avant (Page Réservation) ---
    passengerName: 'M. Enzo Pépito Soum',
    chefDeBord: 'Nathan Grondin',
    
    infoDepart: "Bordeaux (Le Lac)",
    infoArrivee: "???", 
    infoHeures: "15/11 (11:00) - 16/11 (19:00)",

    promoTitle: "Envie de plannifier votre prochain voyage ?",
    promoDesc: "Nous vous proposons une réduction exclusive de 15% sur notre prochain voyage pour Colmar avec le code PEPITO15. Valable jusqu'au 31/11/2025.",

    // DATES DE RÉVÉLATION DES BRIEFINGS
    briefingRevealDate_Logement: '2025-11-05T09:00:00', // Correspond à NOTIF_001
    briefingRevealDate_Dimanche: '2025-11-10T09:00:00', // Correspond à NOTIF_003 (Email 4)
    briefingRevealDate_Nourriture: '2025-11-13T09:00:00', // Correspond à NOTIF_005
    feedbackRevealDate: '2025-11-12T09:00:00', // Date de révélation des boutons feedback

    notifications: [
        { 
            id: 'NOTIF_000', // EMAIL 1 (Manuel)
            revealTimestamp: '2025-11-01T08:00:00', // (Date passée pour affichage immédiat)
            icon: "🔑", 
            siteMessage: "Bienvenue sur votre portail de voyage, M. Pépito Soum. \nToutes les informations concernant votre voyage se trouvent ici.",
            emailSubject: "Activation de votre Portail de Voyage (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nPour votre prochain voyage du 15 et 16 novembre 2025, nous avons le plaisir de vous annoncer l'activation de votre portail de voyage personnel et sécurisé.\n\nCe portail sera désormais notre unique canal de communication pour toutes les mises à jour logistiques, les briefings d'équipement et les services expérientiels liés à votre dossier.\n\nVeuillez trouver vos identifiants de connexion ci-dessous :\n\nLe portail de voyage : ouvrir ce lien.\nVotre référence de dossier : PEPITO (pour consulter votre réservation)\n\nNous vous invitons à vous connecter une première fois pour confirmer l'accès.\n\nCordialement,\n\nNathan Inc. Services Premium\nGRONDIN Nathan - Chef de Bord\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_001', // EMAIL 2
            revealTimestamp: '2025-11-05T09:00:00', 
            icon: "🏠", 
            siteMessage: "Votre demande de logement a été confirmée. De nouvelles indications sur l'équipement ont été ajoutées (cf. Rubrique 'Samedi').",
            emailSubject: "(Dossier PEPITO) - Confirmation logement",
            emailBody: `Bonjour M. Pépito,\n\nCeci est une note de service de Nathan Inc.\n\nNous vous confirmons que votre demande de logement auprès de notre prestataire a été confirmée. De nouvelles indications concernant l'équipement à apporter lors de votre voyage ont été ajoutées.\n\nLa planification votre voyage des 15-16 novembre se déroule comme prévu. Tous les indicateurs de notre service logistique sont au vert.\n\nDe nouvelles informations seront publiées sur votre portail en temps voulu.\n\nVeuillez trouver à nouveau vos identifiants de connexion ci-dessous :\n\nLe portail de voyage : ouvrir ce lien.\nVotre référence de dossier : PEPITO (pour consulter votre réservation)\nCordialement,\n\nNathan Inc. Services Premium\nGRONDIN Nathan - Chef de Bord\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_002', // NOUVEL EMAIL 3
            revealTimestamp: '2025-11-08T09:00:00', 
            icon: "🥳", 
            siteMessage: "J-7. Prêt à embarquer dans le train du Bonheur ? \n Plus que quelques jours avant le grand départ... Il est temps de se préparer (surtout mentalement) !",
            emailSubject: "Mise à jour J-7 (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nCeci est une note de service de "Nathan Inc.".\n\nNous vous informons que nous entrons officiellement dans la semaine J-7 de votre voyage 'Évasion'.\n\nNous vous confirmons que les indicateurs de "Hâte" et de "Joie" sont actuellement à leur niveau maximum et que tous les préparatifs suivent leur cours.\n\nAucun contre-temps ni retard n'est à déplorer à ce jour.\n\nQuelques informations importantes concernant votre weekend ont été relevées via le Portail de voyage. Connectez-vous pour les découvrir.\n\nVeuillez trouver à nouveau vos identifiants de connexion ci-dessous :\nLe portail de voyage : ouvrir ce lien.\nVotre référence de dossier : PEPITO (pour consulter votre réservation)\n\nCordialement,\n\nNathan Inc. Services Premium\nGRONDIN Nathan - Chef de Bord\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_003', // NOUVEL EMAIL 4
            revealTimestamp: '2025-11-10T09:00:00', 
            icon: "❗", 
            siteMessage: "Information importante (J-5) : Le briefing 'Dimanche' est disponible. Veuillez prendre connaissance des informations transmises.",
            emailSubject: "(Dossier PEPITO) - Information importante (J-5)",
            emailBody: `Bonjour M. Pépito,\n\nNathan Inc. a le plaisir de vous annoncer que les informations relatives à votre expérience VIP pour ce dimanche 16/11 ont été publiées.\n\nVous trouverez dans la rubrique “Dimanche” un briefing complet pour ce jour.\n\nVeuillez trouver à nouveau vos identifiants de connexion ci-dessous :\nLe portail de voyage : ouvrir ce lien.\nVotre référence de dossier : PEPITO (pour consulter votre réservation)\nCordialement,\n\nNathan Inc. Services Premium\nGRONDIN Nathan - Chef de Bord\n+33770136289 | nathangrondin683@gmail.com`
        },
        {
            id: 'NOTIF_004', // Ancien EMAIL 4
            revealTimestamp: '2025-11-12T09:00:00',
            icon: "⏳",
            siteMessage: "Avis Opérationnel J-3 : L'Opération 'Évasion' entre en phase de pré-lancement. \nUn nouveau bouton est disponible en haut ! N\'hésitez pas à nous faire un feedback via la barre de navigation.",
            emailSubject: "Avis Opérationnel J-3 (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nL'Opération 'Évasion' entre en phase de pré-lancement. Les systèmes sont en cours de vérification finale.\n\nLe niveau d'anticipation a été validé par le Chef de Bord. Une nouvelle note de service est visible sur votre portail "Nathan Inc.".\n\nN'hésitez pas à nous faire un feedback via le bouton de la barre de navigation.\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_005', // EMAIL 5
            revealTimestamp: '2025-11-14T09:00:00',
            icon: "🍽️", 
            siteMessage: "Confirmation Logistique Finale : Le service de restauration \"Prestige\" pour la soirée du Samedi 15 est confirmé.",
            emailSubject: "Confirmation Logistique Finale (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nCeci est la confirmation logistique J-1.\n\nLe service de restauration \"Prestige\" pour la soirée du Samedi 15 est confirmé. Votre statut \"VIP\" est validé.\n\nLe Chef de Bord vous souhaite une excellente préparation finale.\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        },
        {
            id: 'NOTIF_006', // EMAIL 6 (Jour J)
            revealTimestamp: '2025-11-15T14:00:00',
            icon: "🚀",
            siteMessage: "JOUR J : L'Opération 'Évasion' est lancée. Votre portail bascule en 'Mode Voyage'.",
            emailSubject: "JOUR J - Lancement de l'Opération 'Évasion' (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nL'heure H est arrivée. L'Opération 'Évasion' est officiellement lancée.\n\nVotre portail "Nathan Inc." est en train de basculer en "Mode Voyage". De nouvelles fonctionnalités seront déverrouillées au fil de la journée.\n\nVeuillez vous tenir prêt pour les instructions du Chef de Bord.\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        }
    ],

    // LOGIQUE DE BRIEFING À 3 ÉTATS
    briefingTitleSamedi_State1: `Samedi : [...]`,
    briefingTitleSamedi_State2: `Samedi : Logement & Équipement`,
    briefingTitleSamedi_State3: `Briefing : Samedi 15/11 (Phase Cocon)`,

    briefingSamedi_State1: `(Informations à venir très prochainement...👀)`, // Avant 5 Nov
    briefingSamedi_State2: `Logement confirmé.\n\nÉquipement requis : Pensez à vos affaires de toilettes et à un pyjama confortable (ou non, c'est très ok aussi).`, // Après 5 Nov
    
    // MIS À JOUR AVEC VOTRE NOUVEAU TEXTE
    briefingSamedi_State3: `Ceci est votre briefing officiel pour le Jour J. La journée de samedi est dédiée à la Déconnexion et à l'Installation.\nL'objectif : Basculer du mode "routine" au mode "Évasion". Le Chef de Bord gère l'intégralité de la logistique (itinéraire, restauration, timing).\nVotre seule mission est de vous préparer pour l'expérience "Prestige" de ce soir.\n\nVotre équipement requis pour la soirée :\n\nTenue "Cocon Chic" :\nUne tenue élégante mais parfaitement décontractée. L'objectif est d'être à l'aise pour une soirée intime, où le confort prime sur le formel.\n\nÉtat d'esprit "Offline" :\nIl est fortement recommandé de mettre les notifications non essentielles en sourdine. Le portail "Nathan Inc." sera votre seule source d'information.\n\nPréparation Sensorielle :\nLe "Service Ambiance Sonore" s'activera automatiquement sur ce portail à 20h00. Préparez-vous pour une immersion complète.`, // Après 13 Nov
    
    // Logique à 2 états pour le dimanche
    briefingTitleDimanche_Pre: `Dimanche : [...]`,
    briefingTitleDimanche_Post: "Dimanche : L'aventure dans le temps",
    briefingDimanche_Pre: `(Informations à venir très prochainement...👀)`,
    briefingDimanche_Post: `Ceci est votre briefing d'équipement impératif.\nLa journée du dimanche est consacrée à notre expérience de terrain. Le confort est la priorité absolue pour garantir le succès de la mission.\n\nÉquipement OBLIGATOIRE (Non négociable) :\n- Des chaussures très confortables (Baskets ou chaussures de marche). C'est l'accessoire N°1.\n- Un manteau imperméable ou un coupe-vent. (Voir météo prévisionnelle du weekend)\n- Des vêtements chauds (pull, écharpe, etc.).\n\nL'aventure est tout-terrain et tout-temps.\nLe Chef de Bord compte sur votre préparation !`,
    
    lockedMessage: `Toutes les informations concernant le détail de votre itinéraire seront accessibles ici avant le début de votre voyage.\nVous serez prévenu par mail lors de leur affichage.`,

    // --- Phase 2: Pendant (Contenu caché) ---
    jukeboxTitle: '// Service "Ambiance Sonore"',
    jukeboxDesc: 'Votre playlist personnelle pour le dîner de Samedi.',
    billetsTitle: '// Vos Billets',
    billetsDesc: 'Chaque billet est une étape de votre voyage. Compostez-le pour révéler les informations détaillées du point de destination.',
    
    billet1_Title: "Billet N°1 : Point d'Origine (KM 0.0)",
    billet1_Trajet: '~ 45-50 minutes (Depuis Andernos-les-Bains)',
    billet1_Motif: "L'origine de l'histoire (1841)",
    billet1_Recit: "Le Chef de Bord vous souhaite la bienvenue à l'arrêt N°1. Oubliez tout ce que vous pensez savoir sur le Bassin. Notre voyage commence ici, le 7 juillet 1841, date d'inauguration de la ligne Bordeaux-La Teste. C'est la plus ancienne gare de France encore en service.\n\nPendant 16 ans (jusqu'en 1857), ce fut le terminus absolu. Arcachon n'existait pas encore. L'idée de cette ligne, due à un notaire bordelais nommé Louis Godinet, était de désenclaver ce \"Far West\" aquitain. L'objectif n'était pas le tourisme (les \"bains de mer\" ont eu du mal à démarrer), mais bien de transporter la ressource qui a tout changé.\n\nVotre première mission : Levez les yeux. Imprégnez-vous de l'architecture de ce bâtiment qui a vu arriver les tout premiers voyageurs et qui est le point de départ exact de notre fil rouge.",
    billet1_mapURL: 'https://www.google.com/maps/search/?api=1&query=Gare+de+La+Teste-de-Buch',

    billet2_Title: 'Billet N°2 : Le Poumon Économique',
    billet2_Trajet: '~ 10-15 minutes',
    billet2_Motif: "La source de l'industrie",
    billet2_Recit: "Nous sommes maintenant au cœur de la ressource. Cette forêt de pins massive n'est pas naturelle. Elle a été plantée au 19ème siècle sur ordre de Napoléon pour une raison vitale : stabiliser les dunes qui menaçaient d'ensevelir le pays.\n\nCe faisant, ils ont créé le \"poumon\" économique qui a financé l'intégralité de la ligne de chemin de fer. C'est pour transporter à grande échelle le bois de ces pins (pour les traverses de rail, les poteaux de mine) et leur résine (le \"gemmage\") que la gare de La Teste a été construite.\n\nVotre mission : Savourez ce pique-nique. Vous déjeunez littéralement à la source de l'aventure, au milieu de la matière première qui a tout rendu possible.",
    billet2_mapURL: 'https://www.google.com/maps/search/?api=1&query=Forêt+Usagère+de+La+Teste-de-Buch',

    billet3_Title: "Billet N°3 : Le Réseau Parallèle",
    billet3_Trajet: '~ 15 minutes',
    billet3_Motif: "La capitale de l'ostréiculture",
    billet3_Recit: "La ligne Bordeaux-La Teste n'était pas la seule. Gujan, la \"Capitale de l'Ostréiculture\" avec ses 7 ports, avait sa propre histoire ferroviaire.\n\nIci, au Port de Meyran, un autre \"chemin de fer Decauville\" (une petite ligne industrielle à voie étroite) a fonctionné de 1919 à 1935. Sa seule mission : transporter les poteaux de pins de la forêt jusqu'aux barges, qui les emmenaient ensuite vers des cargos à destination de l'Angleterre pour étayer les galeries de mines.\n\nVotre mission : Repérez les anciens rails au sol. Ce n'est pas seulement un \"rail gastronomique\" pour les huîtres, c'est le vestige d'une ligne industrielle secrète, connectée au monde.",
    billet3_mapURL: 'https://www.google.com/maps/search/?api=1&query=Ports+de+Gujan-Mestras',

    billet4_Title: 'Billet N°4 (Terminus) : Le Point de Connexion',
    billet4_Trajet: '~ 10 minutes',
    billet4_Motif: 'La fin de la ligne',
    billet4_Recit: "Notre exploration s'achève au 'Terminus'. Le Teich était un arrêt crucial sur la ligne originelle de 1841. C'était le point de rencontre de tous les éléments de notre histoire : le bois de la forêt, le rail, et les bateaux de la rivière l'Eyre.\n\nLe train ne s'arrêtait pas à la gare ; il s'avançait jusqu'ici, sur le port, pour que les marchandises (résine, goudron, poteaux de bois) soient chargées directement sur les bateaux.\n\nVotre mission finale : Trouvez les rails qui touchent presque l'eau. C'est la fin de la ligne. Le point de connexion \"Terre-Mer\" exact où le passé industriel cède aujourd'hui la place à la nature.",
    billet4_mapURL: 'https://www.google.com/maps/search/?api=1&query=Port+du+Teich',
    
    // --- Phase 3: Après (Contenu caché) ---
    archiveTitle: 'Historique de votre voyage "Évasion"',
    galleryTitle: '// Galerie de souvenirs',
    galleryDesc: 'Les archives photographiques de votre voyage.',
    guestbookTitle: '// Livre d\'or',
    guestbookDesc: 'Laissez un mot sur l\'expérience "Nathan Inc.".',
    
    // --- Easter Eggs (Navigation) ---
    navServices: 'Nos services sont actuellement entièrement dédiés à votre réservation, M. Soum. \nAucune autre demande ne sera traitée (sauf "prestation massage").',
    navVoyages: 'Tous les autres voyages sont suspendus pour assurer la pleine réussite de votre weekend d\'exception.',
    navContact: 'Votre chef de bord, Nathan Grondin, est votre unique point de contact. \nVous savez déjà comment le joindre. 😉',
    navFeedback: 'Vos retours sont précieux. Partagez vos impressions sur ce voyage unique.',
    navColmar: "N'hésitez pas à vous renseigner auprès de notre chef de bord pour l'organisation d\'un voyage à Colmar."
};
// ==========================================================
// FIN DE L'ADMIN PANEL
// ==========================================================


// Variables globales pour gérer les états
const processedNotifIDs = new Set();
let notificationTimerInterval;
let countdownTimerInterval;

// --- NOUVEAU: Variables de temps pour la Phase 2 ---
const jukeboxRevealTime = new Date('2025-11-15T20:00:00'); // Samedi 20h00
const ticket1RevealTime = new Date('2025-11-16T07:00:00'); // Dimanche 07h00
let phase2TimerInterval; // Pour gérer les déverrouillages de la Phase 2


// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {

    // --- VÉRIFICATION DES DATES DE RÉVÉLATION ---
    function checkRevealDates() {
        const now = new Date();
        const feedbackRevealDate = new Date(SITE_CONTENT.feedbackRevealDate);
        if (now < feedbackRevealDate) {
            // Cacher les icônes feedback
            const feedbackIcons = [
                document.getElementById('nav-feedback-1'),
                document.getElementById('nav-feedback-2'),
                document.getElementById('nav-feedback-3')
            ];
            feedbackIcons.forEach(icon => {
                if (icon) icon.style.display = 'none';
            });
        }
    }

    // Appeler la vérification au chargement
    checkRevealDates();

    // --- SÉLECTION DES ÉLÉMENTS DOM ---
    const pageAccueil = document.getElementById("page-accueil");
    const pageReservation = document.getElementById("page-reservation");
    const pagePhase3 = document.getElementById("page-phase-3");

    // Login
    const consultButton = document.getElementById("consult-button");
    const loginModal = document.getElementById("login-modal");
    const loginForm = document.getElementById("login-form");
    const dossierRefInput = document.getElementById("dossier-ref");
    const loginError = document.getElementById("login-error");
    
    // Easter Eggs
    const easterEggModal = document.getElementById("easter-egg-modal");
    const easterEggTitle = document.getElementById("easter-egg-title");
    const easterEggMessage = document.getElementById("easter-egg-message");
    const closeEasterEgg = document.getElementById("close-easter-egg");

    // Feedback Modal
    const feedbackModal = document.getElementById("feedback-modal");
    const feedbackGuessForm = document.getElementById("feedback-guess-form");
    const feedbackGuessInput = document.getElementById("feedback-guess-input");
    const feedbackGuessFeedback = document.getElementById("feedback-guess-feedback");
    const closeFeedbackModal = document.getElementById("close-feedback-modal");
    
    // Admin Bypass
    const adminBypassButton = document.getElementById("admin-bypass");
    
    const navLinks = [
        "nav-services-1", "nav-voyages-1", "nav-contact-1",
        "nav-services-2", "nav-voyages-2", "nav-contact-2",
        "nav-services-3", "nav-voyages-3", "nav-contact-3",
        "nav-colmar-promo" // NOUVEAU BOUTON
    ];

    const correctRef = "pepito";

    // --- LOGIQUE DE CONNEXION ---
    
    consultButton.addEventListener("click", (e) => {
        e.preventDefault(); 
        loginModal.style.display = "flex";
        setTimeout(() => loginModal.classList.add("visible"), 10); 
        dossierRefInput.focus();
    });

    function closeModal(modalElement) {
        modalElement.classList.remove("visible");
        setTimeout(() => modalElement.style.display = "none", 300);
    }
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const enteredRef = dossierRefInput.value.trim().toLowerCase();

        if (enteredRef === correctRef) {
            console.log("Accès autorisé.");
            loginError.textContent = "";

            closeModal(loginModal);
            setTimeout(() => {
                pageAccueil.style.display = "none";
                const isTripOver = false; 
                
                if (isTripOver) {
                    pagePhase3.style.display = "block";
                    populateContent(3);
                } else {
                    pageReservation.style.display = "block";
                    populateContent(1); 
                    startCountdown("2025-11-15T14:00:00"); // Synchronisé avec l'email 6
                    startNotificationEngine(); 
                    setupBilletLogic(); 
                }
            }, 350);
            
        } else {
            console.warn("Accès refusé.");
            loginError.textContent = "Référence de dossier invalide. Veuillez réessayer.";
            dossierRefInput.value = "";
            loginModal.querySelector(".modal-content").animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-10px)' },
                { transform: 'translateX(10px)' },
                { transform: 'translateX(0)' }
            ], { duration: 300, easing: 'ease-in-out' });
        }
    });

    // --- GESTIONNAIRES DE MODALES ---
    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) closeModal(loginModal);
    });
    easterEggModal.addEventListener("click", (e) => {
        if (e.target === easterEggModal) closeModal(easterEggModal);
    });
    closeEasterEgg.addEventListener("click", () => closeModal(easterEggModal));

    feedbackModal.addEventListener("click", (e) => {
        if (e.target === feedbackModal) closeModal(feedbackModal);
    });
    closeFeedbackModal.addEventListener("click", () => closeModal(feedbackModal));

    // --- LOGIQUE DU FORMULAIRE FEEDBACK (MODALE) ---
    const feedbackModalForm = document.getElementById("feedback-form");
    const feedbackModalGuessInput = document.getElementById("feedback-guess-input");
    const feedbackModalGuessFeedback = document.getElementById("feedback-feedback");

    feedbackModalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const guess = feedbackModalGuessInput.value.trim().toLowerCase();

        // Stocker la supposition en mémoire
        let storedMessages = JSON.parse(localStorage.getItem('userMessages')) || [];
        storedMessages.push({ guess: guess, timestamp: new Date().toISOString() });
        localStorage.setItem('userMessages', JSON.stringify(storedMessages));

        // Feedback de confirmation
        feedbackModalGuessFeedback.textContent = "Votre supposition a été enregistrée.";
        feedbackModalGuessFeedback.className = "feedback-message success";
        feedbackModalGuessFeedback.style.display = "block";
        feedbackModalGuessInput.value = "";
    });

    // --- LOGIQUE DU FORMULAIRE GUESSES (PHASE 3) ---
    const phase3GuessForm = document.getElementById("guess-form");
    const phase3GuessInput = document.getElementById("guess-input");
    const phase3GuessFeedback = document.getElementById("guess-feedback");

    phase3GuessForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const guess = phase3GuessInput.value.trim().toLowerCase();

        // Stocker le message en mémoire
        let storedMessages = JSON.parse(localStorage.getItem('userMessages')) || [];
        storedMessages.push({ guess: guess, timestamp: new Date().toISOString() });
        localStorage.setItem('userMessages', JSON.stringify(storedMessages));

        if (guess === "colmar") {
            phase3GuessFeedback.textContent = "Bravo ! Vous avez deviné juste. Colmar nous attend pour un voyage inoubliable.";
            phase3GuessFeedback.className = "feedback-message success";
        } else {
            phase3GuessFeedback.textContent = "Désolé, ce n'est pas la bonne destination. Essayez encore !";
            phase3GuessFeedback.className = "feedback-message error";
        }
        phase3GuessFeedback.style.display = "block";
        phase3GuessInput.value = "";
    });

    // --- LOGIQUE ADMIN BYPASS (CADENAS) ---
    if (adminBypassButton) {
        adminBypassButton.addEventListener("click", () => {
            console.log("Admin bypass cliqué.");
            const code = prompt("Entrez le code de dérogation Chef de Bord :");

            if (code === SITE_CONTENT.adminBypassCode) {
                console.log("Code correct. Forçage de la Phase 2.");
                // N'affiche plus le jukebox directement, laisse le timer le gérer
                triggerPhase2Transition(true); // Déclencher la transition en mode admin
                setupBilletLogic(); // Initialiser la logique des billets pour l'admin
                console.log("triggerPhase2Transition et setupBilletLogic appelés depuis admin bypass.");
            } else if (code) { // Si un code a été entré mais incorrect
                alert("Code incorrect.");
            }
        });
    }

    // --- LOGIQUE DES "EASTER EGGS" (NAVIGATION) ---
    
    function openEasterEggModal(contentKey) {
        const content = SITE_CONTENT[contentKey] || "Contenu non trouvé.";
        easterEggTitle.innerText = "Information"; 
        easterEggMessage.innerText = content;
        easterEggMessage.style.whiteSpace = "pre-line"; // CORRECTION: Permet les \n
        easterEggModal.style.display = "flex";
        setTimeout(() => easterEggModal.classList.add("visible"), 10);
    }
    
    navLinks.forEach(id => {
        const link = document.getElementById(id);
        if (link) {
            link.addEventListener("click", () => {
                if (id.includes("services")) {
                    openEasterEggModal("navServices");
                } else if (id.includes("voyages")) {
                    openEasterEggModal("navVoyages");
                } else if (id.includes("contact")) {
                    openEasterEggModal("navContact");
                } else if (id.includes("colmar")) { // NOUVEAU
                    openEasterEggModal("navColmar");
                }
            });
        }
    });

    // --- LOGIQUE DES ICÔNES FEEDBACK ---
    const feedbackIcons = [
        document.getElementById('nav-feedback-1'),
        document.getElementById('nav-feedback-2'),
        document.getElementById('nav-feedback-3')
    ];
    feedbackIcons.forEach(icon => {
        if (icon) {
            icon.addEventListener('click', () => {
                openFeedbackModal();
            });
        }
    });

    // --- LOGIQUE MODALE FEEDBACK ---
    function openFeedbackModal() {
        feedbackModal.style.display = "flex";
        setTimeout(() => feedbackModal.classList.add("visible"), 10);
        document.getElementById("feedback-guess-input").focus();
    }

    // Gestionnaire pour le bouton admin dans la modale feedback
    const adminViewGuessesBtn = document.getElementById("admin-view-guesses");
    if (adminViewGuessesBtn) {
        adminViewGuessesBtn.addEventListener("click", () => {
            const code = prompt("Entrez le code de dérogation Chef de Bord :");
            if (code === SITE_CONTENT.adminBypassCode) {
                console.log("Accès admin autorisé. Affichage des suppositions.");
                const storedMessages = JSON.parse(localStorage.getItem('userMessages')) || [];
                if (storedMessages.length === 0) {
                    alert("Aucune supposition stockée.");
                } else {
                    let message = "Suppositions collectées :\n\n";
                    storedMessages.forEach((msg, index) => {
                        const date = new Date(msg.timestamp).toLocaleString('fr-FR');
                        message += `${index + 1}. "${msg.guess}" (le ${date})\n`;
                    });
                    alert(message);
                }
            } else if (code) {
                alert("Code incorrect.");
            }
        });
    }

    // --- LOGIQUE MÉTÉO ---

    function saveWeatherCache(data) {
        try {
            localStorage.setItem('weatherCache', JSON.stringify(data));
            localStorage.setItem('weatherCacheTimestamp', Date.now().toString());
            console.log('[Weather] Données météo mises en cache.');
        } catch (e) {
            console.warn('[Weather] Impossible de sauvegarder le cache:', e);
        }
    }

    function loadWeatherCache() {
        try {
            const data = localStorage.getItem('weatherCache');
            const timestamp = localStorage.getItem('weatherCacheTimestamp');
            if (data && timestamp) {
                const age = Date.now() - parseInt(timestamp);
                // Cache valide pour 24 heures
                if (age < 24 * 60 * 60 * 1000) {
                    return JSON.parse(data);
                } else {
                    localStorage.removeItem('weatherCache');
                    localStorage.removeItem('weatherCacheTimestamp');
                }
            }
        } catch (e) {
            console.warn('[Weather] Erreur lors du chargement du cache:', e);
        }
        return null;
    }

    function displayWeather(data, isCached = false) {
        const weatherIcon = document.querySelector('.weather-icon');
        const weatherTemp = document.querySelector('.weather-temp');
        const weatherDesc = document.querySelector('.weather-desc');
        const weatherFeels = document.querySelector('.weather-feels');

        // Current weather
        weatherIcon.textContent = getWeatherIcon(data.current.weatherCode);
        weatherTemp.textContent = `${data.current.temp}°C`;
        weatherDesc.textContent = isCached ? 'Conditions actuelles (mises en cache)' : 'Conditions actuelles';
        weatherFeels.textContent = '';

        // Forecast
        const samediIcon = document.querySelector('#forecast-samedi .forecast-icon');
        const samediTemp = document.querySelector('#forecast-samedi .forecast-temp');
        if (samediIcon && samediTemp) {
            samediIcon.textContent = getWeatherIcon(data.forecast.samedi.weatherCode);
            samediTemp.textContent = `${data.forecast.samedi.temp}°C`;
        }

        const dimancheIcon = document.querySelector('#forecast-dimanche .forecast-icon');
        const dimancheTemp = document.querySelector('#forecast-dimanche .forecast-temp');
        if (dimancheIcon && dimancheTemp) {
            dimancheIcon.textContent = getWeatherIcon(data.forecast.dimanche.weatherCode);
            dimancheTemp.textContent = `${data.forecast.dimanche.temp}°C`;
        }

        console.log(`[Weather] Données affichées ${isCached ? '(cache)' : '(API)'}`);
    }

    async function fetchWeather() {
        const latitude = 44.6333;
        const longitude = -1.1333;
        const currentUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max&timezone=Europe/Paris&start_date=2025-11-15&end_date=2025-11-16`;

        try {
            // Fetch current weather
            const currentResponse = await fetch(currentUrl);
            if (!currentResponse.ok) {
                throw new Error('Erreur API météo actuelle');
            }
            const currentData = await currentResponse.json();

            const current = currentData.current_weather;
            const temp = Math.round(current.temperature);
            const weatherCode = current.weathercode;

            // Fetch forecast
            const forecastResponse = await fetch(forecastUrl);
            if (!forecastResponse.ok) {
                throw new Error('Erreur API prévisions');
            }
            const forecastData = await forecastResponse.json();

            const daily = forecastData.daily;
            let samediWeatherCode = 0, samediTemp = 0, dimancheWeatherCode = 0, dimancheTemp = 0;
            if (daily && daily.weathercode && daily.temperature_2m_max) {
                samediWeatherCode = daily.weathercode[0];
                samediTemp = Math.round(daily.temperature_2m_max[0]);
                dimancheWeatherCode = daily.weathercode[1];
                dimancheTemp = Math.round(daily.temperature_2m_max[1]);
            }

            const weatherData = {
                current: { weatherCode, temp },
                forecast: {
                    samedi: { weatherCode: samediWeatherCode, temp: samediTemp },
                    dimanche: { weatherCode: dimancheWeatherCode, temp: dimancheTemp }
                }
            };

            // Sauvegarder en cache
            saveWeatherCache(weatherData);

            // Afficher les données
            displayWeather(weatherData, false);

            console.log('[Weather] Données météo et prévisions chargées depuis Open-Meteo');
        } catch (error) {
            console.warn('[Weather] Erreur lors du chargement des données météo:', error);

            // Essayer de charger depuis le cache
            const cachedData = loadWeatherCache();
            if (cachedData) {
                displayWeather(cachedData, true);
                console.log('[Weather] Données mises en cache utilisées en fallback.');
            } else {
                console.warn('[Weather] Aucun cache disponible.');
            }
        }
    }

    function getWeatherIcon(weatherCode) {
        const iconMap = {
            0: '☀️', // Clear sky
            1: '🌤️', // Mainly clear
            2: '⛅', // Partly cloudy
            3: '☁️', // Overcast
            45: '🌫️', // Fog
            48: '🌫️', // Depositing rime fog
            51: '🌦️', // Drizzle: Light intensity
            53: '🌦️', // Drizzle: Moderate intensity
            55: '🌦️', // Drizzle: Dense intensity
            56: '🌨️', // Freezing Drizzle: Light intensity
            57: '🌨️', // Freezing Drizzle: Dense intensity
            61: '🌦️', // Rain: Slight intensity
            63: '🌧️', // Rain: Moderate intensity
            65: '🌧️', // Rain: Heavy intensity
            66: '🌨️', // Freezing Rain: Light intensity
            67: '🌨️', // Freezing Rain: Heavy intensity
            71: '❄️', // Snow fall: Slight intensity
            73: '❄️', // Snow fall: Moderate intensity
            75: '❄️', // Snow fall: Heavy intensity
            77: '❄️', // Snow grains
            80: '🌦️', // Rain showers: Slight
            81: '🌧️', // Rain showers: Moderate
            82: '🌧️', // Rain showers: Violent
            85: '❄️', // Snow showers slight
            86: '❄️', // Snow showers heavy
            95: '⛈️', // Thunderstorm: Slight or moderate
            96: '⛈️', // Thunderstorm with slight hail
            99: '⛈️'  // Thunderstorm with heavy hail
        };
        return iconMap[weatherCode] || '🌦️';
    }

    // --- LOGIQUE DE REMPLISSAGE DE CONTENU ---

    function populateContent(phase) {
        if (phase === 1) {
            // Remplir Phase 1 (Statique)
            document.getElementById("passenger-name").innerText = SITE_CONTENT.passengerName;
            document.getElementById("chef-de-bord").innerText = SITE_CONTENT.chefDeBord;
            document.getElementById("sidebar-chef-name").innerText = SITE_CONTENT.chefDeBord;
            document.getElementById("info-depart").innerText = SITE_CONTENT.infoDepart; // NOUVEAU
            document.getElementById("info-arrivee").innerText = SITE_CONTENT.infoArrivee; // NOUVEAU
            document.getElementById("info-heures").innerText = SITE_CONTENT.infoHeures; // NOUVEAU
            document.getElementById("locked-message").innerText = SITE_CONTENT.lockedMessage;

            // Fetch real weather data
            fetchWeather();
            
            // LOGIQUE DE BRIEFING CONDITIONNELLE (3 ÉTATS)
            const now = new Date();
            const revealDateLogement = new Date(SITE_CONTENT.briefingRevealDate_Logement);
            const revealDateDimanche = new Date(SITE_CONTENT.briefingRevealDate_Dimanche);
            const revealDateNourriture = new Date(SITE_CONTENT.briefingRevealDate_Nourriture);

            // Briefing Samedi
            if (now >= revealDateNourriture) {
                // État 3: Tout est révélé
                document.getElementById("briefing-title-samedi").innerText = SITE_CONTENT.briefingTitleSamedi_State3;
                document.getElementById("briefing-samedi").innerText = SITE_CONTENT.briefingSamedi_State3;
            } else if (now >= revealDateLogement) {
                // État 2: Logement révélé
                document.getElementById("briefing-title-samedi").innerText = SITE_CONTENT.briefingTitleSamedi_State2;
                document.getElementById("briefing-samedi").innerText = SITE_CONTENT.briefingSamedi_State2;
            } else {
                // État 1: Caché
                document.getElementById("briefing-title-samedi").innerText = SITE_CONTENT.briefingTitleSamedi_State1;
                document.getElementById("briefing-samedi").innerText = SITE_CONTENT.briefingSamedi_State1;
            }
            
            // Briefing Dimanche (Logique à 2 états)
            if (now >= revealDateDimanche) {
                document.getElementById("briefing-title-dimanche").innerText = SITE_CONTENT.briefingTitleDimanche_Post;
                document.getElementById("briefing-dimanche").innerText = SITE_CONTENT.briefingDimanche_Post;
            } else {
                document.getElementById("briefing-title-dimanche").innerText = SITE_CONTENT.briefingTitleDimanche_Pre;
                document.getElementById("briefing-dimanche").innerText = SITE_CONTENT.briefingDimanche_Pre;
            }

            // Logique de révélation des boutons feedback
            const feedbackRevealDate_pop = new Date(SITE_CONTENT.feedbackRevealDate);
            feedbackIcons.forEach(icon => {
                if (icon) {
                    if (now < feedbackRevealDate_pop) {
                        icon.style.display = 'none';
                    } else {
                        icon.style.display = 'block';
                    }
                }
            });

            // Remplir Sidebar Promo
            document.getElementById("promo-title").innerText = SITE_CONTENT.promoTitle;
            document.getElementById("promo-desc").innerText = SITE_CONTENT.promoDesc;

            // Cacher l'ambiance sonore pendant la phase 1
            const soundAmbianceSection = document.getElementById("sound-ambiance-section");
            if (soundAmbianceSection) soundAmbianceSection.style.display = "none";

            // Pré-remplir Phase 2 (cachée) - Removed jukebox and billets sections for cleanup
            
        } else if (phase === 3) {
            // Remplir Phase 3 (Archive)
            document.getElementById("archive-title").innerText = SITE_CONTENT.archiveTitle;
            document.getElementById("gallery-title").innerText = SITE_CONTENT.galleryTitle;
            document.getElementById("gallery-desc").innerText = SITE_CONTENT.galleryDesc;
            document.getElementById("guestbook-title").innerText = SITE_CONTENT.guestbookTitle;
            document.getElementById("guestbook-desc").innerText = SITE_CONTENT.guestbookDesc;
        }
    }

    // --- NOUVEAU: GESTION DES DÉVERROUILLAGES (PHASE 2) ---
    function checkPhase2Unlocks(isAdmin = false) {
        const now = new Date();
        let allUnlocked = true; // Flag pour arrêter le timer
        
        // 1. Vérification Jukebox
        const soundAmbianceSection = document.getElementById("sound-ambiance-section");
        if (soundAmbianceSection) {
            if (isAdmin || now >= jukeboxRevealTime) {
                soundAmbianceSection.style.display = "block";
            } else {
                soundAmbianceSection.style.display = "none";
                allUnlocked = false; // Pas encore l'heure
            }
        }

        // 2. Vérification Billet 1
        const ticketId = 1;
        const button = document.querySelector(`#ticket-${ticketId} .explanation-btn`);
        const departEl = document.getElementById(`ticket-${ticketId}-depart`);
        const destinationEl = document.getElementById(`ticket-${ticketId}-destination`);
        const trajetEl = document.getElementById(`ticket-${ticketId}-trajet`);

        if (button && departEl && destinationEl && trajetEl) { // S'assurer que les éléments existent
            if (isAdmin || now >= ticket1RevealTime) {
                // --- DÉVERROUILLÉ ---
                if (button.disabled) { // Ne mettre à jour que si nécessaire
                    populateTicketDestination(ticketId); // Mettre le vrai contenu
                    button.disabled = false;
                    button.textContent = "Composter le billet";
                }
            } else {
                // --- VERROUILLÉ ---
                departEl.textContent = "Bordeaux";
                destinationEl.textContent = "???";
                trajetEl.textContent = "VERROUILLÉ";
                button.disabled = true;
                // Calcul du temps restant
                const distance = ticket1RevealTime.getTime() - now.getTime();
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Ajout secondes pour feedback
                button.textContent = `Disponible dans ${hours}h ${minutes}m ${seconds}s`;
                allUnlocked = false; // Pas encore l'heure
            }
        }

        // 3. Arrêter le timer si tout est déverrouillé
        if (allUnlocked && phase2TimerInterval) {
            clearInterval(phase2TimerInterval);
            phase2TimerInterval = null;
            console.log("[Phase 2 Timer] Tous les éléments sont déverrouillés. Timer arrêté.");
        }
    }

    // --- LOGIQUE DE TRANSITION DE PHASE (Modifiée) ---

    function triggerPhase2Transition(isAdmin = false) {
        console.log("Transition vers la Phase 2...", isAdmin ? "(mode admin)" : "");
        if (countdownTimerInterval) clearInterval(countdownTimerInterval); // Arrêter le compteur

        const lockedSection = document.getElementById("phase-1-locked");
        const phase2Section = document.getElementById("phase-2-content");

        if (lockedSection && phase2Section) {
            // Animation de "retournement" ou fondu
            lockedSection.style.transition = "opacity 0.5s ease-out, transform 0.5s ease";
            lockedSection.style.opacity = "0";
            lockedSection.style.transform = "rotateY(90deg)"; // Effet de flip

            setTimeout(() => {
                lockedSection.style.display = "none";
                phase2Section.style.display = "block";

                // Positionner les billets pour l'animation d'entrée
                phase2Section.style.opacity = "0";
                setTimeout(() => {
                    phase2Section.style.opacity = "1";
                    
                    // --- CORRECTION (laissée commentée) ---
                    // document.getElementById("jukebox-title").innerText = SITE_CONTENT.jukeboxTitle;
                    // document.getElementById("jukebox-desc").innerText = SITE_CONTENT.jukeboxDesc;

                    // Initialiser la révélation des billets
                    initializeTicketReveal(isAdmin);
                    
                    // Configurer les boutons d'explication
                    setupExplanationButtons();
                    
                    // Remplir les explications des billets
                    populateTicketExplanations();

                    // Lancer le timer de la Phase 2
                    if (phase2TimerInterval) clearInterval(phase2TimerInterval); // Clear old timers
                    checkPhase2Unlocks(isAdmin); // Premier check immédiat
                    if (!isAdmin) {
                        phase2TimerInterval = setInterval(() => checkPhase2Unlocks(false), 1000); // Vérifie chaque seconde
                    }

                }, 50);

            }, 500);
        }
    }

    // --- LOGIQUE DE RÉVÉLATION DES BILLETS (Modifiée) ---
    const totalTickets = 4;

    function initializeTicketReveal(isAdmin = false) {
        revealTicket(1); // Toujours révéler le conteneur du Billet 1

        // Le check du verrouillage est maintenant géré par checkPhase2Unlocks
        
        /*
        if (isAdmin) {
            // Révéler tous les autres billets immédiatement pour l'admin
            for (let i = 2; i <= 4; i++) {
                revealTicket(i);
            }
        }
        */
        // Le flux normal (non-admin) est géré par le clic sur "back-btn"
        // En supprimant le bloc 'if (isAdmin)', l'admin suivra le même flux que l'utilisateur.
    }

    function revealTicket(ticketId) {
        const ticketFlipper = document.getElementById(`ticket-${ticketId}`);
        if (ticketFlipper) {
            const ticketFront = ticketFlipper.querySelector('.ticket-front');
            if (ticketFront && ticketFront.classList.contains('ticket-hidden')) {
                ticketFront.classList.remove('ticket-hidden');
                ticketFront.classList.add('ticket-revealed');
                // Animation d'entrée
                ticketFront.style.animation = 'ticketReveal 0.8s ease-out forwards';
                
                // Si ce n'est PAS le billet 1, peupler les données.
                // Le billet 1 est géré par checkPhase2Unlocks()
                if(ticketId > 1) {
                    populateTicketDestination(ticketId);
                }
            }
        }
    }

    function populateTicketDestination(ticketId) {
        const destinations = {
            1: { depart: "Bordeaux", destination: "La Teste-de-Buch", trajet: "Gare de La Teste-de-Buch" },
            2: { depart: "La Teste-de-Buch", destination: "Forêt Usagère", trajet: "Pique-nique en forêt" },
            3: { depart: "Forêt Usagère", destination: "Gujan-Mestras", trajet: "Les 7 Ports" },
            4: { depart: "Gujan-Mestras", destination: "Port du Teich", trajet: "Terminus" }
        };

        const dest = destinations[ticketId];
        if (dest) {
            const departEl = document.getElementById(`ticket-${ticketId}-depart`);
            const destinationEl = document.getElementById(`ticket-${ticketId}-destination`);
            const trajetEl = document.getElementById(`ticket-${ticketId}-trajet`);

            if (departEl) departEl.textContent = dest.depart;
            if (destinationEl) destinationEl.textContent = dest.destination;
            if (trajetEl) trajetEl.textContent = dest.trajet;
        }
    }

    // Gestionnaire pour les boutons "Expliquer la destination"
    function setupExplanationButtons() {
        const explanationButtons = document.querySelectorAll('.explanation-btn');
        explanationButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const ticketId = e.target.getAttribute('data-ticket');
                console.log('Bouton explication cliqué pour ticket:', ticketId);
                flipTicket(ticketId);
            });
        });

        // Gestionnaire pour les boutons "Retour au billet"
        const backButtons = document.querySelectorAll('.back-btn');
        backButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const ticketId = parseInt(e.target.getAttribute('data-ticket'));
                console.log('Bouton retour cliqué pour ticket:', ticketId);
                flipTicket(ticketId);
                
                // Révéler le prochain billet après retour (LOGIQUE DEMANDÉE)
                if (ticketId < 4) {
                    setTimeout(() => {
                        revealTicket(ticketId + 1);
                    }, 500); // Petit délai pour l'animation
                }
            });
        });
    }

    function flipTicket(ticketId) {
        const ticketFlipper = document.getElementById(`ticket-${ticketId}`);
        if (ticketFlipper) {
            ticketFlipper.classList.toggle('flipped');
        }
    }

    // Fonction pour définir le contenu des explications
    function populateTicketExplanations() {
        const explanations = {
            1: SITE_CONTENT.billet1_Recit,
            2: SITE_CONTENT.billet2_Recit,
            3: SITE_CONTENT.billet3_Recit,
            4: SITE_CONTENT.billet4_Recit
        };

        for (let i = 1; i <= 4; i++) {
            const explanationElement = document.getElementById(`ticket-${i}-explanation`);
            if (explanationElement) {
                explanationElement.textContent = explanations[i] || "Explication non disponible.";
            }
        }
    }



    // Appeler setupExplanationButtons au chargement de la phase 2
    // Sera appelé dans triggerPhase2Transition après l'initialisation

    // --- LOGIQUE DU COMPTE À REBOURS ---
    
    function startCountdown(targetDate) {
        if (countdownTimerInterval) clearInterval(countdownTimerInterval); // Sécurité
        
        countdownTimerInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;
            
            const testTransition = false; // Mettre à 'true' pour tester

            if (testTransition) {
                triggerPhase2Transition();
            } else if (distance < 0) {
                 clearInterval(countdownTimerInterval);
                 triggerPhase2Transition(); // Déclencher la transition normalement
            }
            else {
                // Mise à jour du compteur
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if (document.getElementById("days")) {
                    document.getElementById("days").innerText = days.toString().padStart(2, '0');
                    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
                    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
                    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
                }
            }
        }, 1000);
    }
    
    // ===============================================
    // LOGIQUE DES BILLETS (Cartes Flip)
    // ===============================================
    function setupBilletLogic() {
        console.log("setupBilletLogic() appelée");

        // Cette fonction configure les boutons d'explication et de retour
        // Les billets sont révélés progressivement via initializeTicketReveal()

        // Les boutons sont déjà configurés via setupExplanationButtons()
        // Rien d'autre à faire ici pour le moment
    }

    // (Fonction placeholder pour la fin)
    function triggerPhase3Transition() {
        console.log("Transition vers la Phase 3...");
        pageReservation.style.display = "none";
        pagePhase3.style.display = "block";
        populateContent(3);
    }

    // ===============================================
    // MOTEUR DE NOTIFICATIONS SÉQUENCÉES
    // ===============================================
    
    function sendNotificationEmail(subject, body) {
        console.log(`%c[Email Service] Envoi demandé...`, 'color: #007bff;');
        console.log(`Sujet: ${subject}`);
        console.log(`Corps: ${body}`);
    }
    
    function displaySiteNotification(message, icon, isInitialLoad = false) {
        const notificationList = document.getElementById("notification-list");
        if (!notificationList) return;
        
        const notificationSection = document.getElementById("notification-section");
        notificationSection.style.display = "block"; 

        const notifElement = document.createElement("p");
        notifElement.className = "notification-item";
        notifElement.innerHTML = `<span class="icon">${icon}</span><span>${message}</span>`;
        
        if (isInitialLoad) {
            notificationList.appendChild(notifElement); // Ajoute à la fin
        } else {
            notificationList.prepend(notifElement); // Ajoute au début
            notifElement.classList.add("fade-in"); // Déclenche l'animation
        }
    }
    
    function checkNotifications(isInitialLoad = false) {
        const now = new Date();
        
        SITE_CONTENT.notifications.forEach(notif => {
            if (processedNotifIDs.has(notif.id)) {
                return;
            }
            
            const revealTime = new Date(notif.revealTimestamp);
            
            if (now >= revealTime) {
                console.log(`[Notification Engine] Déclenchement de ${notif.id}`);
                
                displaySiteNotification(notif.siteMessage, notif.icon, isInitialLoad);
                
                // Mettre à jour les briefings si une notif pertinente arrive
                // (Cette logique est maintenant aussi dans populateContent pour le chargement initial)
                if ((notif.id === 'NOTIF_001' || notif.id === 'NOTIF_003' || notif.id === 'NOTIF_005') && !isInitialLoad) {
                    console.log('[Briefing Engine] Rafraîchissement des briefings suite à une notification.');
                    
                    const now_refresh = new Date(); // Re-vérifier l'heure
                    const revealDateLogement = new Date(SITE_CONTENT.briefingRevealDate_Logement);
                    const revealDateDimanche = new Date(SITE_CONTENT.briefingRevealDate_Dimanche);
                    const revealDateNourriture = new Date(SITE_CONTENT.briefingRevealDate_Nourriture);

                    if (now_refresh >= revealDateNourriture) {
                        document.getElementById("briefing-title-samedi").innerText = SITE_CONTENT.briefingTitleSamedi_State3;
                        document.getElementById("briefing-samedi").innerText = SITE_CONTENT.briefingSamedi_State3;
                    } else if (now_refresh >= revealDateLogement) {
                        document.getElementById("briefing-title-samedi").innerText = SITE_CONTENT.briefingTitleSamedi_State2;
                        document.getElementById("briefing-samedi").innerText = SITE_CONTENT.briefingSamedi_State2;
                    }
                    
                    if (now_refresh >= revealDateDimanche) {
                         document.getElementById("briefing-title-dimanche").innerText = SITE_CONTENT.briefingTitleDimanche_Post;
                         document.getElementById("briefing-dimanche").innerText = SITE_CONTENT.briefingDimanche_Post;
                    }
                }

                if (!isInitialLoad) {
                    sendNotificationEmail(notif.emailSubject, notif.emailBody);
                }
                
                processedNotifIDs.add(notif.id);
            }
        });
    }
    
    function startNotificationEngine() {
        console.log("[Notification Engine] Démarré.");
        
        // 1. Vérification initiale
        checkNotifications(true); 
        
        // 2. Démarrer l'intervalle
        if (notificationTimerInterval) clearInterval(notificationTimerInterval); 
        notificationTimerInterval = setInterval(() => {
            checkNotifications(false); 
        }, 60000); // 60 secondes
    }
});