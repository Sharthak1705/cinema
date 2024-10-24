import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Our movie platform offers a rich tapestry of films for every kind of movie lover. 
                Enjoy curated playlists, expert reviews, and community discussions. 
                Dive into the world of cinema and let us guide you through an unforgettable journey.
                Our platform is designed to bring the magic of cinema right to your screen.
                Join us in celebrating the art of film making and discover your next favorite movie.
                </div>
                <div className="socialIcons">
                <a href="https://web.snapchat.com/" target="_blank" rel="noopener noreferrer" className="icon">
                <FaSnapchat />
                    </a>
                    <a href="https://www.instagram.com/j.sharthak/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com/in/sharthak-jain-b03442225/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;