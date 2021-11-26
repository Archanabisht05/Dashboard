import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import building2 from '../../Asset/building2.jpg'
import building3 from '../../Asset/building3.jpg'
import building4 from '../../Asset/building4.jpeg'

const Card2 = () => {
    return (
        <div className='home'>
            <div className='card2'>
                    <div className='image1'>
                        <img src={building2} alt='building2' height='180px' width='260px' />
                    </div>
                    <div className='card2Content'>
                        Daily Sales <br/>
                        <AiIcons.AiOutlineArrowUp color='green'/> 55% increase in today sales <br/>
                        <div className='contentbtn5' >
                        <BsIcons.BsClock color='grey'/> updated 4 mins ago
                        </div>
                    </div>
                </div>

                <div className='card2'>
                    <div className='image1'>
                        <img src={building3} alt='building2' height='180px' width='260px' />
                    </div>
                    <div className='card2Content'>
                        Email Subscriptions <br/>
                        Last compaign Subscriptions <br/>
                        <div className='contentbtn5' >
                        <BsIcons.BsClock color='grey'/> compaign sent 2 days ago
                        </div>
                    </div>
                </div>

                <div className='card2'>
                <div className='image1'>
                        <img src={building4} alt='building2' height='180px' width='260px' />
                    </div>
                    <div className='card2Content'>
                        Completed Tasks <br/>
                        Last Compaign Performance <br/>
                        <div className='contentbtn5' >
                        <BsIcons.BsClock color='grey'/> compaign sent 2 days ago
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Card2
