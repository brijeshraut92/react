import React from 'react';
import { useRef, useState } from 'react';
import Input from '../UI/Input';
export default function ProductDetailsForm(props) {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const [add, setAdd] = useState(1);

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
    
        if (
          enteredAmount.trim().length === 0 ||
          enteredAmountNumber < 1 ||
          enteredAmountNumber > 5
        ) {
          setAmountIsValid(false);
          return;
        }
        props.onAddToCart(enteredAmountNumber);
      }
      const plus = () => {
        setAdd(add+1);
      }
      const mul = () => {
        setAdd(add-1);
      }   
  return (
    <form onSubmit={submitHandler}>
        <div className='d-flex'>
            <button class="minus-btn" type="button" name="button" onClick={mul}>
                <img src="./../../../assets/icons/minus.svg" alt="" />
            </button>
            <Input
            ref={amountInputRef}
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                value: `${add}`,
            }}
            />
            <button class="plus-btn" type="button" name="button" onClick={plus}>
                <img src="./../../../assets/icons/plus.svg" alt="" />
            </button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </div>
        <div className="addtocart">
            <button className='btn btn-blue addtocartBtn' >Add To cart</button>
        </div>
    </form>
  )
}
