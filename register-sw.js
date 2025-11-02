// register-sw.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker enregistré avec succès:', registration.scope);
                
                // Tenter de mettre à jour le SW à chaque chargement de page
                registration.update();
            })
            .catch(error => {
                console.log('Échec de l\'enregistrement du ServiceWorker:', error);
            });
    });
}