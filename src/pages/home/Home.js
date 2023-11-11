import React  from "react";
import Slider from "../../components/slider/Slider"; 
import Editorial from "../Editorial/Editorial";
import '../home/Home.css'
import FAQ from '../FAQ'
import EditorialItem from "../Editorial/EditorialItem";
const Home = () => {  
  return (
    <div className="homeContainer">
       {/* <Slider /> */}
      <section className="homeContents">         
      <div className="steps">
       <img src={require('../../assets/StepsMainLong3.png')} alt="steps"/>
       </div> 
       
      <EditorialItem/>
      
        <FAQ/>
     </section>
      
     </div>
  );
};

export default Home;
