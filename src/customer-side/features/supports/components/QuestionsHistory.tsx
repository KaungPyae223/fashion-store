"use client"
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import { useFormatDate } from "@/hooks/useFormatDate";
import React from "react";
import useSWR from "swr";

const QuestionsHistory = () => {
  const { error, isLoading, data } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + `/customer-question-history`,
    fetchCustomer
  );


  return isLoading ? (
    <Loading />
  ) : data.data?.length > 0 ? (
    <div className="mt-10">
      <SectionSubTitle title="History" />
      {data?.data.map((el) => (
        <HistoryQuestions key={el.id} question={el.question} time={el.time} />
      ))}
    </div>
  ) : (
    <NoData />
  );
};

const HistoryQuestions = ({
  question,
  time,
}: {
  question: string;
  time: string;
}) => {
  const { formatDate } = useFormatDate();

  return (
    <div className="py-5 border-b">
      <p className="text-lg text-gray-700">{question}</p>
      <p className="text-xs text-gray-500 my-1">{formatDate(time)}</p>
    </div>
  );
};

export default QuestionsHistory;
