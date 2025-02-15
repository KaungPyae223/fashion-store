"use client";
import Container from "@/customer-side/components/Container";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React, { useState } from "react";
import FAQSection from "./FAQSection";
import ContactSupportTeamSection from "./ContactSupportTeamSection";
import SupportTeamFeedBackSection from "./SupportTeamFeedBackSection";
import { AnimatePresence, motion } from "motion/react";
import { getCookie } from "react-use-cookie";
import Token from "./Token";

export const SupportContainer = () => {
  const [section, setSection] = useState<string>("FAQ");

  const userToken = getCookie("user_token");

  
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-4 pe-12">
          <SectionTitle title="sections" />
          <div
            onClick={() => setSection("FAQ")}
            className={`border-b ${
              section === "FAQ" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Frequently Ask Questions</p>
          </div>
          <div
            onClick={() => setSection("CST")}
            className={`border-b ${
              section === "CST" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Contact Support Team</p>
          </div>
          <div
            onClick={() => setSection("STF")}
            className={`border-b ${
              section === "STF" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Support Team Feedbacks</p>
          </div>
        </div>
        <div className="col-span-8">
          <AnimatePresence mode="wait">
            {section === "FAQ" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"FAQ"}
              >
                <FAQSection />
              </motion.div>
            ) : section === "CST" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"CST"}
              >
                {userToken ? <ContactSupportTeamSection /> : <Token />}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"STF"}
              >
                 {userToken ? <SupportTeamFeedBackSection /> : <Token />}
                
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};
