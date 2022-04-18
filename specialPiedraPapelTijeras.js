alert("... BIENVENIDO AL JUEGO ...\nPIEDRA / PAPEL / TIJERA / LAGARTO / SPOCK / BIGBANG!\nPara mayor inforcion del juego visitar este link:\nhttps://bigbangtheory.fandom.com/es/wiki/Piedra,_Papel,_Tijera,_Lagarto_o_Spock")
const getUserChoice = userInput => {
    userInput = prompt("Haz una elleccion entre: Piedra, Papel, Tijera, Lagarto, Spock o bigbang").toLowerCase(); 
    if (userInput === "piedra" || userInput === "papel" || userInput === "tijeras" || userInput === "lagarto" || userInput === "spock" || userInput === "bigbang") {
      return userInput;
      } else {
        console.log("Error!");
       }
  };

  getComputerChoice = () => {
  let randomNumero = Math.floor(Math.random() * 6 + 1);
    switch (randomNumero) {
      case 1:
        return "piedra";
      case 2:
        return "papel";
      case 3:
        return "tijeras";
      case 4:
        return "lagarto";
      case 5:
        return "spock";
      default:
        return "bigbang";
    }
  };

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "¡Es un empate!";
    } if (userChoice === "piedra") {
      if (computerChoice === "papel" || computerChoice === "spock") {
        return "La computadora ganó!";
      }  else {
        return "¡Ganaste!";
      }
    } if (userChoice === "papel") {
      if (computerChoice === "tijeras" || computerChoice === "lagarto") {
        return "La computadora ganó!";
      }  else {
        return "¡Ganaste!";
      }
    } if (userChoice === "tijeras") {
      if (computerChoice === "piedra" || computerChoice === "spock") {
        return "La computadora ganó!";
      }  else {
        return "¡Ganaste!";
      }
    } if (userChoice === "lagarto") {
      if (computerChoice === "piedra" || computerChoice === "tijeras") {
        return "La computadora ganó!";
      }  else {
        return "¡Ganaste!";
      }
    } if (userChoice === "spock") {
      if (computerChoice === "papel" || computerChoice === "lagarto") {
        return "La computadora ganó!";
      }  else {
        return "¡Ganaste!";
      }
    } if (userChoice === "bigbang"){
      return 'PELIGRO ... PELIGRO SE ACTIVO THE BIG BANG !!!';
    }
  };

  const playGame = () => {
     const userChoice = getUserChoice();
     const computerChoice = getComputerChoice();
     console.log("JUGADOR: " + userChoice);
     console.log("COMPUTADOR: " + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };

  playGame();  