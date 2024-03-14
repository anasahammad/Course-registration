import { useEffect, useState } from 'react'

import './App.css'
import Courses from './Components/Courses'
import Cart from './Components/Cart'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export  const totalCredit = 15;
function App() {

  const [courses, setCourses] =useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('./courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])


  
  const handleSelect = course =>{
    // console.log("clicked", course);
   
    const credits = cart.reduce((p,c)=>p +c.credit, 0)
    if(credits + course.credit > totalCredit){
      return toast.error(`Sorry! only ${totalCredit} credit is allowed`);
      
    }
    const isExist = cart.find(c => c.id == course.id);
    if(!isExist){
      const newCart = [...cart, course];
      setCart(newCart)
      toast.success("Wow Course added !");
    }
    else{
      return toast.warn("Course already added !");
    }
    
    
  }
  return (
    <>
    
    <header className=' container mx-auto py-4'>
   <h1 className=" text-center text-3xl font-bold">
      Course Registration
    </h1>
   </header>

   <main className='container mx-auto '>

    <div className='flex flex-col md:flex-row lg:flex-row gap-3  '>
    <Courses courses={courses} handleSelect={handleSelect}></Courses>
    <Cart cart={cart}></Cart>
    </div>
   
   </main>
  <ToastContainer></ToastContainer>
    
  
   
      
    </>
  )
}

export default App
