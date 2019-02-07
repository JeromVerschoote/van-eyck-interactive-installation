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

export const measureText = (ctx, lines, dimension) => {
  let amountMeasured = 0;
  
  if(dimension === 'width'){
    lines.forEach(line => {
      amountMeasured += ctx.measureText(line).width;
    });
    return amountMeasured;
  }else if(dimension === 'height'){
    lines.forEach(line => {
      amountMeasured += ctx.measureText(line).width;
      console.log( ctx.measureText(line).width);
    });
    return amountMeasured;
  }
}