@echo off
cls
echo.
echo [Nathan Inc. Deploy Script]
echo ====================================
echo.

:: 1. Demander le message de mise a jour (ce qui a change)
set /p commit_message="Entrez votre message de mise a jour (ex: 'Ajout Billet 5'): "

:: Verifier si le message est vide
if "%commit_message%"=="" (
    echo.
    echo ERREUR: Vous devez entrer un message.
    echo Deploiement annule.
    pause
    exit /b
)

:: 2. Ajouter tous les fichiers (HTML, CSS, JS, assets)
echo.
echo [1/3] Ajout des fichiers...
git add .

:: 3. Creer le "commit" (un instantane des modifications)
echo [2/3] Creation du commit...
git commit -m "%commit_message%"

:: 4. Pousser sur GitHub
:: C'EST CETTE COMMANDE QUI DECLENCHE LE DEPLOIEMENT CLOUDFLARE
echo [3/3] Deploiement en cours sur GitHub (Cloudflare va detecter)...
git push origin main

echo.
echo ====================================
echo.
echo Deploiement termine !
echo.
echo Cloudflare est en train de mettre a jour votre site.
echo (Cela peut prendre 1 a 2 minutes.)
echo.
pause