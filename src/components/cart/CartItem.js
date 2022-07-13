import React from 'react'

export default function CartItem(props) {
  return (
    <div className="aem-Grid aem-Grid--12 ">
                            
                            <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--4">
                                <div className='card'>
                                    <img src={props.image} alt="product-img" className='img-wrapper'/>
                                </div>
                            </div>
                            <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--8">
                                <div className='card'>
                                    <div className='card-body padding-title'>
                                        <p><b>{props.title}</b></p>
                                        <p>Size : Medium</p>
                                        <p>Color : Storm</p>
                                        <p>$ {props.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn  custom--desktop--hide col aem-GridColumn--phone--4 "></div>
                            <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--8 ">
                                <div className='card'>
                                    <div className='card-body padding-quantity-btn'> 
                                    <div class="quantity">
                                        <button class="plus-btn" type="button"onClick={props.onRemove} >
                                            -
                                        </button>
                                        <input type="text" name="name" value={props.amount} />
                                        <button class="minus-btn" type="button"  onClick={props.onAdd}>
                                            +
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn  aem-GridColumn--default--3  aem-GridColumn--phone--hide">
                                <div className='card'>
                                    <div className='card-body'> 
                                    <p><img src="./../../../assets/icons/edit.svg" alt="Icon" className='icon' />Edit item</p>
                                    <p><img src="./../../../assets/icons/trash.svg" alt="Icon" className='icon' />Remove</p>
                                    <p><img src="./../../../assets/icons/heart.svg" alt="Icon" className='icon' />Save</p>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}
