import React, { useState } from 'react'
// import '../productDetails/ProductDetails.css' 
import '../../Styles/signup.css' 
const Single =()=>{    
  const [selectedSize, setSelectedSize] = useState('');
  const sizeOptions = [
    { label: 'Select a size', value: '' },
    { label: '8" x 12 ($139)"', value: '8x12' },
    { label: '12" x 16 ($239)"', value: '12x16' },
    { label: '16" x 20 ($279)"', value: '16x20' },
    { label: '20" x 24 ($339)"', value: '20x24' },
    { label: '24" x 30 ($379)"', value: '24x30' },
    { label: '24" x 36 ($439)"', value: '24x36' },
    { label: '36" x 48 ($539)"', value: '36x48' },
  ];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const getPriceLink = (size) => {
    // Define the price links based on the selected size
    const priceLinks = {
      '8x12': 'https://buy.stripe.com/eVa14G7Ea95P6QwaEL',
      '12x16': 'https://buy.stripe.com/cN29Bc5w24PzeiY14c',
      '16x20': 'https://buy.stripe.com/4gw8x80bI1Dna2IfZ7',
      '20x24': 'https://buy.stripe.com/fZecNo0bIbdXdeU7sC',
      '24x30': 'https://buy.stripe.com/eVa9Bcf6Cgyh0s85kv',
      '24x36': 'https://buy.stripe.com/fZe28K3nUci1caQ8wI',
      '36x48': 'https://buy.stripe.com/8wMaFg2jQeq96Qw4gt',
    };

    return priceLinks[size] || '';
  };

  const handleButtonClick = () => {
    const selectedPriceLink = getPriceLink(selectedSize);

    if (selectedPriceLink) {
      // Redirect to the selected size's purchase link
      window.open(selectedPriceLink, '_blank');
    }
  };



  const smallImages = [  
    'https://i.postimg.cc/gjrTkLMX/specialsomeone.jpg',
    'https://i.postimg.cc/5NQVCn57/bac1.png',
    'https://i.postimg.cc/QtKf2ZV1/zoom1.png',
    'https://i.postimg.cc/PJm2qbWq/zoom2.png',
    'https://i.postimg.cc/NFhdYCrV/zoom3.png',
   ]; 
   const [mainImage, setMainImage] = useState(smallImages[0]); // set the initial main image

   // Define a function to change the main image
   const changeMainImage = (newImage) => {
     setMainImage(newImage);
   };
 return (
    <main>
<section className='productDetailContainer'>
<div className='upContainer'>
<div className='upContent'>
<div className='upImg'>
<div style={{
  // background: `url(${mainImage})`,
    display: 'flex',
    flexDirection: 'column',
 }}>
<img id="MainImg" src={mainImage} alt="mainimage" style={{
  width: "500px", height: "400",   
}} />
<div style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            padding: '10px',
            flexDirection: 'row',
            }}>
{smallImages.map((smallImage, index) => (
        <img
          key={index}     
          style={{           
            padding: '10px'
            }}        
          src={smallImage}
          alt={`SmallImage ${index}`}
          onClick={() => changeMainImage(smallImage)} // Call the changeMainImage function
        />
      ))}
</div>
</div>
 </div>
<div className='upInfo1'>
<div className='imageInfo'>
<div className='imageInfoView'>    
{/* <h1>Paint My Life</h1> */}
<div className='detNameInfo'>
<h1><b>Special someone</b></h1>
 </div> 
 {/* <h2 className=''>Shipping fee {`$${product?.shipfee}`}</h2> */}


 <div className="PricesContainer">
  <p>Sizes</p>
      <select value={selectedSize} onChange={handleSizeChange} className='input'>
        {sizeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="btn" onClick={handleButtonClick}>
        Purchase
      </button>
    </div>

 
 
<div>

</div>
 </div>  
</div>
</div>
</div>      
</div>
</section>
<div style={{
  height: 'auto', width:'70%',
  margin: 'auto',
 }}>
       <img src={require('../../assets/StepsMainLong2.png')} width={'100%'} alt="steps"/>
       </div>
</main>
  )

}

export default Single