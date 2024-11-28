import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";
import FAQContainer from "./FAQContainer";

const FAQSection = () => {
  interface FAQInterface {
    question: string;
    answer: string;
  }

  const OrderingPaymentFAQs: FAQInterface[] = [
    {
      question: "How can I place an order?",
      answer:
        "Simply browse our collection, add items to your cart, and follow the checkout process.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, PayPal, and other secure payment methods and can make a payment arrive home if you live in Yangon and Mandalay.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Contact our customer service team within three days after placing your order to make changes or cancellations.",
    },
  ];

  const ShippingAndDeliveriesFAQs: FAQInterface[] = [
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 7-30 days. Expedited options are also available at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, we’ll email you a tracking number. You can also track it through your account.",
    },
  ];

  const ReturnAndExchangeFAQs: FAQInterface[] = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 3 days of delivery. Items must be unworn, unwashed, and in original packaging.",
    },
    {
      question: "How do I initiate a return or exchange?",
      answer:
        "Visit our Returns Center or contact our customer service team to start the process.",
    },
    {
      question: "Can I exchange an item for a different size or color?",
      answer:
        "Yes, exchanges are available for different sizes or colors, subject to stock availability.",
    },
  ];

  const CustomerSupportFAQs: FAQInterface[] = [
    {
      question: "How can I contact customer support?",
      answer:
        "Reach out to us via email at info@alexa.com, on support section, or call us at +959-123-456-789.",
    },
    {
      question: "What are your customer service hours?",
      answer: "Our team is available 9 AM to 5 PM within Weekdays",
    },
  ];

  return (
    <div>
      <SectionTitle title="Frequently Ask Questions" />
      <div className="mt-10">
        <FAQContainer FAQs={OrderingPaymentFAQs} title="Ordering and Payment" />
        <FAQContainer
          FAQs={ShippingAndDeliveriesFAQs}
          title="Shipping and Delivery"
        />
        <FAQContainer
          FAQs={ReturnAndExchangeFAQs}
          title="Return and Exchange"
        />
        <FAQContainer FAQs={CustomerSupportFAQs} title="Customer Support" />
      </div>
    </div>
  );
};

export default FAQSection;
