import { ChatBubbleOutlineOutlined, DarkModeOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import './navbar.scss'

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
   
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." className="icon" />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={()=> dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg" alt="avatar"className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar