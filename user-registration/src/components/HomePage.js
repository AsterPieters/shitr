import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [expandedImage, setExpandedImage] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8081/api/posts/shitr_posts/')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleImageClick = (image) => {
        setExpandedImage(expandedImage === image ? null : image);
    };

    return (
        <div id="posts-container">
            {posts.map((post, index) => (
                <div key={index} className="post">
                    <h2>{post.username}</h2>
                    <h3>{post.location}</h3>
                    <h4>{post.post_name}</h4>
                    
                    {/* Display the image with conditional styling */}
                    {post.image && (
                        <img 
                            src={`http://127.0.0.1:8081${post.image}`} 
                            alt={post.post_name} 
                            onClick={() => handleImageClick(`http://127.0.0.1:8081${post.image}`)}
                            className={expandedImage === `http://127.0.0.1:8081${post.image}` ? 'expanded' : 'thumbnail'}
                        />
                    )}

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
