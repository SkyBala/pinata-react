import React from 'react';
import img1 from './img/img1.svg'
import img2 from './img/img2.svg'
import img3 from './img/img3.svg'
import CatalogPost from './CatalogPost';
import classes from './styles/catalog.module.css'

const IndoorPage = () => {
    const arr = new Array()
    for(let i = 0;i<18;i++){
        arr.push(i)
    }
    return (
        <div style={{backgroundColor:"#F6F0F0", padding:"50px 0 50px"}}> 
            <h1 className={classes.nameOfCards}>Indoor Plants</h1>
            <div className={classes.background}>
               {arr.map(item => <CatalogPost key={item} post={{image : img1 , name : "plant" , cost: "$795" , size:"XXL" , color:"black"}}/>)} 
            </div>
        </div>
    );
}

export default IndoorPage;
