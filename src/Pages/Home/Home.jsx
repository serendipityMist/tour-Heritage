import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import SearchBar from "../../components/Searchbar/SearchBar";
import { Carousel } from "../../components/Carousel/Carousel";
import data from "../../Data/CarouselData";
import everest from "../../assets/HomeImg/everest.jpeg";
import pashupati from "../../assets/HomeImg/pashupati.jpeg";
import hero from "./heroSection.jpg";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle dynamic navigation to the details page
  const handleDestinationClick = (id) => {
    navigate(`/details/${id}`); // Navigate to the details page dynamically
  };

  // Customer reviews data
  const reviews = [
    {
      id: 1,
      name: "Ali Tufan",
      title: "Product Manager, Apple Inc.",
      review:
        "The tours on this website are great. I had been really enjoying with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to join this company!",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      additionalImgs: [
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
      ],
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Designer, Microsoft",
      review:
        "This was an amazing experience! The customer support was superb, and everything went so smoothly. Highly recommended for anyone who wants to explore Nepal.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      additionalImgs: [
        "https://randomuser.me/api/portraits/men/5.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
        "https://randomuser.me/api/portraits/women/7.jpg",
        "https://randomuser.me/api/portraits/women/8.jpg",
      ],
    },
    // Add more reviews here if needed
  ];

  const [currentReview, setCurrentReview] = useState(0);

  // Change the current review automatically every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleImageClick = (index) => {
    if (index >= 0 && index < reviews.length) {
      setCurrentReview(index); // Change to the clicked review
    }
  };

  const review = reviews[currentReview];

  return (
    <>
      <section className="relative flex items-center justify-center w-full h-[400px]">
        {/* Carousel */}
        <Carousel data={data} />

        {/* Centered Search Bar */}
        <div className="absolute flex items-center justify-center w-full h-full">
          <SearchBar />
        </div>
      </section>

      {/* Explore section */}
      <section className="relative w-full h-screen bg-green-500 my-1">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col md:flex-row justify-around gap-4 md:gap-2 items-center w-full h-full py-8">
          {/* Left Section with Text */}
          <div className="text-white z-10 w-full md:w-1/2 space-y-6 px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Explore Nepal's Heritage
            </h1>
            <p className="text-base md:text-lg">
              Discover the rich cultural heritage, beautiful landscapes, and
              historical landmarks that make Nepal a unique and vibrant
              destination.
            </p>
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              <Link to={"/explore"}>Start Your Journey</Link>
            </button>
          </div>

          {/* Right Section with Image */}
          <div className="w-full md:w-1/2 h-full bg-cover bg-center rounded-lg">
            <img
              src={hero}
              alt="swayambhunath temple"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="my-8 border border-black p-4">
        <h1 className="font-bold text-2xl mb-2">Trending Destinations</h1>
        <p className="text-lg mb-4">Places to Visit in Nepal</p>

        <div className="border border-green-700 w-full my-4 flex flex-wrap gap-4 justify-evenly py-2 md:justify-center">
          {/* Dynamic click handling for Everest */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[49%] max-h-[300px]"
            onClick={() => handleDestinationClick(1)} // Handle click for Everest
          >
            <img
              src={everest}
              alt="Everest"
              className="w-full h-full object-cover rounded-lg aspect-[16/9]"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold">
              Everest
            </div>
          </div>

          {/* Dynamic click handling for Pashupati */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[49%] max-h-[300px]"
            onClick={() => handleDestinationClick(2)} // Handle click for Pashupati
          >
            <img
              src={pashupati}
              alt="Pashupati"
              className="w-full h-full object-cover rounded-lg aspect-[16/9]"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold">
              Pashupati
            </div>
          </div>
        </div>
        {/* Second set of destinations */}
        <div className="border border-purple-700 my-4 w-full flex flex-wrap gap-4 justify-evenly py-2">
          {/* Dynamic click handling for Everest */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[32%] max-h-[300px]"
            onClick={() => handleDestinationClick(1)} // Handle click for Everest
          >
            <img
              src={everest}
              alt="Everest"
              className="w-full h-full object-cover rounded-lg aspect-[16/9]"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold">
              Everest
            </div>
          </div>

          {/* Dynamic click handling for Pashupati */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[32%] max-h-[300px]"
            onClick={() => handleDestinationClick(2)} // Handle click for Pashupati
          >
            <img
              src={pashupati}
              alt="Pashupati"
              className="w-full h-full object-cover rounded-lg aspect-[16/9]"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold">
              Pashupati
            </div>
          </div>

          {/* Dynamic click handling for Everest again */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[32%] max-h-[300px]"
            onClick={() => handleDestinationClick(1)} // Handle click for Everest again
          >
            <img
              src={everest}
              alt="Everest"
              className="w-full h-full object-cover rounded-lg aspect-[16/9]"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold">
              Everest
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          Customer Reviews
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative mb-6">
            {/* Quote Icon */}
            <span className="absolute text-6xl text-orange-500 left-0 -top-4">
              “
            </span>
            <p className="text-xl text-gray-700 italic leading-relaxed">
              {review.review}
            </p>
            {/* Quote Icon */}
            <span className="absolute text-6xl text-orange-500 right-0 -bottom-4">
              ”
            </span>
          </div>

          {/* Customer Info */}
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src={review.img}
                alt="Customer"
                className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
                onClick={() => handleImageClick(currentReview)}
              />
              <div className="text-left">
                <p className="font-semibold text-lg">{review.name}</p>
                <p className="text-sm text-gray-500">{review.title}</p>
              </div>
            </div>
          </div>

          {/* Customer Images */}
          <div className="flex justify-center mt-8 space-x-4">
            {review.additionalImgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Customer ${index + 1}`}
                className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
