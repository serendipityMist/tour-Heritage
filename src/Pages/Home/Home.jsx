import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import SearchBar from "../../components/Searchbar/SearchBar";
import { Carousel } from "../../components/Carousel/Carousel";
import data from "../../Data/CarouselData";
import everest from "../../assets/HomeImg/everest.jpeg";
import pashupati from "../../assets/HomeImg/pashupati.jpeg";
import basantapur from "../../assets/Images/Basantapur.jpg";
import langtang from "../../assets/Images/lantang-valley.jpg";
import mustang from "../../assets/Images/mustang.jpg";
import hero from "./heroSection.jpg";
import lumbini from "./lumbini.jpeg";
import stupa from "./stupa.jpeg";
import FAQAccordion from "../../components/Accordion/FAQAccordion";

const Home = () => {
  const sections = [
    { id: 1, title: "Welcome to Nepal", color: "#FF5733" },
    { id: 2, title: "Explore Culture", color: "#33C4FF" },
    { id: 3, title: "Discover Heritage", color: "#75FF33" },
    { id: 4, title: "Travel Locally", color: "#FF33B8" },
  ];
  const navigate = useNavigate();

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
      <section className="relative flex items-center justify-center w-full h-[600px] bg-[#f5f5f5]">
        {/* Carousel */}
        <Carousel data={data} />

        {/* Centered Search Bar */}
        <div className="absolute flex items-center justify-center w-full h-full">
          <SearchBar />
        </div>
      </section>

      {/* Explore section */}
      <section className="relative w-full bg-[#edf7ee]  py-5">
        <div className="relative flex flex-col md:flex-row justify-between items-center w-full h-auto gap-y-8 md:gap-4 px-4 md:px-8">
          {/* Left Section with Text */}
          <div className="text-[#333] z-10 w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Explore Nepal's Heritage
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Discover the rich cultural heritage, beautiful landscapes, and
              historical landmarks that make Nepal a unique and vibrant
              destination.
            </p>
            <button className="relative bg-[#4caf50] text-white py-2 px-6 rounded-lg overflow-hidden group transition duration-300 ease-in-out mx-auto md:mx-0">
              <span className="absolute inset-0 bg-green-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <Link
                to={"/explore"}
                className="relative z-10 block font-semibold group-hover:text-black transition duration-300"
              >
                Start Your Journey
              </Link>
            </button>
          </div>

          {/* Right Section with Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] bg-cover bg-center rounded-lg overflow-hidden relative group">
            <img
              src={hero}
              alt="swayambhunath temple"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="my-8  p-4">
        <h1 className="font-bold text-center text-3xl mb-2">
          Trending Destinations
        </h1>
        <p className="text-xl text-center mb-4">Places to Visit in Nepal</p>

        <div className="  w-full my-4 flex flex-wrap gap-4 justify-evenly py-2 md:justify-center">
          {/* Dynamic click handling for Basantapur */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[49%] max-h-[300px] group overflow-hidden rounded-lg"
            onClick={() => handleDestinationClick(1)} // Handle click for Basantapur
          >
            <img
              src={basantapur}
              alt="Basantapur"
              className="cursor-pointer w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Hover overlay with subtle color change */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold z-10">
              Basantapur
            </div>
          </div>

          {/* Dynamic click handling for Pashupati */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[49%] max-h-[300px] group overflow-hidden rounded-lg"
            onClick={() => handleDestinationClick(2)} // Handle click for Pashupati
          >
            <img
              src={pashupati}
              alt="Pashupati"
              className="cursor-pointer w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Hover overlay with subtle color change */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold z-10">
              Pashupati
            </div>
          </div>
        </div>

        {/* Second set of destinations */}
        <div className=" my-4 w-full flex flex-wrap gap-4 justify-evenly py-2">
          {/* Dynamic click handling for Langtang */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[32%] max-h-[300px] group overflow-hidden rounded-lg"
            onClick={() => handleDestinationClick(11)} // Handle click for Langtang
          >
            <img
              src={langtang}
              alt="Langtang"
              className="cursor-pointer w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Hover overlay with subtle color change */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold z-10">
              Langtang
            </div>
          </div>

          {/* Dynamic click handling for Everest */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[32%] max-h-[300px] group overflow-hidden rounded-lg"
            onClick={() => handleDestinationClick(12)} // Handle click for Everest
          >
            <img
              src={everest}
              alt="Mount Everest"
              className="cursor-pointer w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Hover overlay with subtle color change */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold z-10">
              Everest
            </div>
          </div>

          {/* Dynamic click handling for Mustang */}
          <div
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-[32%] max-h-[300px] group overflow-hidden rounded-lg"
            onClick={() => handleDestinationClick(14)} // Handle click for Mustang
          >
            <img
              src={mustang}
              alt="Mustang"
              className="hover:cursor-pointer w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Hover overlay with subtle color change */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white font-bold z-10">
              Mustang
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#ebebeb] py-12">
        <FAQAccordion />
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-[#f5f5f5] text-center my-2">
        <h2 className="text-4xl font-bold text-[#333] mb-4">
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
        </div>
      </section>
    </>
  );
};

export default Home;
