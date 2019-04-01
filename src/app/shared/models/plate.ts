import { PlateItem } from "shared/models/plate-item";

export interface Plate {
  items: { [_id: number]: PlateItem };
  total_price: number;
  total_qty: number;
}
