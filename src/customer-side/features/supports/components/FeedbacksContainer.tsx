import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import { useFormatDate } from "@/hooks/useFormatDate";
import React from "react";
import useSWR from "swr";

const FeedbacksContainer = () => {
  const { error, isLoading, data } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + `/customer-answer`,
    fetchCustomer
  );

  return isLoading ? (
    <Loading />
  ) : data.data.length > 0 ? (
    <div className="mt-7">
      {data?.data.map((el) => (
        <FeedbackCard key={el.id} data={el} />
      ))}
    </div>
  ) : (
    <NoData />
  );
};

const FeedbackCard = ({ data }) => {
  const { formatDate } = useFormatDate();

  return (
    <div className="py-3 border-b">
      <p className="text-xl text-gray-700">{data.question}</p>
      <p className="text-justify my-5">{data.answer}</p>
      <p className="text-gray-500 text-sm">
        Question: {formatDate(data.question_at)} / Answer:{" "}
        {formatDate(data.answer_at)}
      </p>
    </div>
  );
};

export default FeedbacksContainer;
