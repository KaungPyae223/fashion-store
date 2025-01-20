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
import useSWR from "swr";
import { fetchHome } from "@/customer-side/services/HomePage";
import Image from "next/image";
import { getCookie } from "react-use-cookie";

const ReviewPage = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/rating-data/" + id,
    fetchHome
  );

  const Router = useRouter();

  const user_token = getCookie("user_token");

  if (!user_token) {
    Router.push("/authentication");
  }

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
        <div className=" pb-3 border-b col-span-full flex items-center justify-between">
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
        <div className="col-span-full w-fit mx-auto pb-6">
          {!isLoading && !error && (
            <div className="flex flex-row gap-5 items-center justify-center border-b px-6 pb-6">
              <Image
                width={200}
                height={250}
                alt="Product Image"
                className="max-h-[100px] object-cover object-center w-auto"
                src={data?.photo}
              />
              <p className="text-xl font-medium tracking-wider">
                {data?.title}
              </p>
            </div>
          )}

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
            <div className="grid grid-cols-2 gap-3 my-6">
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
              } resize-y outline-none border p-3 text-sm w-full`}
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
