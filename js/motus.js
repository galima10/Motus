// Récupérez l'élément audio par son ID
const audiobpl = document.getElementById('audiobpl');
const audiompl = document.getElementById('audiompl');
const audiopp = document.getElementById('audiopp');






const input2 = document.querySelector("#inputchoix");
var focustf = false;
var focus2 = true;


// Empêcher la perte de focus lorsque l'utilisateur clique ailleurs sur la page
document.addEventListener('click', function(event2) {
  if (focus2==true){
    if (event2.target !== input2) {
      input2.focus();
  }
  } else if (focus2==false){
    input2.blur();
  }
    
});



      input2.addEventListener('input', function(event2) {
        var texteinput = event2.target.value;

        

        if (texteinput.length>12){
          var nouvelleValeur = texteinput.substring(0, texteinput.length - 1);
        
        // Réaffectez la valeur à l'input
        input2.value = nouvelleValeur;
          document.querySelector(".motpaslong").textContent = "(le mot est trop long)";
      setTimeout(() => {
        document.querySelector(".motpaslong").classList.add("op0")
      }, 2000);
      
      setTimeout(() => {
        document.querySelector(".motpaslong").textContent = "";
        document.querySelector(".motpaslong").classList.remove("op0")
      }, 2100 + 1500);
        }
      })

