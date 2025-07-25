/* eslint-disable no-unused-vars */
class VM {
     constructor(inventory) {
       this.inventory = inventory
        
    }
    
    
    sale(itemID) {
        const item = this.inventory[itemID]
        item.stock--
        return `1 ${item.name} - Thank you and come again!`;
        
        
    
    }
    stockTotal () {
        let values = Object.values(this.inventory);
        let total =values.reduce((acc, curr) => acc+curr.stock,0)
        return total>0 ? `${total} item(s)` : 'Out of Stock';
    
    }
}