"use client";
import Container from "@/customer-side/components/Container";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RatingStar } from "../components/RatingStar";
import SectionTitle from "@/customer-side/components/SectionTitle";
import DoMention from "../components/DoMention";
import DoNotMention from "../components/DoNotMention";
import { useForm } from "react-hook-form";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";

const ReviewPage = ({ id }: { id: string }) => {
  const Router = useRouter();

  const routeBack = () => {
    Router.back();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReview = (data) => {
    console.log(data);
  };

  const [rating, setRating] = useState<number>(0);

  return (
    <div className="py-10">
      <Container>
        <div className=" pb-3 border-b col-span-12 flex items-center justify-between">
          <div
            onClick={routeBack}
            className="flex flex-1 text-xl flex-row gap-3 items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Back
          </div>

          <p className="text-xl flex-1 uppercase text-end font-medium tracking-wider">
            Review
          </p>
        </div>
        <div className="col-span-12 w-fit mx-auto pb-6">
          <div className="flex flex-row gap-5 items-center justify-center border-b px-6 pb-6">
            <img
              className="max-h-[150px] "
              src="https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V2013HAN_FA24_M_ECOMM_fleece_FRONT_2.jpg?v=1730834629&width=2000&height=2500&crop=center"
            />
            <p className="text-xl font-medium tracking-wider">
              Fear of God ESSENTIALS Core Logo Fleece Hoodie
            </p>
          </div>
          <div className="px-6 py-6 border-b">
            <SectionTitle title="Rate Product" />
            <div className="flex flex-row mt-6 mb-3">
              <RatingStar
                selfRating={1}
                rating={rating}
                setRating={setRating}
                title="Very Poor"
              />
              <RatingStar
                selfRating={2}
                rating={rating}
                setRating={setRating}
                title="Poor"
              />
              <RatingStar
                selfRating={3}
                rating={rating}
                setRating={setRating}
                title="Average"
              />
              <RatingStar
                selfRating={4}
                rating={rating}
                setRating={setRating}
                title="Good"
              />
              <RatingStar
                selfRating={5}
                rating={rating}
                setRating={setRating}
                title="Very Good"
              />
            </div>
            {rating == 0 && <FormErrorMessage message="Choose a rating" />}
          </div>
          <form
            onSubmit={handleSubmit(handleReview)}
            id="reviewForm"
            className="px-6 py-6 border-b"
          >
            <SectionTitle title="Write a Quick Review" />
            <div className="grid grid-cols-2 my-6">
              <div>
                <p className="font-medium">Do Mention:</p>
                <div className="text-sm mt-3">
                  <DoMention mention="Features" />
                  <DoMention mention="Build quality" />
                  <DoMention mention="Value for money" />
                  <DoMention mention="How it compares to similar products" />
                </div>
              </div>
              <div>
                <p className="font-medium">Don't Mention:</p>
                <div className="text-sm mt-3">
                  <DoNotMention mention="Delivery" />
                  <DoNotMention mention="Payment" />
                  <DoNotMention mention="Customer service" />
                  <DoNotMention mention="Do not deals with product" />
                </div>
              </div>
            </div>

            <label htmlFor="feedback" className="text-xs text-gray-800">
              Your Feedback
            </label>
            <textarea
              {...register("feedback", {
                required: "Feedback is required",
              })}
              id="feedback"
              rows={6}
              className={`${
                errors.feedback ? "border-red-500" : ""
              } resize-none outline-none border p-3 text-sm w-full`}
            ></textarea>
            {errors.feedback && (
              <FormErrorMessage message={errors.feedback.message} />
            )}
          </form>
          <div className="px-6 pt-6">
            <button
              type="submit"
              form="reviewForm"
              className="block ms-auto bg-black text-white py-2 px-12"
            >
              Submit
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewPage;
