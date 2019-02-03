import React from 'react';
import { withRouter } from "react-router-dom";
import Logo from'../assets/img/logo.svg';

const Creatieproces = () => {
    return (
      <div className='book' id='book'>
      <canvas className='pageflip-canvas' id="pageflip-canvas"></canvas>
      <div className='pages' id="pages">
        <section> 
          <header>
          <img src={Logo} alt="Dit is het logo van MSK Gent." width="400" height="400" />
          <h1 className="_h1 --color-blue">van eyck: een optische revolutie</h1>
          <h2>Creatieproces</h2>
          <div>taalkeuze</div>
          </header>
          <article>

          </article>
        </section>
        <section>
          
        </section>
        <section>
          
        </section>
        <section>
          
        </section>
        <section>
          
        </section>
        <section>
          
        </section>
      </div>
    </div>
      );
}

export default withRouter(Creatieproces);