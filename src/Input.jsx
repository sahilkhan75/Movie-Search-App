import React from 'react'

export default function({getsearchname}) {

  const searchmovie=(event)=>{
    getsearchname(event.target.value)

  }

  return (
    <div>
        <div className="max-w-md mx-auto mt-5  ">
  <div className="relative">
    <input
      type="text"
      placeholder="Search for a movie..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      onKeyUp={searchmovie}
    />
  </div>
</div>


        
    </div>
  )
}
