import { gql } from 'apollo-server-express'
import Sale from './sales'
// Comment out the line above and import your types here!

// Add your types with template literals ${} underneath the Subscription type
const types = gql`
  scalar Date
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
  ${Sale}
`

export default types