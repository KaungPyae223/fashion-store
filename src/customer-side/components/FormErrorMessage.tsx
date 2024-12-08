import React from "react";

const FormErrorMessage = ({message}:{message:string}) => {
  return (
    <span className="text-xs mt-1 block text-red-500 font-semibold">
      {message}
    </span>
  );
};

export default FormErrorMessage;
