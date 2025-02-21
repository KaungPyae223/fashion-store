import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 my-6">
      <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
      <p className="text-center text-sm text-gray-500">Last updated: February 16, 2025</p>
      
      <section className="mt-6">
        <p>
          This Privacy Policy describes our policies and procedures on the
          collection, use, and disclosure of your information when you use the
          service and tells you about your privacy rights and how the law protects
          you.
        </p>
        <p className="mt-4">
          We use your personal data to provide and improve the service. By using
          the service, you agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the
          <a
            href="https://www.termsfeed.com/privacy-policy-generator/"
            target="_blank"
            className="text-blue-500 hover:underline ml-1"
          >
            Privacy Policy Generator
          </a>
          .
        </p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Interpretation and Definitions</h2>
        <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
        <p className="mt-2">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions shall
          have the same meaning regardless of whether they appear in singular or
          in plural.
        </p>
      </section>
      
      <section className="mt-6">
        <h3 className="text-xl font-semibold">Definitions</h3>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Account:</strong> A unique account created for you to access
            our Service or parts of our Service.
          </li>
          <li>
            <strong>Affiliate:</strong> An entity that controls, is controlled by,
            or is under common control with a party.
          </li>
          <li>
            <strong>Company:</strong> (referred to as either "the Company", "We",
            "Us" or "Our") refers to Alexa.
          </li>
          <li>
            <strong>Cookies:</strong> Small files placed on your device containing
            details of your browsing history.
          </li>
          <li>
            <strong>Country:</strong> Refers to Myanmar (Burma).
          </li>
          <li>
            <strong>Personal Data:</strong> Any information that relates to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service:</strong> Refers to the Website.
          </li>
          <li>
            <strong>Website:</strong> Alexa, accessible from
            <a
              href="https://www.alxa.com.mm"
              target="_blank"
              className="text-blue-500 hover:underline ml-1"
            >
              https://www.alxa.com.mm
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
