// Import images from assets folder
import basantapur from "../assets/VIdeos/Basantapur.mp4";
import janakpur from "../assets/VIdeos/Janakpur.mp4";
import pashupati from "../assets/VIdeos/Pasupatinath.mp4";
import swyambhu from "../assets/VIdeos/Swyambhu.mp4";

import hotelManang from "../assets/Images/HOtel the rani mahal.jpg";
import hotelCityPark from "../assets/Images/Hotel city part janakpur.jpg";
import hotelMysticMithilia from "../assets/Images/mystic mithila janakpur.jpg";
import hotelHolyHimalaya from "../assets/Images/Hotel everest view.jpg";
import hotelGaneshHimal from "../assets/Images/Hotel aagaman.jpg";
import hotelManaslu from "../assets/Images/meraki wellness retreat.jpg";
import syambhuPeace from "../assets/Images/PAnorama Lodge and resturant.png";
import imgBasantapur from "../assets/Images/Basantapur.jpg";
import imgJanakpur from "../assets/Images/Janakpur.jpg";
import imgPashupati from "../assets/Images/pasupatinath.jpg";
import imgSwayambhu from "../assets/Images/Swayambhu.jpg";
import langtang from "../assets/Images/lantang-valley.jpg";
import langtangValleyLodge from "../assets/Images/hotel garangja.jpg";
import kyanjinGompaHotel from "../assets/Images/HOtel devotee.jpg";
import everest from "../assets/Images/Everest.jpg";
import everestView from "../assets/Images/Hotel everest view.jpg";
import luklaHotel from "../assets/Images/panaroma hotel and lodge.jpg";
import pokhara from "../assets/Images/Pokhara.jpg";
import hotelFewaLake from "../assets/Images/Hotel river view.jpg";
import pokharaGrande from "../assets/Images/GLacier pokhra.jpg";
import mustang from "../assets/Images/mustang.jpg";
import hotelMustang from "../assets/Images/Manang lodge.jpg";
import thakaliLodge from "../assets/Images/rubus hotel.jpg";
import langtangVid from "../assets/VIdeos/Langtang.mp4";
import mtEverest from "../assets/VIdeos/Mt everest.mp4";
import pokharaVid from "../assets/VIdeos/Pokhara.mp4";
import mustangVid from "../assets/VIdeos/Upper mustang.mp4";
// Cultural Heritages Data
export const culturalHeritages = [
  // Basantapur Durbar Square
  {
    id: 1,
    name: "Basantapur Durbar Square",
    location: "Kathmandu, Nepal",
    description:
      "A UNESCO World Heritage Site showcasing ancient Nepalese architecture and culture.",
    detailedDescription:
      "Basantapur Durbar Square, also known as Kathmandu Durbar Square, is a historic complex of palaces, courtyards, and temples. It represents the artistic and cultural brilliance of the Malla and Shah dynasties. The site is vibrant with cultural festivals and local crafts.",
    vid: basantapur,
    img: imgBasantapur,
    hotels: [
      {
        id: 18,
        name: "Hotel Heritage",
        location: "Kathmandu, Nepal",
        img: hotelHeritage,
        description:
          "A boutique hotel blending traditional charm with modern amenities.",
        detailedDescription:
          "Hotel Heritage is a premium hotel offering a mix of Nepalese heritage design and contemporary comfort. Located close to Basantapur, it is perfect for cultural explorers.",
        amenities: ["Cultural Decor", "Fine Dining", "Event Space"],
      },
      {
        id: 19,
        name: "Hotel Manang",
        location: "Kathmandu, Nepal",
        img: hotelManang,
        description:
          "A comfortable hotel with easy access to cultural landmarks.",
        detailedDescription:
          "Hotel Manang offers a cozy stay with modern facilities, making it an excellent choice for visitors exploring Basantapur and surrounding heritage sites.",
        amenities: [
          "Free Wi-Fi",
          "Multi-Cuisine Restaurant",
          "Tour Assistance",
        ],
      },
    ],
  },

  // Janakpur
  {
    id: 2,
    name: "Janakpur Dham",
    location: "Janakpur, Nepal",
    img: imgJanakpur,
    description:
      "A sacred city known for the Janaki Temple and its cultural significance.",
    detailedDescription:
      "Janakpur is a holy city associated with the epic Ramayana, being the birthplace of Goddess Sita. The Janaki Temple, an architectural marvel, attracts devotees and tourists alike. It is also a hub for Mithila art and culture.",
    vid: janakpur,
    hotels: [
      {
        id: 20,
        name: "Hotel City Park",
        location: "Janakpur, Nepal",
        img: hotelCityPark,
        description:
          "A modern hotel with excellent amenities for a comfortable stay.",
        detailedDescription:
          "Hotel City Park provides a blend of modern luxury and traditional hospitality. Located near Janaki Temple, it is an ideal base for pilgrims and travelers.",
        amenities: ["Restaurant", "Meeting Rooms", "Cultural Tours"],
      },
      {
        id: 21,
        name: "Hotel Mystic Mithila",
        location: "Janakpur, Nepal",
        img: hotelMysticMithilia,
        description:
          "A charming hotel reflecting the essence of Mithila culture.",
        detailedDescription:
          "Hotel Mystic Mithila is inspired by the rich Mithila heritage. It offers a serene stay with beautiful decor and authentic local cuisine.",
        amenities: ["Local Art Displays", "Traditional Meals", "Garden Views"],
      },
    ],
  },

  // Pashupatinath Temple
  {
    id: 3,
    name: "Pashupatinath Temple",
    location: "Kathmandu, Nepal",
    description: "A revered Hindu temple dedicated to Lord Shiva.",
    img: imgPashupati,
    detailedDescription:
      "Pashupatinath Temple is one of the most sacred Hindu pilgrimage sites, attracting thousands of devotees annually. The complex features ancient shrines, ghats, and a vibrant spiritual atmosphere.",
    vid: pashupati,
    hotels: [
      {
        id: 22,
        name: "Hotel Holy Himalaya",
        location: "Kathmandu, Nepal",
        description: "A serene hotel offering comfort near Pashupatinath.",
        img: hotelHolyHimalaya,
        detailedDescription:
          "Hotel Holy Himalaya provides a tranquil retreat with easy access to Pashupatinath Temple. Ideal for pilgrims and cultural enthusiasts.",
        amenities: ["Meditation Space", "On-site Dining", "Temple Views"],
      },
      {
        id: 23,
        name: "Hotel Ganesh Himal",
        location: "Kathmandu, Nepal",
        img: hotelGaneshHimal,
        description:
          "A charming hotel with personalized service and cultural ambiance.",
        detailedDescription:
          "Hotel Ganesh Himal offers warm hospitality and traditional decor, making it a perfect base for exploring Pashupatinath and other heritage sites.",
        amenities: ["Cultural Decor", "Free Breakfast", "Tour Assistance"],
      },
    ],
  },

  // Swayambhunath Stupa
  {
    id: 4,
    name: "Swayambhunath Stupa",
    location: "Kathmandu, Nepal",
    img: imgSwayambhu,
    description:
      "An ancient stupa known as the Monkey Temple, offering panoramic views of Kathmandu.",
    detailedDescription:
      "Swayambhunath Stupa is a historic Buddhist site with a unique blend of Hindu and Buddhist symbolism. Its iconic white dome and golden spire attract both pilgrims and tourists. The hilltop location provides breathtaking views of the Kathmandu Valley.",
    vid: swyambhu,
    hotels: [
      {
        id: 24,
        name: "Hotel Manaslu",
        location: "Kathmandu, Nepal",
        description: "A heritage hotel with a blend of tradition and luxury.",
        img: hotelManaslu,
        detailedDescription:
          "Hotel Manaslu showcases traditional Nepalese architecture and modern amenities. Its proximity to Swayambhunath makes it an excellent choice for heritage enthusiasts.",
        amenities: ["Swimming Pool", "Traditional Decor", "Fine Dining"],
      },
      {
        id: 25,
        name: "Swayambhu Peace Guest House",
        location: "Kathmandu, Nepal",
        description: "A peaceful guest house near Swayambhunath Stupa.",
        img: syambhuPeace,
        detailedDescription:
          "Swayambhu Peace Guest House offers a serene environment and friendly hospitality. Perfect for visitors looking to explore the spiritual charm of Swayambhunath.",
        amenities: ["Rooftop Terrace", "Free Wi-Fi", "Local Cuisine"],
      },
    ],
  },
];

