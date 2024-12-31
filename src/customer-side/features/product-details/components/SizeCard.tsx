import React, { SetStateAction } from "react";

interface SizeCardInterface {
  id: number;
  size: string;
  selectedSize: number;
  setSelectedSize: React.Dispatch<SetStateAction<number>>;
  setSizeName: React.Dispatch<SetStateAction<string>>;
}

const SizeCard = ({
  id,
  size,
  selectedSize,
  setSelectedSize,
  setSizeName,
}: SizeCardInterface) => {

    const handleSizeChange = () => {
        setSelectedSize(id);
        setSizeName(size);
    }
  return (
    <div
      onClick={handleSizeChange}
      className={`border py-3 ${
        selectedSize === id ? "border-black border-2 font-semibold" : ""
      } cursor-pointer w-1/3 flex items-center justify-center uppercase tracking-widest text-xs`}
    >
      {size}
    </div>
  );
};

export default SizeCard;
