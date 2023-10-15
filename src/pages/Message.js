import React from 'react'
import {GiSharpSmile} from 'react-icons/gi'
import {TiAttachment} from 'react-icons/ti'
import {BsFillSendFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

const Message = () => {
  const accounts = [{
    name:'Hanumant', message:"Hi",
    time:'2.12', id:'0',
  },
  {
    name:'Mosagandu', message:"Yo",
    time:'5.32', id:'1',
  }];

  return (
    
    <div className='message flex'>
      <div className='flex basis-1/4 justify-center border-r-2 pr-20 m-2'>
        <div>
          {/* div for message-list */}
          <Account accounts = {accounts} />
        </div>
      </div>

      <div className='flex flex-col basis-3/4 relative'>
        <div className=' flex gap-4 p-2 items-center'>
            <CgProfile className='text-4xl' />
            <h1>Mosagandu</h1>
        </div>
        <div className=''>
          Textbox
        </div>
        <div className='flex p-2 absolute inset-x-0 bottom-0 items-center border rounded-lg h-15'>
          <GiSharpSmile />
          <TiAttachment />
          <h1>Text a message</h1>
          <BsFillSendFill />
        </div>
      </div>

    </div>
  )

  function Account(props){
    const accounts = props.accounts
    return (
      <>
          {accounts.map((accounts) =>
            (
              <div key={accounts.id}>
              <div className='flex gap-4 items-center p-4'>
            <CgProfile className='text-4xl' />
            <div>
              <h1 className=''>{accounts.name}</h1>
            <div className='flex text-sm gap-3'>
              <h3 className=''>{accounts.message}</h3>
              <h6>{accounts.time}</h6>
            </div>
          </div>
        </div>
      </div>
            )
        )}
          </>
    )
  }
  

}

export default Message