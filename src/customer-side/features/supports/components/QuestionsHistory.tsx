import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import React from "react";

const QuestionsHistory = () => {


  const History:{question:string,time:string}[] = [
    {question:"When do I get my order?",time:"21 December 2024"},
    {question:"Can I change my order?",time:"19 December 2024"},
  ]

  const HistoryQuestions = (question: string, time: string) => {
    return (
      <div className="py-5 border-b">
        <p className="text-lg text-gray-700">{question}</p>
        <p className="text-xs text-gray-500 my-1">{time}</p>
      </div>
    );
  };

  return (
    <div className="mt-10">
      <SectionSubTitle title="History" />
      {
        History.map((el) => (HistoryQuestions(el.question,el.time)))
      }
    </div>
  );
};

export default QuestionsHistory;