// Tourist Places Data

export const touristPlaces = [
  // Langtang
  {
    id: 11,
    name: "Langtang",
    vid: langtangVid,
    location: "Langtang National Park, Nepal",
    img: langtang,
    description:
      "A stunning valley known for its breathtaking landscapes and trekking routes.",
    detailedDescription:
      "Langtang Valley is renowned for its majestic mountains, lush forests, and rich culture. It offers various trekking options, including the famous Langtang trek, which leads to the beautiful Kyanjin Gompa.",
    hotels: [
      {
        id: 30,
        name: "Langtang Valley Lodge",
        location: "Kyanjin Gompa, Langtang",
        img: langtangValleyLodge,
        description: "A cozy lodge with stunning mountain views.",
        detailedDescription:
          "Langtang Valley Lodge provides comfortable accommodation with local cuisine, making it an excellent base for trekkers exploring the Langtang region.",
        amenities: ["Free Wi-Fi", "Restaurant", "Guided Treks"],
      },
      {
        id: 31,
        name: "Kyanjin Gompa Hotel",
        location: "Kyanjin Gompa, Langtang",
        img: kyanjinGompaHotel,
        description: "A friendly hotel offering a warm atmosphere.",
        detailedDescription:
          "Kyanjin Gompa Hotel is perfect for trekkers, providing basic amenities and delicious local meals.",
        amenities: ["Hot Showers", "Local Cuisine", "Tour Assistance"],
      },
    ],
  },

  // Mount Everest
  {
    id: 12,
    name: "Mount Everest",
    vid: mtEverest,
    location: "Sagarmatha National Park, Nepal",
    img: everest,
    description:
      "The highest mountain in the world, attracting adventurers and climbers.",
    detailedDescription:
      "Mount Everest, known as Sagarmatha in Nepali, is a major destination for trekkers and climbers. The Everest Base Camp trek offers stunning views and a chance to experience the unique Sherpa culture.",
    hotels: [
      {
        id: 32,
        name: "Everest View Hotel",
        location: "Syangboche, near Namche Bazaar",
        img: everestView,
        description: "A luxury hotel with breathtaking views of Mount Everest.",
        detailedDescription:
          "Everest View Hotel is one of the highest-placed hotels in the world, offering stunning views of Everest and comfortable accommodations.",
        amenities: ["Panoramic Views", "Restaurant", "Wi-Fi"],
      },
      {
        id: 33,
        name: "Lukla Hotel",
        img: luklaHotel,
        location: "Lukla, Nepal",
        description: "A comfortable hotel serving trekkers heading to Everest.",
        detailedDescription:
          "Lukla Hotel provides cozy rooms and is a convenient stop for those starting their Everest adventure.",
        amenities: ["Free Breakfast", "Tour Desk", "Wi-Fi"],
      },
    ],
  },

  // Pokhara
  {
    id: 13,
    name: "Pokhara",
    vid: pokharaVid,
    location: "Pokhara, Nepal",
    img: pokhara,
    description:
      "A beautiful city known for its lakes and stunning mountain views.",
    detailedDescription:
      "Pokhara is a major tourist destination in Nepal, famous for its serene lakes, adventure sports, and stunning views of the Annapurna mountain range.",
    hotels: [
      {
        id: 34,
        img: hotelFewaLake,
        name: "Hotel Fewa Lake",
        location: "Lakeside, Pokhara",
        description: "A lakeside hotel with beautiful views of Fewa Lake.",
        detailedDescription:
          "Hotel Fewa Lake offers comfortable accommodations and easy access to local attractions, making it perfect for travelers.",
        amenities: ["Lake Views", "Restaurant", "Free Wi-Fi"],
      },
      {
        id: 35,
        img: pokharaGrande,
        name: "Pokhara Grande Hotel",
        location: "Pokhara, Nepal",
        description: "A luxury hotel with modern amenities.",
        detailedDescription:
          "Pokhara Grande Hotel provides a luxurious stay with excellent facilities and stunning views of the Himalayas.",
        amenities: ["Spa", "Swimming Pool", "Fine Dining"],
      },
    ],
  },

  // Mustang
  {
    id: 14,
    name: "Mustang",
    vid: mustangVid,
    img: mustang,
    location: "Mustang District, Nepal",
    description:
      "A remote region known for its unique culture and stunning landscapes.",
    detailedDescription:
      "Mustang, often referred to as the Last Forbidden Kingdom, is known for its Tibetan culture, ancient monasteries, and breathtaking landscapes. The region offers trekking routes that are less traveled.",
    hotels: [
      {
        id: 36,
        img: hotelMustang,
        name: "Hotel Mustang Resort",
        location: "Jomsom, Mustang",
        description:
          "A comfortable resort with beautiful views of the Himalayas.",
        detailedDescription:
          "Hotel Mustang Resort offers cozy accommodations and serves as a great base for exploring the Mustang region.",
        amenities: ["Restaurant", "Garden", "Free Wi-Fi"],
      },
      {
        id: 37,
        name: "Thakali Lodge",
        img: thakaliLodge,
        location: "Kagbeni, Mustang",
        description: "A charming lodge reflecting local architecture.",
        detailedDescription:
          "Thakali Lodge provides a warm atmosphere and delicious local cuisine, making it a perfect stop for trekkers.",
        amenities: ["Local Cuisine", "Cultural Tours", "Free Breakfast"],
      },
    ],
  },
];
