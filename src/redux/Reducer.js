import * as Action from './Actions'
const initState = {
  items: [
    {
      id: 1,
      title: "Nike",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
    },
    {
      id: 3,
      title: "Reebok",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
    },
  ],
  addedItems: [],
  liked:[],
  total: 0,
  loading:true

};

let defaultstate = initState;
const ab =localStorage.getItem('local');

if(ab!=null)
{
defaultstate=JSON.parse(ab).state} else {defaultstate=initState}

export default function Reducer(state = defaultstate, Action) {
 // console.log(action);
    switch(Action.type){
        case "ADD_TO_CART":
            let added_item = state.state.items.find((it) => it.id === Action.id);
            added_item = {...added_item,qty:1};
            return {
                state: {
                  ...state.state,
                  total: state.state.total +1,
                  addedItems:[...state.state.addedItems,added_item]
                 
                }
               }
        case "ADD_QUANTITY":
        return {
            state: {
                ...state.state,
                total: state.state.total +1,
                ...state.state.addedItems.length!==0?
                state.state.addedItems.find(i=>i.id===Action.id).qty++
                :''
            }
            }
        case "MINUS_QUANTITY":
            return {
                state: {
                    ...state.state,
                    total: state.state.total -1,
                    ...state.state.addedItems.length!==0&&state.state.addedItems.find(i=>i.id===Action.id).qty>1?
                    state.state.addedItems.find(i=>i.id===Action.id).qty--
                    :''
                }
                } 
            
            case "REMOVE_CART":
                let newCart = state.state.addedItems.filter((it) => it.id !== Action.id);
                let mainItem = state.state.addedItems.filter((it) => it.id === Action.id);
                return {
                state: {
                    ...state.state,
                    total: state.state.total - mainItem[0].qty,
                    // ...state.state.addedItems=newCart,
                    addedItems:newCart,
                    
                   
                }
            }

            case "LIKE":
                let liked_item = state.state.items.find((it) => it.id===Action.id);
               
                return {
                    state: {
                    ...state.state,
 
                    liked:[...state.state.liked,liked_item]
                    
                    }
                }
                case "UNLIKE":
                    let removeliked = state.state.liked.filter((it) => it.id !== Action.id);
                   
                    return {
                        state: {
                        ...state.state,
     
                        liked:removeliked
                        
                        }
                    }          
            default:
                return {
                    state
                }
    }
 }
