/**
 * Envoie un rapport quotidien par email à l'équipe définie.
 * @author Fabrice Faucheux
 */
const envoyerRapportQuotidien = () => {
  try {
    // Configuration des paramètres
    const configurationEmail = {
      destinataire: "equipe@xyz.com",
      sujet: `Rapport Quotidien - ${new Date().toLocaleDateString('fr-FR')}`,
      corps: `Bonjour,
      
Veuillez trouver ci-dessous les mises à jour du jour.

Cordialement,
Le système automatisé.`
    };

    const { destinataire, sujet, corps } = configurationEmail;

    // Envoi de l'email via le service MailApp
    MailApp.sendEmail({
      to: destinataire,
      subject: sujet,
      body: corps
    });

    console.log(`Succès : Email envoyé à ${destinataire}`);

  } catch (erreur) {
    console.error(`Erreur critique lors de l'envoi : ${erreur.stack}`);
  }
};
