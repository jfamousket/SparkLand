import { PlateItem } from 'shared/models/plate-item';
import { MenuItem } from 'shared/models/menu-item';

export class Plate {

    constructor(public items) {
    }

    getQuantity(cardItem: MenuItem){
        let plateItem: PlateItem
        if(!this.items) return 0;
        this.items.forEach(item => { if(item.it_id === cardItem.it_id) plateItem = item });
        return plateItem ? plateItem.qty : 0;
      }

    get totalItemsCount(): number{
        let count = 0;
        for (let item_id in this.items) 
            count += this.items[item_id].qty;
        return count;
    }
    get totalPrice(): number{
        let sum = 0;
        if(!this.items) return sum;
        this.items.forEach(item => {
            sum += (item.qty * item.it_price);
        });
        return sum;
    }
}