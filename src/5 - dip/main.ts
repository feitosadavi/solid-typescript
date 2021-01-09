/**
 * Módulos de alto nível não devem depender de módulos de baixo nível. Amvos devem
 * depender de abstrações
 * Dependa de abstrações, não de implementações
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível
 *
 * As dependência de uma classe são classes de baixo nível. E a classe a qual determinada
 * dependência pertece é uma classe de alto nível
 *
 * Classes de alto nível dependem dos serviços de classes de baixo nível, pois elas não sabem executar
 * tais serviços
 *
 * Quanto mais abstrata, mais alto nível a coisa será
 *
 * interfaces e types também são abstrações
 *
 * A vantagem de usar este princípio é que, eu posso usar mock classes. Classes que não são
 * reais apenas para fins de teste, no lugar das nossas classes reais. Podemos usar para enviar emails, por exemplo
 * baixo acoplamento = quando as classes não estão atreladas umas as outras
 * com o dependency inversion, temos baixo acoplamento pois as classes dependem de abstrações, não de outras classes
 *
 * Outra vantagem é que eu posso mexer na classe sem quebrar outra classe que depende dela. Já que a classe de alto nível
 * na vrdd não depende da classe, mas sim da abstração
 */
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { PerDayDiscout } from './classes/discount';

const perDayDiscout = new PerDayDiscout();
const shoppingCart = new ShoppingCart(perDayDiscout);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Tênis', 149.9123));
shoppingCart.addItem(new Product('Bermuda', 60.0));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
