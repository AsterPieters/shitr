import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/posts/shitr_posts/')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div id="posts-container">
            {posts.map((post, index) => (
                <div key={index} className="post">
                    <h2>{post.username}</h2>
                    <h3>{post.location}</h3>
                    <h4>{post.post_name}</h4>

                    <p>Comfort: {post.comfort}/5</p>
                    <p>Smell: {post.smell}/5</p>
                    <p>Aesthetic: {post.aesthetic}/5</p>
                    <p>Toilet Paper: {post.toilet_paper}/5</p>
                    <p>Overall Experience: {post.overall_experience}/5</p>
                    
                    <h5>Description: {post.description}</h5>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
