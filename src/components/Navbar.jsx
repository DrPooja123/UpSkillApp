import React , {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [nav , setNav]=useState(false)
  return (
    <div>
         <div className="flex justify-between text-xl  bg-orange-500 font-bold p-4">
            <div className="flex justify-center ">
               <div onClick={()=>setNav(!nav)}>
                <AiOutlineMenu size={30}/>
               </div>
                <h1>Upskills</h1>
              </div>
  {/*Overlay*/}
  {nav?  <div className="bg-black/80 fixed w-full h-screen z-10 top=0 left=0 "></div>: ''}
      
        
 {/*side drawer*/}

 <div className={nav? "fixed top=0 left=0 w-[300px] h-screen bg-white z-10  duration-300":
"fixed top=0 left-[-100%] w-[300px] h-screen bg-white z-10  duration-300"}>
    <AiOutlineClose size={30}  onClick={()=>setNav(!nav)} className="absolute right-4 top-4 cursor-pointer"/>
    <h2 className="font-bold p-4">UpSkill</h2>


    <div>
             <ul className=" text-xl">
                <Link to="/"><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
               
                <Link to='/course'><li>Course</li></Link>

             </ul>
           </div>

 </div>



           
       



         </div>
       


    </div>
  )
}

export default Navbar