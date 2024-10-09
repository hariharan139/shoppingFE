import React from 'react'

const Womencollection = (props) => {
    const {title,image1,image2,image3,image4,image5,image6}=props.ladies
    return (
        <div className='ladiescollections'>
            <h2>{title}</h2>
            <div className='bannerbox'>
            <img src='images/girlbanner.png' alt='banner'/>
            </div>
            
            <div className='ladiesimages'>
                <img src={image1} alt={title}/>
                <img src={image2} alt={title}/>
                <img src={image3} alt={title}/>
                <img src={image4} alt={title}/>
                <img src={image5} alt={title}/>
                <img src={image6} alt={title}/>
                
                
            </div>
        </div>
    )
}

export default Womencollection
