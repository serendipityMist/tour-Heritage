import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { motion } from "framer-motion";
import illustration from "./illustration.jpeg";

const AnimatedForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (isSignup) {
      if (name && email && password && confirmPassword) {
        if (password !== confirmPassword) {
          setErrorMessage("Passwords do not match.");
          return;
        }
        setSuccessMessage("Signup Successful!");
        alert("Signup Successful! Please login.");
        setIsSignup(false);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setErrorMessage("Please fill out all fields.");
      }
    } else {
      if (email && password) {
        setSuccessMessage("Login Successful!");
        alert("Login Successful! Redirecting to Explore page...");
        navigate("/explore");
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage("Invalid email or password.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      {/* Left Section with Illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-white px-6 py-4">
        <div className="flex flex-col items-center">
          <div className="w-60 h-60 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={illustration}
              alt="Join Us Illustration"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg mt-4 text-gray-700 font-medium">
            Welcome Back! Please log in to continue.
          </p>
        </div>
      </div>

      {/* Right Section with Form */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-white px-6 py-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {isSignup ? "Sign Up" : "Log In"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field (Only in Signup) */}
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>
          </form>

          {/* Error or Success Message */}
          {errorMessage && (
            <p className="text-sm text-center text-red-500 mt-4">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-sm text-center text-green-500 mt-4">
              {successMessage}
            </p>
          )}

          {/* Switch Between Forms */}
          <div className="text-center mt-5">
            {isSignup ? (
              <p className="text-gray-700">
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignup(false)}
                  className="text-blue-500 font-medium"
                >
                  Log In
                </button>
              </p>
            ) : (
              <p className="text-gray-700">
                Don't have an account?{" "}
                <button
                  onClick={() => setIsSignup(true)}
                  className="text-blue-500 font-medium"
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>

          {/* Social Login */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              G+
            </button>
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Facebook
            </button>
            <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900">
              Github
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedForm;
