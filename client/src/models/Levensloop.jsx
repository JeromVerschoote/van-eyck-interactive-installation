import React from 'react';
import { withRouter } from "react-router-dom";
import Logo from'../assets/img/logo.svg';

const Levensloop = () => {
    return (
      <div className='book' id='book'>
      <canvas className='pageflip-canvas' id="pageflip-canvas"></canvas>
      <div className='pages' id="pages">
      <section className='section'> 
          <header>
          <img src={Logo} alt="Dit is het logo van MSK Gent." width="400" height="400" />
          <h1 className="_h1 --color-blue">van eyck: een optische revolutie</h1>
          <h2>levensloop van het Lam Gods</h2>
          <div><hr/><button>nl</button><button>fr</button><button>de</button><button>en</button><button>it</button><button>es</button><hr/></div>
          </header>
          <article>
           <p><span>A</span>uthentieke werken van Jan van Eyck zijn uiterst zeldzaam. Er zijn slechts een klein aantal werken die bewaard zijn gebleven en andere werken zijn in de loop van de geschiedenis verloren gegaan. Het verhaal achter een schilderij is soms net zo intrigerend als het leven die het schilderij zelf heeft geleden. Een mooi voorbeeld die dit fenomeen illustreert is het Lam Gods.</p>
          </article>
        </section>
        <section className='section right'>
          <div>
            <hr/><a href="#">RESTART... OTHER NAME</a><hr/>
          </div>
          <article>
            <header>
               <h3><span>L</span>am Gods</h3>
                <p>Het Lam Gods is een kunstwerk die een rijke geschiedenis achter de rug heeft.</p>
            </header>
            <p>Het wordt beweerd het meeste gestolen kunstwerk te zijn in de geschiedenis. Niet enkel diefstal heeft het meesterwerk in gevaar gebracht. Het schilderij heeft een heleboel illegale praktijken doorstaan: vervalst, verkocht, gesmokkeld, gecensureerd,… Het klassieke stuk heeft veel landen doorgereisd. Maar nu is het kunstwerk origineel hier te bewonderen.</p>
          </article>
        </section>
      </div>
    </div>
      );
}

export default withRouter(Levensloop);