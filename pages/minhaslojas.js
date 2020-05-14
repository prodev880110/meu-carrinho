import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { loggedin, logout } from '../services/authService';



// TODO: TRAZER AS LOJAS DA API

let stores = [{
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnHs-oEIScULf8g6ehnRgT64UY269hG4lnb7a0xuNPDqfEy4sz&usqp=CAU',
  name: 'loja 1',
  url: 'url loja 1'
},
{
  src: 'https://pegaki.com.br/wp-content/uploads/2019/05/Loja.png',
  name: 'loja 2',
  url: 'url loja 2'
}]


export default function minhaslojas() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn === null) {
      loggedin()
        .then((user) => {
          console.log(`>>> User: ${user}`);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(`>>> Error: ${error}`);
          Router.replace('/');
        });
    }
  }, [isLoggedIn, isLoading]);

  return (
    <div>
      <h1>Lojas do Usuário</h1>
      {stores.map((store, idx) => {
        return (
          <Link key={idx} href="/"><a>
            <div>
              <h1>{store.name}</h1>
              <img src={store.src} alt={store.name}></img>
            </div>
          </a></Link>
        )
      })}
    </div>
  )
}