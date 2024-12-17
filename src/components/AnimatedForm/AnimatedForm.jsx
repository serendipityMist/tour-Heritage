import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { motion } from "framer-motion";

const AnimatedForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const [userData, setUserData] = useState(null); // Store user data for profile image display

  const navigate = useNavigate(); // Use the navigate function for redirection

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
    };

    // Simple form validation
    if (!data.email || !data.password) {
      alert("Email and Password are required");
      return;
    }

    if (isSignup && !data.username) {
      alert("Username is required for signup");
      return;
    }

    // Mock API call
    mockApiCall(data);
  };

  const mockApiCall = async (data) => {
    try {
      // Simulate a delay for the API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (isSignup) {
        // Simulating username check
        if (data.username === "takenUser") {
          alert("Username is already taken.");
          return;
        }
        alert("Sign Up Successful!");
        setUserData({
          username: data.username,
          profileImage: "https://www.example.com/user-profile.jpg", // Mock profile image URL
        });
        setIsLoggedIn(true); // User is logged in after successful signup
      } else {
        // Simulating login check
        if (data.email !== "test@test.com" || data.password !== "password123") {
          alert("Invalid email or password.");
          return;
        }
        alert("Login Successful!");
        setUserData({
          username: data.email.split("@")[0], // Mock username from email
          profileImage: "https://www.example.com/user-profile.jpg", // Mock profile image URL
        });
        setIsLoggedIn(true); // User is logged in after successful login
      }

      // Redirect to home page after successful login/signup
      navigate("/");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isLoggedIn ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Welcome, {userData.username}
            </h2>
            <div className="mt-6 flex justify-center">
              <img
                src={userData.profileImage}
                alt="User Profile"
                className="w-16 h-16 rounded-full"
              />
              <p className="ml-2 text-lg">{userData.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isSignup ? "Sign Up" : "Login"}
            </h2>

            <form onSubmit={handleSubmit}>
              {isSignup && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Username"
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all duration-300 ease-in-out"
              >
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            <p className="text-center mt-4">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <button onClick={toggleForm} className="text-blue-500">
                {isSignup ? " Login" : " Sign Up"}
              </button>
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedForm;
