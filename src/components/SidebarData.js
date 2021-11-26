import React from 'react'
import * as IoIcons from "react-icons/io"
import * as FaIcons from "react-icons/fa"
import * as AiIcons  from 'react-icons/ai'
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icons: <MdIcons.MdDashboard/>,
        cName:'nav_text'
    },
    {
        title: 'User Profile',
        path: '/userprofile',
        icons: <FaIcons.FaUser/>,
        cName:'nav_text'
    },
    {
        title: 'Table List',
        path: '/tablelist',
        icons: <FaIcons.FaRegClipboard/>,
        cName:'nav_text'
    },
    {
        title: 'Typography',
        path: '/typography',
        icons: <BsIcons.BsLayoutTextWindowReverse/>,
        cName:'nav_text'
    },
    {
        title: 'Icons',
        path: '/icons',
        icons: <FaIcons.FaEnvelopeOpenText/>,
        cName:'nav_text'
    },
    {
        title: 'Maps',
        path: '/maps',
        icons: <FaIcons.FaMapMarkerAlt/>,
        cName:'nav_text'
    },
    {
        title: 'Notification',
        path: '/notifications',
        icons: <IoIcons.IoMdNotifications/>,
        cName:'nav_text'
    },
    {
        title: 'RTL support',
        path: '/rtlsupport',
        icons: <AiIcons.AiOutlineGlobal/>,
        cName:'nav_text'
    }
]
