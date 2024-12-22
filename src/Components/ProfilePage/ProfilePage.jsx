import React, { useState } from 'react';
import './ProfilePage.css'; // Importing the CSS file


export const ProfilePage = () => {
  // State variables for user details
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe123');
  const [country, setCountry] = useState('USA');
  const [problemsSolved, setProblemsSolved] = useState(15); // Example number of problems solved
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Default profile image
  
  // Function to simulate solving a problem
  const solveProblem = () => {
    setProblemsSolved(problemsSolved + 1); // Increment the number of problems solved
  };
  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      
      {/* Profile Image */}
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      
      {/* Profile Details */}
      <div className="profile-details">
        <div className="profile-item">
          <strong>Name:</strong> <span>{name}</span>
        </div>
        <div className="profile-item">
          <strong>Username:</strong> <span>{username}</span>
        </div>
        <div className="profile-item">
          <strong>Country:</strong> <span>{country}</span>
        </div>
        <div className="profile-item">
          <strong>Problems Solved:</strong> <span>{problemsSolved}</span>
        </div>
        <div className="profile-item">
          <strong>Total Problems Solved:</strong> <span>{problemsSolved}</span>
        </div>
      </div>
      
      {/* Solve Problem Button */}
      <button className="solve-button" onClick={solveProblem}>Solve a Problem</button>
    </div>
  );
}

export default ProfilePage;
