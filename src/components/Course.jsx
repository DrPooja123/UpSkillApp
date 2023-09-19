import React , {useState} from 'react'
import {data} from '../data/data.js'
const Course = () => {

  const [record ,setRecord]=useState(data)

  const filterType=(category)=>{
    setRecord(data.filter((item)=>{
        return item.category === category;
    }))
  }
 
  return (
    <div>

        {/* Filter Row */}
      
        <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setRecord(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('certificate')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              certificate
            </button>
            <button
              onClick={() => filterType('diploma')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Diploma
            </button>
            
          </div>
        </div>

     
      </div>





 <div className=" grid grid-cols-2 lg:grod-cols-4 gap-6 pt-4">
    {record.map((item,index)=>(
        <>
        <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg"/>

            <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p className=" bg-orange-500 text-white p-1 rounded-full">{item.price}</p> </div>
                <div className="text-500 p-4 font-bold ">  {item.description}
                   
            </div>
            </div></>
    ))}
 </div>

    </div>
  )
}

export default Course