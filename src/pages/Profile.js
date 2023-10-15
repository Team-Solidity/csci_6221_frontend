import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col'>
    <div className='flex'>
    <div>
    <img className="w-20 h-20 object-cover rounded-full
                  " src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile" />
    </div>

    <div>
      <div className='flex gap-10'>
        <h1>Hanumant </h1>
        <button>Follow</button>
      </div>
    </div>
  </div>

  <div>
    <div>
      Hello
    </div>
    <div className='grid grid-cols-3 gap-2'>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>

    </div>
  </div>
  
  </div>
  
  )
}

export default Profile