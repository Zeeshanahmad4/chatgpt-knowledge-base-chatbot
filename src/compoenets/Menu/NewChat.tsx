import React from 'react'
import PlusIcon from '../../assets/icons/PlusIcon'

const NewChat = () => {
  return (
    <>
        <a className=' flex items-center gap-3 p-3 rounded-md text-white cursor-pointer text-sm border  border-white/20 hover:bg-gray-500/10'>

            <PlusIcon/>{' '}
            <span className=' text-white text-sm'>
                New Chat
            </span>
        </a>
        
    </>
  )
}

export default NewChat
