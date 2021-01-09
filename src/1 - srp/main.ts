// Classes coesas são classes que usam seus próprios atributos

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Tênis', 149.9123));
shoppingCart.addItem(new Product('Bermuda', 60.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
