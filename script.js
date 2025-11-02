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
    
    // NOUVEAU: Infos de voyage pour l'en-tête
    infoDepart: "Bordeaux (Le Lac)",
    infoArrivee: "???", // MIS À JOUR
    infoHeures: "15/11 (11:00) - 16/11 (19:00)",

    // NOUVEAU: Contenu de la promo Sidebar
    promoTitle: "Envie de plannifier votre prochain voyage ?",
    promoDesc: "Nous vous proposons une réduction exclusive de 15% sur notre prochain voyage pour Colmar avec le code PEPITO15. Valable jusqu'au 31/11/2025.",

    notifications: [
        { 
            id: 'NOTIF_000', // EMAIL 1 (Manuel) - CORPS MIS À JOUR
            revealTimestamp: '2025-11-01T08:00:00', // (Date passée pour affichage immédiat)
            icon: "🔑", 
            siteMessage: "Bienvenue sur votre portail de voyage, M. Soum. \nToutes les informations concernant votre voyage se trouvent ici.",
            emailSubject: "Activation de votre Portail de Voyage (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nPour votre prochain voyage du 15 et 16 novembre 2025, nous avons le plaisir de vous annoncer l'activation de votre portail de voyage personnel et sécurisé.\n\nCe portail sera désormais notre unique canal de communication pour toutes les mises à jour logistiques, les briefings d'équipement et les services expérientiels liés à votre dossier.\n\nVeuillez trouver vos identifiants de connexion ci-dessous :\n\nLe portail de voyage : ouvrir ce lien.\nVotre référence de dossier : PEPITO (pour consulter votre réservation)\n\nNous vous invitons à vous connecter une première fois pour confirmer l'accès.\n\nCordialement,\n\nNathan Inc. Services Premium\nGRONDIN Nathan - Chef de Bord\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_001', // EMAIL 2
            revealTimestamp: '2025-11-05T09:00:00', 
            icon: "✅", 
            siteMessage: "Mise à jour de statut : la Phase 1 (Planification) se déroule comme prévu.",
            emailSubject: "Mise à jour de Statut (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nCeci est une note de service de "Nathan Inc.".\n\nNous vous confirmons que la Phase 1 (Planification) de votre voyage des 15-16 Novembre se déroule comme prévu. Tous les indicateurs de notre service logistique sont au vert.\n\nDe nouvelles informations seront publiées sur votre portail en temps voulu.\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_002', // EMAIL 3
            revealTimestamp: '2025-11-10T11:00:00', 
            icon: "❗", 
            siteMessage: "Action Requise : Le briefing d'équipement impératif a été publié.",
            emailSubject: "ACTION REQUISE : Briefing d'Équipement (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nUne action est requise de votre part.\n\nLe Chef de Bord, Nathan, a publié le Briefing d'Équipement impératif pour l'excursion du Dimanche 16. L'accès à cette excursion est conditionné au respect de ce briefing.\n\nVeuillez consulter la section "Briefing de Voyage" sur votre portail "Nathan Inc." pour les instructions.\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_003', // EMAIL 4
            revealTimestamp: '2025-11-12T09:00:00',
            icon: "⏳", 
            siteMessage: "Avis Opérationnel J-3 : L'Opération 'Évasion' entre en phase de pré-lancement.",
            emailSubject: "Avis Opérationnel J-3 (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nL'Opération 'Évasion' entre en phase de pré-lancement. Les systèmes sont en cours de vérification finale.\n\nLe niveau d'anticipation a été validé par le Chef de Bord. Une nouvelle note de service est visible sur votre portail "Nathan Inc.".\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_004', // EMAIL 5
            revealTimestamp: '2025-11-14T09:00:00',
            icon: "🍽️", 
            siteMessage: "Confirmation Logistique Finale : Le service de restauration \"Prestige\" pour la soirée du Samedi 15 est confirmé.",
            emailSubject: "Confirmation Logistique Finale (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nCeci est la confirmation logistique J-1.\n\nLe service de restauration \"Prestige\" pour la soirée du Samedi 15 est confirmé. Votre statut \"VIP\" est validé.\n\nLe Chef de Bord vous souhaite une excellente préparation finale.\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        },
        { 
            id: 'NOTIF_005', // EMAIL 6 (Jour J)
            revealTimestamp: '2025-11-15T08:00:00',
            icon: "🚀", 
            siteMessage: "JOUR J : L'Opération 'Évasion' est lancée. Votre portail bascule en 'Mode Voyage'.",
            emailSubject: "JOUR J - Lancement de l'Opération 'Évasion' (Dossier PEPITO)",
            emailBody: `Bonjour M. Pépito,\n\nL'heure H est arrivée. L'Opération 'Évasion' est officiellement lancée.\n\nVotre portail "Nathan Inc." est en train de basculer en "Mode Voyage". De nouvelles fonctionnalités seront déverrouillées au fil de la journée.\n\nVeuillez vous tenir prêt pour les instructions du Chef de Bord.\n\nCordialement,\nNathan Inc. Services Premium\n+33770136289 | nathangrondin683@gmail.com`
        }
    ],

    briefingSamedi: `(Informations à venir très prochainement...👀)`,
    
    // BRIEFING CORRIGÉ
    briefingDimanche: `(Informations à venir très prochainement...👀)`,
    
    lockedMessage: `Toutes les informations concernant le détail de votre itinéraire seront accessibles ici avant le début de votre voyage.\nVous serez prévenu par mail lors de leur affichage.`,

    // --- Phase 2: Pendant (Contenu caché) ---
    jukeboxTitle: '// Service "Ambiance Sonore"',
    jukeboxDesc: 'Votre playlist personnelle pour le dîner de Samedi.',
    billetsTitle: '// Vos Billets',
    billetsDesc: 'Chaque billet est une étape de votre voyage. Compostez-le pour révéler les informations détaillées du point de destination.',
    
    billet1_Title: "Billet N°1 : Le Point d'Origine (KM 0.0)",
    billet1_Trajet: 'Gare de La Teste-de-Buch',
    billet1_Motif: "L'origine de l'histoire (1841)",
    billet1_Recit: "Le Chef de Bord Nathan vous souhaite la bienvenue à l'arrêt N°1. Oubliez tout ce que vous pensez savoir sur le Bassin. Notre voyage ne commence pas sur une plage, mais ici, en 1841, à la plus ancienne gare de France encore en service.\n\nElle n'a pas été construite pour le plaisir, mais pour une seule raison : conquérir une nature hostile et transporter la ressource qui a tout changé.\n\nVotre première mission : Levez les yeux. Imprégnez-vous de l'architecture. C'est le point de départ exact de notre fil rouge.",
    billet1_mapURL: 'https://www.google.com/maps/search/?api=1&query=Gare+de+La+Teste-de-Buch',

    billet2_Title: 'Billet N°2 : Le Poumon Économique',
    billet2_Trajet: 'Forêt Usagère (Pique-nique)',
    billet2_Motif: "La source de l'industrie",
    billet2_Recit: "Nous sommes maintenant au cœur de la ressource. Cette forêt de pins n'est pas seulement un lieu de balade ; c'est le 'poumon' qui a financé l'intégralité de la ligne de chemin de fer.\n\nC'est pour transporter ce bois, planté pour retenir les dunes, que la gare de La Teste a été construite. Le son, l'odeur... c'est la matière première de notre histoire.\n\nVotre mission : Savourez ce pique-nique. Vous déjeunez littéralement à la source de l'aventure.",
    billet2_mapURL: 'https://www.google.com/maps/search/?api=1&query=Forêt+Usagère+de+La+Teste-de-Buch',

    billet3_Title: "Billet N°3 : Le Réseau Parallèle",
    billet3_Trajet: 'Gujan-Mestras (Les 7 Ports)',
    billet3_Motif: "La capitale de l'ostréiculture",
    billet3_Recit: "Le rail que nous suivons (celui du bois) n'était pas seul. Pendant qu'il se développait, un autre réseau, plus petit, plus 'gourmand', est né ici : le tramway des huîtres.\n\nNous sommes dans la 'Capitale de l'Ostréiculture'. Chaque cabane que vous voyez faisait partie d'un micro-réseau ferroviaire dédié uniquement au transport des 'perles' du Bassin.\n\nVotre mission : Repérez les anciens rails au sol entre les cabanes. C'est le 'rail gastronomique'.",
    billet3_mapURL: 'https://www.google.com/maps/search/?api=1&query=Ports+de+Gujan-Mestras',

    billet4_Title: 'Billet N°4 (Terminus) : Le Point de Connexion',
    billet4_Trajet: 'Port du Teich',
    billet4_Motif: 'La fin de la ligne',
    billet4_Recit: "Notre exploration s'achève au 'Terminus'. C'est le point de rencontre de tous les éléments de notre histoire : le bois de la forêt, le rail de La Teste et l'eau du Bassin.\n\nLe train ne s'arrêtait pas à la gare ; il s'avançait jusqu'ici, sur le port, pour que le bois soit chargé directement sur les bateaux.\n\nVotre mission finale : Trouvez les rails qui touchent presque l'eau. C'est la fin de la ligne. Le point exact où le passé industriel cède la place à la nature.",
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
    navColmar: "N'hésitez pas à vous renseigner auprès de notre chef de bord pour l'organisation d\'un voyage à Colmar." // NOUVEAU
};
// ==========================================================
// FIN DE L'ADMIN PANEL
// ==========================================================


