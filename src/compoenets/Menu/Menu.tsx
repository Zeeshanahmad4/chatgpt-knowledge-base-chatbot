import React from 'react'
import NewChat from './NewChat'
import ChatHistoryList from './ChatHistoryList'

const Menu = () => {
  return (
   <>
        <div id="menu" className='bg-gray-900 flex flex-col w-[260px] h-full fixed'>
            <nav className=' flex h-full flex-1 flex-col space-y-1 p-2'>
                <NewChat/>
                <ChatHistoryList/>

            </nav>
        </div>
   </>
  )
}

export default Menu
