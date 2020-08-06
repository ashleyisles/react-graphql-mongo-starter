import SaleModel from '../models/sales'

const Sale = {
  Query: {
    sales (parent) {
      // this data set is huge, so for demo purposes we're just going to get the sales for the city of Austin from 2018 to now.
      return SaleModel.find({ storeLocation: 'Austin', saleDate: { $gte: new Date('2017-01-01') } })
    },
    sale (parent, { _id }) {
      return SaleModel.findById(_id)
    }
  }
}

export default Sale