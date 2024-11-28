"use client";
import Container from "@/customer-side/components/Container";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React, { useState } from "react";
import FAQSection from "./FAQSection";
import ContactSupportTeamSection from "./ContactSupportTeamSection";
import SupportTeamFeedBackSection from "./SupportTeamFeedBackSection";

export const SupportContainer = () => {
  const [section, setSection] = useState<string>("FAQ");

  return (
    <div className="py-10">
      <Container>
        <div className="col-span-4 pe-12">
          <SectionTitle title="sections" />
          <div
            onClick={() => setSection("FAQ")}
            className={`border-b ${
              section === "FAQ" ? "underline" : "text-gray-500"
            }  cursor-pointer py-4 pr-8 tracking-wider text-lg font-medium`}
          >
            <p>Frequently Ask Questions</p>
          </div>
          <div
            onClick={() => setSection("CST")}
            className={`border-b ${
              section === "CST" ? "underline" : "text-gray-500"
            }  cursor-pointer py-4 pr-8 tracking-wider text-lg font-medium`}
          >
            <p>Contact Support Team</p>
          </div>
          <div
            onClick={() => setSection("STF")}
            className={`border-b ${
              section === "STF" ? "underline" : "text-gray-500"
            }  cursor-pointer py-4 pr-8 tracking-wider text-lg font-medium`}
          >
            <p>Support Team Feedbacks</p>
          </div>
        </div>
        <div className="col-span-8">
          {section === "FAQ" ? (
            <FAQSection />
          ) : section === "CST" ? (
            <ContactSupportTeamSection />
          ) : (
            <SupportTeamFeedBackSection />
          )}
        </div>
      </Container>
    </div>
  );
};
