import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './css/Sidebar.css'
import { IconContext } from 'react-icons'
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi"
import * as MdIcons from "react-icons/md"
import * as IoIcons from "react-icons/io"
import * as FaIcons from "react-icons/fa"
import { FormControl } from 'react-bootstrap'

const Sidebar = () => {
    let location = useLocation()
    console.log(location.pathname)
    let res = SidebarData.filter((item)=>item.path===location.pathname) 
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
            <div >

                <div className="navbar">
                    <p>{res[0].title} </p>
                    
                        <FormControl type="search" placeholder="Search" className='navbar1' aria-label="Search" background-color='red' />
                        <div className='icon1'>
                            <BiIcons.BiSearchAlt2 color='black' size={20}  /> 
                        </div>
                        <div className='icon2'> <MdIcons.MdDashboard color='black' size={20} /> </div> 
                        <div className='icon3'> <IoIcons.IoMdNotifications color='black' size={20}/> </div> 
                        <div className='icon4'> <FaIcons.FaUser color='black' size={20} /> </div>
                </div>

                <nav className='nav_menu'>
                    <ul className='nav_menu_items'>
                        {SidebarData.map((item,index)=>{
                            return(
                                <>
                                    {index===0?<li className="nav_text" style={{borderBottom: '1px solid #d3d3d3', marginBottom:'15px', marginLeft:'18px',marginRight:'18px' }} ></li>:null}
                                    <li key={index} className={item.cName} > 
                                    <NavLink  activeclassname='active' to={item.path} >
                                        {item.icons}
                                        <span> {item.title} </span>
                                    </NavLink>
                                    </li> 
                                </>
                            )
                        })}    
                        <li className="nav_footer">
                            <NavLink to='/'>
                                {<RiIcons.RiChatUploadFill/>}
                                <span>Upgrade To PRO </span>
                            </NavLink>
                        </li> 
                    </ul>
                </nav>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
