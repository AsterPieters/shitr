// src/components/PostCreationForm.js

import React, { useState } from 'react';

const PostCreationForm = () => {
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState('1');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location || !username || !rating) {
      setError('All fields are required');
      return;
    }

    const response = await fetch('http://localhost:8001/api/posts/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location, username, rating }),
    });

    if (response.ok) {
      console.log('Post created successfully');
      setLocation('');
      setUsername('');
      setRating('1');
    } else {
      const errorText = await response.text();
      setError(errorText || 'Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <button type="submit">Create Post</button>
      {error && <div className="error">{JSON.stringify(error)}</div>}
    </form>
  );
};

export default PostCreationForm;
