"use client";
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the difference between a psychologist and a psychiatrist?",
      answer: "Psychologists and psychiatrists both play important roles in mental health care. However, there are critical differences in their training and treatment approaches. Psychiatrists are medical doctors who can prescribe medications, perform medical procedures, and provide a wide range of treatments, including psychotherapy. Their medical training allows them to understand the biological basis of mental disorders. Psychologists typically have doctorates in psychology and specialize in psychotherapy, psychological testing, and the treatment of mental and emotional disorders through behavioral interventions. They cannot prescribe medications, usually."
    },
    {
      question: "How do I book an appointment?",
      answer: "Booking an appointment is easy. You can schedule online through our booking system, call us directly, or send us an email. We offer both in-person consultations at our clinics in Oslo & Ski, as well as video consultations for your convenience."
    },
    {
      question: "What types of therapy do you offer?",
      answer: "We offer a comprehensive range of therapies including Individual Therapy, Cognitive Behavioral Therapy (CBT), Couple Therapy, and Family Therapy. Our experienced team of psychiatrists and psychologists tailor each treatment to meet your specific needs and goals."
    },
    {
      question: "Do you offer online video consultations?",
      answer: "Yes! We offer secure video consultations that allow you to receive professional psychiatric and psychological care from the comfort of your home. Our video consultations are conducted through a secure, private platform that ensures your confidentiality."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit will include a comprehensive assessment where we discuss your concerns, medical history, and treatment goals. This helps us understand your unique situation and develop a personalized treatment plan. The session typically lasts 45-60 minutes, and we'll discuss the next steps together."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Here you can find all the help and answers you need for your mental health in one place.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-transparent">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 flex justify-between items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                
                {/* Plus/Minus Icon */}
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className={`w-4 h-0.5 bg-teal-700 dark:bg-teal-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></span>
                  <span className={`absolute w-4 h-0.5 bg-teal-700 dark:bg-teal-400 transition-transform duration-300 ${openIndex === index ? '' : 'rotate-90'}`}></span>
                </div>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  maxHeight: openIndex === index ? '300px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed p-10 ">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

