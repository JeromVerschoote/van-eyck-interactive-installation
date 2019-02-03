import React from 'react';
import { withRouter } from "react-router-dom";
import Logo from'../assets/img/logo.svg';

const Leefwereld = () => {
    return (
      <div className='book' id='book'>
      <canvas className='pageflip-canvas' id="pageflip-canvas"></canvas>
      <div className='pages' id="pages">
        <section className='section'> 
          <header>
          <img src={Logo} alt="Dit is het logo van MSK Gent." width="400" height="400" />
          <h1 className="_h1 --color-blue">van eyck: een optische revolutie</h1>
          <h2>leefwereld</h2>
          <div><hr/><button>nl</button><button>fr</button><button>de</button><button>en</button><button>it</button><button>es</button><hr/></div>
          </header>
          <article>
           <p><span>W</span>elkom in het land van onderdrukkende armoede, dodelijke ziektes en keiharde ambacht, maar ook van absolute rijkdom, feestelijke eetfestijnen en bovennatuurlijke schoonheid. Welkom in de Bourgondische Nederlanden. Welkom in Vlaanderen.</p>
           <p>Het verhaal van de gebroeders Van Eyck begint hier, waar ze zo’n 600 jaar geleden hun meest befaamde schilderwerken tot leven brachten.</p>
          </article>
        </section>
        <section className='section right'>
          <div>
            <hr/><a href="#">RESTART... OTHER NAME</a><hr/>
          </div>
          <article>
            <header>
               <h3><span>C</span>ultuur</h3>
                <p>Vlaanderen was in die tijd het centrum van Bourgondische Hofcultuur.</p>
            </header>
            <p>Die mensen omringen zich met pracht en praal, en overtroffen hiermee zelfs het Franse Koninklijke Hof. De verschillende kunstwerken uit die tijd illustreren de onlosmakelijke verbondenheid met macht, hebzucht en prestige.</p>
          </article>
        </section>
        <section className='section'>
          <div><hr/><button>nl</button><button>fr</button><button>de</button><button>en</button><button>it</button><button>es</button><hr/></div>
          <article>
            <header>
               <h3><span>R</span>elgie</h3>
                <p>Ook religie speelde een prominente rol in de gebroeders’ leefwereld.</p>
            </header>
            <p>De clerus was immers oppermachtig en nog veel gebeurtenissen zoals o.a. de Pest, werden verklaard door de hand van God. Bij veel kunstwerken wordt het geestelijk afgebeeld en wordt verwezen naar bovennatuurlijke schoonheid. Het drieluik van het Lam Gods werd enkel geopend bij feestdagen. Andere dagen was het gesloten.</p>
          </article>
        </section>
        <section className='section right'>
          <div>
            <hr/><a href="#">RESTART... OTHER NAME</a><hr/>
          </div>
          <article>
            <header>
               <h3><span>S</span>ociaal</h3>
                <p>Ook armoede was niet weg te denken uit de leefwereld van de broeders.</p>
            </header>
            <p>Velen gingen kunstopleidingen studeren om hun bierschulden af te lossen met schilderijen. Anderen in de hoop te worden aangesteld bij een vorst, om zo een vast inkomen te bekomen. Zo was Jan van Eyck hofschilder bij Jan van Beiere en Filips de Goede. Vele kunstwerken kwamen terecht bij afnemers, een soort van adellijke curators waarbij het gewone volk de werken mocht komen bekijken.</p>
          </article>
        </section>
        <section className='section'>
        <div><hr/><button>nl</button><button>fr</button><button>de</button><button>en</button><button>it</button><button>es</button><hr/></div>
          <article>
            <header>
               <h3><span>K</span>unst</h3>
                <p>Het was een harde wereld voor kunstenaars in die tijd toch was er verandering op komst.</p>
            </header>
            <p>De schilderkunst in de 15e eeuw kende ongeziene vooruitgang door de vereniging van kustenaars, het ontstaan van curators onder de vorm van rondreizende vorstenhuizen en de economie in kunsthandel. Ook de Van Eycks genoten hier van en werden op die manier wereldberoemd.</p>
          </article>
        </section>
        <section className='section right'>
          <h6 className="_h6">Einde</h6>
          <div>
            <hr/><a href="#">RESTART... OTHER NAME</a><hr/>
          </div>
        </section>
      </div>
    </div>
      );
}

export default withRouter(Leefwereld);