// ==========================================================
// VOTRE "ADMIN PANEL" NO-CODE
// Modifiez uniquement les textes ci-dessous pour tout préparer.
// ==========================================================
const SITE_CONTENT = {
    // --- Code de dérogation Chef de Bord ---
    adminBypassCode: 'equirungblove127',
    
    // --- Phase 1: Avant (Page Réservation) ---
    passengerName: 'M. Enzo "Pépito" Soum',
    chefDeBord: 'Nathan Grondin',
    
    notifications: [
        { 
            id: 'NOTIF_001',
            revealTimestamp: '2025-11-01T09:00:00', 
            icon: "ℹ️", 
            siteMessage: "Bienvenue à bord, M. Soum. Votre voyage est confirmé.",
            emailSubject: "Confirmation de votre réservation Nathan Inc.",
            emailBody: `Cher M. Soum,\n\nNous avons le plaisir de vous confirmer votre réservation exclusive "Évasion" (Réf: LCO-PEPITO-25) pour les 15 et 16 novembre 2025.\n\nVotre chef de bord, M. Grondin, a finalisé les préparatifs.\n\nDe nouvelles informations seront ajoutées à votre portail de réservation à l'approche de votre départ. Vous pouvez consulter son statut à tout moment.\n\nCordialement,\nL'équipe Nathan Inc.`
        },
        { 
            id: 'NOTIF_002',
            revealTimestamp: '2025-11-10T11:00:00', 
            icon: "📅", 
            siteMessage: "J-5. Le départ est maintenu pour le 15/11/2025.",
            emailSubject: "Votre voyage Nathan Inc. approche (J-5)",
            emailBody: `Cher M. Soum,\n\nCeci est une notification de service. Votre départ est confirmé pour dans 5 jours.\n\nUn nouveau bulletin a été publié sur votre portail de réservation. Nous vous invitons à en prendre connaissance.\n\nCordialement,\nL'équipe Nathan Inc.`
        },
    ],

    briefingSamedi: `Une prestation dîner est incluse dans votre réservation. Pour accéder à la voiture-cocon, une tenue "élégant-décontracté" est recommandée.`,
    
    briefingDimanche: `Une exploration de notre patrimoine ferroviaire est prévue. Un équipement "Explorateur" est requis : chaussures de marche confortables et vêtements imperméables.`,
    
    lockedMessage: `Vos billets (e-tickets) et votre itinéraire détaillé seront générés et accessibles ici même au début de votre voyage.\nVous serez prévenu par mail.`,

    // --- Phase 2: Pendant (Contenu caché) ---
    jukeboxTitle: '// Service "Ambiance Sonore"',
    jukeboxDesc: 'Votre playlist personnelle pour le dîner de Samedi.',
    billetsTitle: '// Vos Billets',
    billetsDesc: 'Chaque billet est une étape de votre voyage. Compostez-le pour révéler les informations détaillées du point de destination.',
    
    billet1_Title: "Billet N°1 : Le Point d'Origine",
    billet1_Trajet: 'Gare de La Teste-de-Buch',
    billet1_Motif: "L'origine de l'histoire (1841)",
    billet1_Recit: "Votre exploration commence au kilomètre zéro de l'histoire du Bassin. Cette gare, inaugurée en 1841, est la plus ancienne de France encore en service. Avant les plages et le tourisme, il y avait l'industrie. Cette ligne n'a pas été conçue pour les voyageurs, mais pour désenclaver la région et transporter la ressource qui a tout changé : le bois de la forêt qui nous entoure.", // <-- VIRGULE AJOUTÉE

    billet2_Title: 'Billet N°2 : Le Cœur de la Ressource',
    billet2_Trajet: 'Forêt Usagère (Pique-nique)',
    billet2_Motif: "La source de l'industrie",
    billet2_Recit: "Vous êtes au cœur de la raison d'être du train. Cette forêt de pins, plantée au 19ème siècle pour stabiliser les dunes, est devenue le moteur économique de la région. C'est elle qui fournissait le bois pour les traverses de chemin de fer et la résine pour l'industrie, justifiant la création de la ligne que nous suivons. C'est l'endroit parfait pour notre pause déjeuner.", // <-- VIRGULE AJOUTÉE

    billet3_Title: "Billet N°3 : L'Autre Rail",
    billet3_Trajet: 'Gujan-Mestras (Les 7 Ports)',
    billet3_Motif: "La capitale de l'ostréiculture",
    billet3_Recit: "Bienvenue dans la 'Capitale de l'Ostréiculture'. Si la ligne de La Teste transportait le bois, Gujan a développé son propre réseau parallèle : un 'tramway des huîtres', souvent tiré par des chevaux, reliait les sept ports de la ville pour transporter les précieuses 'perles' du Bassin. Une autre histoire de rails, dédiée cette fois à la gastronomie.", // <-- VIRGULE AJOUTÉE

    billet4_Title: 'Billet N°4 (Terminus) : Connexion Terre-Mer',
    billet4_Trajet: 'Port du Teich',
    billet4_Motif: 'La fin de la ligne',
    billet4_Recit: "Notre exploration s'achève ici, au point de connexion vital où le train et le bateau ne faisaient qu'un. Les rails encore visibles, incrustés dans le sol du port, témoignent de cette logistique passée. Le bois de la forêt arrivait ici pour être chargé sur les bateaux. C'est le point final de notre itinéraire ferroviaire, un lieu de travail intense rendu au silence et à la nature.", // <-- VIRGULE AJOUTÉE
    
    // --- Phase 3: Après (Contenu caché) ---
    archiveTitle: 'Historique de votre voyage "Évasion"',
    galleryTitle: '// Galerie de souvenirs',
    galleryDesc: 'Les archives photographiques de votre voyage.',
    guestbookTitle: '// Livre d\'or',
    guestbookDesc: 'Laissez un mot sur l\'expérience "Nathan Inc.".',
    
    // --- Easter Eggs (Navigation) ---
    navServices: 'Nos services sont actuellement entièrement dédiés à votre réservation, M. Soum. Aucune autre demande ne sera traitée.',
    navVoyages: 'Tous les autres voyages sont suspendus pour assurer la pleine réussite de "l\'Opération Évasion".',
    navContact: 'Votre chef de bord, Nathan Grondin, est votre unique point de contact. Vous savez déjà comment le joindre. 😉'
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
        "nav-services-3", "nav-voyages-3", "nav-contact-3"
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
                    startCountdown("2025-11-15T09:00:00");
                    startNotificationEngine(); 
                    setupBilletLogic(); // NOUVEL APPEL
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
            document.getElementById("briefing-samedi").innerText = SITE_CONTENT.briefingSamedi;
            document.getElementById("briefing-dimanche").innerText = SITE_CONTENT.briefingDimanche;
            document.getElementById("locked-message").innerText = SITE_CONTENT.lockedMessage;
            
            // Pré-remplir Phase 2 (cachée)
            document.getElementById("jukebox-title").innerText = SITE_CONTENT.jukeboxTitle;
            document.getElementById("jukebox-desc").innerText = SITE_CONTENT.jukeboxDesc;
            document.getElementById("billets-title").innerText = SITE_CONTENT.billetsTitle;
            document.getElementById("billets-desc").innerText = SITE_CONTENT.billetsDesc; 
            
            // Billet 1
            document.getElementById("billet-1-title").innerText = SITE_CONTENT.billet1_Title;
            document.getElementById("billet-1-trajet").innerText = SITE_CONTENT.billet1_Trajet;
            document.getElementById("billet-1-motif").innerText = SITE_CONTENT.billet1_Motif;
            document.getElementById("billet-1-recit").innerText = SITE_CONTENT.billet1_Recit;
            
            // Billet 2
            document.getElementById("billet-2-title").innerText = SITE_CONTENT.billet2_Title;
            document.getElementById("billet-2-trajet").innerText = SITE_CONTENT.billet2_Trajet;
            document.getElementById("billet-2-motif").innerText = SITE_CONTENT.billet2_Motif;
            document.getElementById("billet-2-recit").innerText = SITE_CONTENT.billet2_Recit;
            
            // Billet 3
            document.getElementById("billet-3-title").innerText = SITE_CONTENT.billet3_Title;
            document.getElementById("billet-3-trajet").innerText = SITE_CONTENT.billet3_Trajet;
            document.getElementById("billet-3-motif").innerText = SITE_CONTENT.billet3_Motif;
            document.getElementById("billet-3-recit").innerText = SITE_CONTENT.billet3_Recit;
            
            // Billet 4
            document.getElementById("billet-4-title").innerText = SITE_CONTENT.billet4_Title;
            document.getElementById("billet-4-trajet").innerText = SITE_CONTENT.billet4_Trajet;
            document.getElementById("billet-4-motif").innerText = SITE_CONTENT.billet4_Motif;
            document.getElementById("billet-4-recit").innerText = SITE_CONTENT.billet4_Recit;
            
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
            lockedSection.style.transition = "opacity 0.5s ease-out";
            lockedSection.style.opacity = "0";
            
            setTimeout(() => {
                lockedSection.style.display = "none";
                phase2Section.style.display = "block";
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
                // TRANSITION VERS LA PHASE 2 (Test)
                triggerPhase2Transition();
            } else if (distance < 0) {
                 // Le temps est écoulé
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
    // LOGIQUE DE COMPOSTAGE DES BILLETS
    // ===============================================
    function setupBilletLogic() {
        const billets = [
            { id: 1, btnId: 'composter-1', cardId: 'billet-1', recitId: 'billet-1-recit', nextBilletId: 'billet-2' },
            { id: 2, btnId: 'composter-2', cardId: 'billet-2', recitId: 'billet-2-recit', nextBilletId: 'billet-3' },
            { id: 3, btnId: 'composter-3', cardId: 'billet-3', recitId: 'billet-3-recit', nextBilletId: 'billet-4' },
            { id: 4, btnId: 'composter-4', cardId: 'billet-4', recitId: 'billet-4-recit', nextBilletId: null }
        ];

        billets.forEach(billet => {
            const compostButton = document.getElementById(billet.btnId);
            if (compostButton) {
                compostButton.addEventListener('click', function() {
                    console.log(`Billet ${billet.id} composté.`);
                    
                    // 1. Marquer le billet comme utilisé
                    const card = document.getElementById(billet.cardId);
                    card.classList.add('used');
                    
                    // 2. Désactiver le bouton
                    this.disabled = true;
                    this.innerText = 'Billet composté';
                    
                    // 3. Révéler le récit (info-bulle)
                    const recit = document.getElementById(billet.recitId);
                    recit.style.display = 'block';
                    
                    // 4. Révéler le billet suivant (s'il existe)
                    if (billet.nextBilletId) {
                        const nextBillet = document.getElementById(billet.nextBilletId);
                        nextBillet.style.display = 'block';
                        // Optionnel: Faire défiler jusqu'au nouveau billet
                        nextBillet.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            }
        });
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