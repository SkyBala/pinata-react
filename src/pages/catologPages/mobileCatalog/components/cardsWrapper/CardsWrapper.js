import React, {useEffect, useState} from "react";
import c from "./CardsWrapper.module.css";
import Card from "./card/Card";
import flower1 from "../../imgMobileCatalog/cardsImg/flower1.jpg";
import flower2 from "../../imgMobileCatalog/cardsImg/flower2.jpg";
import flower3 from "../../imgMobileCatalog/cardsImg/flower3.jpg";
import flower4 from "../../imgMobileCatalog/cardsImg/flower4.jpg";
import flower5 from "../../imgMobileCatalog/cardsImg/flower5.jpg";
import flower6 from "../../imgMobileCatalog/cardsImg/flower6.jpg";
import flower7 from "../../imgMobileCatalog/cardsImg/flower7.jpg";
import flower8 from "../../imgMobileCatalog/cardsImg/flower8.jpg";
import flower9 from "../../imgMobileCatalog/cardsImg/flower9.jpg";
import flower10 from "../../imgMobileCatalog/cardsImg/flower10.jpg";
import flower11 from "../../imgMobileCatalog/cardsImg/flower11.jpg";
import flower12 from "../../imgMobileCatalog/cardsImg/flower12.jpg";
import flower13 from "../../imgMobileCatalog/cardsImg/flower13.jpg";
import flower14 from "../../imgMobileCatalog/cardsImg/flower14.jpg";
import flower15 from "../../imgMobileCatalog/cardsImg/flower15.jpg";


const CardsWrapper = () => {
  const [colors,setColors] = useState([]);

  useEffect(()=> {
    setColors(['#820707', '#0A5817', '#626161', '#935A32', '#FFFFFF']);
  },[]);
  return(
    <>
      <div className={c.cards}>
        <Card image={flower1} colors={colors}/>
        <Card image={flower2} colors={colors}/>
        <Card image={flower3} colors={colors}/>
        <Card image={flower4} colors={colors}/>
        <Card image={flower5} colors={colors}/>
        <Card image={flower6} colors={colors}/>
        <Card image={flower7} colors={colors}/>
        <Card image={flower8} colors={colors}/>
        <Card image={flower9} colors={colors}/>
        <Card image={flower10} colors={colors}/>
        <Card image={flower11} colors={colors}/>
        <Card image={flower12} colors={colors}/>
        <Card image={flower13} colors={colors}/>
        <Card image={flower14} colors={colors}/>
        <Card image={flower15} colors={colors}/>
      </div>
    </>
  )
}

export default CardsWrapper;