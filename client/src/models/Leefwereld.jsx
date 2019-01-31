import React from 'react';
import { withRouter } from "react-router-dom";

const Leefwereld = () => {
    return (
      <div className='book' id='book'>
      <canvas className='pageflip-canvas' id="pageflip-canvas"></canvas>
      <div className='pages' id="pages">
        <section>
          <h1 className="_h1 --color-blue">Once upon a time</h1>
        </section>
        <section>
          <h2 className="_h2">Header 2</h2>
        </section>
        <section>
          <h3 className="_h3">Header 3</h3>
        </section>
        <section>
          <h4 className="_h4">Header 4</h4>
        </section>
        <section>
          <h5 className="_h5">Header 5</h5>
        </section>
        <section>
          <h6 className="_h6">Header 6</h6>
        </section>
      </div>
    </div>
      );
}

export default withRouter(Leefwereld);