// Variables globales pour gérer les états
const processedNotifIDs = new Set();
let notificationTimerInterval;
let countdownTimerInterval;

// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {

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
                    startCountdown("2025-11-15T08:00:00"); // Synchronisé avec l'email 6
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

    // --- LOGIQUE ADMIN BYPASS (CADENAS) ---
    if (adminBypassButton) {
        adminBypassButton.addEventListener("click", () => {
            console.log("Admin bypass cliqué.");
            const code = prompt("Entrez le code de dérogation Chef de Bord :");
            
            if (code === SITE_CONTENT.adminBypassCode) {
                console.log("Code correct. Forçage de la Phase 2.");
                triggerPhase2Transition(); // Déclencher la transition
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
            document.getElementById("briefing-samedi").innerText = SITE_CONTENT.briefingSamedi;
            document.getElementById("briefing-dimanche").innerText = SITE_CONTENT.briefingDimanche;
            document.getElementById("locked-message").innerText = SITE_CONTENT.lockedMessage;
            
            // Remplir Sidebar Promo
            document.getElementById("promo-title").innerText = SITE_CONTENT.promoTitle;
            document.getElementById("promo-desc").innerText = SITE_CONTENT.promoDesc;
            
            // Pré-remplir Phase 2 (cachée)
            document.getElementById("jukebox-title").innerText = SITE_CONTENT.jukeboxTitle;
            document.getElementById("jukebox-desc").innerText = SITE_CONTENT.jukeboxDesc;
            document.getElementById("billets-title").innerText = SITE_CONTENT.billetsTitle;
            document.getElementById("billets-desc").innerText = SITE_CONTENT.billetsDesc; 
            
            // Billet 1
            document.getElementById("billet-1-title").innerText = SITE_CONTENT.billet1_Title;
            document.getElementById("billet-1-trajet").innerText = SITE_CONTENT.billet1_Trajet;
            document.getElementById("billet-1-motif").innerText = SITE_CONTENT.billet1_Motif;
            document.getElementById("billet-1-recit-text").innerText = SITE_CONTENT.billet1_Recit;
            document.getElementById("billet-1-map-btn").href = SITE_CONTENT.billet1_mapURL;
            
            // Billet 2
            document.getElementById("billet-2-title").innerText = SITE_CONTENT.billet2_Title;
            document.getElementById("billet-2-trajet").innerText = SITE_CONTENT.billet2_Trajet;
            document.getElementById("billet-2-motif").innerText = SITE_CONTENT.billet2_Motif;
            document.getElementById("billet-2-recit-text").innerText = SITE_CONTENT.billet2_Recit;
            document.getElementById("billet-2-map-btn").href = SITE_CONTENT.billet2_mapURL;
            
            // Billet 3
            document.getElementById("billet-3-title").innerText = SITE_CONTENT.billet3_Title;
            document.getElementById("billet-3-trajet").innerText = SITE_CONTENT.billet3_Trajet;
            document.getElementById("billet-3-motif").innerText = SITE_CONTENT.billet3_Motif;
            document.getElementById("billet-3-recit-text").innerText = SITE_CONTENT.billet3_Recit;
            document.getElementById("billet-3-map-btn").href = SITE_CONTENT.billet3_mapURL;
            
            // Billet 4
            document.getElementById("billet-4-title").innerText = SITE_CONTENT.billet4_Title;
            document.getElementById("billet-4-trajet").innerText = SITE_CONTENT.billet4_Trajet;
            document.getElementById("billet-4-motif").innerText = SITE_CONTENT.billet4_Motif;
            document.getElementById("billet-4-recit-text").innerText = SITE_CONTENT.billet4_Recit;
            document.getElementById("billet-4-map-btn").href = SITE_CONTENT.billet4_mapURL;
            
        } else if (phase === 3) {
            // Remplir Phase 3 (Archive)
            document.getElementById("archive-title").innerText = SITE_CONTENT.archiveTitle;
            document.getElementById("gallery-title").innerText = SITE_CONTENT.galleryTitle;
            document.getElementById("gallery-desc").innerText = SITE_CONTENT.galleryDesc;
            document.getElementById("guestbook-title").innerText = SITE_CONTENT.guestbookTitle;
            document.getElementById("guestbook-desc").innerText = SITE_CONTENT.guestbookDesc;
        }
    }

    // --- LOGIQUE DE TRANSITION DE PHASE (Nouvelle fonction) ---
    
    function triggerPhase2Transition() {
        console.log("Transition vers la Phase 2...");
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
                setTimeout(() => phase2Section.style.opacity = "1", 50);
                
            }, 500);
        }
    }

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
    // LOGIQUE DE COMPOSTAGE DES BILLETS (Flux vertical)
    // ===============================================
    function setupBilletLogic() {
        const billets = [
            { id: 1, nextId: 2 },
            { id: 2, nextId: 3 },
            { id: 3, nextId: 4 },
            { id: 4, nextId: null } // Le dernier billet
        ];

        billets.forEach(billet => {
            const compostButton = document.getElementById(`composter-${billet.id}`);
            if (compostButton) {
                compostButton.addEventListener('click', function() {
                    console.log(`Billet ${billet.id} composté.`);
                    
                    const card = document.getElementById(`billet-${billet.id}`);
                    const recit = document.getElementById(`billet-${billet.id}-recit`);
                    
                    card.classList.add('used'); // Déclenche l'animation du tampon
                    card.classList.remove('disabled'); // Au cas où
                    
                    this.disabled = true;
                    this.innerText = (billet.nextId) ? 'Billet Composté' : "Exploration Terminée"; // Changer le texte du dernier bouton
                    
                    recit.style.display = 'block'; // Révèle le récit
                    
                    // Révéler le billet suivant (s'il existe)
                    if (billet.nextId) {
                        const nextBilletCard = document.getElementById(`billet-${billet.nextId}`);
                        const nextBilletButton = document.getElementById(`composter-${billet.nextId}`);
                        
                        nextBilletCard.classList.remove('disabled');
        
                        if(nextBilletButton) {
                            nextBilletButton.disabled = false;
                        }
                        
                        // Faire défiler jusqu'au nouveau billet
                        nextBilletCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        // C'est le dernier billet
                        console.log("Fin de l'exploration.");
                        setTimeout(triggerPhase3Transition, 2000); // Délai de 2s avant de passer à la phase 3
                    }
                });
            }
        });
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