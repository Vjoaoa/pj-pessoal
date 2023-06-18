
const State = {
    products: [],

  };
  
  export default function ProductsReducer(state = State, action) {
    if (action.type === "ADD_PRODUCT") {
      const copyState = { ...state };
  
      copyState.products.push({ ...action.payload.product, id: Date.now() });
  
      return { ...copyState };
    }
  
    if (action.type === "EXCLUIR") {
        const copyState = { ...state };
  
        copyState.products.splice( action.payload.idx, 1 );
    
        return { ...copyState };
    }
  
    return state;
  }