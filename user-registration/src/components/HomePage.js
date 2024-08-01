import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/api/posts/shitr_posts/')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div id="posts-container">
            {posts.map((post, index) => (
                <div key={index} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
