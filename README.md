# 📧 Rapport quotidien automatisé (Google Apps Script)

> Un script robuste et moderne pour l'envoi automatisé de rapports par email via l'écosystème Google Workspace.

Ce projet contient une solution clé en main pour générer et envoyer des emails de rapport à une liste de diffusion définie. Il est développé en **JavaScript moderne (ES6+)** pour le moteur V8 de Google Apps Script.

---

## 👤 Auteur
**Fabrice Faucheux** 

## ✨ Fonctionnalités clés

* **Syntaxe Moderne** : Utilisation exclusive d'ES6+ (`const`, `let`, Fléchées, Template Literals) pour une maintenance aisée.
* **Robustesse** : Gestion des erreurs intégrée (`try...catch`) pour éviter les échecs silencieux.
* **Dynamisme** : Injection automatique de la date du jour dans l'objet de l'email.
* **Propreté** : Code structuré et documenté (JSDoc).

## 🚀 Installation (Méthode manuelle)

Si vous n'utilisez pas CLASP, suivez ces étapes simples pour déployer le script :

1.  Rendez-vous sur [Google Apps Script](https://script.google.com/).
2.  Cliquez sur **"Nouveau projet"**.
3.  Nommez le projet : `Rapport Quotidien`.
4.  Ouvrez le fichier `Code.gs` (par défaut).
5.  Copiez le contenu du fichier `src/Code.js` de ce dépôt et collez-le dans l'éditeur Google.
6.  Sauvegardez (`Ctrl + S` ou `Cmd + S`).

## ⚙️ Configuration

Toute la configuration se trouve au début de la fonction principale dans l'objet `configurationEmail`.

Modifiez les valeurs suivantes selon vos besoins :

```javascript
const configurationEmail = {
  destinataire: "votre-equipe@domaine.com", // L'adresse de réception
  sujet: `...`,                             // Le format du sujet
  corps: `...`                              // Le contenu du message
};
