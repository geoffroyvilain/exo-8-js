function getcheck() {
  var age = document.getElementById('age').value;
  if(!isNaN(age)){   //si age est un nombre
    if( age< 114 && age > 0){   // et si l age est compris entre 0 et 114
      if(age >= 18){            // et si l'age est superieur a 18
        alert('Vous êtes majeur');   // alors afficher vous etes majeur
      }else{                          // sinon
        alert('Vous êtes mineur');  // alors afficher vous etes mineur
      }
    }else{                          //sinon
      alert('Age non valide');      //afficher age non valide
    }
  }else{                            //sinon
    alert('merci de saisir en chiffres');   // afficher merci .......
  }
}
