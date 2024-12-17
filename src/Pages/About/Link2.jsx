import React from "react";
import { Link } from "react-router-dom";
import lumbini from "./lumbiniHeritage.jpeg";
import one from "./one.jpeg";
import two from "./two.jpeg";
import three from "./three.jpeg";
import four from "./four.jpeg";
function Link2() {
  const teamMembers = [
    {
      title: "Marketing Manager",
      name: "Maria Rodriguez",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
      img: one,
    },
    {
      title: "Hospitality Coordinator",
      name: "Sara Khan",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
      img: two,
    },
    {
      title: "Tourism Specialist",
      name: "Ahmed Hassan",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
      img: three,
    },
    {
      title: "Community Outreach",
      name: "Li Wei",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
      img: four,
    },
  ];
  return (
    <>
      <section className="bg-[#dddddd] py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title Section */}
          <div className="flex justify-center items-center mb-6">
            <div className="text-4xl font-bold text-[#333]">
              Our Purpose and Vision
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-8">
            At GPT, our mission is to promote the rich cultural heritage and
            breathtaking tourism destinations of Nepal to both local and
            international tourists. We aim to create memorable experiences and
            provide detailed information about the best places to visit,
            including nearby accommodations and maps.
          </p>

          {/* Explore Button */}
          <Link to={"/explore"} className="w-full">
            <button className="bg-[#ff5722] text-white rounded-3xl py-3 px-6 font-semibold hover:bg-[#ff8a50] hover:scale-105 hover:shadow-xl hover:text-gray-200 transition-all duration-300 ease-in-out">
              Explore
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row py-12 px-4 bg-[#f5f5f5]">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center md:w-1/2 space-y-6">
          <h2 className="text-4xl font-semibold text-[#333]">
            Our Story and Heritage
          </h2>
          <p className="text-lg text-gray-700">
            Discover the fascinating history and heritage of our organization,
            dedicated to showcasing the beauty and significance of Nepal's
            cultural treasures. Join us on a journey through time and tradition.
          </p>

          <Link to={"/explore"} className="w-full">
            <button className="bg-[#4caf50] text-white rounded-3xl py-3 px-6 font-semibold hover:bg-[#005100] hover:scale-105 hover:shadow-xl hover:text-gray-200 transition-all duration-300 ease-in-out">
              Explore
            </button>
          </Link>
        </div>

        {/* Right Section: Placeholder Image */}
        <div className="md:w-1/2 bg-cover bg-center rounded-lg shadow-lg overflow-hidden mt-6 md:mt-0">
          <img
            src={lumbini} // Placeholder URL
            alt="lumbini Heritage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <div className="bg-[#dddddd] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#333]">Meet Our Team</h2>
          <p className="text-lg mb-10">
            Our dedicated team is passionate about preserving and promoting
            Nepal's cultural richness. Get to know the individuals behind our
            mission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 p-5 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-300 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 flex items-center justify-center overflow-hidden">
                    {/* Image with responsive size and roundness */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.title}</h3>
                  <p className="text-md text-gray-600 mb-2">{member.name}</p>
                  <div className="flex space-x-2 mb-4">
                    {member.links.map((link, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                  <a
                    href={member.profileLink}
                    className="text-blue-500 hover:underline"
                  >
                    View Profiles
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Link2;
