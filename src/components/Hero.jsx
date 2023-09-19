import React from 'react'

const Hero = () => {
  return (
    <div>
       <div className="max-w-[1640px] mx-auto p-4">
        <div className="mx-h-[500px] relative">
            <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40
               flex flex-col justify-center">
                <h1 className="px-4 text-4xl  sm:text-5xl md:text-6xl  font-bold text-orange-500">Build Your Future</h1>
                <h1 className="px-4 text-4xl  sm:text-5xl md:text-6xl  font-bold text-orange-500">Join UpSkill Learn to Earn</h1>
            
            </div>
          <img className="w-full max-h-[500px] object-cover " src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

        </div>




       </div>

    </div>
  )
}

export default Hero