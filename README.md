Moving Mate - Web App
========================

Bienvenue à Moving Mate app - Créé avec Symfony 3.3.10.

Quoi de neuf ?
-------------

Symfony contient un certain nombre de bundle de base, à cela s'ajoute pour le moment les bundles ci-dessous:

- FosUserBundle (packagist: gestion des user),
- UserBundle (perso: il override FosUser),
- VichUploader (packagist: gestion upload image),
- FosJsRouting (packagist: gestion des routes js) 
- ... d'autre vont s'ajouter (JWT, fosrest, ...)

Executer l'app
-------------

1) Cloner le projet puis entrer dans le projet:

> git clone git@gitlab.com:victorgarciaparis13/MovingMate.git

2) Entrer dans le dossier du projet :

> cd MovingMate

3) Executer l'installation des bundles via composer puis renseigner les informations :

> composer install

4) Lancer les commandes suivantes: 

> alias sf3='php bin/console'

> sf3 doctrine:schema:update --force {sf3 doctrine:schema:create}

> sf3 assets:install web

> sf3 server:run

5) Vous pouvez vous connecter à l'adresse suivante **localhost:8000**


