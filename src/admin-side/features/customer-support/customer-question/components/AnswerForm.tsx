'use client';
import { answerQuestion } from "@/admin-side/services/customer_support";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AnswerForm = ({ setOpenModal, id, question, handleRevalidate }) => {

  const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();

    const handleAnswer= async(data) => {
      try {
        const res = await answerQuestion(id,data.answer);
        const json = await res.json();
  
        if (res.status !== 201) {
          toast.error(json.message);
          return;
        }
  
        toast.success("Product created successfully");
        reset();
  
        handleRevalidate()
  
        setOpenModal(false)
        
      } catch (error) {
        toast.error("An error occurred while creating the color.");
        console.error("Error:", error);
      }
    }

  return (
    <div>
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">Answer</h2>
        <form onSubmit={handleSubmit(handleAnswer)} className="my-4">
          <p className="text-lg font-medium w-[400px] my-6 mt-7">{question}</p>

          <div className="flex flex-col my-5">
            <textarea
              id="answer"
              rows={6}
              {...register("answer", {required:"Answer is required"} )}
              className={`${
                errors.answer ? "border-red-500" : ""
              } resize-none outline-none py-2 px-3 border border-gray-300 w-[400px]`}
            ></textarea>
            {errors.answer && (
              <FormErrorMessage message={errors.answer.message} />
            )}
          </div>
          <div className="flex flex-row justify-end gap-3 mt-8">
            <div
              onClick={() => {
                setOpenModal(false);
              }}
              className="py-2 cursor-pointer w-20 border border-gray-300 text-center"
            >
              Cancel
            </div>
            <button
              type="submit"
              className="py-2 cursor-pointer w-20 bg-gray-800 text-white text-center"
            >
              Answer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnswerForm;
