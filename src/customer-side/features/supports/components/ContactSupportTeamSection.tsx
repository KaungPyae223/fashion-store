"use client";
import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import QuestionsHistory from "./QuestionsHistory";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import { askQuestion } from "@/customer-side/services/Customer";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";

const ContactSupportTeamSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { revalidateWithoutParam } = useRevalidatedData();

  const [loading, isLoading] = useState<boolean>(false);

  const handleAskQuestion = async (data) => {
    isLoading(true);

    try {
      const res = await askQuestion({ question: data.Question });
      const json = await res.json();

      if (res.status !== 200) {
        toast.error(json.message);
        return;
      }
      await revalidateWithoutParam("/customer-question-history");

      toast.success("Successfully ask question to Support Team");
    } catch (error) {
      toast.error("An error occurred while asking the question.");
      console.error("Error:", error);
    } finally {
      isLoading(false);
    }
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
          className="w-full mt-3 border-b border-b-black py-1 outline-none resize-y"
        ></textarea>
        {errors.Question && (
          <FormErrorMessage message={errors.Question.message} />
        )}
        <button
          disabled={loading}
          className="disabled:opacity-50 my-3 block ms-auto bg-black text-white py-2 px-12"
        >
          {
            loading ? "Sending" : "Ask"
          }
        </button>
      </form>
      <QuestionsHistory />
    </div>
  );
};

export default ContactSupportTeamSection;
