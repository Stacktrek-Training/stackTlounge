import React from 'react'
import './listing.css'


// Imported Images =======>
import img from '../../../Assets/profile1.jpg'
import img1 from '../../../Assets/profile2.jpg'
import img2 from '../../../Assets/profile3.jpg'
import img3 from '../../../Assets/profile4.jpg'
import img4 from '../../../Assets/profile5.jpg'
import img5 from '../../../Assets/profile6.jpg'





// Imported Icons =======>
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'



const Listing = () => {
    return (
        <div className='listingSection '>
            <div className="heading flex">
                <h1>Trainers</h1>
                <button className='btn flex'>
                    See all <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img} alt="Image name" />
                    <h3>Men in Black</h3>
                </div>

               

                <div className="singleItem">
                    <AiOutlineHeart className="icon"/>
                    <img src={img2} alt="Image name" />
                    <h3>Men in Black</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img3} alt="Image name" />
                    <h3>Men in Black</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className="icon"/>
                    <img src={img4} alt="Image name" />
                    <h3>Men in Black</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className="icon"/>
                    <img src={img5} alt="Image name" />
                    <h3>Men in Black</h3>
                </div>

            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Viewer</h3>
                        <button className='btn flex'>
                               See all <BsArrowRightShort className="icon" />
                         </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img1} alt="Users Name" />
                            <img src={img1} alt="Users Name" />
                            <img src={img1} alt="Users Name" />
                            <img src={img1} alt="Users Name" />
                        </div>

                        <div className="cardText">
                            <span>
                                1M Likes <br />
                                <small>
                                    50k Views <span className="date">1 Weeks</span>
                                </small>
                            </span>
                        </div>

                    </div>

                    

                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Viewer</h3>
                        <button className='btn flex'>
                               See all <BsArrowRightShort className="icon" />
                         </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img1} alt="Users Name" />
                            <img src={img1} alt="Users Name" />
                            <img src={img1} alt="Users Name" />
                            <img src={img1} alt="Users Name" />
                        </div>

                        <div className="cardText">
                            <span>
                                10M Likes <br />
                                <small>
                                    1m Views <span className="date">1 year</span>
                                </small>
                            </span>
                        </div>

                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Listing