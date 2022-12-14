import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


const CardSlider = props => {
    const { imgSrc} = props.data;
    return (
        <div className="wrapper">
          
            <div className="container">
        <Card className="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant='top' src={imgSrc}/>
            </div>
            </Card>
            </div>
            </div>
        

    );
};

export default CardSlider;