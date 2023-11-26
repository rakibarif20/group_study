const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "INCREMENT") {
    let tempCount = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    return {
      ...state,
      cart: tempCount,
    };
    console.console.log("increment button");
  }
  if (action.type === "DECREMENT") {
    let decAmout = state.cart.map((item) => {
      if (item.id === action.payload) {
        // if(item.amount<1){
        //     item.amount = 1
        //     return item.amount
        // }
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    }).filter((item)=> item.amount !==0);
    return {
        ...state,
        cart:decAmout
    }
  }
  if(action.type==='GET_TOTALS'){
    console.log(state.total);
    var {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
      const {price,amount} = cartItem;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      console.log( amount +'total')
      return cartTotal
    },{total:0,amount:0})
    total = parseFloat(total.toFixed(2))
    return {...state,total,amount}
  }
  return state;
};
export default reducer;