input2.addEventListener('keydown', function(event1) {
  if (event1.key === 'Enter') {
    var texteinput = event1.target.value;

    if (texteinput.length>4){
      input2.blur()
    
      document.querySelector("#texte1").textContent = texteinput;
      document.querySelector(".choix").classList.add("none");
      document.querySelector("#input").focus();
      focus2 = false;
      focustf = true;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      const largeurtexte1 = document.querySelector("#texte1").textContent.length;
      const input1 = document.querySelector("#input");
      input1.maxLength = largeurtexte1;
      
      
      var widthgrille = (largeurtexte1 * 66)+ "px";
      
      
      const touslescontainer = document.querySelectorAll(".lettres-container");
      
      touslescontainer.forEach(element=>{
        element.style.width = widthgrille;
      })
      
      var texteentrée = document.querySelector("#texte1").textContent ;
      var motcaché = texteentrée
      var mot = texteentrée
      
      const premiereLettre = motcaché.charAt(0);
            const resteDuTexte = motcaché.slice(1);
            
            motcaché = premiereLettre + '*'.repeat(resteDuTexte.length);
            var motcachéremplacé = premiereLettre + '*'.repeat(resteDuTexte.length);
      
      
      
      input1.value = premiereLettre;
      
      var texteinputI = input1.value
      
        var motsplit = texteinputI.split('');
        
        // Récupérez le conteneur des lettres
        let numeroConteneur = 1; // Initialisez le numéro du conteneur à 1
      let conteneurLettres = document.getElementById(`lettres-container${numeroConteneur}`); // Obtenez le premier conteneur
      
        // Supprimez toutes les div existantes dans le conteneur
        while (conteneurLettres.firstChild) {
          conteneurLettres.removeChild(conteneurLettres.firstChild);
        }
      
        
        
      
        // Parcourez chaque lettre dans le tableau b
        motsplit.forEach((lettre, index) => {
          // Créez une div pour chaque lettre avec la classe correspondante
          const lettreDiv = document.createElement("div");
          lettreDiv.textContent = lettre;
      
          // Ajoutez votre classe définie pour toutes les div de lettre
          lettreDiv.classList.add("lettre");
      
          
      
          // Ajoutez la div de lettre au conteneur
          conteneurLettres.appendChild(lettreDiv);
        });
      
        var enfants = conteneurLettres.childElementCount;
      
      
      
      
        for (let r = 0; r<largeurtexte1-enfants; r++){
          // Créez une div pour chaque lettre avec la classe correspondante
          const lettreDiv = document.createElement("div");
          lettreDiv.textContent = ".";
      
          // Ajoutez votre classe définie pour toutes les div de lettre
          lettreDiv.classList.add("lettre");
      
          
      
          // Ajoutez la div de lettre au conteneur
          conteneurLettres.appendChild(lettreDiv);
      
        }
        
      
      for (let f = 1; f<6; f++){
        let numeroConteneur3 = f; // Initialisez le numéro du conteneur à 1
      let conteneurLettres2 = document.getElementById(`lettres-container${numeroConteneur3+1}`); // Obtenez le premier conteneur
      
      for (let d = 0; d<largeurtexte1; d++){
      // Créez une div pour chaque lettre avec la classe correspondante
      const lettreDiv = document.createElement("div");
      lettreDiv.textContent = ".";
      
      // Ajoutez votre classe définie pour toutes les div de lettre
      lettreDiv.classList.add("lettre");
      
      
      
      // Ajoutez la div de lettre au conteneur
      conteneurLettres2.appendChild(lettreDiv);
      }
      
      
      }
      
      
      
      
      var inputElement = document.getElementById('input');
      
      
      
              // Empêcher la perte de focus lorsque l'utilisateur clique ailleurs sur la page
              document.addEventListener('click', function(event) {
                if (focustf==true){
                  if (event.target !== inputElement) {
                    inputElement.focus();
                }
                } else if (focustf==false){
                  inputElement.blur();
                }
                  
              });
      
      
      
       
      
      
      
      
      
      
      
      
      
      // Créez une fonction de gestionnaire d'événements nommée
      function gestionnaireDeTouches(e) {
        if (e.key === "Backspace" || e.key === "Enter") {
            e.preventDefault();
        }
      }
      let desactiverTouches = false; // Variable pour suivre l'état de désactivation des touches
      
      
      
      
      
      // Update de texte lorsque la touche "Entrer" est appuyée
      
      input1.addEventListener('keydown', function(event) {
      
        
        
        
        
        
          if (event.key === 'Enter') {
            
            
      
            if (desactiverTouches==false){
              // Ajoutez le gestionnaire d'événements pour les touches "Backspace" et "Entrée"
            window.addEventListener("keydown", gestionnaireDeTouches);
            desactiverTouches = true;
              document.querySelector("#texte-input").textContent ="";
      
      
      
              texteentrée = event.target.value;
              document.querySelector("#texte-input").textContent = texteentrée;
      
              var TexteInput = document.querySelector("#texte-input").textContent;
      
              
      
      
      
      // Créer un tableau pour stocker chaque lettre du mot
      const lettresMot = Array.from(mot);
      const lettresTexteInput = Array.from(TexteInput);
      
      
      
      // Assurez-vous que les deux variables ont la même longueur
      if (mot.length === TexteInput.length) {
        const lettresTraitees = new Set(); // Utiliser un ensemble pour suivre les lettres de 'TexteInput' déjà traitées
        let premiereLettreIgnoree = false; // Pour ignorer la première lettre de 'TexteInput'
      
        // Parcourir chaque lettre dans les deux tableaux, en commençant à partir de la deuxième lettre
        for (let i = 1; i < lettresMot.length; i++) {
          const lettreMot = lettresMot[i]; // Lettre actuelle de 'mot'
          const lettreTexteInput = lettresTexteInput[i]; // Lettre correspondante dans la variable 'TexteInput'
      
          // Vérifier si la lettre est à la bonne position dans 'mot'
          if (lettreMot === lettreTexteInput) {
      
            // Remplacer la lettre correspondante dans la variable 'mot' par '*'
            mot = mot.slice(0, i) + '*' + mot.slice(i + 1);
      
            // Remplacer la lettre correspondante dans la variable 'motcaché' par celle-ci
            motcaché = motcaché.slice(0, i) + lettreMot + motcaché.slice(i + 1);
      
            motcachéremplacé = motcachéremplacé.slice(0, i) + lettreMot + motcachéremplacé.slice(i + 1);
      
            // Ajouter la lettre à l'ensemble des lettres de 'TexteInput' déjà traitées
            lettresTraitees.add(lettreMot);
      
            
      
      
          }
        }
        
      
        const tableauLettresOccurrence = Array.from(lettresTraitees);
      
        
      
        // Vérifie si le tableau de lettres traitees n'est pas vide
        if (tableauLettresOccurrence.length !== 0) {
          // Parcours des lettres traitees
          for (let j = 0; j < tableauLettresOccurrence.length; j++) {
            const lettreARechercher = tableauLettresOccurrence[j]; // Lettre à rechercher
        
            let compteur = 0; // Initialisation du compteur d'occurrence de la lettre
        
            // Parcours de chaque caractère dans la chaîne de mot
            for (let i = 0; i < mot.length; i++) {
              const caractere = mot[i];
        
              // Vérifie si le caractère correspond à la lettre recherchée (en ignorant la casse)
              if (caractere.toLowerCase() === lettreARechercher.toLowerCase()) {
                compteur++; // Incrémente le compteur si la lettre est trouvée
              }
      
              
            }
            
        
            const lettreAsterisque = "*"; // Lettre à rechercher
            let compteur2 = 0; // Initialisation du compteur d'occurrence de l'astérisque
            const positionsAsterisque = []; // Tableau pour stocker les positions de l'astérisque
        
            // Parcours de chaque caractère dans la chaîne de mot
            for (let i = 0; i < mot.length; i++) {
              const caractere = mot[i];
        
              // Vérifie si le caractère correspond à l'astérisque (en ignorant la casse)
              if (caractere.toLowerCase() === lettreAsterisque.toLowerCase()) {
                compteur2++; // Incrémente le compteur si l'astérisque est trouvé
                positionsAsterisque.push(i + 1); // Ajoute la position de l'astérisque au tableau
              }
            }
      
            
        
            let compteur3 = 0; // Initialisation du compteur pour les lettres mal placées
        
            // Parcours des positions possibles dans le mot
            for (let k = 0; k < mot.length; k++) {
              const lettreDiv = conteneurLettres.querySelector(`.lettre:nth-child(${k + 1})`);
      
              
        
              // Vérifie si la position k+1 n'est pas dans la liste des positions de l'astérisque
              // et si le compteur pour les lettres mal placées n'a pas atteint le total des occurrences
              if (!positionsAsterisque.includes(k + 1) && compteur3 < compteur) {
                // Le numéro d'enfant n'est pas dans la liste des numéros interdits
                // Vous pouvez effectuer une action ici (dans ce cas, ajouter la classe "lettremalplacé")
      
                if (lettreDiv.textContent==lettreARechercher){
                  lettreDiv.classList.add("lettremalplacé");
                compteur3++; // Incrémente le compteur des lettres mal placées
                }
                
                
              } 
      
        
        
        
      }
      
      
        }
      }
      
      
      
      
      
      
      
      
      
      
      
        
      
      // Créer un ensemble pour suivre les lettres mal placées déjà traitées
      const lettresMalPlaceesTraitees = new Set();
      
      // Vérifier les lettres de 'TexteInput' non présentes à la bonne position dans 'mot'
      for (let i = 0; i < lettresTexteInput.length; i++) {
        const lettreTexteInput = lettresTexteInput[i];
      
        if (!lettresTraitees.has(lettreTexteInput)) {
          const indexLettreMot = mot.indexOf(lettreTexteInput);
      
          if (indexLettreMot !== -1 && !lettresMalPlaceesTraitees.has(lettreTexteInput)) {
            // La lettre est présente dans 'mot', mais pas à la bonne position
            // et n'a pas encore été traitée
      
            // Compter le nombre de fois que la lettre mal placée apparaît dans 'mot'
            const nombreDeFoisDansMot = mot.split(lettreTexteInput).length - 1;
      
            // Compteur pour suivre le nombre de div correspondantes déjà marquées
            let divsMarquees = 0;
      
            // Ajouter la classe "lettremalplacé" au bon nombre de div correspondantes
            for (let j = 0; j < lettresTexteInput.length && divsMarquees < nombreDeFoisDansMot; j++) {
              const lettreDiv = conteneurLettres.querySelector(`.lettre:nth-child(${j + 1})`);
      
              // Vérifier si la lettre dans 'TexteInput' correspond à la lettre dans 'mot'
              if (lettresTexteInput[j] === lettreTexteInput) {
                lettreDiv.classList.add("lettremalplacé");
                divsMarquees++; // Incrémenter le compteur
              }
            }
      
            // Ajouter la lettre mal placée à l'ensemble des lettres mal placées traitées
            lettresMalPlaceesTraitees.add(lettreTexteInput);
          }
        }
      }
      
       // Ajouter la classe 'lettrebienplacé' aux lettres bien placées dans 'mot'
      lettresMot.forEach((lettreMot, index) => {
        if (lettreMot === motcaché[index]) {
          // La lettre est bien placée, ajoutez la classe 'lettrebienplacé' à la div correspondante
          const lettreDiv = conteneurLettres.querySelector(`.lettre:nth-child(${index + 1})`);
          lettreDiv.classList.add("lettrebienplacé");
        }
       
      });
      
      
      
      
      
      for (let t = 0; t < largeurtexte1; t++) {

    
        setTimeout(() => {
          const lettreDiv = conteneurLettres.querySelector(`.lettre:nth-child(${t + 1})`);
          if (lettreDiv.classList.contains("lettrebienplacé")) {
            lettreDiv.classList.add("rouge");
            
            audiobpl.pause();
            audiobpl.currentTime = 0;

            
            setTimeout(() => {
              audiobpl.play();
            }, 10);
          } else if (lettreDiv.classList.contains("lettremalplacé")) {
            lettreDiv.classList.add("jaune")
            audiompl.pause();
            audiompl.currentTime = 0;
            setTimeout(() => {
              audiompl.play();
            }, 80);
            
          } else {
            audiopp.pause();
            audiopp.currentTime = 0;
            setTimeout(() => {
              audiopp.play();
            }, 80);
            
          }
          // console.log(t);
        }, 400 * t); // Le délai est d'1 seconde multipliée par la valeur de t

      }
      
            
      
      
      
      
        
      setTimeout(()=>{
        if (numeroConteneur!=6 && TexteInput!=texteentrée){
          input1.value = "";
      
          numeroConteneur++; // Incrémentez le numéro du conteneur
          
                  // Construisez le nom de l'ID du conteneur suivant
                  conteneurLettres = document.getElementById(`lettres-container${numeroConteneur}`);
          input1.value = premiereLettre;
            motsplit = "";
            motsplit = texteinputI.split('');
            // Supprimez toutes les div existantes dans le conteneur
            while (conteneurLettres.firstChild) {
              conteneurLettres.removeChild(conteneurLettres.firstChild);
            }
          
            const motcachéremplacésplit = motcachéremplacé.split('')
      
      
      // Parcourez le tableau et remplacez les "*" par une chaîne vide
      for (let i = 0; i < motcachéremplacésplit.length; i++) {
        if (motcachéremplacésplit[i] === "*") {
            motcachéremplacésplit[i] = ".";
        }
      }
      
          
            // Parcourez chaque lettre dans le tableau b
            motcachéremplacésplit.forEach((lettre, index) => {
              // Créez une div pour chaque lettre avec la classe correspondante
              const lettreDiv = document.createElement("div");
              lettreDiv.textContent = lettre;
          
              // Ajoutez votre classe définie pour toutes les div de lettre
              lettreDiv.classList.add("lettre");
          
              
          
              // Ajoutez la div de lettre au conteneur
              conteneurLettres.appendChild(lettreDiv);
            });
          
            enfants = conteneurLettres.childElementCount;
          
          
          
            for (let r = 0; r<largeurtexte1-enfants; r++){
              // Créez une div pour chaque lettre avec la classe correspondante
              const lettreDiv = document.createElement("div");
              lettreDiv.textContent = ".";
          
              // Ajoutez votre classe définie pour toutes les div de lettre
              lettreDiv.classList.add("lettre");
          
              
          
              // Ajoutez la div de lettre au conteneur
              conteneurLettres.appendChild(lettreDiv);
            }
      
           
            window.removeEventListener("keydown", gestionnaireDeTouches);
            desactiverTouches = false
          } else if (numeroConteneur==6 && TexteInput!=texteentrée){
            setTimeout(() => {
              document.querySelector("#texte3").textContent = "Le mot était " + texteentrée + " !"
            }, 500 * largeurtexte1 + 2);
            
          }
          
          
            
            
      }, 350 * largeurtexte1 + 3)
      
        
      
      
      } else {
        // Les deux variables n'ont pas la même longueur, affichez un message d'erreur ou traitez le cas en conséquence
        document.querySelector("#texte3").textContent = "Le mot est pas assez long"
        window.removeEventListener("keydown", gestionnaireDeTouches);
            desactiverTouches = false
      }
      
      texteentrée = document.querySelector("#texte1").textContent ;
      mot = texteentrée
            motcaché = premiereLettre + '*'.repeat(resteDuTexte.length);
      

      setTimeout(() => {
        if (TexteInput==texteentrée){
          document.querySelector("#texte3").textContent = "Le mot était bien " + texteentrée + " !"
            input1.blur();
            focustf = false;
        } else if (document.querySelector("#texte1").textContent==document.querySelector("#input").value){
          document.querySelector("#texte3").textContent = "Le mot était bien " + texteentrée + " !"
        }
      }, 500 * largeurtexte1 + 2);
      
      

      
            }
      
              
      
          }
              
          
              
      }
      )
      
      
      
      // Updete de "texte" en temps réel
      
      input1.addEventListener('input', function(event) {
        var texteinput = event.target.value;
        motsplit = "";
        motsplit = texteinput.split('');
        
      
      
        // Supprimez toutes les div existantes dans le conteneur
        while (conteneurLettres.firstChild) {
          conteneurLettres.removeChild(conteneurLettres.firstChild);
        }
      
        
        
      
        // Parcourez chaque lettre dans le tableau b
        motsplit.forEach((lettre, index) => {
          // Créez une div pour chaque lettre avec la classe correspondante
          const lettreDiv = document.createElement("div");
          lettreDiv.textContent = lettre;
          lettreDiv.textContent = lettre;
      
          // Ajoutez votre classe définie pour toutes les div de lettre
          lettreDiv.classList.add("lettre");
      
          
      
          // Ajoutez la div de lettre au conteneur
          conteneurLettres.appendChild(lettreDiv);
        });
      
        enfants = conteneurLettres.childElementCount;
      
      
      
        for (let r = 0; r<largeurtexte1-enfants; r++){
          // Créez une div pour chaque lettre avec la classe correspondante
          const lettreDiv = document.createElement("div");
          lettreDiv.textContent = ".";
      
          // Ajoutez votre classe définie pour toutes les div de lettre
          lettreDiv.classList.add("lettre");
      
          
      
          // Ajoutez la div de lettre au conteneur
          conteneurLettres.appendChild(lettreDiv);
        }
      
        
      
      
      });
      
      
      input1.addEventListener('keyup', function(event) {
        const valeur = event.target.value.trim(); // Récupère la valeur du champ de texte en supprimant les espaces
      
        if (valeur === '' || valeur.length === 1) {
          // Si le champ de texte est vide, ajoutez une valeur par défaut
          event.target.value = premiereLettre;
      
        motsplit = texteinputI.split('');
        
      
        // Supprimez toutes les div existantes dans le conteneur
        while (conteneurLettres.firstChild) {
          conteneurLettres.removeChild(conteneurLettres.firstChild);
        }
      
        const motcachéremplacésplit = motcachéremplacé.split('')
      
      
      // Parcourez le tableau et remplacez les "*" par une chaîne vide
      for (let i = 0; i < motcachéremplacésplit.length; i++) {
        if (motcachéremplacésplit[i] === "*") {
            motcachéremplacésplit[i] = ".";
        }
      }
      
        // Parcourez chaque lettre dans le tableau b
        motcachéremplacésplit.forEach((lettre, index) => {
          // Créez une div pour chaque lettre avec la classe correspondante
          const lettreDiv = document.createElement("div");
          lettreDiv.textContent = lettre;
      
          // Ajoutez votre classe définie pour toutes les div de lettre
          lettreDiv.classList.add("lettre");
      
      
      
          // Ajoutez la div de lettre au conteneur
          conteneurLettres.appendChild(lettreDiv);
        });
      
        enfants = conteneurLettres.childElementCount;
      
      
      
        for (let r = 0; r<largeurtexte1-enfants; r++){
          // Créez une div pour chaque lettre avec la classe correspondante
          const lettreDiv = document.createElement("div");
          lettreDiv.textContent = ".";
      
          // Ajoutez votre classe définie pour toutes les div de lettre
          lettreDiv.classList.add("lettre");
      
          
      
          // Ajoutez la div de lettre au conteneur
          conteneurLettres.appendChild(lettreDiv);
        }
      
      
        }
      });
    } else {
      document.querySelector(".motpaslong").textContent = "(le mot n'est pas assez long)";
      setTimeout(() => {
        document.querySelector(".motpaslong").classList.add("op0")
      }, 2000);
      
      setTimeout(() => {
        document.querySelector(".motpaslong").textContent = "";
        document.querySelector(".motpaslong").classList.remove("op0")
      }, 2100 + 1500);
    }
    


  }
})

  
  
  
  
  
  






  
