import { useState } from  'react';

import Head from 'next/head';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

import { renderMetatags } from '../services/helpers';

export default function Home() {

  let [ modal, setModal ] = useState(false);
  let [ flip, setFlip ] = useState(false);
  let [ loading, setLoading ] = useState(false);

  return (
    loading ?
    <Loading/> :
    <>
      <Head>
        {renderMetatags(
          'Meu Carrinho',
          'Crie sua loja e administre suas vendas',
          'https://meu-carrinho.now.sh',
          'https://github.com/prodev880110/meu-carrinho/media/meucarrinho_banner_2.png'
        )}
      </Head>
      {/* Navbar placeholder */}
      <nav className="navbar navbar-home">
        <div className={ modal ? "container--modal offScreen" : "container--modal"}>
          <div className="close-button" onClick={() => setModal(!modal)}><IoIosClose size={75} color="#193747"/></div>
          <div className="container--auth">
            <div className={flip ? "container--rotate turn-modal" : "container--rotate"}>
              <Login 
                setFlip={setFlip}  
                flip={flip}
                setLoading={setLoading}
                loading={loading}
              />
              <Signup 
                setFlip={setFlip} 
                flip={flip}
                setLoading={setLoading}
                loading={loading}
                />
            </div>
          </div>
        </div>
        <a id="entrar" onClick={() => setModal(!modal)}>Entrar</a>
      </nav>

      <section className="main-section">
        <div className="container container--home">
          <figure className="main-section__figure">
            <img
              className="main-section__figure__img"
              src="/meucarrinho_logo_azul.png"
              alt="logo"
            ></img>
          </figure>
          <article className="main-section__info">
            <h2>O carrinho virtual para a sua loja</h2>
            <p>
              Mais de 90% dos consumidores est??o nas redes sociais, crie seu carrinho
              virtual e chegue at?? eles mais facilmente
            </p>
          </article>
        </div>
      </section>

      <section className="instructions-section">
        <div className="container container--home">
          <h2 className="instructions-section__title">Como funciona?</h2>

          <section className="container--row">
            <article className="instructions-section__info">
              <h3>1. Crie sua loja</h3>
              <p>
                Crie sua loja virtual personalizada e adicione os seus produtos.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image4.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
        </div>
      </section>

      <section className="instructions-section instructions-section--light">
        <div className="container container--home">
          <section className="container--row-reverse">
            <article className="instructions-section__info">
              <h3>2. Divulgue nas redes sociais</h3>
              <p>
                Encontre os seus clientes aonde eles estiverem, divulgue sua
                loja nas redes sociais mais utilizadas.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image2.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
        </div>
      </section>

      <section className="instructions-section">
        <div className="container container--home">
          <section className="container--row">
            <article className="instructions-section__info">
              <h3>3. Receba pedidos dos clientes</h3>
              <p>
                Receba pedidos facilmente atrav??s do whatsapp e notifica????o via
                email.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image3.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
        </div>
      </section>

      <section className="instructions-section instructions-section--light">
        <div className="container container--home">
          <section className="container--row-reverse">
            <article className="instructions-section__info">
              <h3>4. Acompanhe os pedidos</h3>
              <p>
                Acompanhe o status dos pedidos no seu painel de vendas e
                monitore o desempenho da sua loja atrav??s de gr??ficos.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image5.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
        </div>
      </section>

      
    </>
  );
}
