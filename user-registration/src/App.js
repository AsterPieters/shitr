import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegistrationForm from './components/UserRegistrationForm';
import PostCreationForm from './components/PostCreationForm';

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<UserRegistrationForm />} />
      <Route path="/create-post" element={<PostCreationForm />} />
    </Routes>
  );
};

export default App;