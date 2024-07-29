import React from 'react';
import UserRegistrationForm from './components/UserRegistrationForm';
import PostCreationForm from './components/PostCreationForm';

const App = () => {
  return (
    <div className="App">
      <h1>User Registration</h1>
      <UserRegistrationForm />
      <h1>Create Post</h1>
      <PostCreationForm />
    </div>
  );
};

export default App;
