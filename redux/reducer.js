import { Alert } from "react-native";

const initialState = {
  user: 'Sumit',
  totalItems: 0,
  totalPrice: 0,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let cartItem = action.item;
      let index = state.items.findIndex((val)=>val.id===action.item.id)
      if( index!==-1){
        state.items[index].count++;
        return {
          ...state,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.item.price,
        }
      }
        cartItem.count++;
        return {
          ...state,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.item.price,
          items: [...state.items, cartItem],
        };
      // } else if(cartItem.count !== 0 ) {

      //   state.items.map((item, key) => {
      //     if (item.id === cartItem.id) {
      //       console.log(key)
      //       state.items[key].count++;
      //     }
      //   });
      // }
    case 'DELETE_ITEM':
      index = state.items.findIndex((val)=>val.id===action.item.id)
      let itemCount = state.items[index].count
      state.items[index].count = 0
      return {
        ...state,
        totalItems: state.totalItems - itemCount,
        totalPrice: state.totalPrice - action.item.price * itemCount,
        items: state.items.filter((item) => item.id !== action.item.id),
      };
    case 'INCREASE_ITEM' :
      index = state.items.findIndex((val)=>val.id===action.item.id)
      state.items[index].count++;
      return{
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.item.price,
      }
      case 'DECREASE_ITEM' :
        index = state.items.findIndex((val)=>val.id===action.item.id)
        if(state.items[index].count == 0)
        {
          return{
            ...state,
            items: state.items.filter((item) => item.id !== action.item.id),
     
          }
        }
        
        state.items[index].count--;
        return{
          ...state,
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - action.item.price,
        }
    default:
      return state;
  }
};
export default reducer;
