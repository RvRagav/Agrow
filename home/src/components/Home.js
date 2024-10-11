import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import HeroSection from './Herosection';
import CustomBox from './Custombox';
import Footer from './Footer';
import HotNews from './Hotnews';
import AboutSection from './Aboutsection';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />

            {/* Content Section with Boxes */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <CustomBox
                            title="Current Weather"
                            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhTgrAEB1d8Y-hj0dazJZkxl691NnXOPurw&s"
                            description="Weather forecast to keep your farm operations running smoothly."
                            link="https://www.weather.com"
                            bgColor="weather-container"
                        />
                    </div>

                    <div className="col-md-4">
                        <CustomBox
                            title="Price Updates"
                            imgSrc="Price Updates.png"
                            description="Get the latest updates on commodity prices and market trends."
                            link="https://www.tnagrisnet.tn.gov.in/"
                            bgColor="price-container"
                        />
                    </div>

                    <div className="col-md-4">
                        <CustomBox
                            title="Expert Analysis"
                            imgSrc="Expert.PNG"
                            description="Get expert advice on farming techniques, pest control, soil management, etc."
                            link="https://www.agrifarming.in/"
                            bgColor="expert-analysis-container"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <CustomBox
                            title="Government Schemes"
                            imgSrc="Government Schemes.PNG"
                            description="Discover government initiatives that support farmers and agriculture development."
                            link="schemes.html"
                            bgColor="gov-scheme-container"
                        />
                    </div>

                    <div className="col-md-4">
                        <CustomBox
                            title="Price Display"
                            imgSrc="Price Display.PNG"
                            description="Stay updated with real-time commodity market prices and trends."
                            link="https://www.example.com/market-prices"
                            bgColor="price-display-container"
                        />
                    </div>
                </div>
            </div>

            <HotNews />
            <AboutSection />
            <Footer />
        </div>
    );
};

export default Home;
