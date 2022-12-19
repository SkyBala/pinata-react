import classes from './styles/catalogPost.module.css'
import React from 'react';


const CatalogPost = ({post}) => {
    return (
        <div className={`${classes.buttonPost}`}>
            <div className={`${classes.block}`}>
                <img className={`${classes.image}`} src={post?.image} alt={post?.name} />
                <div>
                    <span className={`${classes.block_info}`}>
                    <p className={`${classes.nameOfPlant}`}>{post?.name}</p>
                    <p className={classes.cost}>${post?.cost}</p>
                    </span>
                    <span className={classes.size_container}>
                        <p className={classes.size}>{post?.size}</p>
                    </span>
                </div>    

                <div className={classes.circles}>       
                   {post.color?.map((item,i)=><div key={i} className={classes.circlesColors} style={{borderRadius:"50%" , width:"30px" ,height:"30px" , background:item?.title}}></div>)}
        
                </div> 
            </div>
            
        </div>
    );
}

export default CatalogPost;
