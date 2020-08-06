import { gql } from 'apollo-server-express'

const Sales = gql`
  type Sale {
    _id: ID!
    saleDate: Date
    items: [Item]
    storeLocation: String
    customer: Customer
    couponUsed: Boolean
    purchaseMethod: String # If you decided to go with the enum, change String to 'PurchaseMethodType' here
  }
  type Item {
    name: String
    tags: [String]
    price: Float
    quantity: Int
  }
  type Customer {
    gender: String
    age: Int
    email: String
    satisfaction: Float
  }
  # If you wanted to make the Purchase Method a little more specific, you could use enums like so:
  # enum PurchaseMethodType {
  #   IN_STORE
  #   ONLINE
  #   PHONE
  # }
  extend type Query {
    sales: [Sale]
    sale(_id: ID!): Sale
  }
`

export default Sales