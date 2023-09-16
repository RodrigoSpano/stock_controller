import mongoose from "mongoose";
import { ItemBase } from "../../utils/types/items.interface";

const ItemSchema = new mongoose.Schema<ItemBase>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required:true,
    min: 0
  }
})

export default mongoose.model('item', ItemSchema)