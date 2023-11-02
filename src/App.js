import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUS from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import ListItems from "./Pages/ListItems";
import PageItem from "./Pages/PageItem";
import ItemDetail from './Components/ItemDetail';

export default function App() {
  const [items] = useState([
    {
      id: 1,
      img: process.env.PUBLIC_URL + '/img/image1.png',
      img2: process.env.PUBLIC_URL + '/img/image2.png',
      img3: process.env.PUBLIC_URL + '/img/image3.png',
      alt2: 'im2',
      alt3: 'im3',
      name: 'KTM 250 SX F,2020',
      price: '500 000P',
      text: 'Приятно сказать - KTM оправдывает свой девиз  "Готов к гонке", и с этим трудно поспорить. У этого лозунга есть обратная сторона - если вы не агрессивный гонщик, нацеленный на победу, вы можете не ощутить мощь и лучшие качества KTM.'
    },
    {
      id: 2,
      img: process.env.PUBLIC_URL + '/img/image1.png',
      img2: process.env.PUBLIC_URL + '/img/image2.png',
      img3: process.env.PUBLIC_URL + '/img/image3.png',
      alt2: 'im2',
      alt3: 'im3',
      name: 'KTM 250 SX F,2020',
      price: '500 000P',
      text: 'Приятно сказать - KTM оправдывает свой девиз  "Готов к гонке", и с этим трудно поспорить. У этого лозунга есть обратная сторона - если вы не агрессивный гонщик, нацеленный на победу, вы можете не ощутить мощь и лучшие качества KTM.'
    },
    // Другие элементы
  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListItems items={items} />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/ContactUS" element={<ContactUS />} />
        <Route path="/item/:id" element={<ItemDetail items={items} />} />
        <Route path="/PageItem" element={<PageItem items={items} />} />
      </Routes>
    </div>
  );
}
