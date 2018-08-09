
export class PlateItem {
    it_id: number;
    it_name: string;
    it_price: number;
    qty: number;
    qty_in_stock: number;

    constructor( ) {}

    get totalPrice() {
        return this.it_price * this.qty;
    }

}
