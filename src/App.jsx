import React, {  useEffect, useState } from 'react'

export default function App() {
  const [index,setIndex]=useState(1)
  const [data,setData]=useState([])
  let getdata= async (index)=>
  {
    let response= await fetch(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    let result= await response.json()
    
    
    setData(result);
    
   
    
  }
  
  useEffect(() => {
    getdata(index)
  }, [])
  
  let userdata="loading....";
   
    if(data.length>0)
    {
      userdata= data.map(function(elem)
    {
    return <div className=' flex '>
      <div>
        <img className='h-100 w-100 object-cover rounded-2xl  '   src={elem.download_url} alt="photo" />
      <h1  className='text-4xl underline font-bold ml-2.5'>{elem.author}</h1>
      </div>
    </div> 
      
        
    })
    }
    
    

   
 
  return (
        <div>
    
    <div className='flex flex-wrap gap-6 mt-5 ml-30 '>
      {userdata}
    </div>
    
    <div className="min-h-screen relative"> 
  <button onClick={()=>
    {
      setIndex(index-1)
      getdata(index)
    }
  } className=" bottom-4 right-44 active:scale-95 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer fixed">
    prev
  </button>
  <button  className=" bottom-4 right-24 bg-blue-500 text-white px-4 py-2 rounded  fixed">
    {index}
  </button>
  <button onClick={()=>
    {
      setIndex(index+1)
      getdata(index)
    }
  } className=" bottom-4 active:scale-95 right-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer fixed">
    next
  </button>
</div>

   </div>

    
  )
}
