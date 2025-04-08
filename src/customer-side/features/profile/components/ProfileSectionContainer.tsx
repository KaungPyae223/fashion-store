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
import reactUseCookie, { removeCookie } from "react-use-cookie";
import { useRouter } from "next/navigation";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import useSWR from "swr";

const ProfileSectionContainer = () => {
  const [section, setSection] = useState<string>("ProfileData");

  const router = useRouter();

  const [userToken] = reactUseCookie("user_token");

  if (!userToken) {
    router.push("/authentication");
  }

  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/customer-data",
    fetchCustomer
  );

  if (data?.message === "Unauthenticated.") {
    router.push("/authentication");
  }

  return (
    !isLoading && (
      <div className="py-10">
        <Container>
          <div className="col-span-full border-b lg:border-none lg:col-span-4 flex lg:block flex-wrap justify-center gap-3 lg:gap-6 gap-y-3 lg:gap-y-6 pb-6 lg:pb-0 lg:pe-12">
            <div className="hidden lg:block">
              <SectionTitle title="Profile Page" />
            </div>
            <div
              onClick={() => setSection("ProfileData")}
              className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
                section === "ProfileData" ? "" : "text-gray-400"
              }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
            >
              <p>Profile Data</p>
            </div>
            <div
              onClick={() => setSection("EditProfile")}
              className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
                section === "EditProfile" ? "" : "text-gray-400"
              }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
            >
              <p>Edit Profile</p>
            </div>
            <div
              onClick={() => setSection("EditPassword")}
              className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
                section === "EditPassword" ? "" : "text-gray-400"
              }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
            >
              <p>Edit Password</p>
            </div>
            <div
              onClick={() => setSection("OrderInformation")}
              className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
                section === "OrderInformation" ? "" : "text-gray-400"
              }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
            >
              <p>Order Information</p>
            </div>
            <div
              onClick={() => setSection("OrderHistory")}
              className={`border lg:border-x-0 lg:border-t-0  border-gray-300  py-2 px-6 lg:px-0 rounded-full lg:rounded-none lg:border-b ${
                section === "OrderHistory" ? "" : "text-gray-400"
              }  cursor-pointer lg:py-4 lg:pr-8 tracking-wider font-medium`}
            >
              <p>Order History</p>
            </div>
          </div>

          <div className="col-span-full lg:col-span-8">
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
    )
  );
};

export default ProfileSectionContainer;
