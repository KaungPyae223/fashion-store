import React from "react";
import FAQ from "./FAQ";
import SectionSubTitle from "@/customer-side/components/SectionSubTitle";

interface FAQContainerInterface {
  title: string;
  FAQs: {
    question: string;
    answer: string;
  }[];
}

const FAQContainer = ({ title, FAQs }: FAQContainerInterface) => {
  return (
    <div className="mb-10">
      <SectionSubTitle title={title} />
      {FAQs.map((faq) => (
        <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQContainer;
