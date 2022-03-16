import { DashboardSharp, ShoppingBag, ShoppingCart, NotificationsActive, Healing, List, Settings, PersonOutline, Logout, PersonPin, DeliveryDining, Details } from '@mui/icons-material'
import React, { useContext } from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className="logo">
            Chicken Farm.
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardSharp className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
        <Link to='/users' style={{ textDecoration: "none" }}>
          <li>
            <PersonPin className="icon" />
            <span>Users</span>
          </li>
        </Link>
        <Link to='/products' style={{ textDecoration: "none" }}>
          <li>
            <ShoppingCart className="icon" />
            <span>Products</span>
          </li>
        </Link>
          <li>
            <ShoppingBag className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDining className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <NotificationsActive className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <Details className="icon" />
            <span>Stats</span>
          </li>
          <div className="title">SERVICE</div>
          <li>
            <Healing className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <List className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <div className="title">USER</div>
          <li>
            <PersonOutline className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"GREEN"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar