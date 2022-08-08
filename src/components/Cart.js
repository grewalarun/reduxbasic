import React from 'react';

import {useSelector, useDispatch} from 'react-redux'
import * as Actions from '../redux/Actions';

// import { Container } from './styles';
// const mapStateToProps = (state) => {
//     return {
//       state,
//     };
// }
function getSum(total, num) {
    return total + Math.round(num);
  }
function Cart(props) {
    const a= useSelector(props=>props.state);


    const dispatch = useDispatch();

    const remove = (id) => {
      //dispatching the action
      dispatch(Actions.removeCart(id));
    };

    const addQty = (id) => {
      //dispatching the action
      dispatch(Actions.addQty(id));
    };
    const minusQty = (id) => {
      //dispatching the action
      dispatch(Actions.minusQty(id));
    };

    let totalBill=0;
  return (
    <div className='cartouter'>
    <div className='cartblock'>
    <h1>Cart</h1>

    <h4>Total Items in Cart : {a.total}</h4>
    <div className='cart'>
    {a.addedItems.length>0? 
    <div className="items header">
        <div className="itemTitle">Title</div>
        <div className="itemQuantity">Quantity</div>
        <div className="totalPrice">Price</div>
        <div className="totalPrice">Total</div>
        <div className="itemRemove">Remove</div>
    </div>
   :"" }
            {a.addedItems && a.addedItems.map( item=> 
                <div className="items items-row" key={Math.random(item.id)}>
                <div className="itemTitle">{item.title}</div>
                <div className="itemQuantity"> <button onClick={()=>minusQty(item.id)}>-</button>{item.qty}  <button onClick={()=>addQty(item.id)}>+</button></div>
                <div className="totalPrice">{item.price} </div>
                <div className="totalPrice">{item.qty * item.price}</div>
                <div className="itemRemove"><button onClick={()=>remove(item.id)}>Remove</button></div>
            </div>
            
            )} 
    </div>
</div>
<div className='totalcart'>
    <h3>Total Amount</h3>
    <h1> {totalBill=a.addedItems.map( item=> parseInt(item.qty*item.price)+totalBill).reduce(getSum, 0)}</h1>
</div>
   </div>

  )}

export default Cart;