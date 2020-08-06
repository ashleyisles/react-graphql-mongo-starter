import React from 'react'
import { useQuery } from '@apollo/client'

import { SALES } from '../graphql/queries'

import { Sidebar } from '../components/samples/Sidebar'

export const Sample = () => {
  const { loading, error, data: sales } = useQuery(SALES, {
    onCompleted: () => {
      console.log(sales)
    }
  })

  return (
    <div className="bg-white min-h-screen">
      <Sidebar></Sidebar>
      <div className="p-10 ml-64 flex flex-col">
        <h1 className="font-bold text-4xl">Sales Summary</h1>
        <h5 className="text-gray-600 tracking-wider uppercase mb-5">Austin, TX</h5>
        <div className="flex">
          <div className="w-full">
            {
              (!loading && !error && sales) ?
              <table className="w-full rounded shadow table">
                <thead className="bg-warm-gray-100 rounded-t table table-fixed w-full">
                  <tr className="text-left border-b border-gray-300">
                    <th className="p-4 uppercase text-sm tracking-wider text-gray-700 font-normal">Customer Info</th>
                    <th className="p-4 uppercase text-sm tracking-wider text-gray-700 font-normal">Customer Contact</th>
                    <th className="p-4 uppercase text-sm tracking-wider text-gray-700 font-normal">Customer Satisfaction</th>
                    <th className="p-4 uppercase text-sm tracking-wider text-gray-700 font-normal">Used Coupon?</th>
                    <th className="p-4 uppercase text-sm tracking-wider text-gray-700 font-normal">Purchase Method</th>
                  </tr>
                </thead>
                <tbody className="overflow-auto max-h-xl lg:max-h-xl md:max-h-lg rounded-b block">
                  {
                    sales.sales.map(sale => {
                      return (
                        <tr className="border-b border-gray-200 table table-fixed w-full" key={sale._id}>
                          <td className="p-4 text-gray-700 font-semibold">{`${sale.customer.gender === 'M' ? 'Male' : 'Female'}, ${sale.customer.age}`}</td>
                          <td className="p-4 text-gray-700"><a href={`mailto:${sale.customer.email}`} className="hover:underline cursor-pointer">{sale.customer.email}</a></td>
                          <td className="p-4 text-gray-700">{sale.customer.satisfaction} out of 5</td>
                          <td className="p-4 text-gray-700">{sale.couponUsed ? 'Yes' : 'No'}</td>
                          <td className="p-4 text-gray-700">
                            <span className={`text-xs bg-${sale.purchaseMethod === 'Online' ? 'blue' : (sale.purchaseMethod === 'In store' ? 'green' : 'orange')}-600 bg-opacity-25 text-${sale.purchaseMethod === 'Online' ? 'blue' : (sale.purchaseMethod === 'In store' ? 'green' : 'orange')}-600 font-semibold tracking-widest uppercase px-4 py-1 rounded`}>{sale.purchaseMethod}</span>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              : <div className="animate-bounce w-full text-center text-gray-700 uppercase tracking-widest h-64 flex items-center justify-center">Loading...</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
