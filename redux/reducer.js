const initialState = {
  user: 'Sumit',
  totalItems: 0,
  totalPrice:0,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice:state.totalPrice+action.item.price,
        items: [...state.items,action.item.name],
      };
    default:
      return state;
  }
};
export default reducer;
