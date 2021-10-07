const initialState = {
  //aqui van todos los productos ue contiene la categoria
    products: [],
  //aqui van los productos selecctionados
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
      //hacer una acción que cambie el estado de products a a variable de estado que e
      //está en Shop  GetProducts
      case 'ADD_TO_CART':
        return {
          ...state,
          selectedProducts: state.products.map(product =>
            product.id === action.id ? {...product, selected: true} : product,
          ),
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