import { model, Schema } from 'mongoose'

const Sales = new Schema({
  saleDate: {
    type: Date,
    required: false
  },
  items: {
    type: [{
      name: {
        type: String,
        required: false
      },
      tags: {
        type: [String],
        required: false
      },
      price: {
        type: Number,
        required: false
      },
      quantity: {
        type: Number,
        required: false
      }
    }],
    required: false
  },
  storeLocation: {
    type: String,
    required: false
  },
  customer: {
    type: {
      gender: {
        type: String,
        required: false
      },
      age: {
        type: Number,
        required: false
      },
      email: {
        type: String,
        required: false
      },
      satisfaction: {
        type: Number,
        required: false
      }
    },
    required: false
  },
  couponUsed: {
    type: Boolean,
    required: false
  },
  purchaseMethod: {
    type: String,
    // Uncomment the line below if you're using an enum for this field 
    // enum: ['IN_STORE', 'PHONE', 'ONLINE'], 
    required: false
  },
  
})

export default model('Sales', Sales)