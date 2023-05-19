import React from 'react'
import './listing.css'


// Imported Images =======>
import img from '../../../Assets/pic10.png'
import img1 from '../../../Assets/pic7.png'
import img2 from '../../../Assets/pic9.png'
import img3 from '../../../Assets/pic10.png'
import img4 from '../../../Assets/pic11.png'
import img5 from '../../../Assets/pic12.png'
import img6 from '../../../Assets/skill_icon7.png'
import img7 from '../../../Assets/skill_icon8.png'
import img8 from '../../../Assets/admin.png'



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
                    <img src={img1} alt="Image name" />
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
                            <img src={img8} alt="Users Name" />
                            <img src={img8} alt="Users Name" />
                            <img src={img8} alt="Users Name" />
                            <img src={img8} alt="Users Name" />
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
                            <img src={img8} alt="Users Name" />
                            <img src={img8} alt="Users Name" />
                            <img src={img8} alt="Users Name" />
                            <img src={img8} alt="Users Name" />
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