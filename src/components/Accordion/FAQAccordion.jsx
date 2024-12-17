import React, { useState } from "react";

const FAQs = [
  {
    question: "How do I choose the best savings account?",
    answer:
      "Choosing the best savings account depends on your financial needs, such as interest rates, account fees, and accessibility.",
  },
  {
    question: "What is a savings account?",
    answer:
      "A savings account is a deposit account held at a financial institution that provides a modest interest rate.",
  },
  {
    question: "What is compounding interest?",
    answer:
      "Compounding interest is the process where the interest earned on an investment is reinvested to earn more interest.",
  },
  {
    question: "How often is interest compounded in savings accounts?",
    answer:
      "Interest in savings accounts can be compounded daily, monthly, quarterly, or yearly, depending on the bank.",
  },
  {
    question: "Are there any fees associated with savings accounts?",
    answer:
      "Some savings accounts may have monthly maintenance fees or minimum balance requirements.",
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
        Answers to Common Questions
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Here are some of the most frequently asked questions about our services.
        We hope this helps clarify any doubts you may have.
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
