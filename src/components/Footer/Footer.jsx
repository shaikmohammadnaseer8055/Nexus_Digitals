import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
    return (
    
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo laborum itaque perspiciatis, magni et ipsum, provident error deleniti voluptates reiciendis mollitia aliquam repudiandae maxime consequatur est placeat atque? Libero.</div>
            </div>

            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                    #23-119/A, Punganur, Chittoor District, Andhra Pradesh, India - 517247
                    </div>
                </div>

                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text"> Phone: +91 9346228841 </div>
                </div>

                <div className="c-item">
                    <FaEnvelope />
                    <div className="text"> Email: naseershaik617@gmail.com</div>
                </div>
            </div>

            <div className="col">
                <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
            </div>

            <div className="col">
                <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
            </div>
        </div>

        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    NEXUS DIGITALS - CREATIVITY MEETS INNOVATION &nbsp; © 2023
                </div>
                <img src={Payment} />
            </div>
        </div>

    </footer>

    );
};

export default Footer;
