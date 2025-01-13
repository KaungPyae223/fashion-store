import React from "react";

const AdminDetailsActivityContainer = ({ activities }) => {
  return (
    <div className="bg-white p-3">
      <table className="table-auto w-full text-left border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className=" text-gray-800 border-b">
            <th className="text-start py-2 px-4">Method</th>

            <th className="text-start py-2 px-4"> Type</th>
            <th className="py-2 px-4"> Activity</th>

            <th className="py-2 text-end">Activity Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <ActivityTr key={activity.id} activity={activity} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ActivityTr = ({ activity }) => {
  return (
    <tr className=" text-gray-800 border-b last:border-b-0 text-sm duration-100 hover:bg-gray-800 hover:text-white">
      <td className=" py-3 w-10 pe-2  px-4">{activity.method}</td>
      <td className="py-3 px-4 text-start">{activity.type}</td>

      <td className="py-3 px-4 text-justify">{activity.activity}</td>
      <td className="text-end text-nowrap py-3 px-4">{activity.created_at}</td>
    </tr>
  );
};

export default AdminDetailsActivityContainer;
