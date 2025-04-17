import React, { useState } from "react";
import "./faqs.css";

const faqssection = [
  {
    question: "Lorem Ipsum Dolor Sit Amet Consectetur Viverra.",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "Lorem Ipsum Dolor Sit Amet Consectetur Viverra.",
    answer: "",
  },
  {
    question: "Lorem Ipsum Dolor Sit Amet Consectetur Viverra.",
    answer: "",
  },
  {
    question: "Lorem Ipsum Dolor Sit Amet Consectetur Viverra.",
    answer: "",
  },
];

const faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-left">
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
        <div className="faq-list">
          {faqssection.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="toggle-icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-right">
      </div>
    </div>
  );
};

export default faqs;
