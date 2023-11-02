# Test Création de che

::ppw-showcase-check
---
pdfs:
  - url: "/data/pdf/tholga_FA-1202b.pdf"
    check_result: "/data/check/paf_1201b.json"  
    name: "TEST_1"   
---
::



::ppw-showcase-check
---
conversation:
  - valerie: "Tu arrives sur la dropzone d'analyse"
  - valerie: "Et là,reprenons ton pdf validé par ChorusPro."
  - valerie: "Je le dépose simplement en faisant un drag and drop"
pdfs:
  - url: "/data/pdf/tholga_FA-1202b.pdf"
    check_result: "/data/check/_cl_paf_1201c"  
    name: "TEST_2"
    conversation:
        - valerie: "Je le dépose simplement en faisant un drag and drop"
        - valerie: "La checklist t'indique immédiatement les points non conformes en mettant un statut rouge. Dans ce cas là, VérifTonDoc indique que le pdf n'est pas signé. La plateforme utilise les métadonnées Factur-X, vérifie les différents calculs et t'indique ici qu'il y a une erreur dans le calcul de TVA."
---
::