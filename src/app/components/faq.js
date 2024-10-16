import { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "Question #1",
      answer: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element."
    },
    {
      question: "Question #2",
      answer: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element."
    },
    {
      question: "Question #3",
      answer: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element."
    }
  ];

  return (
    <div className="accordion w-100" id="basicAccordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse ${openIndex === index ? 'show' : 'collapse'}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#basicAccordion"
          >
            <div className="accordion-body">
              <strong>{item.answer}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
