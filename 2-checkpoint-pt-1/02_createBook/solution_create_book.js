/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price) {
    const book =Object.create(bookProtoType)
    book.id=id
    book.title=title
    book.author=author
    book.price =price
    book.rating=[]
    return book
}
const bookProtoType ={
    getInfo() {
        return this.title+' by '+this.author;
    },
    getPrice() {
        return this.price;
    },
    addRating(arg) {
        this.rating.push(arg)
    },
    getRating() {
        if (this.rating.length ===0) return 0
        let totalstars = 0
        for (let i=0; i<this.rating.length;i++) {
            totalstars+=this.rating[i].length
        }
        return totalstars/this.rating.length
    }
}