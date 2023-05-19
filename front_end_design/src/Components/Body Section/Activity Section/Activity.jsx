import React from 'react'
import './activity.css'



// Imported Images =======>
import img1 from '../../../Assets/profile2.jpg'



// Imported Icons =======>
import {BsArrowRightShort} from 'react-icons/bs'


const Activity = () => {
    return (
       <div className="activitySection">
         <div className="heading flex">
            <h1>Recent Activity</h1>
            <button className='btn flex'>
                See All
                <BsArrowRightShort className="icon"/>
            </button>
         </div>

        <div className="secContainer grid">
            <div className="singleCustomer flex">
                <img src={img1} alt="Customer Image" />
                <div className="customerDetails">
                    <span className='name'>Rayen</span>
                    <small>I love This Website</small>
                </div>
                <div className="duration">
                    1sec ago
                </div>
            </div>
        </div>

        <div className="secContainer grid">
            <div className="singleCustomer flex">
                <img src={img1} alt="Customer Image" />
                <div className="customerDetails">
                    <span className='name'>Rayen</span>
                    <small>I love This Website</small>
                </div>
                <div className="duration">
                    1sec ago
                </div>
            </div>
        </div>

        <div className="secContainer grid">
            <div className="singleCustomer flex">
                <img src={img1} alt="Customer Image" />
                <div className="customerDetails">
                    <span className='name'>Rayen</span>
                    <small>I love This Website</small>
                </div>
                <div className="duration">
                    1sec ago
                </div>
            </div>
        </div>

        <div className="secContainer grid">
            <div className="singleCustomer flex">
                <img src={img1} alt="Customer Image" />
                <div className="customerDetails">
                    <span className='name'>Rayen</span>
                    <small>I love This Website</small>
                </div>
                <div className="duration">
                    1sec ago
                </div>
            </div>
        </div>

        <div className="secContainer grid">
            <div className="singleCustomer flex">
                <img src={img1} alt="Customer Image" />
                <div className="customerDetails">
                    <span className='name'>Rayen</span>
                    <small>I love This Website</small>
                </div>
                <div className="duration">
                    1sec ago
                </div>
            </div>
        </div>

       </div>
    )
}

export default Activity