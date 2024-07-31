import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
     </>
  )
}

export default App


{/* <div className='flex justify-center items-center mt-11'>
<span className='h-[40px] border border-gray-300 w-[60%] flex items-center pl-2 rounded-md '>hey narendra  </span>

  <div className='flex gap-[1px] border border-green-300 rounded-r-md'>
    <button className='h-[40px] bg-green-500 p-3'> <FaCheck /> </button>
    <button className='h-[40px] bg-green-500 p-3'> <FaPencilAlt /> </button>
    <button className='h-[40px] bg-green-500 p-3 rounded-r-md'> <FaTrash /> </button>
  </div> 
</div> */}