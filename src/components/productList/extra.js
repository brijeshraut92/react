import React, { useState, useEffect } from "react";

export default function ProductList() {
    const [data, setData] = useState([]);

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(nodeData => setData(nodeData) )
    }, []);


  return (
    <section className='productList'>
        <div className='container'>
            <div className='row'>
            </div>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12 ">
                    <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--12 ">
                       filter 
                    </div>
                    <div className="aem-GridColumn  aem-GridColumn--default--9 aem-GridColumn--phone--9 ">
                        <div className="row">
                            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12 ">
                                
                                    {data.map((item) => (
                                        <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--4 " key={item.id}>
                                            <div className='card'>
                                                <div className="card-header">
                                                    {item.category} &#9794;
                                                </div>
                                                <img src="{item.image}" alt="product-img" className='img-wrapper'/>
                                                
                                                <div className='card-body'>
                                                    <p className='title'>{item.id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}                                   
                            </div>
                        </div>
                    </div>
                    
                </div>
            
        </div>
        
    </section>
  )
}


{data.map((item) => (
    <div className="aem-GridColumn  aem-GridColumn--default--3 d-flex">
        <div className='card'>
            <div className="card-header">
                {item.category} &#9794;
            </div>                            
            <div className='card-body'>
                <img src={item.image} alt="product-img" className='img-wrapper'/>
                <p className='title'>{item.id}</p>
                <p className='title'>{item.title.slice(0,17-3)+'...'}</p>
                <p className='price'>{item.price}</p>
                <img className="icon" src="assets/icons/love.png" alt="wishlist icon"/>
            </div>
            <div className="card-footer">More</div>
        </div>
    </div>     
))} 
