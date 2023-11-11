import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
} from "../../redux/slice/cartSlice";
import './EditorialItem.css'
// import Card from "../../card/Card";
// import styles from "./ProductItem.module.scss";
// import  "../../components/product/productItem/ProductItem.css";

 
const EditorialItem = ( ) => {
 

 

  return (
     <>
     
      <div>
<div  >
<div  >
    <div className="themesContainer">
    <div className='pool-box'>         
       <div >    
   {/* <Link to={`/pet`}> */}
   <img style={{
    width: '600px',
    height:'700px',
   }} src={require('../../assets/kid.jpg')} alt=""/>  
   {/* </Link>   */}
     </div>   
    <div className='pool-info'>
    {/* <div>           
     <h1> Remember a beloved pet
</h1>
    
       <Link to={'/pet'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div>  */}
    </div> 
      </div>   


      <div className="themesContent">
        <h1>What Makes Our Custom Paintings So Special?</h1>
        <h2>Handcrafted Masterpieces. We partner with truly great artists in creating timeless artistry. You will receive artworks that can be passed down to generations that speaks timelessness, not mundane paintings! </h2>
        <h2>Wide Range of Themes and Media. From recreating cherished moments to nostalgic family portraits, from oil to pencil, we are versatile in covering different and specific needs</h2>
        <h2>Deeply committed. We are committed to excellence in artworks and services. Your satisfaction is our top priority.</h2>
        <h1>Why Choose a Custom Painting</h1>
        <h2>Unique and Original</h2>
        <h2>Emotional Connection</h2>
        <h2>StoryTelling, Artistic Express and Collaboration</h2>
        <h2>Interior Decor</h2>
        <h2>Thoughtful Gift</h2>
        <h2>Heirloom Quality & Timelessness</h2>
      </div>
    </div> 

       



       <div className='editorial-container' >


       <div className='pool-box'>         
       <div >    
   <Link to={`/pet`}>
   <img src={require('../../assets/dog2.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
   <div>
   <h1> Remember a beloved pet
    </h1>
    <h2> Oil on Canvas
    </h2>
   </div>
 
       <Link to={'/pet'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div>  



       <div className='pool-box'>         
       <div >    
   <Link to={`/wedding`}>
   <img src={require('../../assets/Wedding.avif')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
   <div>
   <h1> Wedding, Anniversary
    </h1>
    <h2> Oil on Canvas
    </h2>
   </div>
 
       <Link to={'/wedding'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div>  



{/* Single */}


      <div className='pool-box'>         
       <div >    
   <Link to={`/single`}>
   <img src={require('../../assets/specialsomeone.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     <h1> Special Someone
</h1>
   
       <Link to={'/single'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div>      


   

    <div className='pool-box'>         
       <div >    
   <Link to={`/family`}>
   <img src={require('../../assets/Family.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     
    <h1> Bring a family together
</h1>
   
       <Link to={'/family'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 


      {/* Pet and Children */}

    <div className='pool-box'>         
       <div >    
   <Link to={`/lovedone`}>
   <img src={require('../../assets/lovedobe.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     
    <h1> Remember a loved one
</h1>
    
       <Link to={'/lovedone'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 



      <div className='pool-box'>         
       <div >    
   <Link to={`/generation`}>
   <img src={require('../../assets/generation.JPG.png')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     
    <h1> Connecting Generations
</h1>
   
       <Link to={'/generation'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 

      {/* Grandparents and Children */}

    <div className='pool-box'>         
       <div >    
   <Link to={`/grand`}>
   <img src={require('../../assets/other/nature.png')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
    <div>
    <h1> Other
</h1>
<h3>Baby Portrait, Scenery, Landscape...</h3>
    </div>
   
       <Link to={'/grand'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 
       </div>

      </div>
</div>
        
      </div>
     </>
 
  );
};

export default EditorialItem;
