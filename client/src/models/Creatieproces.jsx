import React from 'react';
import { withRouter } from "react-router-dom";
import Logo from'../assets/img/logo.svg';

const Creatieproces = () => {
    return (
      <div className='book' id='book'>
      <canvas className='pageflip-canvas' id="pageflip-canvas"></canvas>
      <div className='pages' id="pages">
      <section className='section'> 
          <header>
          <img src={Logo} alt="Dit is het logo van MSK Gent." width="400" height="400" />
          <h1 className="_h1 --color-blue">van eyck: een optische revolutie</h1>
          <h2>creatieproces</h2>
          <div><hr/><button>nl</button><button>fr</button><button>de</button><button>en</button><button>it</button><button>es</button><hr/></div>
          </header>
          <article>
           <p><span>I</span>n de 15de eeuw was olieverf een belangrijk medium in schilderkunst. Jan Van Eyck was één schilders die de Vlaamse Primitieven vertegenwoordigde en die olieverf kunst op de kaart heeft gezet. Hij gebruikte nooit eerder vertoonde technieken waardoor er nieuwe demensies naar voor kwamen en beïnvloede hiermee tijdgenoten.</p>
          </article>
        </section>
        <section className='section right'>
          <div>
            <hr/><a href="#">RESTART... OTHER NAME</a><hr/>
          </div>
          <article>
            <header>
               <h3><span>O</span>lieverf kunst</h3>
                <p>Olieverf kunst bestaat uit een heel proces die zorgvuldig moet worden doorlopen.</p>
            </header>
            <p>De kunstenaar moet geduldig verscheidene stappen doornemen die het schilderij vormgeven. Elke stap is een belangrijke factor om tot het eindresultaat te komen. Neem een kijkje achter het grootste werk van de gebroeder Van Eyck: het Lam Gods.</p>
          </article>
        </section>
      </div>
    </div>
      );
}

export default withRouter(Creatieproces);