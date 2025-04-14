import React from "react";
import FeedbackHistoryData from "./FeedbackHistoryData";

const FeedbackHistoryContainer = ({feedback}) => {
  return (
    <div>
      <div className="mt-6 grid grid-cols-2 gap-5">
        {
          feedback.map((el) => (
            <FeedbackHistoryData data={el} key={el.id} />
          ))
        }
      </div> 
    </div>
  );
};

export default FeedbackHistoryContainer;
