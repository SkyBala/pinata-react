import classes from './styles/catalogPost.module.css'
import React from 'react';


const CatalogPost = (props) => {
    return (
        <div className={`${classes.buttonPost}`}>
            <div className={`${classes.block}`}>
                <img className={`${classes.image}`} src={props.post.image} alt={props.post.name} />
                <div>
                    <span className={`${classes.block_info}`}>
                    <p className={`${classes.nameOfPlant}`}>{props.post.name}</p>
                    <p className={classes.cost}>{props.post.cost}</p>
                    </span>
                    <span className={classes.size_container}>
                        <p className={classes.size}>{props.post.size}</p>
                    </span>
                </div>    

                <div className={classes.circles}>       
                    <div className={classes.circlesColors} style={{borderRadius:"50%" , width:"30px" ,height:"30px" , backgroundColor:props.post.color}}></div>
                    <div className={classes.circlesColors} style={{borderRadius:"50%" , width:"30px" ,height:"30px" , backgroundColor:props.post.color}}></div>
                    <div className={classes.circlesColors} style={{borderRadius:"50%" , width:"30px" ,height:"30px" , backgroundColor:props.post.color}}></div>
                    <div className={classes.circlesColors} style={{borderRadius:"50%" , width:"30px" ,height:"30px" , backgroundColor:props.post.color}}></div>
                    
                </div> 
            </div>
            
        </div>
    );
}

export default CatalogPost;
