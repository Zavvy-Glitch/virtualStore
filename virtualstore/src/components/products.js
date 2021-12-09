let initialState = {
  products: [
    {
      name: 'Computer',
      description: 'Something',
      price: 'free',
      category: 'Electronics',
      count: 100,
    },
    {
      name: 'Soccer Ball',
      description: 'You Can Kick It',
      price: 'free',
      category: 'Sports',
      count: 30,
    },
    {
      name: 'Snowboard',
      description: 'tis the season',
      price: 'free',
      category: 'Sports',
      count: 50,
    },
    {
      name: 'Samsung Flat Screen',
      description: 'oooooh AAAAAAh',
      price: 'free',
      category: 'Electronics',
      count: 1,
    },
  ],
  totalCount: 0,
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'DECREMENT':
      let totalCount = state.totalCount - 1;
      let products = state.products.map((product) => {
        if (product.count === payload) {
          return { ...product, totalCount: product.count - 1 };
        } else {
          return product;
        }
      });
      return { products, totalCount }
      case 'RESET_COUNT':
        return initialState;
        default:
          return state;
  }
}

export default productReducer;
