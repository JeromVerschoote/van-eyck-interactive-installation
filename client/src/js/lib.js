export const wrapTextIntoLines = (ctx, text, maxWidth) =>{
    const words = text.split(' ');
    const lines = [];
    let currentLine;

    words.forEach(word => {
      const width = ctx.measureText(currentLine + ' ' + word).width;

      if(width > maxWidth){
        lines.push(currentLine);
        currentLine = word;
      }else if(currentLine){
          currentLine += ' ' + word;
      }else{
        currentLine = words[0];
      }
    });

    lines.push(currentLine);
    return lines;
}