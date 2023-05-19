import React from 'react'
import './top.css'


// Imported Images =======>
import img from '../../../Assets/admin.png'
import img2 from '../../../Assets/pic7.png'
import video from '../../../Assets/video1.mp4'

// Imported Icons =======>
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to StackTLounge</h1>
                    <p>Hello Admin welcome Back</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard' />
                    <BiSearchAlt className='icon'/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon"/>
                    <IoMdNotificationsOutline className="icon"/>
                    <div className="adminImage">
                        <img src={img} alt="Admin Image"/>
                    </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>A good website for you!!</h1>
                    <p>The StackTrek Sub website...</p>
              
                <div className="buttons flex">
                    <button className='btn'>Explore More</button>
                    <button className='btn transparent'>Top Event</button>
                 </div>

                 <div className="videoDiv">
                    <video src={video} autoPlay loop muted></video>
                </div>
                
                </div>

                <div className="leftCard flex">
                    <div className="main flex">

                         <div className="textDiv">
                            <h1>My Stat</h1>

                            <div className="flex">
                                <span>
                                    Today <br /> <small>12k views</small>  
                                </span>
                                <span>
                                    Month <br /> <small>1m views</small>  
                                </span>
                            </div>
                           
                            <span className="flex link">
                                Go to the School <BsArrowRightShort className='icon' />
                            </span>

                        </div> 
                        
                        <div className="imgDiv">
                            <img src={img2} alt="Image Name" />
                        </div>
                    </div>
                    { /*We used This card Later*/} 
                        
                        <div className="sideBarCard">
                           <BsQuestionCircle className="icon"/>
                             <div className="cardContent">
                                 <div className="circle1"></div>
                                 <div className="circle2"></div>
 
                                 <h3>
                                      Help Center
                                 </h3>
                                  <p>Having Trouble Contact Us</p>
                                  <button className='btn'>Go To Help Center</button>
                              </div>
                          </div>
                </div>

            </div>
        </div>
    )
}

export default Top