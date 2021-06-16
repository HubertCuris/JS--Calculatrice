let choice
let result
let check = true
let nb1
let nb2
let restart 
do {
  do {
    choice = prompt("Que voulez-vous faire ?\n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n 4 - Division\n")
  } 
  while (choice != 1 && choice != 2 && choice != 3 && choice != 4);

  switch (choice) {
    case "1":
      Addition()
      break;

    case "2":
      Soustraction()
      break;
    
    case "3":
      Multiplication()
      break;
    
    case "4":
      Division()
      break;
  }

  function Addition(){
    
    do {
      nb1 = Number(prompt("Entrez un premier nombre"))
      nb2 = Number(prompt("Entrez un deuxième nombre"))
      
      if (isNaN(nb1)){
        alert("Veuillez entrer un nombre")
      }
      else if (isNaN(nb2)){
        alert("Veuillez entrer un nombre")
      }
      else {
        result = nb1 + nb2
        alert("La somme de cette opération est " + result) 
        check = false
      }
    } while (check == true) 
  }


  function Soustraction(){

    do {
      nb1 = Number(prompt("Entrez un premier nombre"))
      nb2 = Number(prompt("Entrez un deuxième nombre"))
      
      if (isNaN(nb1)){
        alert("Veuillez entrer un nombre")
      }
      else if (isNaN(nb2)){
        alert("Veuillez entrer un nombre")
      }
      else {
        result = nb1 - nb2
        alert("La somme de cette opération est " + result)
        check = false
      } 
    } while (check == true)
  }

  
  function Multiplication(){
    do {
      nb1 = Number(prompt("Entrez un premier nombre"))
      nb2 = Number(prompt("Entrez un deuxième nombre"))

      if (isNaN(nb1)){
        alert("Veuillez entrer un nombre")
      }
      else if (isNaN(nb2)){
        alert("Veuillez entrer un nombre")
      }
      else {
        result = (nb1 * nb2)
      
        if (Number.isInteger(result)){
          result.toFixed(0)
        }
        else{
          result.toFixed(1)
        }

        alert("La somme de cette opération est " + result)
        check = false
      } 
    } while (check == true)
  }

  function Division(){
    do {
      nb1 = Number(prompt("Entrez un premier nombre"))
      do {
        nb2 = Number(prompt("Entrez un deuxième nombre. Vous ne pouvez pas rentrer le chiffre 0"))
      }
      while (nb2 == 0)

      if (isNaN(nb1)){
        alert("Veuillez entrer un nombre")
      }
      else if (isNaN(nb2)){
        alert("Veuillez entrer un nombre")
      }
      else {
        result = (nb1 / nb2).toFixed(1)
        alert("Le produit de cette opération est " + result)
        check = false
      } 
    } while (check == true)
  }

  restart = confirm("Voulez-vous refaire un calcul ?")
} while (restart == true)

