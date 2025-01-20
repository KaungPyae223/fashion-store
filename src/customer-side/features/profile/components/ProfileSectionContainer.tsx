"use client";
import Container from "@/customer-side/components/Container";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React, { useState } from "react";
import ProfileData from "./ProfileData";
import EditProfile from "./EditProfile";
import EditPassword from "./EditPassword";
import OrderInformation from "./OrderInformation";
import OrderHistory from "./OrderHistory";
import { AnimatePresence, motion } from "motion/react";
import { getCookie } from "react-use-cookie";
import { useRouter } from "next/navigation";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import useSWR from "swr";

const ProfileSectionContainer = () => {
  const [section, setSection] = useState<string>("ProfileData");

  const router = useRouter();

  const userToken = getCookie("user_token");

  if (!userToken) {
    router.push("/authentication");
  }

  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/customer-data",
    fetchCustomer
  );

  return !isLoading && (
    <div className="py-10">
      <Container>
        <div className="col-span-4 pe-12 flex flex-col">
          <SectionTitle title="Profile Page" />
          <div
            onClick={() => setSection("ProfileData")}
            className={`border-b ${
              section === "ProfileData" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Profile Data</p>
          </div>
          <div
            onClick={() => setSection("EditProfile")}
            className={`border-b ${
              section === "EditProfile" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Edit Profile</p>
          </div>
          <div
            onClick={() => setSection("EditPassword")}
            className={`border-b ${
              section === "EditPassword" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Edit Password</p>
          </div>
          <div
            onClick={() => setSection("OrderInformation")}
            className={`border-b ${
              section === "OrderInformation" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Order Information</p>
          </div>
          <div
            onClick={() => setSection("OrderHistory")}
            className={`border-b ${
              section === "OrderHistory" ? "" : "text-gray-400"
            }  cursor-pointer py-4 pr-8 tracking-wider font-medium`}
          >
            <p>Order History</p>
          </div>
         
        </div>

        <div className="col-span-8">
          <AnimatePresence mode="wait">
            {section === "ProfileData" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"ProfileData"}
              >
                <ProfileData />
              </motion.div>
            ) : section === "EditProfile" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"EditProfile"}
              >
                <EditProfile data={data} />
              </motion.div>
            ) : section === "EditPassword" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"EditPassword"}
              >
                <EditPassword />
              </motion.div>
            ) : section === "OrderInformation" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"OrderInformation"}
              >
                <OrderInformation />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                key={"OrderHistory"}
              >
                <OrderHistory />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default ProfileSectionContainer;
