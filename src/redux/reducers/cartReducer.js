const initialState = {
    products: [],
    selectedProducts: [],
    product: {
      id:0
    },
    counter: 0,
  };


  const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return {
          ...state, 
          counter: state.counter + 1,
        };
        case 'GET_PRODUCTS':
        return {
          ...state, 
          products: action.products
        };
      case 'ADD_TO_CART':
        console.log(state.selectedProducts)
        return {
          ...state,
          selectedProducts: [ ...state.selectedProducts,
            state.products.filter(product =>
              product.id === action.id 
            ),
          ]
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, selected: false, quantity: 1}
              : product,
          ),
        };
      case 'ADD_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, quantity: product.quantity + 1}
              : product,
          ),
        };
      case 'SUB_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {
                  ...product,
                  quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                }
              : product,
          ),
        };
      case 'EMPTY_CART':
        return {
          ...state,
          products: state.products.map(product =>
            product.selected
              ? {...product, selected: false, quantity: 1}
              : product,
          ),
        };
      default:
        return state;
    }
  };
  export default CartReducer;