// Example with a restaurant order

abstract class AbstractOrder {
    public orderedItems: string[];
    public abstract cost (): number;

    public getOrderSummary () : void {
        if (!this.orderedItems.length) {
            console.log('Nothing ordered yet');
        } else {
            console.log(`The order consist of: ${this.orderedItems.join(', ')} and total cost is ${this.cost()} Ottoman Lira`);
        }
    }
}

// Order base
class Order extends AbstractOrder {
    public orderedItems: string[] = [];

    public cost (): number {
        return 0;
    }
}

abstract class DecoratedOrder extends AbstractOrder {    
    public abstract decoratedOrder: AbstractOrder;
    public abstract cost(): number;
}

class SoupInclusiveOrder extends DecoratedOrder {
    constructor(public decoratedOrder: Order) {
        super();
        this.orderedItems = [...this.decoratedOrder.orderedItems, 'Soup'];
    }
    
    public cost(): number {
        return this.decoratedOrder.cost() + 10;
    }
}

class DessertInclusiveOrder extends DecoratedOrder {
    constructor(public decoratedOrder: Order) {
        super();
        this.orderedItems = [...this.decoratedOrder.orderedItems, 'Dessert'];
    }
    
    public cost(): number {
        return this.decoratedOrder.cost() + 20;
    }
}

// Turkish tea in a tulip glass
class TurkishTeaInclusiveOrder extends DecoratedOrder {
    constructor(public decoratedOrder: Order) {
        super();
        this.orderedItems = [...this.decoratedOrder.orderedItems, 'Turkish Tea'];
    }
    
    public cost(): number {
        return this.decoratedOrder.cost() + 5;
    }
}

let order = new Order();
order = new SoupInclusiveOrder(order);
order = new TurkishTeaInclusiveOrder(order);

order.getOrderSummary();