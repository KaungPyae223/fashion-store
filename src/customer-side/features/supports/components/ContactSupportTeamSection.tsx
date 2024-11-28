import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import QuestionsHistory from "./QuestionsHistory";

const ContactSupportTeamSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAskQuestion = (data) => {
    toast.success("Successfully Ask Question", {
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <SectionTitle title="Contact Support Team" />
      <form onSubmit={handleSubmit(handleAskQuestion)} className="mt-10">
        <SectionSubTitle title="Ask Question" />
        <textarea
          {...register("Question", {
            required: "Question is required",
          })}
          placeholder="Type your question here"
          maxLength={300}
          rows={3}
          className="w-full mt-3 border-b border-b-black py-1 outline-none resize-none"
        ></textarea>
        {errors.Question && (
          <span className="text-xs mt-2 block text-red-800">
            {errors.Question.message}
          </span>
        )}
        <button className="my-3 block ms-auto bg-black text-white py-2 px-12">
          Ask
        </button>
      </form>
      <QuestionsHistory />
    </div>
  );
};

export default ContactSupportTeamSection;
