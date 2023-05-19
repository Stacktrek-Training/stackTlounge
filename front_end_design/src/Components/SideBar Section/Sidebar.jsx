import React from 'react'
import './sidebar.css'


// Imported Images =======>
import logo  from '../../Assets/logo.png'

// Imported Icons =======>
import {IoMdSpeedometer} from 'react-icons/io'
import {FaUserTie} from 'react-icons/fa'
import {MdLibraryBooks} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2FrontFill} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'




const Sidebar = () => {
    return (
        <div className='sideBar grid'>

            <div className="logoDiv flex">
                
                <h2>StackTLounge</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">
                    
                    <li className="listItem">
                        <a href="" className='menuLink flex'>
                            <IoMdSpeedometer className="icon"/>
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className='menuLink flex'>
                            <FaUserTie className="icon"/>
                            <span className="smallText">
                               Trainers
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className='menuLink flex'>
                            <MdLibraryBooks className="icon"/>
                            <span className="smallText">
                              Classes
                            </span>
                        </a>
                    </li>
                   

                </ul>
            </div>

            <div className="settingDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">
                    
                    <li className="listItem">
                        <a href="" className='menuLink flex'>
                            <AiOutlinePieChart className="icon"/>
                            <span className="smallText">
                                Charts
                            </span>
                        </a>
                    </li>
                 
                    <li className="listItem">
                        <a href="" className='menuLink flex'>
                            <MdOutlinePermContactCalendar className="icon"/>
                            <span className="smallText">
                              Contact
                            </span>
                        </a>
                    </li>                   

                </ul>
            </div>

            <div className="sideBarCard">
                <BsQuestionCircle className="icon"/>
                <div className="cardContent">
                    <div className="circle1">

                    </div>
                    <div className="circle2">
                        
                    </div>

                    <h3>
                        Help Center
                    </h3>
                    <p>Having Trouble Contact Us</p>
                    <button className='btn'>Go To Help Center</button>
                </div>

            </div>


        </div>
    )
}

export default Sidebar