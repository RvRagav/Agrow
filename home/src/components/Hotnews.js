// src/components/HotNews.js
import React from 'react';

const HotNews = () => {
    return (
        <div className="hot-news" onClick={() => window.location.href = '#hotnews'}>
            <a href="https://example.com/hot-news">
                <div className="scrolling-text">
                    Click here to see the hot news we've for you
                </div>
            </a>
        </div>
    );
};

export default HotNews;
