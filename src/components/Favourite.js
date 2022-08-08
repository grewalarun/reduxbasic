import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as Actions from '../redux/Actions';
// import { Container } from './styles';

export default function Favourite(props) {
const data = useSelector(props=>props.state);
const dispatch = useDispatch();
const unlike = (id) => {
  //dispatching the action
  dispatch(Actions.unlike(id));
};
const liked = data.liked;

  return (
    <>
    <h1>Favourite Items</h1>
    {liked&&liked.map(a=><div className="favourite" key={a.id}><h3>{a.title}</h3>
    <p>{a.price}</p>
    <button onClick={()=>unlike(a.id)}>Remove from Favourite</button>
    </div>)}
    </>
  );
}
