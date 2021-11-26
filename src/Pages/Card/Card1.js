import React from 'react'
import * as MdOutIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs"
import * as RiIcons from "react-icons/ri"
import * as GoIcons from "react-icons/go"
import * as GiIcons from "react-icons/gi"

const Card1 = () => {
    return (
        <div className="home">
            <div className='card'>
                <div className='reactIcon1'>
                    <MdOutIcons.MdOutlineContentCopy size={40} color='white'/>
                </div>
                <div className='content'>
                    <p >Used Space </p><br/>
                    <div className='innerContent'>49/50 GB </div>
                </div>
                <div className='contentbtn' >
                    <BsIcons.BsExclamationTriangleFill color='red'/> Get more space
                </div>
            </div>

            <div className='card'>
                <div className='reactIcon2'>
                    <RiIcons.RiHome3Fill size={40} color='white'/>
                </div>
                <div className='content'>
                    <p>Revenue </p><br/>
                    <div className='innerContent'>$34,245 </div>
                </div>
                <div className='contentbtn' >
                    <BsIcons.BsCalendarDate color='grey'/> List 24 Hours
                </div>
            </div>

            <div className='card'>
                <div className='reactIcon3'>
                    <GoIcons.GoIssueOpened size={40} color='white'/>
                </div>
                <div className='content'>
                    <p >Fixed Issues </p><br/>
                    <div className='innerContent'> 75 </div>
                </div>
                <div className='contentbtn' >
                    <BsIcons.BsTagFill color='grey'/> Tracked From Github
                </div>
            </div>

            <div className='card'>
                <div className='reactIcon4'>
                    <GiIcons.GiShadowFollower size={40} color='white'/>
                </div>
                <div className='content'>
                    <p >Followers </p><br/>
                    <div className='innerContent'>+245 </div>
                </div>
                <div className='contentbtn' >
                    <BsIcons.BsClock color='grey'/> Just Updated
                </div>
            </div>
        </div>
    )
}

export default Card1
