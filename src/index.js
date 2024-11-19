import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("this is your total cart")

const item1 = await createItem("creme WidiCare", 50.99, 1);
const item2 = await createItem("Creme Lola", 30.59, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);


//await cartService.deleteItem(myCart, item2.name);
//await cartService.calculateTotal(myCart);
