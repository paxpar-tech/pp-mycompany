# Test3

Hello

::card-grid
#title
Accès rapide
#default
  :button-link[Vérifiez votre dossier]{icon="IconStackBlitz" href="/check" blank}
  :button-link[Générez votre dossier]{icon="IconStackBlitz" href="/craft?id=common.custom.secure.mes_valise_secure.base.craftform" blank}
  :button-link[Générez d'autres documents]{icon="IconStackBlitz" href="/gallery/craftform" blank}
::


test accès [/data/check/ffx_total_131_ko.json](/data/check/ffx_total_131_ko.json)


::ppw-showcase-check
---
pdfs:
  - url: "/data/pdf/tholga_FA-1202b.pdf"
    check_result: "/data/check/ffx_total_131_ko.json"
    name: "Facture TEST"
    conversation:
        - valerie: "Je dépose simplement le pdf en faisant un drag and drop"
        - valerie: "La checklist indique immédiatement les points non conformes en mettant un statut rouge. Dans ce cas là, paxpar indique que le pdf n'est pas signé. La plateforme utilise les métadonnées Factur-X, vérifie les différents calculs et indique ici qu'il y a une erreur dans le calcul de TVA."
---
::




test accès [/data/check/_cl_paf_1201c.yaml](/data/check/_cl_paf_1201c.yaml)

::ppw-showcase-check
---
pdfs:
  - url: "/data/pdf/tholga_FA-1202b.pdf"
    check_result: "/data/check/_cl_paf_1201c.yaml"
    name: "Facture TEST"
    conversation:
        - valerie: "Je dépose simplement le pdf en faisant un drag and drop"
        - valerie: "La checklist indique immédiatement les points non conformes en mettant un statut rouge. Dans ce cas là, paxpar indique que le pdf n'est pas signé. La plateforme utilise les métadonnées Factur-X, vérifie les différents calculs et indique ici qu'il y a une erreur dans le calcul de TVA."
---
::

## ffx

::ppw-chat-conversation
---
conversation:
    - valerie: "Voici 3 pdfs, qu'en pensez-vous ?"
    - patrick: "Ils semblent corrects !"
    - valerie: "Et pourtant un seul est conforme"
    - patrick: "Pouvez-vous m'aider à trouver le bon ?"
---
::

::ppw-pdf-links
---
pdfs:
  - url: "/data/pdf/ffx_total_106.pdf"
  - url: "/data/pdf/ffx_total_131.pdf"
  - url: "/data/pdf/ffx_total_186.pdf"
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Il suffit simplement de déposer les PDFs dans la dropzone et la checklist vous indique à l'aide de couleur de statut si c'est conforme ou pas. La plateforme utilise les métadonnées pour vérifier les différents points métiers"
---
::

::ppw-showcase-check
---
pdfs:
  - url: "/data/pdf/ffx_total_106.pdf"
    check_result: "/data/check/_cl_ffx_106.json"
    name: "Facture total_106"
    conversation:
        - valerie: "La checklist indique un statut rouge. Le pdf n'est pas signé par la bonne personne(la signature a été usurpée) et l'Iban a été modifié."
  - url: "/data/pdf/ffx_total_131.pdf"
    check_result: "/data/check/_cl_ffx_131.json"
    name: "Facture total_131"
    conversation:
        - valerie: "La checklist indique un statut rouge. Le pdf n'est pas au format factur-X."
  - url: "/data/pdf/ffx_total_186.pdf"
    check_result: "/data/check/_cl_ffx_186.json"
    name: "Facture total_186"
    conversation:
        - valerie: "La checklist indique un statut vert. Le pdf est conforme."        
---
::

## PAF

::ppw-chat-conversation
---
conversation:
    - valerie: "Voici 4 pdfs, qu'en pensez-vous ?"
    - patrick: "Ils semblent corrects !"
    - valerie: "Et pourtant un seul est conforme"
    - patrick: "Pouvez-vous m'aider à trouver le bon ?"
---
::


::ppw-pdf-links
---
pdfs:
  - url: "/data/pdf/tholga_FA-1201b.pdf"
  - url: "/data/pdf/tholga_FA-1201c.pdf"
  - url: "/data/pdf/tholga_FA-1201d.pdf"
  - url: "/data/pdf/tholga_FA-1201e.pdf"  
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Il suffit simplement de déposer les PDFs dans la dropzone et la checklist vous indique à l'aide de couleur de statut si c'est conforme ou pas. La plateforme utilise les métadonnées pour vérifier les différents points métiers"
---
::    

::ppw-showcase-check
---
pdfs:
  - url: "/data/pdf/tholga_FA-1201b.pdf"
    check_result: "/data/check/_cl_paf_1201b.json"
    name: "PAF_1201b"
    conversation:
        - valerie: "Le PDF 1201b est correct. Tous les statuts sont verts."
  - url: "/data/pdf/tholga_FA-1201c.pdf"
    check_result: "/data/check/_cl_paf_1201c.yaml"
    name: "PAF_1201c"
    conversation:
        - valerie: "La checklist indique un statut rouge.Il manque le bon de livraison. Le PDF 1201c n'est pas correct"
  - url: "/data/pdf/tholga_FA-1201d.pdf"
    check_result: "/data/check/_cl_paf_1201d.yaml"
    name: "PAF_1201d"
    conversation:
        - valerie: "La checklist indique un statut rouge. Le PDF bon de livraison a été modifié et la signature sur la facture usurpée."
  - url: "/data/pdf/tholga_FA-1201e.pdf"
    check_result: "/data/check/_cl_paf_1201e.yaml"
    name: "PAF_1201e"
    conversation:
        - valerie: "La checklist indique un statut rouge. La référence du produit xx n'est pas la même sur tous les documents."
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Autres exemples de PDFs non conformes"
---
:: 
 
::ppw-showcase-check
---
pdfs: 
  - url: "/data/pdf/tholga_FA-1202b.pdf"
    check_result: "/data/check/_cl_paf_1202b.yaml"
    name: "PAF_1202b"
    conversation:
        - valerie: "La checklist indique immédiatement les points non conformes en mettant un statut rouge. Dans ce cas là, mycompany indique que le produit xx n'a pas le même prix sur les différents documents." 
  - url: "/data/pdf/tholga_FA-1203b.pdf"
    check_result: "/data/check/_cl_paf_1203b.yaml"
    name: "PAF_1203b"
    conversation:
        - valerie: "La checklist indique immédiatement les points non conformes en mettant un statut rouge. Dans ce cas là, mycompany indique que la facture est adressée en Chine (pas de TVA), mais les produits ont été livrés en France"                       
---
::

## Valise

::ppw-showcase-check
---
pdfs:
  - url: "/data/pdf/dos_ent_alcove.pdf"
    check_result: "/data/check/_cl_dos_ent_alcove.yaml"
    name: "dos_entr_alcove"
    conversation:
        - valerie: ""
  - url: "/data/pdf/val_mis_eu.pdf"
    check_result: "/data/check/_cl_val_mis_euc.yaml"
    name: "val_mis_eu"
    conversation:

---
::

































Cré