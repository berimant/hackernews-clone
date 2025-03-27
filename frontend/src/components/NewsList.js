import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ endpoint = '/api/top-stories' }) => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch(`http://localhost:8080${endpoint}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch stories');
                }
                const data = await response.json();
                setStories(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchStories();
    }, [endpoint]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (stories.length === 0) return <div>No stories available.</div>;

    return (
        <div>
            {stories.map((story, index) => (
                <NewsItem
                    key={story.id}
                    index={index}
                    title={story.title}
                    url={story.url}
                    score={story.score}
                    by={story.by}
                    time={story.time}
                    descendants={story.descendants}
                />
            ))}
        </div>
    );
};

export default NewsList;