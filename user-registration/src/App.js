import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegistrationForm from './components/UserRegistrationForm';
import PostCreationForm from './components/PostCreationForm';
import HomePage from './components/HomePage';
import Header from './components/Header';

const App = () => {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/registration" element={<UserRegistrationForm />} />
          <Route path="/create-post" element={<PostCreationForm />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
  );
};

export default App;