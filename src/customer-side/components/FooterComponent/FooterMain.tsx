import React from "react";
import Container from "../Container";
import FooterLink from "./FooterLink";
import { HiHome, HiPhone, HiEnvelope, HiClock } from "react-icons/hi2";

const FooterMain = () => {
  const abut: string[] = [
    "Our Purpose",
    "Careers",
    "Affiliates",
    "Press",
    "Stores",
  ];
  const customerServices: string[] = [
    "Help",
    "FAQ",
    "Shipping",
    "Payment",
    "Return",
    "Your Order",
  ];
  const policies: string[] = [
    "Terms & Conditions",
    "Privacy Policy",
    "Other Policies",
  ];

  return (
    <Container>
      <div className="col-span-full flex justify-between py-12">
        <div className="flex flex-row gap-44">
          <FooterLink title="About" links={abut} />
          <FooterLink title="Customer Service" links={customerServices} />
          <FooterLink title="Policies" links={policies} />
        </div>

        <div>
          <p className="uppercase font-medium mb-5">get in touch</p>
          <div className="flex gap-3 flex-col">
            <div className="flex flex-row items-center gap-3 text-sm text-gray-500">
              <HiHome /> 123 Ahlone Road, Ahlone, Yangon, Myanmar
            </div>
            <div className="flex flex-row items-center gap-3 text-sm text-gray-500">
              <HiPhone /> +959 123 456 789
            </div>
            <div className="flex flex-row items-center gap-3 text-sm text-gray-500">
              <HiEnvelope /> info@alexa.com
            </div>
            <div className="flex flex-row items-center gap-3 text-sm text-gray-500">
              <HiClock /> Available Mon–Fri, 9 AM–5 PM (EST)
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterMain;
