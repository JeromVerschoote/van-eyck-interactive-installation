import Book from './Book.js';

class Canvas{
    constructor(DOMElement, width, height, padding, $book){
        this.DOMElement = DOMElement;
        this.height = height;
        this.width = width;
        this.padding = padding;
        //
        this.ctx = this.DOMElement.getContext(`2d`);
        this.book = new Book(this.ctx, $book, this.width, this.height);
        //
        this.update();
    }

    update(){
        this.DOMElement.width = this.width + (this.padding * 2);
        this.DOMElement.height = this.height + (this.padding * 2);
        this.DOMElement.style.top = -this.padding + 'px';
        this.DOMElement.style.left = -this.padding + 'px';
    }

    render(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.book.render();
    }
}

export default Canvas;