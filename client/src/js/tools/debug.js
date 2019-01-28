let canvas;

export const enableLocalKeys = _canvas => {
    canvas = _canvas;
    //
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
}

const handleKeyDown = e => {

    canvas.book.flips.forEach(flip => {
        if(e.keyCode === 37  && canvas.book.currentPage - 1 >= 0){
            canvas.book.flips[canvas.book.currentPage - 1].dragging = true;
        }
        if(e.keyCode === 39 && canvas.book.currentPage + 2 <= canvas.book.flips.length){
            canvas.book.flips[canvas.book.currentPage].dragging = true;
        }
    });
}

const handleKeyUp = e => {

    canvas.book.flips.forEach(flip => {
        if(flip.dragging){
            if(e.keyCode === 39){
                flip.target = -1;
                canvas.book.currentPage = Math.min(canvas.book.currentPage + 1, canvas.book.flips.length);
            }else if(e.keyCode === 37){
                flip.target = 1;
                canvas.book.currentPage = Math.max(canvas.book.currentPage - 1, 0);
            }
        }
        flip.dragging = false;
    });
}