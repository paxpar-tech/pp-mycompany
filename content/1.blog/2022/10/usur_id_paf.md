---
model: article
image: https://media.paxpar.tech/PAF-cas-u1-1170x694.png
description: 📖 Lire l'article
createdAt: 2022-10-31
---

# PAF Et Usurpation D'Identité ?

![PAF](https://media.paxpar.tech/PAF-cas-u1-1170x694.png)
|[]|[]| []
----|-----------|-----
[Valérie SUIGNARD](/actor/valerie)|31 ocotobre 2022|Confiance, Contrôle| 

## PAF et Usurpation d’Identité ?
 
## Pour rappel, la PAF c’est quoi (en bref) ?
La Piste d’Audit Fiable, c’est pouvoir prouver qu’une facture correspond à une vraie vente d’un produit ou d’un service, que le flux est maîtrisé et sécurisé de bout en bout.

 
## PAF, un cas d’usage avec détection d’une fraude :
En résumé : Le client modifie volontairement la quantité des produits livrés. Cette modification casse la signature initialement appliquée par l’entreprise fournisseur. Le client décide d’imiter la signature électronique sur le bon de livraison et ainsi pouvoir réclamer l’envoi des pièces « manquantes ».

 
## Piste d’Audit Fiable et scénario, plantons le décor :
Imaginons un institut de beauté, l’institut CYBEAU (client). La responsable du magasin, Peggy Moine, commande des produits cosmétiques phares pour son institut. La tendance en ce moment est aux produits cosmétiques à base d’algues marines. C’est donc auprès de son fournisseur, la société d’algues marine THOLGA que Peggy passe commande.

Elle signe électroniquement le bon de commande et l’envoie à la responsable Client du service achat de THOLGA, Zina Doucet.

Zina Doucet, la responsable achat de THOLGA, signe électroniquement le bon de commande (BC) à réception et donne l’ordre d’exécuter cette commande.

![Bon de commande](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d-BC_peggy-zina-509x694.png)
THOLGA prépare la livraison, celle-ci est maintenant sur le départ, alors Zina génère le bon de livraison (BL) et le signe. Il ne faut pas longtemps à Peggy pour réceptionner la livraison en bonne et due forme. Cette livraison correspond en tous points à la commande initiale… Elle signe donc le BL à son tour et le renvoie à Zina.

![Bon de Livraison](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d-BL_zina-peggy-507x694.png)
Zina génère et signe la facture (FA). Elle crée le fichier PAF comprenant : FA, BC, et BL. Elle envoie le fichier PAF à Peggy.

## Piste d’Audit Fiable et scénario, parlons de la fraude :
Peggy décide de garder quelques produits, elle en ponctionne dans le carton qui vient de lui être livré pour en revendre sous le manteau… Elle modifie volontairement la quantité de produits livrés sur le Bon de Livraison, cette action casse la signature électronique de Zina.

Qu’à cela ne tienne, Peggy contrefait la signature de Zina sur le BL. Ensuite elle le signe à nouveau en son nom propre. Cette action a nécessairement altéré la signature apposée par Zina sur le PDF maître (celui de la facture)… Peggy contrefait à nouveau la signature de Zina sur la FA cette fois-ci.

Peggy indique à Zina qu’elle ne signera électroniquement le fichier PAF et qu’elle ne réglera la facture, que lorsque les produits « manquants » lui seront livrés, elle renvoie le fichier PAF à Zina.

 
## Piste d’Audit Fiable et vérification des données sous paxpar :
 
Zina regarde le fichier pdf que Peggy lui transmet. À l’œil nu, tout semble correct.

![facture pdf](https://paxpar.tech/site/wp-content/uploads/2022/10/1201b_1201d_comparaison.png)

Zina vérifie les signatures électroniques sous adobe : tout est au vert.

![PDF](https://paxpar.tech/site/wp-content/uploads/2022/11/1201d_signature-usurpee-verte-dans-adobe-1100x694.png)
Zina dépose le fichier pdf que Peggy lui transmet dans la zone de dépôt de la plateforme paxpar.

Tout comme adobe, paxpar indique que les signatures électroniques sont recevables (et elles le sont ! Peggy a utilisé un moyen parfaitement légal et authentique pour signer). Paxpar va plus loin puisque la plateforme analyse également les signatures électroniques des pdfs qui sont embarqués (BC et BL). Le premier point de contrôle de l’analyse est vert, les signatures étant toutes des signatures électroniques valables.

![CheckList](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d-module1_signature-OK-1100x694.png)
En revanche, paxpar détecte plusieurs anomalies :

paxpar compare les données renseignées sur les 3 documents BC/BL/FA **et détecte donc la quantité modifiée sur le bon de livraison.**
![CheckList suite](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d_qte-modif-detectee-1100x694.png)
Paxpar indique à Zina que parmi les signatures présentes sur le Bon de Livraison et sur la facture, aucune ne correspond à sa clé publique et elle n’en est donc pas l’auteur. L’usurpation d’identité a été détectée.
![CheckList fin](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d_usurp-signature-detectee.png)

## PAF et paxpar
La plateforme paxpar va vous permettre de vérifier que votre Piste d’Audit Fiable est

-complète
-et conforme à vos exigences métier.

## Analyse globale de votre facture
paxpar analyse votre PDF auto-suffisant (c’est à dire que paxpar analyse le PDF facture, ainsi que les pièces jointes : Bon de Commande et Bon de Livraison).

1. paxpar vous indique si votre facture est un PDF/A, si c’est au fromat factur-X.
1. paxpar vous indique quelles sont les caractéristiques de votre fichier pdf, s’il a des pièces jointes, s’il est signé électroniquement.
1. paxpar procède à une analyse récursive des pièces jointes (de telle sorte que vous obtenez les mêmes informations concernant lesdites pièces jointes).
1. paxpar vous indique le nombre de signatures électroniques, de signataires,
1. paxpar vous affiche les certificats de signature.
1. paxpar signale toute anomalie, en particulier si le document pdf a été annoté après signature.

## Analyse de conformité de votre facture
Après l’analyse globale de votre facture, paxpar procède à une analyse en fonction de points de contrôles spécifiques.

Pour la PAF :

1. paxpar valide ou invalide la présence des pièces comptables attendues ;
1. paxpar extrait les données fournisseur ;
1. paxpar extrait les données client ;
1. paxpar vérifie la conformité facture :
- paxpar s’assure que le numéro figurant sur les BC, les BL et la facture est identique,
- paxpar s’assure que les références produits sont identiques sur toutes les pièces,
- paxpar s’assure de la conformité TVA,
- paxpar s’assure de la cohérence de l’adresse de livraison renseignée sur les BC, BL et la facture).
1. paxpar compare l’IBAN renseigné dans les données factur-x avec l’IBAN fournisseur de votre logiciel de gestion ;
1. paxpar s’est déjà assuré que les signatures électroniques présentes sur la facture sont valables ou non. Si elles le sont, alors paxpar vérifie également que les signatures apposées sont celles des signataires attendus que ce soit pour votre entreprise ou pour celle de votre fournisseur ou client, en comparant les clés publiques, nom et adresse e-mail du signataire.
Dès lors que paxpar détecte une incohérence, alors un blason rouge s’allume, attirant ainsi votre attention.

## Piste d’Audit Fiable complète et conforme à vos exigences métier ?
Un Glisser-déposer puis la simple lecture du résultat sous paxpar :

- PAF validée ou
- point de contrôle critique signalé,

**C’est aussi simple que ça, tout en un seul click.**

## Venez essayer par vous-même : cliquer sur Test gratuit.
ou nous contacter sur : **info@paxpar.tech**