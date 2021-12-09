const initialState = {
  categories: [{
    displayName:'Food',
    normalizedName:'food',
    description: 'yes'
  }],
  products:[{
    name:'item',
    count: 1,
    price: 1,
    category: 'food',
    description:'great'
  }],
  activeCategory:''
}

function storeReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
    case "ACTIVE_CATEGORY":
      let selCategory  = state.categories.filter(category => category.normalizedName === payload)[0];
      return {...state, activeCategory: selCategory.displayName};
    default:
    return state;
  }
}

export const selectCategory = (categoryName) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: categoryName
  }
}

export default storeReducer;