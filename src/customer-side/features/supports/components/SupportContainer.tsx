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
        <div className="col-span-full border-b lg:border-none lg:col-span-4 flex lg:block flex-wrap justify-center gap-3 lg:gap-6 gap-y-3 lg:gap-y-6 pb-6 lg:pb-0 lg:pe-12">
          <div className="hidden lg:block">
          <SectionTitle title="sections" />

          </div>
          <div
            onClick={() => setSection("FAQ")}
            className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
              section === "FAQ" ? "" : "text-gray-400"
            }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
          >
            <p>Frequently Ask Questions</p>
          </div>
          <div
            onClick={() => setSection("CST")}
            className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
              section === "CST" ? "" : "text-gray-400"
            }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
          >
            <p>Contact Support Team</p>
          </div>
          <div
            onClick={() => setSection("STF")}
            className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
              section === "STF" ? "" : "text-gray-400"
            }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
          >
            <p>Support Team Feedbacks</p>
          </div>
        </div>
        <div className="col-span-full lg:col-span-8">
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
