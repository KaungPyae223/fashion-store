import React from "react";
import Container from "../Container";
import FooterLink from "./FooterLink";
import { HiHome, HiPhone, HiEnvelope, HiClock } from "react-icons/hi2";

const FooterMain = () => {
  const abut: { name: string; link: string }[] = [
    { name: "Our Purpose", link: "/" },
    { name: "Careers", link: "/" },
    { name: "Affiliates", link: "/" },
    { name: "Press", link: "/" },
    { name: "Stores", link: "/" },
  ];
  const customerServices: { name: string; link: string }[] = [
    { name: "Help", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Shipping", link: "/" },
    { name: "Payment", link: "/" },
    { name: "Return", link: "/" },
    { name: "Your Order", link: "/" },
  ];

  const policies: { name: string; link: string }[] = [
    { name: "Terms & Conditions", link: "/" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Other Policies", link: "/" },
  ];

  return (
    <Container>
      <div className="col-span-full flex flex-col md:flex-row justify-between py-12 gap-9 md:gap-6">
        <div className="flex flex-wrap md:flex-row justify-between flex-1 max-w-[700px]">
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
