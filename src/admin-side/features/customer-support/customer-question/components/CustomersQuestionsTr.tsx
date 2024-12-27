import Modal from "@/admin-side/components/Modal";
import React, { useState } from "react";
import AnswerForm from "./AnswerForm";

const CustomersQuestionsTr = ({ question,handleRevalidate }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <tr className="duration-100 hover:bg-gray-800 hover:text-white text-gray-800 bg-white border-y-[12px] border-y-gray-100">
        <td className="p-2 ps-4 text-start">
          <div className="pe-4 border-e">
            <p className="text-lg mb-0.5">{question.customer_name}</p>
            <p className="text-xs">{question.customer_email}</p>
          </div>
        </td>
        <td className="p-2 px-4 text-justify text-base">{question.question}</td>
        <td className="text-end p-2 ">{question.question_at}</td>
        <td className="text-center p-2 w-fit">
          <div onClick={()=>setOpenModal(true)} className="px-4 py-1 border border-gray-300 inline-block cursor-pointer">
            Answer
          </div>
        </td>
      </tr>
      <div className="h-0">
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <AnswerForm handleRevalidate={handleRevalidate} question={question.question} setOpenModal={setOpenModal} id={question.id} />
        </Modal>
      </div>
    </>
  );
};

export default CustomersQuestionsTr;
