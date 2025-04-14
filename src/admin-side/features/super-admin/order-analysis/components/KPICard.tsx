import React from "react";

type KPICardProps = {
  title: string;
  value: string;
  icon?: React.ReactNode; // Optional icon
  color?: string; // Optional color accent
};

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  icon,
  color = "#2563eb",
}) => {
  return (
    <div className="shadow-md py-5 px-4 rounded-xl bg-white flex items-center justify-between transition-shadow duration-300 hover:shadow-lg">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-semibold mt-1.5 text-gray-800">{value}</p>
      </div>
      {icon && (
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default KPICard;
