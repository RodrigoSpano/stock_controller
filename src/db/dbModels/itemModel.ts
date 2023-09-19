import mongoose from "mongoose";
import { TitemBase } from "../../utils/types/items";

const ItemSchema = new mongoose.Schema<TitemBase>({
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