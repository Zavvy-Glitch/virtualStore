let initialState = {
  products: []
}

function cartReducer(state = initialState, action) {
  switch(action.type){
    case 'ADD_CART': {
      let item = action.payload;
      if(state.products.includes(item)){
        item.qty++;
        return state;
      } else {
        item.qty = 1;
      }
      return {...state, products:[...state.products, item]};
    }
    case 'REMOVE_CART':
      return{...state, products: state.products.filter(product => {
        if(product === action.payload && product.amount > 0) {
          product.qty--;
          return product.qty > 0;
        }
        return product !== action.payload;
      })
    };
    default:
      return state;
  }
}

export const addCart = product => {
  return{
    type: 'ADD_CART',
    paylooad: product,
  }
}

export const remCart = product => {
  return {
    type: 'REMOVE_CART',
    payload: product,
  }
}

export default cartReducer;