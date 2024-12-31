import { useFormatDate } from "@/hooks/useFormatDate";
import React from "react";

const FeedbackHistoryData = ({data}) => {

  const {formatDate} = useFormatDate();

  return (
    <div className="p-6 border flex flex-col border-gray-200">
      <p className="text-xl mb-1">{data.question}</p>
      <p className="text-sm text-gray-500"><span className="font-semibold">{data.customer_name}</span> | {data.customer_email}</p>

      <p className="text-gray-700 my-6 text-justify">
        {data.answer}
      </p>
      <div className="mt-auto">
        <p className="text-sm text-gray-700">
          Answered by <span className="font-semibold">{data.admin_name}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{formatDate(data.answer_at)}</p>
      </div>
    </div>
  );
};

export default FeedbackHistoryData;
