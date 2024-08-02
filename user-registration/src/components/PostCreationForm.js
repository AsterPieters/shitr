// src/components/PostCreationForm.js

import React, { useState } from 'react';

const PostCreationForm = () => {
  // Info
  const [post_name, setPost_name] = useState('');
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');

  // Image
  const [image, setImage] = useState(null);

  // Review metrics
  const [comfort, setComfort] = useState(1);
  const [smell, setSmell] = useState(1);
  const [aesthetic, setAesthetic] = useState(1);
  const [toilet_paper, setToilet_paper] = useState(1);
  const [overall_experience, setOverall_experience] = useState(1);
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!post_name || !location || !username) {
      setError('Post name, location, and username are required');
      return;
    }

    const formData = new FormData();
    formData.append('post_name', post_name);
    formData.append('location', location);
    formData.append('username', username);
    formData.append('image', image);
    formData.append('comfort', comfort);
    formData.append('smell', smell);
    formData.append('aesthetic', aesthetic);
    formData.append('toilet_paper', toilet_paper);
    formData.append('overall_experience', overall_experience);
    formData.append('description', description || '');  // Use empty string if description is null

    try {
      const response = await fetch('http://127.0.0.1:8081/api/posts/shitr_posts/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Post created successfully');
        // Clear the form
        setPost_name('');
        setLocation('');
        setUsername('');
        setImage(null);
        setComfort(1);
        setSmell(1);
        setAesthetic(1);
        setToilet_paper(1);
        setOverall_experience(1);
        setDescription('');
        setError(null);  // Clear error message
      } else {
        const errorText = await response.text();
        setError(errorText || 'Failed to create post');
      }
    } catch (error) {
      setError('An error occurred while creating the post');
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="post_name">
        Post Name:
        <input
          id="post_name"
          type="text"
          value={post_name}
          onChange={(e) => setPost_name(e.target.value)}
        />
      </label>
      <label htmlFor="location">
        Location:
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label htmlFor="username">
        Username:
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="image">
        Image:
        <input
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <label htmlFor="comfort">
        Comfort:
        <select
          id="comfort"
          value={comfort}
          onChange={(e) => setComfort(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <label htmlFor="smell">
        Smell:
        <select
          id="smell"
          value={smell}
          onChange={(e) => setSmell(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <label htmlFor="aesthetic">
        Aesthetic:
        <select
          id="aesthetic"
          value={aesthetic}
          onChange={(e) => setAesthetic(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <label htmlFor="toilet_paper">
        Toilet Paper:
        <select
          id="toilet_paper"
          value={toilet_paper}
          onChange={(e) => setToilet_paper(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <label htmlFor="overall_experience">
        Overall Experience:
        <select
          id="overall_experience"
          value={overall_experience}
          onChange={(e) => setOverall_experience(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <label htmlFor="description">
        Description (Optional):
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"  // Adjust the number of rows as needed
        />
      </label>
      <button type="submit">Create Post</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default PostCreationForm;
