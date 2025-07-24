/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan{
  constructor(secretWord) {
    this.secretWord =[...secretWord.toLowerCase()]
    this.remainingGuesses = 6
    this.lettersGuessed =[]
    this.gameState= 'playing'
  }
  submitGuess(char) {
    if (this.gameState !== 'playing') return;
    const letter = char.toLowerCase()
    if (this.lettersGuessed.includes(letter)) return;
    this.lettersGuessed.push(letter)
    if(!this.secretWord.includes(letter)) {
      this.remainingGuesses--;
    }
  }

  computeGameState() {
    if(this.remainingGuesses === 0) {
      this.gameState = 'lost'
      return;
    }
    const unique =new Set(this.secretWord)
    const guess = new Set(this.lettersGuessed)
    const all =[...unique].every(letter => guess.has(letter))
    if (all) {
      this.gameState ='won'
    }
  }
  getSecretWordPuzzle(){
    return this.secretWord.map(char => {
      if(char ===' ') return ' '
      return this.lettersGuessed.includes(char) ? char: '#'
    } ).join('')
  }

  getGameStateMessage(){
    debugger
    const left = this.remainingGuesses
    
    

    if (this.gameState === 'won') {
      return 'Winner Winner Chicken Dinner, you won!'
    }

    if (this.gameState === 'lost') {
      
   return `Game Over, the word was "${this.secretWord.join('')}":\n${ASCIIART[left]}`      
    }
  if(this.gameState === 'playing'){
  return `There is a total of ${left} guesses remaining:\n${ASCIIART[left]}`;
  }
  
}

}
function simulateVanishingMan(secretWord) {
  const newWord =new VanishingMan(secretWord)
  return newWord.getGameStateMessage()
}
