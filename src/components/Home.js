import React from 'react';
import { connect } from "react-redux";
import * as Actions from "../redux/Actions"
// import { Container } from './styles';
const mapStateToProps = (state) => {
    return {
      state,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatch
      addCart: (id) => {
        dispatch(Actions.addCart(id));
      },
    // dispatch
      addQty: (id) => {
        dispatch(Actions.addQty(id));
    },
       // dispatch
       minusQty: (id) => {
        dispatch(Actions.minusQty(id));
    },
    // dispatch
    removeCart: (id) => {
     dispatch(Actions.removeCart(id));
    },
    // dispatch
    like: (id) => {
        dispatch(Actions.like(id));
    },
    // dispatch
    unlike: (id) => {
        dispatch(Actions.unlike(id));
    } 
    }
}

 function Home(props) {
    console.log("HOME");
    const data = props.state.state;
    //console.log(props);
  return (
    <>
    <h1>Home</h1>
    <h4>Total: {data.total}</h4>
    <div className='itemsBlock'>
    {
        data.items.map(items=>
        <div key={items.id}>
            <h3>{items.title}</h3>
            <p>{items.desc}</p>
            <h4>Price: {items.price}</h4>
            <div className="buttonRow">
      { data.addedItems.length>0 && data.addedItems.find(it=>it.id===items.id)?
      <div className='btns'>
      <button onClick={data.addedItems.filter(f=>f.id===items.id)[0].qty===1?
      () => props.removeCart(items.id):
      () => props.minusQty(items.id)}>-</button>

        {data.addedItems.find(it=>it.id===items.id).qty}
        <button onClick={()=>props.addQty(items.id)}>+</button>
        </div>

        :<button onClick={()=>props.addCart(items.id)}>Add to Cart</button>

      }

      <div className={data.liked.filter(f=>f.id===items.id).length>0?"like active":"like"} onClick={data.liked.filter(f=>f.id===items.id).length>0?()=>props.unlike(items.id):()=>props.like(items.id)}>Favourite</div>
    </div>
        </div>
        
        )
    }
    </div>
    </>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);