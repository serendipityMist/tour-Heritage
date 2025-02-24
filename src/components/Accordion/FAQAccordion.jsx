import React, { useState } from "react";

const FAQs = [
  {
    question: "What are the top tourist destinations in Nepal?",
    answer:
      "Nepal is home to many breathtaking destinations, including Mount Everest, Pokhara, Kathmandu Valley, Lumbini (the birthplace of Lord Buddha), and Chitwan National Park.",
  },
  {
    question: "What is the best time to visit Nepal?",
    answer:
      "The best time to visit Nepal is during the spring (March to May) and autumn (September to November) seasons when the weather is pleasant, and the skies are clear.",
  },
  {
    question: "What cultural heritage sites can I explore in Nepal?",
    answer:
      "Nepal boasts numerous UNESCO World Heritage Sites, including Kathmandu Durbar Square, Bhaktapur Durbar Square, Patan Durbar Square, Swayambhunath Stupa, and Pashupatinath Temple.",
  },
  {
    question: "Are there any unique festivals celebrated in Nepal?",
    answer:
      "Yes, Nepal celebrates vibrant festivals like Dashain, Tihar, Holi, Buddha Jayanti, and the Indra Jatra, reflecting its rich cultural heritage and diversity.",
  },
  {
    question: "What activities can tourists enjoy in Nepal?",
    answer:
      "Tourists can enjoy trekking in the Himalayas, paragliding in Pokhara, jungle safaris in Chitwan, cultural tours in the Kathmandu Valley, and rafting in the Trishuli River.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-[#f5f5f5] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Discover more about Nepal’s local tourism and cultural heritage. Here
        are some common questions answered for your convenience.
      </p>
      <div>
        {FAQs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-black hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
