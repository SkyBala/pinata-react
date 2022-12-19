import React, {useEffect, useState} from "react";
import c from "./CardsWrapper.module.css";
import Card from "./card/Card";


const CardsWrapper = ({page}) => {

  return(
    <>
      <div className={c.cards}>
        {page && page?.map(item=>
          <Card key={item.id}
           image={item?.photos[1]}
           colors={item?.colors} 
           price={item?.price}
           size={item?.description}
           name={item?.title.length<11 ?item?.title:`${item?.title.slice(0,10)}...`}
           />
          )}
      </div>
    </>
  )
}

export default CardsWrapper;