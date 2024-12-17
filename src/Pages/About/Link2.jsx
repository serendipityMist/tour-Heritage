import React from "react";
import { Link } from "react-router-dom";
function Link2() {
  const teamMembers = [
    {
      title: "Marketing Manager",
      name: "Maria Rodriguez",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
    },
    {
      title: "Hospitality Coordinator",
      name: "Sara Khan",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
    },
    {
      title: "Tourism Specialist",
      name: "Ahmed Hassan",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
    },
    {
      title: "Community Outreach",
      name: "Li Wei",
      links: ["Instagram", "Facebook", "LinkedIn"],
      profileLink: "#",
    },
  ];
  return (
    <>
      <section className="bg-gray-100 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title Section */}
          <div className="flex justify-center items-center mb-6">
            <div className="text-4xl font-bold text-gray-800">
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
            <button className="bg-black text-white rounded-3xl py-3 px-6 font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-xl hover:text-gray-200 transition-all duration-300 ease-in-out">
              Explore
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row py-12 px-4 bg-gray-100">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center md:w-1/2 space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our Story and Heritage
          </h2>
          <p className="text-lg text-gray-700">
            Discover the fascinating history and heritage of our organization,
            dedicated to showcasing the beauty and significance of Nepal's
            cultural treasures. Join us on a journey through time and tradition.
          </p>

          <Link to={"/explore"} className="w-full">
            <button className="bg-black text-white rounded-3xl py-3 px-6 font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-xl hover:text-gray-200 transition-all duration-300 ease-in-out">
              Explore
            </button>
          </Link>
        </div>

        {/* Right Section: Placeholder Image */}
        <div className="md:w-1/2 bg-cover bg-center rounded-lg shadow-lg overflow-hidden mt-6 md:mt-0">
          <img
            src="https://via.placeholder.com/600x400?text=Heritage+Image" // Placeholder URL
            alt="Heritage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <div className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg mb-10">
            Our dedicated team is passionate about preserving and promoting
            Nepal's cultural richness. Get to know the individuals behind our
            mission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 p-5 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-300 rounded-full w-24 h-24 mb-4 flex items-center justify-center">
                    {/* Placeholder for image or avatar */}
                    <span className="text-2xl font-bold text-gray-500">👤</span>
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
