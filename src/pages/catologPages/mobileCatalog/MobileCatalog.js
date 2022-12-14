import React from 'react';
import c from './MobileCatalog.module.css';
import CardsWrapper from "./components/cardsWrapper/CardsWrapper";



const MobileCatalog = () => {
  return (
    <>
      <div className={c.head}>
        <p className={c.headTitle}>Indoor Plants</p>
      </div>
      <CardsWrapper/>
    </>
  )
}

export default MobileCatalog;