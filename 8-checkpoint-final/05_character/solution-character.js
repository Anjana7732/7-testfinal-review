/* eslint-disable no-unused-vars, no-prototype-builtins */
class Character {
    constructor(character, fontName, fontSize) {
        this.character = character;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }
    drawCharacter(){
        return this.character;
    }
}

class Letter extends Character{
    constructor(character, fontName, fontSize, charCase) {
        super(character, fontName, fontSize)
        this.charCase = charCase;
    }
    getCase() {
        return this.charCase;
    }
    toLowerCase(){
        this.charCase = 'lowerCase';
        this.character = this.character.toLowerCase();
    }
    toUpperCase(){
        this.charCase = 'upperCase';
        this.character = this.character.toUpperCase();
    }
}

class Digit extends Character{
    constructor(character, fontName, fontSize){
        super(character, fontName, fontSize)
        this.isDigit = typeof character === 'number';
    }
    
    integerValue(){
        const ch = parseInt(this.character);
        if(!isNaN(ch)){
            this.character= ch;
            this.isDigit = true;
        }
        else {
            this.isDigit = false
        }

        
    }
}