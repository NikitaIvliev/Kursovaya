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
      name: 'KTM 250 SX F',
      price: '1 369 900P',
      text: 'Приятно сказать - KTM оправдывает свой девиз  "Готов к гонке", и с этим трудно поспорить. У этого лозунга есть обратная сторона - если вы не агрессивный гонщик, нацеленный на победу, вы можете не ощутить мощь и лучшие качества KTM.'
    },
    {
      id: 2,
      img: process.env.PUBLIC_URL + '/img/image4.png',
      img2: process.env.PUBLIC_URL + '/img/image5.png',
      img3: process.env.PUBLIC_URL + '/img/image6.png',
      alt2: 'im2',
      alt3: 'im3',
      name: '1290 SUPER ADV R',
      price: '2 599 900P',
      text: 'Выберите точку на карте, воткните в нее булавку и отправляйтесь в путь. KTM 1290 SUPER ADVENTURE R, обладающий непревзойденными способностями и лучшими в своем классе характеристиками.'
    },
    {
      id: 3,
      img: process.env.PUBLIC_URL + '/img/image9.png',
      img2: process.env.PUBLIC_URL + '/img/image8.png',
      img3: process.env.PUBLIC_URL + '/img/image7.png',
      alt2: 'im2',
      alt3: 'im3',
      name: '690 ENDURO R',
      price: '1 499 900P',
      text: 'Выходите из дома и почувствуйте прилив адреналина! Трейлер не требуется, просто поверните дроссель KTM 690 ENDURO R, который действительно вступает в свои права, когда начинается грязь и дорога становится более экстремальной. '
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
