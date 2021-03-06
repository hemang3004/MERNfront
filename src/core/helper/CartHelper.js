
export const AddItemToCart = (item, next) => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        // console.log(JSON.parse(localStorage.getItem("cart")))x
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...item,
        count: 1
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      next();
    }
  };
//   to do manage count
export const loadCart=()=>{
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
          // console.log(JSON.parse(localStorage.getItem("cart")))x
          return JSON.parse(localStorage.getItem("cart"));
        }

}}

export const RemoveItemFromCart = (productId)=>{
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        // console.log(JSON.parse(localStorage.getItem("cart")))x
        cart = JSON.parse(localStorage.getItem("cart"));
      }
    cart.map((product,index)=>{
        if(product._id===productId){
            cart.splice(index,1);
        }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
}
    return cart
    
}
export const EmptyCart=(next)=>{
    
    if(typeof window!==undefined){
        localStorage.removeItem("cart")
        let cart=[]
        localStorage.getItem("cart",JSON.stringify(cart))
        next(); 
    }
}
