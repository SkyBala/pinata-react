import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


const CardSlider = props => {
    const {photos} = props.data;
    return (
        <div className="wrapper">
            
            <Card className="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant='top' src={photos[0] && photos[0]}/>
            </div>
            </Card>
            </div>
    );
};

export default CardSlider;