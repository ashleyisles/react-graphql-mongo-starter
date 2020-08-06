import React from 'react'

import adjustmentIcon from '../../assets/samples/adjustments.svg'
import cog from '../../assets/samples/cog.svg'
import shoppingBag from '../../assets/samples/shoppingBag.svg'
import support from '../../assets/samples/support.svg'

export const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-warm-gray-100 absolute flex flex-col p-10 items-center">
      <div className="flex flex-row items-center w-full mb-16">
        <div className="h-16 w-16 bg-brand rounded flex items-center justify-center">
          <span className="text-white text-4xl">S</span>
        </div>
        <span className="text-2xl text-gray-800 ml-5 tracking-wider uppercase">Store</span>
      </div>
      <button className="bg-brand px-4 py-2 rounded mb-5 w-full text-left flex items-center hover:opacity-75">
        <img src={adjustmentIcon} className="text-white h-5 w-5 mr-2 fill-current" alt="dashboard" />
        <span className="text-white">Dashboard</span>
      </button>
      <button className="px-4 py-2 rounded mb-5 w-full text-left flex items-center hover:opacity-75">
      <img src={support} className="text-white h-5 w-5 mr-2 fill-current" alt="support" />
        <span className="text-gray-700">Support</span>
      </button>
      <button className="px-4 py-2 rounded mb-5 w-full text-left flex items-center hover:opacity-75">
        <img src={shoppingBag} className="text-white h-5 w-5 mr-2 fill-current" alt="orders" />
        <span className="text-gray-700">Orders</span>
      </button>
      <button className="px-4 py-2 rounded mb-5 w-full text-left flex items-center hover:opacity-75">
        <img src={cog} className="text-white h-5 w-5 mr-2 fill-current" alt="settings" />
        <span className="text-gray-700">Settings</span>
      </button>
    </div>
  )
}
