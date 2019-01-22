import Page from './Page.js';

class Book{
    constructor(ctx, DOMElement, width, height, pages){
        this.ctx = ctx;
        this.DOMElement = DOMElement;
        this.width = width;
        this.height = height;
        this.pages = DOMElement.getElementsByTagName("section");
        this.flips = [];
        this.pageFrame = new Page(this.width / 2 - .5, this.height);
        this.currentPage = 0;
        //
        this.padding = 0;
        this.position = 0;
        //
        this.update();
    }

    update(){
        Array.prototype.forEach.call(this.pages, (page, index) => {
            page.style.zIndex = this.pages.length - index;
            this.flips.push({
                progress: 1,
                target: 1,
                page: page,
                dragging: false
            });
        });
    }

    render(){
        this.flips.forEach(flip => {
            flip.progress += (flip.target - flip.progress) * 0.2;
            if(flip.dragging || Math.abs(flip.progress) < 0.997){
                this.flip(flip);
            }
        });
    }

    flip(flip){
        const strength = 1 - Math.abs(flip.progress);
        const foldWidth = (this.pageFrame.width * 0.5 ) * (1 - flip.progress);
        const foldX = this.pageFrame.width * flip.progress + foldWidth;
        const verticalOutdent = 20 * strength;

        const paperShadowWidth = (this.pageFrame.width * 0.5 ) * Math.max( Math.min(1 - flip.progress, 0.5), 0);
        const rightShadowWidth = (this.pageFrame.width * 0.5 ) * Math.max( Math.min(strength, 0.5), 0);
        const leftShadowWidth = (this.pageFrame.width * 0.5 ) * Math.max( Math.min(strength, 0.5), 0);
        
        flip.page.style.width = Math.max(foldX, 0) + "px";
        
        this.ctx.save();
        this.ctx.translate(this.padding + (this.width / 2), this.position + this.padding);
        
        this.ctx.strokeStyle = 'rgba(0,0,0,'+(0.05 * strength)+')';
        this.ctx.lineWidth = 30 * strength;
        this.ctx.beginPath();
        this.ctx.moveTo(foldX - foldWidth, -verticalOutdent * 0.5);
        this.ctx.lineTo(foldX - foldWidth, this.pageFrame.height + (verticalOutdent * 0.5));
        this.ctx.stroke();
        
        const rightShadowGradient = this.ctx.createLinearGradient(foldX, 0, foldX + rightShadowWidth, 0);
        rightShadowGradient.addColorStop(0, 'rgba(0,0,0,'+(strength*0.2)+')');
        rightShadowGradient.addColorStop(0.8, 'rgba(0,0,0,0.0)');
        
        this.ctx.fillStyle = rightShadowGradient;
        this.ctx.beginPath();
        this.ctx.moveTo(foldX, 0);
        this.ctx.lineTo(foldX + rightShadowWidth, 0);
        this.ctx.lineTo(foldX + rightShadowWidth, this.pageFrame.height);
        this.ctx.lineTo(foldX, this.pageFrame.height);
        this.ctx.fill();
        
        const leftShadowGradient = this.ctx.createLinearGradient(foldX - foldWidth - leftShadowWidth, 0, foldX - foldWidth, 0);
        leftShadowGradient.addColorStop(0, 'rgba(0,0,0,0.0)');
        leftShadowGradient.addColorStop(1, 'rgba(0,0,0,'+(strength*0.15)+')');
        
        this.ctx.fillStyle = leftShadowGradient;
        this.ctx.beginPath();
        this.ctx.moveTo(foldX - foldWidth - leftShadowWidth, 0);
        this.ctx.lineTo(foldX - foldWidth, 0);
        this.ctx.lineTo(foldX - foldWidth, this.pageFrame.height);
        this.ctx.lineTo(foldX - foldWidth - leftShadowWidth, this.pageFrame.height);
        this.ctx.fill();
        
        const foldGradient = this.ctx.createLinearGradient(foldX - paperShadowWidth, 0, foldX, 0);
        foldGradient.addColorStop(0.35, '#fafafa');
        foldGradient.addColorStop(0.73, '#eeeeee');
        foldGradient.addColorStop(0.9, '#fafafa');
        foldGradient.addColorStop(1.0, '#e2e2e2');
        
        this.ctx.fillStyle = foldGradient;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.06)';
        this.ctx.lineWidth = 0.5;
        
        this.ctx.beginPath();
        this.ctx.moveTo(foldX, 0);
        this.ctx.lineTo(foldX, this.pageFrame.height);
        this.ctx.quadraticCurveTo(foldX, this.pageFrame.height + (verticalOutdent * 2), foldX - foldWidth, this.pageFrame.height + verticalOutdent);
        this.ctx.lineTo(foldX - foldWidth, -verticalOutdent);
        this.ctx.quadraticCurveTo(foldX, -verticalOutdent * 2, foldX, 0);
        
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();
    }
}

export default Book;