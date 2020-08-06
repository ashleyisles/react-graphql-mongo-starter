import { gql } from '@apollo/client'

export const SALES = gql`
  query sales {
    sales {
      _id
      purchaseMethod
      couponUsed
      customer {
        gender
        age
        satisfaction
        email
      }
    }
  }
`