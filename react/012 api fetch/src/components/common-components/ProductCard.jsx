import React from 'react';


const ProductCard = ({data, modalOpen, cartFunction}) => {
  return (
    <div className='product-card'>
        <div className='thumbnail'>
            <img src={data.thumbnail}></img>
        </div>
        <div className='card-body'>
            <h2>{data.title}</h2>
            <div className='price-div'>
                price : {data.price}
            </div>
            <div>
                <button onClick={cartFunction}>Add to cart</button>
                <button onClick={modalOpen}>Details</button>
            </div>
        </div>
    </div>

    
  )
}

export default ProductCard