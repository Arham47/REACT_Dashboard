import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import { Stacked,Pie,SparkLine,Button } from '../components'
import { earningData,SparkLineAreaData,ecomPieChartData } from '../data/data/dummy'
import { useStateContext } from '../context/ContextProvider'

function ECommerce() {
  return (
   <div className='mt-12 '>
    <div className='flex flex-wrap lg:flex-nowrap justify-center'>
      <div className="bg-white dark:text-gray-200 dark:bg-secondry-dark-bg h-44 rounded-xl w-full  p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center" >
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-white'>earnings</p>
            <p className='text-white text-xl'>$634444</p>
          </div>
        </div>
        <div className='mt-6 '>
        <Button color= 'white' bgColor="blue" text="download" borderRadius="10px" size="md"/>
      </div> 
      </div>

  

    </div>
    <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
      {earningData.map((item)=>(
        <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
          <button type='button'className="text-2xl opacity-0.9 rouded-full p-4 hover:drop-shadow-xl" style={{color:item.iconColor,backgrounColor:item.iconBg}} >
            {item.icon}
          </button>
          <p className='mt-3'><span className='text-lg font-semibold'>{item.amount}</span>
          <span className={`text-sm text-${item.pcColor} ml-2`} >{item.percentage}</span>
          </p>
        </div>
      ))}

     </div>
   </div>
  )
}

export default ECommerce