import React, { useState } from 'react'
import Card from './Components/Card'
import Header from './Components/Header.js'
import CartItem from './Components/CartItem.js'
import Drawer from './Components/Drawer.js'

const arr = [
  { title: "Некое название товара и просто текст1", price: "12399" , imageUrl: "/img/Rectangle6.svg", },
  { title: "Некое название товара и просто текст2", price: "8400" , imageUrl: "/img/Rectangle6.svg" ,},
  { title: "Некое название товара и просто текст3", price: "10110" , imageUrl: "/img/Rectangle6.svg" ,},
  { title: "Некое название товара и просто текст4", price: "3500" , imageUrl: "/img/Rectangle6.svg" ,},
  { title: "Некое название товара и просто текст5", price: "21000" , imageUrl: "/img/Rectangle6.svg" ,},
  { title: "Некое название товара и просто текст6", price: "8600" , imageUrl: "/img/Rectangle6.svg" ,},
  { title: "Некое название товара и просто текст7", price: "8600" , imageUrl: "/img/Rectangle6.svg" ,}
];

function App() {
  const [items, setItems] = React.useState(arr);
  const [cartOpened, cartTheOpened] = React.useState(false);

  return (
    <div className="pageOne clear">
      <div className="content">
        <Header onClickCart={() => cartTheOpened(true)} />
        {cartOpened ? <Drawer onClickClose={() => cartTheOpened(false)} /> : null}
        <div className="d-flex justify-between align-center mb-40 p-20">
          <h1 className="">Вся одежда</h1>
          <div className="search-block d-flex align-center">
            <img className="pl-10" src="/img/screach.svg"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} onPlus={() => console.log()} onFavorit={() => console.log()} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
