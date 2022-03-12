import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExit, LanguageOutlined, ListOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined/>
            English 
          </div>
          <div className="item">
            <DarkModeOutlined/>
          </div>
          <div className="item">
            <FullscreenExit/> 
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined/> 
          </div>
          <div className="item">
            <ListOutlined/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar