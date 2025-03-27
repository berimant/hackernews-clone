import React from 'react';

const NewsItem = ({ index, title, url, score, by, time, descendants }) => {
    const postedTime = new Date(time * 1000).toLocaleString();

    return (
        <div className="news-item">
            <span>{index + 1}. </span>
            <a href={url || '#'} target="_blank" rel="noopener noreferrer">{title || 'No Title'}</a>
            <div className="meta">
                {score || 0} points by {by || 'Unknown'} | {postedTime} | {descendants || 0} comments
            </div>
        </div>
    );
};

export default NewsItem;