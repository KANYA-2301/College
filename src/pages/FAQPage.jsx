import React, { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    { question: "Where Can I Find Information?", answer: "Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { question: "What Are Your Terms And Conditions?", answer: "Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { question: "Can I Buy Directly From The Factory?", answer: "Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { question: "What Kinds of Payment Do You Accept?", answer: "Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { question: "When do I receive my order?", answer: "Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
  ];

  const FAQPage = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 mt-7">
      <div className="grid md:grid-cols-10 gap-10 items-start">
        <div className="md:col-span-3 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase border border-gray-400 inline-block px-3 py-1 rounded text-gray-700">F.A.Q</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">Frequently Asked <br /> Questions</h2>
          <p className="text-gray-600 text-sm leading-relaxed">Enim morbi in letius fames primis eget natoque vivamus ante. Adipiscing commodo senectus sagittis nibh urna.</p>
          <div className="w-8 h-1 bg-green-500 rounded-full mt-2"></div>
        </div>
        <div className="md:col-span-7 space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className={`border transition-all rounded-md overflow-hidden ${activeIndex === index ? "border-purple-500" : "border-gray-300 hover:border-purple-500"}`}>
              <button onClick={() => toggleFAQ(index)} className={`flex items-center w-full text-left px-4 py-4 font-medium transition-colors ${activeIndex === index ? "text-purple-600" : "text-gray-900 hover:text-purple-600"}`}>
                <span className={`text-lg font-bold mr-3 transition-colors ${activeIndex === index ? "text-purple-600" : "text-gray-600"}`}>
                  {activeIndex === index ? "−" : "+"}
                </span>
                <span className="text-base md:text-lg">{faq.question}</span>
              </button>
              {activeIndex === index && (
                <div className="px-9 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
