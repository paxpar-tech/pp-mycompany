---
model: article
image: https://media.paxpar.tech/PAF_cas-u3-1170x694.png
description: 📖 Lire l'article
createdAt: 2022-12-07
---

# Piste d'Audit Fiable (PAF) Et Document Manquant
![PAF](https://media.paxpar.tech/PAF_cas-u3-1170x694.png)
|[]|[]| []
----|-----------|-----
[Valérie SUIGNARD](/actor/valerie)|7 décembre 2022|Conformité,Contrôle| 

## Pour rappel, la PAF c’est quoi (en bref) ?
La Piste d’Audit Fiable, c’est pouvoir tracer la vie d’une facture, entre autre parce qu’une facture n’est pas un document isolé, c’est le dernier document d’un processus correspondant à une réalité : une facture n’est générée que parce qu’elle est l’aboutissement d’un processus d’achat/vente. La PAF prouve que la facture est le résultat d’une vente réelle d’un bien ou d’un service en y associant tous les documents qui prouvent cette réalité.

## PAF, un cas d’usage où l’un des documents nécessaire à la constitution de la PAF est manquant :
En résumé : un client, qui se fournit régulièrement en produits cosmétiques auprès d’une société d’algues marines, a choisi, par souci de transparence auprès de ses clients, d’être très strict sur la qualité des produits qu’il propose. L’institut demande donc à ce que des analyses de laboratoire soit jointes pour une catégorie précise de produits.

## PAF et scénario

### Plantons le décor :
L’institut de beauté CYBEAU (client) commande des produits cosmétiques à son fournisseur, la société d’algues marines THOLGA. Les produits commandés sont de natures diverses (de la crème pour bébé, une crème de nuit, une lotion anti-UV…). Certains produits en vente chez THOLGA sont catégorisés “DERMA”. C’est dans ce cas précis que le Service Qualité de l’institut CYBEAU demande à son fournisseur de systématiquement joindre les résultats d’analyses en laboratoire pour ses produits.

### Parlons du risque lié à une PAF incomplète :
L’institut Cybeau a défini des critères de qualité pour les produits qu’il utilise et vend dans son institut. Il tient particulièrement à ces critères vis à vis de ses clients : c’est à la fois un gage de qualité et une manière de garantir la traçabilité des produits pour un plus grand respect de ses clients.

Si la PAF est incomplète, alors, en cas de réclamation, l’institut Cybeau ne pourra pas apporter la preuve du respect de sa Charte Qualité. Une PAF complète est donc indispensable pour une totale traçabilité.

Dans le cas d’usage que nous allons voir ensemble, CYBEAU envoie un bon de commande signé par Peggy Moine, la responsable Client.

Zina Doucet, la responsable achat de THOLGA, signe à réception le bon de commande (BC) et donne l’ordre d’exécuter cette commande.

![Bon de commande](https://paxpar.tech/site/wp-content/uploads/2022/11/1301a-BC_peggy-zina-720x694.png)

THOLGA prépare la livraison… Si tôt prête, Zina génère le bon de livraison (BL), le signe et le fait parvenir à Peggy. À réception du colis, elle contresigne le BL et le renvoie à qui de droit.

![Bon de livraison](https://paxpar.tech/site/wp-content/uploads/2022/11/1301a-BL_zina-peggy-720x694.png)

Zina peut désormais générer et signer la facture (FA), puis créer le dossier PAF comprenant : FA, BC, BL et toute(s) autre(s) pièce(s) utile(s) au dossier. Zina fait parvenir le dossier PAF à son responsable, Patrick Dupont, pour signature avant envoi au client.

## PAF et vérification des données sous paxpar :

À réception de la PAF, Peggy vérifie sa conformité vis-à-vis du service Qualité CYBEAU avant de payer la facture.

La plateforme paxpar lui indique que la feuille d’analyses du produit DERMA (Tube de crème de nuit anti-rides) est manquante.

[CheckList](https://paxpar.tech/site/wp-content/uploads/2022/11/1301a_chkl_cqp-ko.png)

## Les spécificités de la plateforme paxpar
### PAF et paxpar
La plateforme paxpar va vous permettre de vérifier que votre Piste d’Audit Fiable est :

- complète
- et conforme à vos exigences métier.
### Analyse globale de votre facture
paxpar analyse votre PDF auto-suffisant (c’est-à-dire que paxpar analyse le PDF facture, ainsi que les pièces jointes : Bon de Commande et Bon de Livraison).

1. paxpar vous indique si votre facture est un PDF/A, si c’est au format factur-X.
1. paxpar vous indique quelles sont les caractéristiques de votre fichier pdf, s’il a des pièces jointes, s’il est signé électroniquement.
1. paxpar procède à une analyse récursive des pièces jointes (de telle sorte que vous obtenez les mêmes informations concernant lesdites pièces jointes).
1. paxpar vous indique le nombre de signatures électroniques, le nombre de signataires,
1. paxpar vous affiche les certificats de signature.
paxpar signale toute anomalie, en particulier si la document pdf a été annoté après signature.
### Analyse de conformité de votre facture
Après l’analyse globale de votre facture, paxpar procède à une analyse en fonction de points de contrôles spécifiques.

Pour la PAF :

1. paxpar valide ou invalide la présence des pièces comptables attendues ;
1. paxpar extrait les données fournisseur ;
1. paxpar extrait les données client ;
1. paxpar vérifie la conformité facture :
1. paxpar s’assure que le numéro figurant sur les BC BL et la facture est identique,
1. paxpar s’assure que les références produits sont identiques sur toutes les pièces,
1. paxpar s’assure de la conformité TVA,
1. paxpar s’assure de la cohérence de l’adresse de livraison renseignée sur les BC, BL et la facture.
1. paxpar compare l’IBAN renseigné dans les données factur-x avec l’IBAN fournisseur de votre logiciel de gestion ;
1. paxpar s’est déjà assuré que les signatures électroniques présentes sur la facture sont valables ou non. Si elles le sont, alors paxpar vérifie également que les signatures apposées sont celles des signataires attendus que ce soit pour votre entreprise ou pour celle de votre fournisseur ou client, en comparant les clés publiques, nom et adresse e-mail du signataire.
paxpar vérifie que les conformités métiers sont respectées et signale tout document manquant tel des tableurs (analyses de laboratoire par exemple).

Dès lors que paxpar détecte une incohérence, un blason rouge s’allume automatiquement.

### PAF complète et conforme à vos exigences métier ?
Un Glisser-déposer puis la simple lecture du résultat sous paxpar :

- PAF validée ou
- point critique signalé.

**C’est aussi simple que ça.**

## Nous contacter ? Une démo ?
**info@paxpar.tech**

**C’est aussi simple que ça.**