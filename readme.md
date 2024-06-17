# Module : Projet fil rouge - Développement front-end

## Modéliser la partie front d'un site à partir d'un brief client

- [ ] Recueillir les besoins du client (CDC)
- [ ] Réaliser un zoning
- [ ] Faire le wireframe
- [ ] Le Mockup
- [ ] Le prototype

### Comprendre et modéliser le projet du client

[Cahier des charges](./CDC_Quai_Antique.pdf)
*Merci de bien prendre en compte ce CDC*

### Modules

- **Connexion**
  - Users : Administrateur, Clients
  - Admin déja créé en BDD
  - Le *Clients* créé via le module inscription
  - **Mode de connexion:** Email + password

- **Inscriptions**
  - Utilisateurs concernés: Visiteurs, Clients
  - Un visiteur peut créer un compte client
  - Les champs :
    - Nom
    - Prénom
    - Email
    - Password
    - Convives par défaut
    - Mention allergies?
  - Nb convives et allergies pré remplies si client se connecte sans mentionner.


- **Définir les info du restaurant:**
  - User : Administrateur
    - horaires d'ouverture du service
    - nombre de couverts possibles
    - Service = 2h, possible définir 2 services : midi et soir
    - Ouvert du mardi au Dimanche, jours **non paramétrable**
    - pouvoir changer le nombre de convives


- **Créer une galerie d'images**
  - User : Admin
  - Ajout, modif, delete photo dans espace admin
  - Titre au survole de la photo
  - juste apres la galerie, **bouton réserver table**


- **Gérer les plats de la carte:**
  - user : admin
  - une liste rangé par catégorie : entrée, plat, desserts etc
  - catégorie simple titre
  - plats : titre, description, prix, catégorie?


- **Gérer les menus:**
  - user : admin
  - pour chaque menu :
    - titre
    - descriptif = liste des plats dans le menu
    - prix


- **Afficher la carte**
  - users : tous
  - afficher la carte complète
    - d'un coté les plats a la carte
    - de lautre les menus


- **Réserver une table**
  - users : visiteur, client
  - formulaire
    - nombre de couverts
    - date
    - heure par tranche de 15min
    - limiter au nombre de convive max décrit plus tot
  - seul client peut réserver, proposer inscription ou connexion au moment de réserver


- **Gérer les réservations**
  - users : admin
  - voir toutes les résa au jour le jour
  - supprimer ou modifier une résa


- **Gérer ses réservations**
  - users : client
  - voir toutes ses résa
  - modifier ou supprimer une résa


- **Modifier ses données personnelles**
  - users : client
  - modifier info et delete compte s'il le souhaite
